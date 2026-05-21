import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, AlertTriangle, CheckCircle } from "lucide-react";
import Breadcrumb from "@/components/Breadcrumb";
import ServiceCard from "@/components/ServiceCard";
import FAQAccordion from "@/components/FAQAccordion";
import { services } from "@/lib/data";
import type { FAQ } from "@/lib/types";

export const metadata: Metadata = {
  title: "Serviços Pet em Domicílio: Vet em Casa, Banho e mais",
  description:
    "Atendimentos e serviços especializados em domicílio para tutores da Granja Viana, Cotia e região. Vet em Casa, Banho, Pet Sitter, Adestramento e mais.",
};

const steps = [
  {
    n: "01",
    title: "Escolha o serviço",
    desc: "Selecione o tipo de atendimento que você precisa entre as opções disponíveis.",
  },
  {
    n: "02",
    title: "Informe sua região",
    desc: "Confirme seu bairro ou condomínio para verificar disponibilidade na sua área.",
  },
  {
    n: "03",
    title: "Agende o horário",
    desc: "Escolha a data e o horário disponíveis que melhor se encaixam na sua rotina.",
  },
  {
    n: "04",
    title: "Receba em casa",
    desc: "O profissional vai até você. Para Vet em Casa, há uma triagem obrigatória antes.",
  },
];

const faqs: FAQ[] = [
  {
    question: "Os serviços estão disponíveis em qual região?",
    answer:
      "Atualmente atendemos Granja Viana, Cotia, São Paulo II, Fazendinha e Alphaville Granja Viana. A cobertura está em expansão. Verifique a disponibilidade no momento do agendamento informando seu bairro ou CEP.",
  },
  {
    question: "O Vet em Casa atende situações de emergência?",
    answer:
      "Não. O atendimento domiciliar é indicado para consultas de rotina, acompanhamento clínico e orientações. Situações de urgência, como falta de ar, convulsões, sangramento, trauma ou intoxicação, exigem encaminhamento imediato para clínica ou hospital veterinário. A triagem obrigatória identifica esses casos.",
  },
  {
    question: "Como funciona a triagem para o Vet em Casa?",
    answer:
      "Antes de confirmar o agendamento, o sistema apresenta perguntas sobre o estado do pet. Se houver qualquer sinal de urgência, o agendamento domiciliar é suspenso e a equipe orienta o encaminhamento para a estrutura adequada.",
  },
  {
    question: "Os serviços de Banho, Pet Sitter e Passeador estão disponíveis?",
    answer:
      "Alguns serviços estão em fase de lista de interesse ou em breve. Você pode se cadastrar para ser notificado quando o serviço estiver disponível na sua região. A expansão é gradual e prioriza as regiões com maior demanda.",
  },
];

export default function ServicosPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-[#243C4A] py-14 md:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Breadcrumb items={[{ label: "Serviços", href: "/servicos" }]} />
          <div className="mt-6 max-w-2xl">
            <h1
              className="text-3xl md:text-5xl font-extrabold text-[#FFF7EA] leading-tight mb-4"
              style={{ fontFamily: "var(--font-sora), sans-serif" }}
            >
              Serviços Vem Aqui Pet
            </h1>
            <p className="text-[#FFF7EA]/70 text-base md:text-lg leading-relaxed">
              Os serviços do Vem Aqui Pet fazem parte de um ecossistema maior de conteúdo,
              comunidade e suporte para tutores. Aqui você encontra atendimentos especializados
              diretamente no seu endereço, com profissionais parceiros verificados.
            </p>
          </div>
        </div>
      </section>

      {/* Serviços */}
      <section className="py-16 bg-[#FFF7EA]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {services.map((service) => (
              <ServiceCard key={service.slug} service={service} />
            ))}
          </div>
        </div>
      </section>

      {/* Aviso de responsabilidade */}
      <section className="py-8 bg-[#F6EFE6]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-start gap-4 p-5 rounded-xl border border-[#D9906A]/30 bg-white">
            <AlertTriangle size={20} className="text-[#D9906A] flex-shrink-0 mt-0.5" />
            <div>
              <p
                className="font-semibold text-[#243C4A] text-sm mb-1"
                style={{ fontFamily: "var(--font-sora), sans-serif" }}
              >
                Importante sobre os serviços em domicílio
              </p>
              <p className="text-sm text-[#5F6F5A] leading-relaxed">
                Os serviços em domicílio são indicados para situações compatíveis com atendimento
                fora de uma estrutura clínica. Casos de urgência, emergência ou necessidade de
                internação devem ser encaminhados para clínica ou hospital veterinário. A triagem
                obrigatória para o Vet em Casa identifica situações críticas antes do agendamento.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Como funciona */}
      <section className="py-16 bg-[#FFF7EA]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2
            className="text-xl font-bold text-[#243C4A] mb-10 text-center"
            style={{ fontFamily: "var(--font-sora), sans-serif" }}
          >
            Como funcionam os serviços
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {steps.map((step) => (
              <div key={step.n} className="text-center">
                <div
                  className="w-12 h-12 rounded-full bg-[#243C4A] text-[#D9906A] flex items-center justify-center text-lg font-extrabold mx-auto mb-4"
                  style={{ fontFamily: "var(--font-sora), sans-serif" }}
                >
                  {step.n}
                </div>
                <h3
                  className="font-bold text-[#243C4A] text-sm mb-2"
                  style={{ fontFamily: "var(--font-sora), sans-serif" }}
                >
                  {step.title}
                </h3>
                <p className="text-xs text-[#5F6F5A] leading-relaxed">{step.desc}</p>
              </div>
            ))}
          </div>
          <div className="text-center mt-10">
            <Link
              href="/agendar"
              className="inline-flex items-center gap-2 px-7 py-3.5 rounded-xl bg-[#D9906A] text-white text-sm font-semibold hover:bg-[#c47a56] transition-colors"
              style={{ fontFamily: "var(--font-sora), sans-serif" }}
            >
              Agendar agora
              <ArrowRight size={14} />
            </Link>
          </div>
        </div>
      </section>

      {/* Para condomínios */}
      <section className="py-12 bg-[#F6EFE6]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="rounded-2xl bg-[#243C4A] p-8 md:p-10">
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div>
                <p className="text-xs font-semibold text-[#D9906A] uppercase tracking-wider mb-2">
                  Para Condomínios
                </p>
                <h2
                  className="text-xl md:text-2xl font-bold text-[#FFF7EA] mb-3"
                  style={{ fontFamily: "var(--font-sora), sans-serif" }}
                >
                  Soluções pet para condomínios e síndicos
                </h2>
                <p className="text-[#FFF7EA]/60 text-sm leading-relaxed mb-5">
                  O Vem Aqui Pet oferece pacotes especiais para condomínios que queiram
                  disponibilizar serviços pet para seus moradores, incluindo Vet em Casa
                  coletivo, campanhas de vacinação e orientação comportamental.
                </p>
                <Link
                  href="/servicos/para-condominios"
                  className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-[#D9906A] text-white text-sm font-semibold hover:bg-[#c47a56] transition-colors"
                  style={{ fontFamily: "var(--font-sora), sans-serif" }}
                >
                  Saiba mais
                  <ArrowRight size={14} />
                </Link>
              </div>
              <div className="grid grid-cols-2 gap-3">
                {[
                  "Vet em Casa coletivo",
                  "Campanha de vacinação",
                  "Orientação comportamental",
                  "Suporte a síndicos",
                ].map((item) => (
                  <div
                    key={item}
                    className="flex items-center gap-2 p-3 rounded-xl bg-[#FFF7EA]/8 border border-[#FFF7EA]/10"
                  >
                    <CheckCircle size={14} className="text-[#D9906A] flex-shrink-0" />
                    <span className="text-xs text-[#FFF7EA]/70">{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-16 bg-[#FFF7EA]">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2
            className="text-xl font-bold text-[#243C4A] mb-8"
            style={{ fontFamily: "var(--font-sora), sans-serif" }}
          >
            Perguntas sobre os serviços
          </h2>
          <FAQAccordion faqs={faqs} />
        </div>
      </section>
    </>
  );
}
