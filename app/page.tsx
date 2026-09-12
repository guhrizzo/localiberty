const navItems = [
  { label: "A operação", href: "#operacao" },
  { label: "Para quem", href: "#agentes" },
  { label: "Como funciona", href: "#fluxo" },
];

const pillars = [
  {
    number: "01",
    title: "Gestão completa",
    text: "A Liberty cuida de clientes, contratos, cobrança, rastreamento, vistorias, manutenção e comunicação.",
  },
  {
    number: "02",
    title: "Resultado real",
    text: "Cada veículo funciona como uma unidade de negócio: receita, custos, responsabilidades e resultado sempre claros.",
  },
  {
    number: "03",
    title: "Dados para escalar",
    text: "A operação registra o que acontece para descobrir custos reais, precificar melhor e administrar frotas maiores.",
  },
];

const agents = [
  { title: "Proprietário", text: "Coloque seu veículo para gerar renda sem precisar cuidar da operação do dia a dia." },
  { title: "Liberty", text: "Administre veículos de terceiros com controle financeiro e operacional em um só lugar." },
  { title: "Cliente", text: "Alugue de forma organizada e acompanhe sua jornada até uma possível aquisição." },
];

export default function Home() {
  return (
    <main>
      <section className="hero" id="operacao">
        <nav className="nav shell" aria-label="Navegação principal">
          <a className="wordmark" href="#operacao" aria-label="LIBERTY, início">LIBERTY<span className="wordmark-dot">.</span></a>
          <div className="nav-links">
            {navItems.map((item) => <a key={item.href} href={item.href}>{item.label}</a>)}
          </div>
          <a className="nav-action" href="mailto:contato@liberty.exemplo">Fale com a gente <span aria-hidden="true">↗</span></a>
        </nav>

        <div className="hero-content shell">
          <div className="hero-kicker"><span className="kicker-line" /> Infraestrutura para uma nova mobilidade</div>
          <h1>Seu carro.<br /><em>Seu caminho.</em></h1>
          <div className="hero-bottom">
            <p className="hero-intro">A Liberty conecta proprietários, clientes e operação para transformar veículos em negócios bem administrados.</p>
            <a className="circle-link" href="#fluxo" aria-label="Conheça como funciona"><span>↓</span></a>
          </div>
        </div>
        <div className="hero-sticker" aria-hidden="true"><span>GESTÃO<br />LIVRE</span><i>✳</i></div>
        <div className="hero-number" aria-hidden="true">01 / 04</div>
      </section>

      <section className="statement shell">
        <p className="eyebrow">A ideia</p>
        <div>
          <h2>Mais do que<br /><span>alugar carros.</span></h2>
          <p className="statement-copy">A Liberty cria a infraestrutura central para administrar veículos de terceiros, gerar renda para proprietários e oferecer ao cliente uma jornada simples, transparente e organizada.</p>
        </div>
      </section>

      <section className="principles" id="fluxo">
        <div className="shell">
          <div className="section-heading"><p className="eyebrow">O que sustenta a operação</p><span className="section-index">02 — 04</span></div>
          <div className="principle-grid">
            {pillars.map((pillar) => (
              <article className="principle-card" key={pillar.number}>
                <span className="principle-number">{pillar.number}</span>
                <div><h3>{pillar.title}</h3><p>{pillar.text}</p></div>
                <span className="card-arrow" aria-hidden="true">↗</span>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="statement shell" id="agentes">
        <p className="eyebrow">Uma rede de confiança</p>
        <div>
          <h2>Três lados.<br /><span>Um movimento.</span></h2>
          <div className="agent-list">
            {agents.map((agent) => <article className="agent-item" key={agent.title}><h3>{agent.title}</h3><p>{agent.text}</p></article>)}
          </div>
        </div>
      </section>

      <section className="manifesto shell">
        <div className="manifesto-mark" aria-hidden="true">L</div>
        <div className="manifesto-content">
          <p className="eyebrow">O compromisso LIBERTY</p>
          <blockquote>“Quanto mais claro o caminho, mais livre é a escolha.”</blockquote>
          <p className="manifesto-copy">Da vistoria de entrada ao resultado final, cada etapa é registrada. Assim, quem tem o veículo, quem faz a gestão e quem dirige sabe exatamente onde está.</p>
          <a className="primary-button" href="mailto:contato@liberty.exemplo">Conheça a Liberty <span aria-hidden="true">↗</span></a>
        </div>
      </section>

      <footer className="footer shell">
        <a className="wordmark" href="#operacao">LIBERTY<span className="wordmark-dot">.</span></a>
        <p>Gestão que movimenta.</p>
        <span>© 2026 LIBERTY</span>
      </footer>
    </main>
  );
}
