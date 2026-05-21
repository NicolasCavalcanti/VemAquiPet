import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, AlertTriangle, CheckCircle, XCircle, Calendar, MapPin } from "lucide-react";
import Breadcrumb from "@/components/Breadcrumb";
import FAQAccordion from "@/components/FAQAccordion";
import type { FAQ } from "@/lib/types";

export const metadata: Metadata = {
  title: "Vet em Casa: consulta veterinária domiciliar na Granja Viana e Cotia",
  description:
    "Consulta veterinária no conforto do seu lar para avaliações de rotina e acompanhamento clínico. Atende Granja Viana, Cotia e região. Não cobre urgências ou emergências.",
};

const whenToUse = [
  "Consulta de rotina e check-up anual",
  "Acompanhamento de tratamento em andamento",
  "Avaliação de sintomas leves e estáveis",
  "Orientação sobre alimentação e comportamento",
  "Aplicação de medicamentos prescritos",
  "Coleta de material para exames laboratoriais",
  "Pets com dificuldade de locomoção ou estresse em deslocamento",
  "Avaliação de pets idosos que viajam com dificuldade",
];

const whenNotToUse = [
  "Falta de ar ou dificuldade respiratória",
  "Convulsões ou colapso",
  "Sangramento intenso ou trauma",
  "Inconsciência ou desmaio",
  "Suspeita de intoxicação ou ingestão de tóxico",
  "Acidentes ou quedas recentes",
  "Dor intensa ou impossibilidade de se mover",
  "Ausência de urina por mais de 24 horas",
];

const servicesList = [
  "Consulta clínica geral",
  "Avaliação física completa",
  "Orientação terapêutica",
  "Solicitação de exames",
  "Coleta de sangue e material biológico",
  "Aplicação de medicamentos prescritos",
  "Orientação nutricional",
  "Consulta de retorno",
];

const regions = [
  "Granja Viana",
  "Cotia",
  "São Paulo II",
  "Fazendinha",
  "Alphaville Granja Viana",
];

const faqs: FAQ[] = [
  {
    question: "A consulta domiciliar tem o mesmo valor de uma consulta em clínica?",
    answer:
      "O Vet em Casa tem precificação própria que considera deslocamento e tempo do profissional. O valor pode ser diferente de uma consulta em clínica convencional. Os valores são informados no momento do agendamento, antes da confirmação.",
  },
  {
    question: "O veterinário que atende em casa é habilitado?",
    answer:
      "Sim. Todos os veterinários da rede Vem Aqui Pet possuem CRMV ativo e são verificados antes de integrar a rede. O registro do profissional que realizará o atendimento está disponível na confirmação do agendamento.",
  },
  {
    question: "É possível realizar exames durante a consulta domiciliar?",
    answer:
      "Sim, é possível coletar material para exames laboratoriais (sangue, urina, fezes) durante a visita. Exames de imagem como raio-X e ultrassom, por dependerem de equipamentos especializados, exigem encaminhamento para clínica.",
  },
  {
    question: "Como funciona a triagem obrigatória?",
    answer:
      "Antes de confirmar o agendamento, o sistema faz perguntas sobre o estado atual do pet. Se houver qualquer sinal de urgência como falta de ar, convulsões, trauma ou sangramento intenso, o agendamento domiciliar não é confirmado e a equipe orienta o encaminhamento para a estrutura adequada.",
  },
  {
    question: "E se durante a visita o veterinário identificar uma urgência?",
    answer:
      "O profissional irá orientar o tutor sobre o encaminhamento imediato para a clínica ou hospital veterinário mais próximo e adequado ao caso. O atendimento domiciliar não substitui estrutura hospitalar quando necessário.",
  },
];

export default function VetEmCasaPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-[#243C4A] py-14 md:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Breadcrumb
            items={[
              { label: "Serviços", href: "/servicos" },
              { label: "Vet em Casa", href: "/servicos/vet-em-casa" },
            ]}
          />
          <div className="mt-6 max-w-2xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#DFF3E8]/20 border border-[#DFF3E8]/30 mb-4">
              <span className="w-2 h-2 rounded-full bg-[#DFF3E8]" />
              <span className="text-xs font-medium text-[#DFF3E8]">Disponível</span>
            </div>
            <h1
              className="text-3xl md:text-5xl font-extrabold text-[#FFF7EA] leading-tight mb-4"
              style={{ fontFamily: "var(--font-sora), sans-serif" }}
            >
              Vet em Casa
            </h1>
            <p className="text-[#FFF7EA]/70 text-base md:text-lg leading-relaxed mb-6">
              Consulta veterinária no conforto do seu lar, com profissional habilitado e
              triagem obrigatória. Indicado para avaliações de rotina, acompanhamento clínico
              e orientações, não para urgências ou emergências.
            </p>
            <Link
              href="/agendar/vet-em-casa"
              className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl bg-[#D9906A] text-white text-sm font-semibold hover:bg-[#c47a56] transition-colors"
              style={{ fontFamily: "var(--font-sora), sans-serif" }}
            >
              <Calendar size={15} />
              Agendar Vet em Casa
            </Link>
          </div>
        </div>
      </section>

      {/* Aviso de segurança */}
      <section className="py-8 bg-[#FFF7EA]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-start gap-4 p-5 rounded-xl border-2 border-[#D9906A]/40 bg-[#D9906A]/5">
            <AlertTriangle size={20} className="text-[#D9906A] flex-shrink-0 mt-0.5" />
            <div>
              <p
                className="font-semibold text-[#243C4A] text-sm mb-1"
                style={{ fontFamily: "var(--font-sora), sans-serif" }}
              >
                Aviso importante sobre atendimento domiciliar
              </p>
              <p className="text-sm text-[#5F6F5A] leading-relaxed">
                O atendimento domiciliar é indicado para casos compatíveis com avaliação em
                casa. Situações de urgência, emergência, falta de ar, sangramento, convulsões,
                intoxicação, trauma ou dor intensa podem exigir encaminhamento para clínica ou
                hospital veterinário. Nossa equipe orienta o melhor encaminhamento a partir da
                triagem.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Quando usar / não usar */}
      <section className="py-16 bg-[#F6EFE6]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h2
                className="text-lg font-bold text-[#243C4A] mb-6 flex items-center gap-2"
                style={{ fontFamily: "var(--font-sora), sans-serif" }}
              >
                <CheckCircle size={18} className="text-[#2F7D5A]" />
                Quando usar o Vet em Casa
              </h2>
              <ul className="space-y-3">
                {whenToUse.map((item) => (
                  <li key={item} className="flex items-start gap-3 text-sm text-[#5F6F5A]">
                    <CheckCircle size={14} className="text-[#2F7D5A] flex-shrink-0 mt-0.5" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h2
                className="text-lg font-bold text-[#243C4A] mb-6 flex items-center gap-2"
                style={{ fontFamily: "var(--font-sora), sans-serif" }}
              >
                <XCircle size={18} className="text-[#E98168]" />
                Quando não usar: procure uma clínica
              </h2>
              <ul className="space-y-3">
                {whenNotToUse.map((item) => (
                  <li key={item} className="flex items-start gap-3 text-sm text-[#5F6F5A]">
                    <XCircle size={14} className="text-[#E98168] flex-shrink-0 mt-0.5" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Serviços possíveis + Regiões */}
      <section className="py-16 bg-[#FFF7EA]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-10">
            <div>
              <h2
                className="text-lg font-bold text-[#243C4A] mb-6"
                style={{ fontFamily: "var(--font-sora), sans-serif" }}
              >
                O que pode ser feito em domicílio
              </h2>
              <div className="grid grid-cols-1 gap-2">
                {servicesList.map((s) => (
                  <div
                    key={s}
                    className="flex items-center gap-3 p-3 rounded-xl bg-white border border-[#F6EFE6] text-sm text-[#243C4A]"
                  >
                    <CheckCircle size={14} className="text-[#2F7D5A] flex-shrink-0" />
                    {s}
                  </div>
                ))}
              </div>
            </div>
            <div>
              <h2
                className="text-lg font-bold text-[#243C4A] mb-6 flex items-center gap-2"
                style={{ fontFamily: "var(--font-sora), sans-serif" }}
              >
                <MapPin size={16} className="text-[#D9906A]" />
                Regiões atendidas
              </h2>
              <div className="space-y-2 mb-6">
                {regions.map((r) => (
                  <div
                    key={r}
                    className="flex items-center gap-3 p-3 rounded-xl bg-white border border-[#F6EFE6] text-sm text-[#243C4A]"
                  >
                    <MapPin size={13} className="text-[#D9906A] flex-shrink-0" />
                    {r}
                  </div>
                ))}
              </div>
              <p className="text-xs text-[#5F6F5A]">
                Cobertura em expansão. Verifique disponibilidade no agendamento.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Como funciona */}
      <section className="py-16 bg-[#F6EFE6]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2
            className="text-lg font-bold text-[#243C4A] mb-8 text-center"
            style={{ fontFamily: "var(--font-sora), sans-serif" }}
          >
            Como funciona o agendamento
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {[
              { n: "1", label: "Escolha a data e horário" },
              { n: "2", label: "Preencha os dados do tutor e do pet" },
              { n: "3", label: "Responda à triagem" },
              { n: "4", label: "Confirme e aguarde contato" },
            ].map((step) => (
              <div key={step.n} className="text-center p-4">
                <div
                  className="w-10 h-10 rounded-full bg-[#243C4A] text-[#D9906A] flex items-center justify-center text-base font-extrabold mx-auto mb-3"
                  style={{ fontFamily: "var(--font-sora), sans-serif" }}
                >
                  {step.n}
                </div>
                <p className="text-xs text-[#5F6F5A] leading-relaxed">{step.label}</p>
              </div>
            ))}
          </div>
          <div className="text-center mt-8">
            <Link
              href="/agendar/vet-em-casa"
              className="inline-flex items-center gap-2 px-7 py-3.5 rounded-xl bg-[#D9906A] text-white text-sm font-semibold hover:bg-[#c47a56] transition-colors"
              style={{ fontFamily: "var(--font-sora), sans-serif" }}
            >
              <Calendar size={15} />
              Agendar Vet em Casa
            </Link>
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
            Perguntas frequentes
          </h2>
          <FAQAccordion faqs={faqs} />
        </div>
      </section>
    </>
  );
}
