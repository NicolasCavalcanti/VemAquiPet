"use client";

import { useState } from "react";
import Link from "next/link";
import { Stethoscope, Droplets, GraduationCap, Heart, Footprints, Handshake, Check, ArrowRight } from "lucide-react";
import Breadcrumb from "@/components/Breadcrumb";

const profiles = [
  {
    id: "veterinario",
    icon: <Stethoscope size={20} />,
    title: "Veterinário",
    desc: "Profissionais com CRMV ativo para atendimento domiciliar.",
    crmv: true,
  },
  {
    id: "banho-tosa",
    icon: <Droplets size={20} />,
    title: "Banho e Tosa",
    desc: "Especialistas em higiene e estética animal.",
    crmv: false,
  },
  {
    id: "adestrador",
    icon: <GraduationCap size={20} />,
    title: "Adestrador",
    desc: "Profissionais de comportamento e treinamento.",
    crmv: false,
  },
  {
    id: "pet-sitter",
    icon: <Heart size={20} />,
    title: "Pet Sitter",
    desc: "Cuidadores para quando o tutor precisa se ausentar.",
    crmv: false,
  },
  {
    id: "passeador",
    icon: <Footprints size={20} />,
    title: "Passeador",
    desc: "Responsáveis por passeios seguros e supervisionados.",
    crmv: false,
  },
  {
    id: "parceiro",
    icon: <Handshake size={20} />,
    title: "Parceiro Comercial",
    desc: "Empresas e serviços que querem integrar o ecossistema.",
    crmv: false,
  },
];

const benefits = [
  "Acesso a tutores ativos na região",
  "Agenda gerenciada pela plataforma",
  "Suporte e treinamento inicial",
  "Integração com o ecossistema Vem Aqui Pet",
  "Sem taxas de entrada",
  "Crescimento junto com a marca",
];

export default function TrabalheConoscoPage() {
  const [selected, setSelected] = useState<string | null>(null);
  const [submitted, setSubmitted] = useState(false);
  const profile = profiles.find((p) => p.id === selected);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <>
      <section className="bg-[#2F7D5A] py-14 md:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Breadcrumb items={[{ label: "Trabalhe Conosco", href: "/trabalhe-conosco" }]} />
          <div className="mt-6 max-w-2xl">
            <h1
              className="text-3xl md:text-5xl font-extrabold text-[#FFF7EA] leading-tight mb-4"
              style={{ fontFamily: "var(--font-sora), sans-serif" }}
            >
              Trabalhe Conosco
            </h1>
            <p className="text-[#FFF7EA]/80 text-base md:text-lg leading-relaxed">
              Profissionais pet podem se cadastrar para fazer parte da rede Vem Aqui Pet e
              atender tutores da Granja Viana, Cotia e região.
            </p>
          </div>
        </div>
      </section>

      {/* Benefícios */}
      <section className="py-14 bg-[#FFF7EA]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-10 items-center">
            <div>
              <h2
                className="text-xl font-bold text-[#243C4A] mb-4"
                style={{ fontFamily: "var(--font-sora), sans-serif" }}
              >
                Por que fazer parte da rede?
              </h2>
              <p className="text-[#5F6F5A] mb-6 leading-relaxed text-sm">
                O Vem Aqui Pet conecta profissionais verificados a tutores ativos da região.
                Você foca no atendimento, nós cuidamos da visibilidade, da agenda e da
                comunicação.
              </p>
              <ul className="space-y-3">
                {benefits.map((b) => (
                  <li key={b} className="flex items-center gap-3 text-sm text-[#243C4A]">
                    <Check size={14} className="text-[#2F7D5A] flex-shrink-0" />
                    {b}
                  </li>
                ))}
              </ul>
            </div>
            <div className="grid grid-cols-2 gap-3">
              {profiles.map((p) => (
                <button
                  key={p.id}
                  onClick={() => setSelected(p.id)}
                  className={`group flex flex-col items-start gap-3 p-4 rounded-2xl border-2 text-left transition-all ${
                    selected === p.id
                      ? "border-[#2F7D5A] bg-[#DFF3E8]"
                      : "border-[#F6EFE6] bg-white hover:border-[#2F7D5A]/30"
                  }`}
                >
                  <div
                    className={`w-9 h-9 rounded-xl flex items-center justify-center ${
                      selected === p.id ? "bg-[#2F7D5A] text-white" : "bg-[#DFF3E8] text-[#2F7D5A]"
                    }`}
                  >
                    {p.icon}
                  </div>
                  <div>
                    <p
                      className="font-bold text-[#243C4A] text-sm"
                      style={{ fontFamily: "var(--font-sora), sans-serif" }}
                    >
                      {p.title}
                    </p>
                    <p className="text-xs text-[#5F6F5A] mt-0.5 leading-relaxed">{p.desc}</p>
                  </div>
                </button>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Formulário */}
      <section className="py-14 bg-[#F6EFE6]">
        <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2
            className="text-xl font-bold text-[#243C4A] mb-2"
            style={{ fontFamily: "var(--font-sora), sans-serif" }}
          >
            Formulário de cadastro
          </h2>
          <p className="text-sm text-[#5F6F5A] mb-8">
            Preencha o formulário abaixo. Nossa equipe analisará seu cadastro e entrará em
            contato em até 3 dias úteis.
          </p>

          {submitted ? (
            <div className="text-center py-12 rounded-2xl bg-white border border-[#F6EFE6]">
              <div className="w-12 h-12 rounded-full bg-[#DFF3E8] flex items-center justify-center text-[#2F7D5A] mx-auto mb-4">
                <Check size={22} />
              </div>
              <p
                className="font-bold text-[#243C4A] text-lg mb-2"
                style={{ fontFamily: "var(--font-sora), sans-serif" }}
              >
                Cadastro recebido.
              </p>
              <p className="text-sm text-[#5F6F5A] mb-6">
                Nossa equipe entrará em contato em até 3 dias úteis para os próximos passos.
              </p>
              <Link
                href="/"
                className="text-sm font-medium text-[#2F7D5A] hover:underline"
              >
                Voltar ao início
              </Link>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="rounded-2xl bg-white border border-[#F6EFE6] p-8 space-y-5">
              {/* Tipo de perfil */}
              <div>
                <label className="block text-xs font-medium text-[#243C4A] mb-2">
                  Tipo de serviço *
                </label>
                <select
                  value={selected ?? ""}
                  onChange={(e) => setSelected(e.target.value)}
                  required
                  className="w-full px-4 py-2.5 rounded-xl border border-[#F6EFE6] bg-[#FFF7EA] text-sm text-[#243C4A] focus:outline-none focus:ring-2 focus:ring-[#2F7D5A]/30"
                >
                  <option value="">Selecione seu perfil</option>
                  {profiles.map((p) => (
                    <option key={p.id} value={p.id}>{p.title}</option>
                  ))}
                </select>
              </div>

              {[
                { key: "nome", label: "Nome completo", type: "text", placeholder: "Seu nome", required: true },
                { key: "whatsapp", label: "WhatsApp", type: "tel", placeholder: "(11) 99999-9999", required: true },
                { key: "email", label: "E-mail", type: "email", placeholder: "seu@email.com", required: true },
              ].map((f) => (
                <div key={f.key}>
                  <label className="block text-xs font-medium text-[#243C4A] mb-1.5">
                    {f.label} {f.required && "*"}
                  </label>
                  <input
                    type={f.type}
                    placeholder={f.placeholder}
                    required={f.required}
                    className="w-full px-4 py-2.5 rounded-xl border border-[#F6EFE6] bg-[#FFF7EA] text-sm text-[#243C4A] focus:outline-none focus:ring-2 focus:ring-[#2F7D5A]/30"
                  />
                </div>
              ))}

              {/* CRMV para veterinários */}
              {profile?.crmv && (
                <div>
                  <label className="block text-xs font-medium text-[#243C4A] mb-1.5">
                    CRMV *
                  </label>
                  <input
                    type="text"
                    placeholder="CRMV-SP 00000"
                    required
                    className="w-full px-4 py-2.5 rounded-xl border border-[#F6EFE6] bg-[#FFF7EA] text-sm text-[#243C4A] focus:outline-none focus:ring-2 focus:ring-[#2F7D5A]/30"
                  />
                </div>
              )}

              <div>
                <label className="block text-xs font-medium text-[#243C4A] mb-1.5">
                  Região de atuação *
                </label>
                <select
                  required
                  className="w-full px-4 py-2.5 rounded-xl border border-[#F6EFE6] bg-[#FFF7EA] text-sm text-[#243C4A] focus:outline-none focus:ring-2 focus:ring-[#2F7D5A]/30"
                >
                  <option value="">Selecione</option>
                  {["Granja Viana","Cotia","São Paulo II","Fazendinha","Alphaville Granja Viana","Toda a região"].map((r) => (
                    <option key={r} value={r}>{r}</option>
                  ))}
                </select>
              </div>

              <div>
                <label className="block text-xs font-medium text-[#243C4A] mb-1.5">
                  Experiência e disponibilidade
                </label>
                <textarea
                  rows={3}
                  placeholder="Descreva sua experiência, formação e disponibilidade de horários..."
                  className="w-full px-4 py-2.5 rounded-xl border border-[#F6EFE6] bg-[#FFF7EA] text-sm text-[#243C4A] focus:outline-none focus:ring-2 focus:ring-[#2F7D5A]/30 resize-none"
                />
              </div>

              <button
                type="submit"
                className="w-full flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-[#2F7D5A] text-white text-sm font-semibold hover:bg-[#266a4b] transition-colors"
                style={{ fontFamily: "var(--font-sora), sans-serif" }}
              >
                Enviar cadastro
                <ArrowRight size={14} />
              </button>
            </form>
          )}
        </div>
      </section>
    </>
  );
}
