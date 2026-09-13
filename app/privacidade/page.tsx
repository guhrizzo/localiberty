import Link from "next/link";

export const metadata = {
  title: "Política de Privacidade — LIBERTY",
};

export default function PrivacidadePage() {
  return (
    <main className="legal shell">
      <Link href="/" className="legal-back">
        ← Voltar
      </Link>
      <p className="eyebrow">LIBERTY</p>
      <h1>Política de Privacidade</h1>
      <p className="legal-updated">Última atualização: setembro de 2026</p>

      <div className="legal-content">
        <p>
          Esta política descreve como a LIBERTY trata dados pessoais no
          âmbito da sua operação de gestão de veículos, incluindo o sistema
          administrativo usado pela nossa equipe (painel interno,
          restrito a colaboradores autorizados) e a comunicação com
          proprietários e clientes.
        </p>

        <h2>1. Quais dados coletamos</h2>
        <p>
          Dependendo da sua relação com a LIBERTY, podemos coletar: nome,
          CPF/CNPJ, telefone, email, endereço, dados bancários (para
          repasses a proprietários), CNH (de motoristas/clientes), dados
          do veículo (marca, modelo, placa, quilometragem) e registros
          operacionais (contratos, pagamentos, vistorias, manutenções,
          ocorrências).
        </p>
        <p>
          Para membros da equipe que acessam o painel administrativo, ao
          entrar com uma conta Google coletamos apenas o email e o nome
          básico do perfil Google, usados exclusivamente para autenticação
          — não acessamos outros dados da sua conta Google.
        </p>

        <h2>2. Como usamos esses dados</h2>
        <p>
          Usamos esses dados para operar o serviço: administrar contratos,
          processar cobranças, coordenar vistorias e manutenções, calcular
          e repassar valores a proprietários, e dar suporte a clientes e
          proprietários. Dados de autenticação da equipe são usados
          apenas para controlar o acesso ao painel administrativo.
        </p>

        <h2>3. Acesso e segurança</h2>
        <p>
          O acesso ao sistema administrativo é restrito a colaboradores
          autorizados da LIBERTY, controlado por autenticação e regras de
          permissão no banco de dados. Não vendemos nem compartilhamos
          dados pessoais com terceiros fora do necessário para operar o
          serviço (ex: processamento de pagamentos, envio de comunicações).
        </p>

        <h2>4. Retenção</h2>
        <p>
          Mantemos os dados pelo tempo necessário para cumprir obrigações
          contratuais, legais e fiscais relacionadas à operação de
          locação e gestão de veículos.
        </p>

        <h2>5. Seus direitos</h2>
        <p>
          Você pode solicitar acesso, correção ou exclusão dos seus dados
          pessoais entrando em contato pelo email abaixo.
        </p>

        <h2>6. Contato</h2>
        <p>
          Dúvidas sobre esta política podem ser enviadas para{" "}
          <a href="mailto:contato@liberty.exemplo">contato@liberty.exemplo</a>
          .
        </p>
      </div>
    </main>
  );
}
