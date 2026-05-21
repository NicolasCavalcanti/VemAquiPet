"use client";

import { useState } from "react";
import { Mail, Phone, MapPin, Check, MessageCircle } from "lucide-react";
import Breadcrumb from "@/components/Breadcrumb";

export default function ContatoPage() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <>
      <section className="bg-[#243C4A] py-14 md:py-18">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Breadcrumb items={[{ label: "Contato" }]} />
          <div className="mt-6 max-w-xl">
            <h1
              className="text-3xl md:text-4xl font-extrabold text-[#FFF7EA] leading-tight mb-3"
              style={{ fontFamily: "var(--font-sora), sans-serif" }}
            >
              Contato
            </h1>
            <p className="text-[#FFF7EA]/70">
              Fale com a equipe Vem Aqui Pet para dúvidas, sugestões, parcerias ou suporte.
            </p>
          </div>
        </div>
      </section>

      <section className="py-14 bg-[#FFF7EA]">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-10">
            {/* Info */}
            <div>
              <h2
                className="text-lg font-bold text-[#243C4A] mb-6"
                style={{ fontFamily: "var(--font-sora), sans-serif" }}
              >
                Como falar conosco
              </h2>
              <div className="space-y-4">
                {[
                  { icon: <Phone size={16} />, label: "WhatsApp", value: "(11) 99999-9999", href: "https://wa.me/5511999999999" },
                  { icon: <Mail size={16} />, label: "E-mail", value: "contato@vemaquipet.com.br", href: "mailto:contato@vemaquipet.com.br" },
                  { icon: <MapPin size={16} />, label: "Atuação", value: "Granja Viana, Cotia e região", href: undefined },
                ].map((item) => (
                  <div key={item.label} className="flex items-start gap-3 p-4 rounded-xl bg-white border border-[#F6EFE6]">
                    <div className="w-8 h-8 rounded-lg bg-[#DFF3E8] flex items-center justify-center text-[#2F7D5A] flex-shrink-0">
                      {item.icon}
                    </div>
                    <div>
                      <p className="text-xs font-medium text-[#5F6F5A]">{item.label}</p>
                      {item.href ? (
                        <a
                          href={item.href}
                          className="text-sm font-semibold text-[#243C4A] hover:text-[#2F7D5A] transition-colors"
                          style={{ fontFamily: "var(--font-sora), sans-serif" }}
                        >
                          {item.value}
                        </a>
                      ) : (
                        <p className="text-sm font-semibold text-[#243C4A]">{item.value}</p>
                      )}
                    </div>
                  </div>
                ))}
              </div>

              <div className="mt-6 p-5 rounded-xl bg-[#DFF3E8]">
                <div className="flex items-center gap-2 mb-2">
                  <MessageCircle size={16} className="text-[#2F7D5A]" />
                  <p className="font-semibold text-[#243C4A] text-sm" style={{ fontFamily: "var(--font-sora), sans-serif" }}>
                    Resposta mais rápida pelo WhatsApp
                  </p>
                </div>
                <p className="text-xs text-[#5F6F5A]">
                  Para assuntos urgentes ou agendamentos, o WhatsApp é o canal com resposta mais
                  ágil. E-mails são respondidos em até 48 horas úteis.
                </p>
              </div>
            </div>

            {/* Form */}
            <div>
              <h2
                className="text-lg font-bold text-[#243C4A] mb-6"
                style={{ fontFamily: "var(--font-sora), sans-serif" }}
              >
                Enviar mensagem
              </h2>

              {submitted ? (
                <div className="text-center py-12 rounded-2xl bg-white border border-[#F6EFE6]">
                  <div className="w-12 h-12 rounded-full bg-[#DFF3E8] flex items-center justify-center text-[#2F7D5A] mx-auto mb-4">
                    <Check size={22} />
                  </div>
                  <p className="font-bold text-[#243C4A] mb-2" style={{ fontFamily: "var(--font-sora), sans-serif" }}>
                    Mensagem enviada.
                  </p>
                  <p className="text-sm text-[#5F6F5A]">
                    Responderemos em até 48 horas úteis.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="rounded-2xl bg-white border border-[#F6EFE6] p-6 space-y-4">
                  {[
                    { key: "nome", label: "Nome", type: "text", placeholder: "Seu nome" },
                    { key: "email", label: "E-mail", type: "email", placeholder: "seu@email.com" },
                    { key: "assunto", label: "Assunto", type: "text", placeholder: "Qual o assunto?" },
                  ].map((f) => (
                    <div key={f.key}>
                      <label className="block text-xs font-medium text-[#243C4A] mb-1.5">{f.label}</label>
                      <input
                        type={f.type}
                        placeholder={f.placeholder}
                        required
                        className="w-full px-4 py-2.5 rounded-xl border border-[#F6EFE6] bg-[#FFF7EA] text-sm text-[#243C4A] focus:outline-none focus:ring-2 focus:ring-[#D9906A]/30"
                      />
                    </div>
                  ))}
                  <div>
                    <label className="block text-xs font-medium text-[#243C4A] mb-1.5">Mensagem</label>
                    <textarea
                      rows={4}
                      placeholder="Sua mensagem..."
                      required
                      className="w-full px-4 py-2.5 rounded-xl border border-[#F6EFE6] bg-[#FFF7EA] text-sm text-[#243C4A] focus:outline-none focus:ring-2 focus:ring-[#D9906A]/30 resize-none"
                    />
                  </div>
                  <button
                    type="submit"
                    className="w-full py-3 rounded-xl bg-[#D9906A] text-white text-sm font-semibold hover:bg-[#c47a56] transition-colors"
                    style={{ fontFamily: "var(--font-sora), sans-serif" }}
                  >
                    Enviar mensagem
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
