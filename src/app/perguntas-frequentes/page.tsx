import type { Metadata } from "next";
import Breadcrumb from "@/components/Breadcrumb";
import FAQAccordion from "@/components/FAQAccordion";
import type { FAQ } from "@/lib/types";

export const metadata: Metadata = {
  title: "Perguntas Frequentes: Vem Aqui Pet",
  description:
    "Tire suas dúvidas sobre o Vem Aqui Pet, serviços em domicílio, agendamento e atendimento.",
};

const sections: { title: string; faqs: FAQ[] }[] = [
  {
    title: "Sobre o Vem Aqui Pet",
    faqs: [
      {
        question: "O que é o Vem Aqui Pet?",
        answer:
          "O Vem Aqui Pet é um ecossistema digital para tutores de pets da Granja Viana, Cotia e região. Reúne conteúdo educativo, guia local, serviços em domicílio e comunidade de tutores.",
      },
      {
        question: "O Vem Aqui Pet é uma clínica veterinária?",
        answer:
          "Não. O atendimento Vet em Casa é apenas uma das verticais do ecossistema. O foco principal é a informação confiável, o guia local e a comunidade de tutores.",
      },
      {
        question: "O conteúdo do site é gratuito?",
        answer:
          "Sim. Todo o conteúdo editorial, os guias, os checklists e os materiais gratuitos estão disponíveis sem custo. Os serviços em domicílio têm valores informados no momento do agendamento.",
      },
    ],
  },
  {
    title: "Serviços e agendamento",
    faqs: [
      {
        question: "Quais serviços estão disponíveis?",
        answer:
          "Atualmente o Vet em Casa e o serviço para Condomínios estão disponíveis. Banho em Casa e Pet Sitter estão em lista de interesse. Adestramento e Passeador estão em breve. Acompanhe o status em /servicos.",
      },
      {
        question: "Quais regiões são atendidas?",
        answer:
          "Granja Viana, Cotia, São Paulo II, Fazendinha e Alphaville Granja Viana. A cobertura está em expansão.",
      },
      {
        question: "Como funciona o agendamento?",
        answer:
          "Você acessa /agendar, escolhe o serviço, informa sua região, seleciona data e horário, preenche os dados do tutor e do pet e confirma. Para Vet em Casa há uma triagem obrigatória.",
      },
      {
        question: "O Vet em Casa atende urgências e emergências?",
        answer:
          "Não. O atendimento domiciliar é indicado para consultas de rotina e acompanhamento. Situações de urgência como falta de ar, convulsões, trauma ou sangramento exigem atendimento em clínica ou hospital veterinário.",
      },
      {
        question: "Posso cancelar ou reagendar?",
        answer:
          "Sim. Entre em contato pelo WhatsApp ou e-mail com antecedência mínima de 24 horas. A funcionalidade de cancelamento e reagendamento online estará disponível em breve.",
      },
    ],
  },
  {
    title: "Profissionais e parceiros",
    faqs: [
      {
        question: "Como me cadastrar como profissional?",
        answer:
          "Acesse /trabalhe-conosco, selecione seu perfil e preencha o formulário. Nossa equipe analisará e entrará em contato em até 3 dias úteis.",
      },
      {
        question: "Veterinários precisam apresentar CRMV?",
        answer:
          "Sim. O CRMV ativo é obrigatório para todos os veterinários que compõem a rede. O registro é verificado antes da integração.",
      },
    ],
  },
  {
    title: "Conteúdo e comunidade",
    faqs: [
      {
        question: "Como enviar uma história de tutor?",
        answer:
          "Acesse /comunidade/envie-sua-historia e preencha o formulário. A equipe editorial analisa e pode publicar a história na seção de comunidade.",
      },
      {
        question: "Posso sugerir um local pet friendly para o guia?",
        answer:
          "Sim. Use o formulário em /comunidade/envie-sua-historia para sugerir locais, serviços e pontos de interesse para o guia local.",
      },
    ],
  },
];

export default function FAQPage() {
  return (
    <>
      <section className="bg-[#243C4A] py-14 md:py-18">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Breadcrumb items={[{ label: "Perguntas Frequentes" }]} />
          <div className="mt-6 max-w-2xl">
            <h1
              className="text-3xl md:text-4xl font-extrabold text-[#FFF7EA] leading-tight mb-3"
              style={{ fontFamily: "var(--font-sora), sans-serif" }}
            >
              Perguntas frequentes
            </h1>
            <p className="text-[#FFF7EA]/70 text-base">
              Encontre respostas sobre o Vem Aqui Pet, serviços, agendamento e comunidade.
            </p>
          </div>
        </div>
      </section>

      <section className="py-14 bg-[#FFF7EA]">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          {sections.map((sec) => (
            <div key={sec.title}>
              <h2
                className="text-lg font-bold text-[#243C4A] mb-6 pb-3 border-b border-[#F6EFE6]"
                style={{ fontFamily: "var(--font-sora), sans-serif" }}
              >
                {sec.title}
              </h2>
              <FAQAccordion faqs={sec.faqs} />
            </div>
          ))}
        </div>
      </section>
    </>
  );
}
