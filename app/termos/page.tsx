import Link from "next/link";

export const metadata = {
  title: "Termos de Serviço — LIBERTY",
};

export default function TermosPage() {
  return (
    <main className="legal shell">
      <Link href="/" className="legal-back">
        ← Voltar
      </Link>
      <p className="eyebrow">LIBERTY</p>
      <h1>Termos de Serviço</h1>
      <p className="legal-updated">Última atualização: setembro de 2026</p>

      <div className="legal-content">
        <p>
          Estes termos regem o uso da infraestrutura da LIBERTY para
          administração de veículos, incluindo o painel administrativo
          interno e a relação entre Liberty, proprietários de veículos e
          clientes/motoristas.
        </p>

        <h2>1. O que é a LIBERTY</h2>
        <p>
          A LIBERTY administra veículos de terceiros, conectando
          proprietários, clientes e a operação — incluindo captação de
          clientes, contratos, cobrança, vistorias, manutenção e
          comunicação entre as partes.
        </p>

        <h2>2. Acesso ao painel administrativo</h2>
        <p>
          O sistema administrativo é de uso restrito à equipe da LIBERTY.
          O acesso é individual, não pode ser compartilhado, e pode ser
          revogado a qualquer momento a critério da LIBERTY. Cada pessoa
          usuária é responsável pelas ações realizadas com sua conta.
        </p>

        <h2>3. Responsabilidades entre as partes</h2>
        <p>
          Proprietário, Liberty e cliente/motorista têm responsabilidades
          específicas definidas em contrato individual de cada operação
          (locação tradicional ou aquisição programada). Estes termos não
          substituem o contrato assinado entre as partes.
        </p>

        <h2>4. Uso adequado</h2>
        <p>
          É vedado usar o sistema para fins ilícitos, tentar acessar dados
          de terceiros sem autorização, ou comprometer a segurança da
          plataforma.
        </p>

        <h2>5. Alterações</h2>
        <p>
          Estes termos podem ser atualizados conforme a operação evolui.
          A versão vigente estará sempre disponível nesta página.
        </p>

        <h2>6. Contato</h2>
        <p>
          Dúvidas sobre estes termos podem ser enviadas para{" "}
          <a href="mailto:contato@liberty.exemplo">contato@liberty.exemplo</a>
          .
        </p>
      </div>
    </main>
  );
}
