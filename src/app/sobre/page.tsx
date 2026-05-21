import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import Breadcrumb from "@/components/Breadcrumb";

export const metadata: Metadata = {
  title: "Sobre o Vem Aqui Pet: ecossistema pet da Granja Viana e Cotia",
  description:
    "Conheça o Vem Aqui Pet: um ecossistema digital para tutores da Granja Viana, Cotia e região, com conteúdo, guia local, serviços e comunidade.",
};

const verticals = [
  { name: "Vet em Casa", desc: "Consulta veterinária domiciliar para rotina e acompanhamento.", emoji: "🏥" },
  { name: "Cuida", desc: "Orientações e cuidados especializados para pets em tratamento.", emoji: "❤️" },
  { name: "Banho", desc: "Serviço de banho e tosa no conforto da sua casa.", emoji: "🛁" },
  { name: "Treina", desc: "Adestramento e orientação comportamental em domicílio.", emoji: "🎓" },
  { name: "Esportes", desc: "Conteúdo e suporte para atividades físicas com pets.", emoji: "🏃" },
  { name: "Clube", desc: "Benefícios, descontos e vantagens para tutores assíduos.", emoji: "⭐" },
];

export default function SobrePage() {
  return (
    <>
      <section className="bg-[#243C4A] py-14 md:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Breadcrumb items={[{ label: "Sobre", href: "/sobre" }]} />
          <div className="mt-6 max-w-2xl">
            <h1
              className="text-3xl md:text-5xl font-extrabold text-[#FFF7EA] leading-tight mb-4"
              style={{ fontFamily: "var(--font-sora), sans-serif" }}
            >
              Sobre o Vem Aqui Pet
            </h1>
            <p className="text-[#FFF7EA]/70 text-base md:text-lg leading-relaxed">
              Um ecossistema digital criado para tutores da Granja Viana, Cotia e região.
              Conteúdo confiável, guia local, serviços em domicílio e comunidade em um só lugar.
            </p>
          </div>
        </div>
      </section>

      <section className="py-16 bg-[#FFF7EA]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="prose prose-lg max-w-none space-y-6">
            <h2
              className="text-2xl font-bold text-[#243C4A]"
              style={{ fontFamily: "var(--font-sora), sans-serif" }}
            >
              O que é o Vem Aqui Pet?
            </h2>
            <p className="text-[#5F6F5A] leading-relaxed">
              O Vem Aqui Pet é um portal pet focado na Granja Viana, Cotia e região. Nasceu da
              necessidade de reunir em um único lugar conteúdo educativo confiável, um guia
              local organizado, serviços em domicílio verificados e uma comunidade ativa de
              tutores da região.
            </p>
            <p className="text-[#5F6F5A] leading-relaxed">
              Não somos uma clínica veterinária e não funcionamos como um marketplace
              convencional. Nossa proposta é ser um ecossistema: um ponto de referência para
              tutores que querem informação de qualidade antes, durante e depois de qualquer
              decisão relacionada ao bem-estar do seu animal.
            </p>
            <p className="text-[#5F6F5A] leading-relaxed">
              A vertical de serviços, incluindo o Vet em Casa, é parte do ecossistema. Mas a
              prioridade estratégica é a informação, a confiança e a proximidade com os tutores
              da região.
            </p>

            <h2
              className="text-2xl font-bold text-[#243C4A] pt-4"
              style={{ fontFamily: "var(--font-sora), sans-serif" }}
            >
              Nossa missão
            </h2>
            <p className="text-[#5F6F5A] leading-relaxed">
              Ajudar tutores a tomarem decisões mais informadas e responsáveis sobre a saúde,
              o comportamento e o bem-estar dos seus pets, com conteúdo claro, serviços
              confiáveis e uma comunidade ativa na região.
            </p>

            <h2
              className="text-2xl font-bold text-[#243C4A] pt-4"
              style={{ fontFamily: "var(--font-sora), sans-serif" }}
            >
              Valores
            </h2>
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 not-prose">
              {["Confiança","Transparência","Proximidade","Informação","Comunidade","Responsabilidade"].map((v) => (
                <div
                  key={v}
                  className="p-4 rounded-xl bg-[#DFF3E8] text-center"
                >
                  <p
                    className="font-semibold text-[#2F7D5A] text-sm"
                    style={{ fontFamily: "var(--font-sora), sans-serif" }}
                  >
                    {v}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Verticais */}
      <section className="py-16 bg-[#F6EFE6]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2
            className="text-xl font-bold text-[#243C4A] mb-8"
            style={{ fontFamily: "var(--font-sora), sans-serif" }}
          >
            O ecossistema Vem Aqui Pet
          </h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4">
            {verticals.map((v) => (
              <div
                key={v.name}
                className="text-center p-4 rounded-2xl bg-white border border-[#F6EFE6]"
              >
                <span className="text-3xl">{v.emoji}</span>
                <p
                  className="font-bold text-[#243C4A] text-xs mt-2"
                  style={{ fontFamily: "var(--font-sora), sans-serif" }}
                >
                  VemAqui {v.name}
                </p>
                <p className="text-[10px] text-[#5F6F5A] mt-1 leading-relaxed">{v.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-12 bg-[#FFF7EA]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-[#5F6F5A] mb-6">
            Quer fazer parte da rede como profissional ou parceiro?
          </p>
          <Link
            href="/trabalhe-conosco"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-[#2F7D5A] text-white text-sm font-semibold hover:bg-[#266a4b] transition-colors"
            style={{ fontFamily: "var(--font-sora), sans-serif" }}
          >
            Trabalhe Conosco <ArrowRight size={14} />
          </Link>
        </div>
      </section>
    </>
  );
}
