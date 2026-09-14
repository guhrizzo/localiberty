import { cookies } from "next/headers";
import { createClient } from "@supabase/supabase-js";
import { isBotUserAgent } from "@/utils/analytics/bots";

// Grava uma visita na tabela landing_page_visits do liberty-sistema
// (projeto separado — mesma URL/anon key públicas, protegidas por RLS
// que só libera insert anônimo, ver
// supabase/migrations/0007_landing_page_visits.sql no liberty-sistema).
// Nunca deve quebrar a navegação do visitante: sempre responde 204,
// mesmo em erro. Ver docs/superpowers/specs/2026-09-13-analytics-landing-page-design.md
// no liberty-sistema.
export const runtime = "nodejs";
export const dynamic = "force-dynamic";

const VID_COOKIE = "vid";
const VID_MAX_AGE = 60 * 60 * 24 * 365; // 1 ano

const noContent = () => new Response(null, { status: 204 });

export async function POST(req: Request): Promise<Response> {
  try {
    const body = (await req.json().catch(() => null)) as { path?: unknown } | null;
    const path = typeof body?.path === "string" ? body.path : "";
    if (!path.startsWith("/") || path.length > 512) return noContent();

    if (isBotUserAgent(req.headers.get("user-agent"))) return noContent();

    const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
    const supabaseKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;
    if (!supabaseUrl || !supabaseKey) return noContent();

    const jar = await cookies();
    let vid = jar.get(VID_COOKIE)?.value;
    const isNewVisitor = !vid;
    if (!vid) vid = crypto.randomUUID();

    const supabase = createClient(supabaseUrl, supabaseKey);
    const { error } = await supabase
      .from("landing_page_visits")
      .insert({ visitor_id: vid, path: path.split("?")[0].split("#")[0] });

    if (error) {
      console.error("[track]", error);
      return noContent();
    }

    const res = noContent();
    if (isNewVisitor) {
      res.headers.append(
        "Set-Cookie",
        `${VID_COOKIE}=${vid}; Path=/; Max-Age=${VID_MAX_AGE}; HttpOnly; SameSite=Lax${
          process.env.NODE_ENV === "production" ? "; Secure" : ""
        }`,
      );
    }
    return res;
  } catch (e) {
    console.error("[track]", e);
    return noContent();
  }
}
