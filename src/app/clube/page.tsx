import type { Metadata } from "next";
import Link from "next/link";
import { Star, Check, ArrowRight, Clock } from "lucide-react";
import Breadcrumb from "@/components/Breadcrumb";

export const metadata: Metadata = {
  title: "Clube Vem Aqui Pet: benefícios para tutores",
  description:
    "O Clube Vem Aqui Pet oferece benefícios, descontos e vantagens exclusivas para tutores da região. Lista de espera aberta.",
};

const benefits = [
  "Desconto em serviços da rede",
  "Acesso antecipado a novos serviços",
  "Conteúdos exclusivos para membros",
  "Prioridade no agendamento",
  "Participação em eventos da comunidade",
  "Guia local premium com parceiros",
];

export default function ClubePage() {
  return (
    <>
      <section className="bg-[#243C4A] py-14 md:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Breadcrumb items={[{ label: "Clube", href: "/clube" }]} />
          <div className="mt-6 max-w-2xl">
            <h1
              className="text-3xl md:text-5xl font-extrabold text-[#FFF7EA] leading-tight mb-4"
              style={{ fontFamily: "var(--font-sora), sans-serif" }}
            >
              Clube Vem Aqui Pet
            </h1>
            <p className="text-[#FFF7EA]/70 text-base md:text-lg leading-relaxed">
              Benefícios, descontos e vantagens exclusivas para tutores que fazem parte da
              comunidade ativa do Vem Aqui Pet.
            </p>
          </div>
        </div>
      </section>

      <section className="py-16 bg-[#FFF7EA]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#D9906A]/10 border border-[#D9906A]/30 mb-8">
            <Clock size={14} className="text-[#D9906A]" />
            <span className="text-sm font-medium text-[#D9906A]">Em desenvolvimento</span>
          </div>
          <h2
            className="text-2xl font-bold text-[#243C4A] mb-4"
            style={{ fontFamily: "var(--font-sora), sans-serif" }}
          >
            O clube está chegando.
          </h2>
          <p className="text-[#5F6F5A] mb-10 max-w-lg mx-auto">
            O Clube Vem Aqui Pet está em fase de estruturação. Os primeiros membros da lista de
            espera terão condições especiais de entrada e acesso prioritário aos benefícios.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 max-w-xl mx-auto mb-10 text-left">
            {benefits.map((b) => (
              <div key={b} className="flex items-center gap-3 p-3 rounded-xl bg-[#F6EFE6]">
                <Check size={14} className="text-[#2F7D5A] flex-shrink-0" />
                <span className="text-sm text-[#243C4A]">{b}</span>
              </div>
            ))}
          </div>

          <div className="rounded-2xl bg-[#243C4A] p-8 max-w-md mx-auto">
            <Star size={24} className="text-[#D9906A] mx-auto mb-3" />
            <h3
              className="font-bold text-[#FFF7EA] text-lg mb-2"
              style={{ fontFamily: "var(--font-sora), sans-serif" }}
            >
              Entre na lista de espera
            </h3>
            <p className="text-[#FFF7EA]/60 text-sm mb-5">
              Cadastre-se para ser notificado quando o Clube abrir e garantir condições de
              fundador.
            </p>
            <div className="flex gap-2">
              <input
                type="email"
                placeholder="Seu e-mail"
                className="flex-1 px-4 py-2.5 rounded-xl bg-[#FFF7EA]/10 border border-[#FFF7EA]/10 text-[#FFF7EA] placeholder:text-[#FFF7EA]/30 text-sm focus:outline-none"
              />
              <button
                className="px-4 py-2.5 rounded-xl bg-[#D9906A] text-white text-sm font-semibold hover:bg-[#c47a56] transition-colors"
                style={{ fontFamily: "var(--font-sora), sans-serif" }}
              >
                <ArrowRight size={15} />
              </button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
