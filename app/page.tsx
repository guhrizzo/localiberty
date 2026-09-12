const navItems = [
  { label: "Visão", href: "#visao" },
  { label: "Princípios", href: "#principios" },
  { label: "Manifesto", href: "#manifesto" },
];

const principles = [
  {
    number: "01",
    title: "Presença",
    text: "A vida acontece no agora. Criamos espaço para sentir, escolher e estar inteiro.",
  },
  {
    number: "02",
    title: "Coragem",
    text: "Liberdade não é ausência de medo. É seguir mesmo quando o caminho ainda não existe.",
  },
  {
    number: "03",
    title: "Verdade",
    text: "Sem personagens, sem fórmulas prontas. O que é seu merece ser vivido do seu jeito.",
  },
];

export default function Home() {
  return (
    <main>
      <section className="hero" id="visao">
        <nav className="nav shell" aria-label="Navegação principal">
          <a className="wordmark" href="#visao" aria-label="LIBERTY, início">
            LIBERTY<span className="wordmark-dot">.</span>
          </a>
          <div className="nav-links">
            {navItems.map((item) => (
              <a key={item.href} href={item.href}>{item.label}</a>
            ))}
          </div>
          <a className="nav-action" href="#manifesto">Fazer parte <span aria-hidden="true">↗</span></a>
        </nav>

        <div className="hero-content shell">
          <div className="hero-kicker"><span className="kicker-line" /> Uma ideia em movimento</div>
          <h1>Viva do seu<br /><em>jeito.</em></h1>
          <div className="hero-bottom">
            <p className="hero-intro">LIBERTY é um convite para tirar o piloto automático e escolher a própria direção.</p>
            <a className="circle-link" href="#manifesto" aria-label="Conheça o manifesto LIBERTY"><span>↓</span></a>
          </div>
        </div>
        <div className="hero-sticker" aria-hidden="true"><span>SEJA<br />LIVRE</span><i>✳</i></div>
        <div className="hero-number" aria-hidden="true">01 / 04</div>
      </section>

      <section className="statement shell">
        <p className="eyebrow">A gente acredita</p>
        <h2>Não existe uma<br /><span>única forma</span> de viver.</h2>
        <p className="statement-copy">Existe a sua. E quando você para de pedir permissão para ser quem é, tudo começa a mudar de lugar.</p>
      </section>

      <section className="principles" id="principios">
        <div className="shell">
          <div className="section-heading"><p className="eyebrow">Nossos princípios</p><span className="section-index">02 — 04</span></div>
          <div className="principle-grid">
            {principles.map((principle) => (
              <article className="principle-card" key={principle.number}>
                <span className="principle-number">{principle.number}</span>
                <div><h3>{principle.title}</h3><p>{principle.text}</p></div>
                <span className="card-arrow" aria-hidden="true">↗</span>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="manifesto shell" id="manifesto">
        <div className="manifesto-mark" aria-hidden="true">L</div>
        <div className="manifesto-content">
          <p className="eyebrow">Manifesto LIBERTY</p>
          <blockquote>“A liberdade começa no instante em que você decide não se diminuir mais.”</blockquote>
          <a className="primary-button" href="mailto:oi@liberty.exemplo">Quero viver assim <span aria-hidden="true">↗</span></a>
        </div>
      </section>

      <footer className="footer shell">
        <a className="wordmark" href="#visao">LIBERTY<span className="wordmark-dot">.</span></a>
        <p>Para quem escolhe o próprio caminho.</p>
        <span>© 2025 LIBERTY</span>
      </footer>
    </main>
  );
}
