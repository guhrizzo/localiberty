import { BackgroundPaths } from "@/components/ui/background-paths";

export default function NotFound() {
  return (
    <BackgroundPaths
      title="Página não encontrada"
      subtitle="O endereço que você tentou acessar não existe ou foi movido."
      ctaLabel="Voltar para o início"
      ctaHref="/"
    />
  );
}
