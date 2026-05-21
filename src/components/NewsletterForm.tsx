"use client";

import { useState } from "react";
import { Mail, ArrowRight, Check } from "lucide-react";

interface NewsletterFormProps {
  title?: string;
  description?: string;
  compact?: boolean;
}

export default function NewsletterForm({
  title = "Receba conteúdos sobre saúde e bem-estar pet",
  description = "Novidades do ecossistema, guias práticos e dicas úteis para tutores.",
  compact = false,
}: NewsletterFormProps) {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;
    setSubmitted(true);
    // TODO: integrate with email service
  };

  if (submitted) {
    return (
      <div className="flex flex-col items-center gap-2 text-center py-4">
        <div className="w-10 h-10 rounded-full bg-[#DFF3E8] flex items-center justify-center text-[#2F7D5A]">
          <Check size={18} />
        </div>
        <p className="font-semibold text-[#243C4A] text-sm" style={{ fontFamily: "var(--font-sora), sans-serif" }}>
          Inscrição confirmada.
        </p>
        <p className="text-xs text-[#5F6F5A]">Você receberá os próximos conteúdos por e-mail.</p>
      </div>
    );
  }

  if (compact) {
    return (
      <form onSubmit={handleSubmit} className="flex gap-2">
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Seu melhor e-mail"
          required
          className="flex-1 px-4 py-2.5 rounded-lg border border-[#F6EFE6] bg-white text-sm text-[#243C4A] placeholder:text-[#5F6F5A]/60 focus:outline-none focus:ring-2 focus:ring-[#2F7D5A]/30"
        />
        <button
          type="submit"
          className="px-4 py-2.5 rounded-lg bg-[#D9906A] text-white text-sm font-semibold hover:bg-[#c47a56] transition-colors flex items-center gap-1.5"
        >
          <ArrowRight size={14} />
        </button>
      </form>
    );
  }

  return (
    <div className="rounded-2xl bg-[#243C4A] p-8 md:p-10">
      <div className="flex items-start gap-4 mb-6">
        <div className="w-10 h-10 rounded-xl bg-[#D9906A]/20 flex items-center justify-center text-[#D9906A] flex-shrink-0">
          <Mail size={18} />
        </div>
        <div>
          <h3
            className="font-bold text-[#FFF7EA] text-lg leading-snug"
            style={{ fontFamily: "var(--font-sora), sans-serif" }}
          >
            {title}
          </h3>
          <p className="text-sm text-[#FFF7EA]/60 mt-1">{description}</p>
        </div>
      </div>

      <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3">
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Seu melhor e-mail"
          required
          className="flex-1 px-4 py-3 rounded-xl border border-[#FFF7EA]/10 bg-[#FFF7EA]/10 text-[#FFF7EA] placeholder:text-[#FFF7EA]/40 text-sm focus:outline-none focus:ring-2 focus:ring-[#D9906A]/50"
        />
        <button
          type="submit"
          className="px-6 py-3 rounded-xl bg-[#D9906A] text-white text-sm font-semibold hover:bg-[#c47a56] transition-colors flex items-center justify-center gap-2"
          style={{ fontFamily: "var(--font-sora), sans-serif" }}
        >
          Inscrever-se
          <ArrowRight size={14} />
        </button>
      </form>
      <p className="text-xs text-[#FFF7EA]/30 mt-3">
        Sem spam. Você pode cancelar a inscrição a qualquer momento.
      </p>
    </div>
  );
}
