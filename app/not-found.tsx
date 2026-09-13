import Link from "next/link";

export const metadata = {
  title: "Página não encontrada — LIBERTY",
};

export default function NotFound() {
  return (
    <main className="notfound">
      <div className="shell notfound-inner">
        <Link className="brand-logo brand-logo-light notfound-logo" href="/" aria-label="LIBERTY, início">
          <img src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/logo-claro-OphbVWmaPU5SJpxRI0Lf73uDAugMND.jpg" alt="LOCALIBERTY" />
        </Link>

        <div className="notfound-content">
          <div className="notfound-mark" aria-hidden="true">404</div>
          <div className="notfound-text">
            <p className="eyebrow">Rota não encontrada</p>
            <h1>Esse endereço<br />saiu do mapa.</h1>
            <p className="notfound-copy">O link que você seguiu não existe ou foi movido. Volte para o início e siga o caminho certo.</p>
            <Link className="primary-button" href="/">Voltar para o início <span aria-hidden="true">↗</span></Link>
          </div>
        </div>

        <div className="notfound-badge" aria-hidden="true"><span>FORA DE<br />ROTA</span><i>✳</i></div>
      </div>
    </main>
  );
}
