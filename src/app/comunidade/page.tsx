import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, Calendar, MapPin, MessageCircle, Heart } from "lucide-react";
import Breadcrumb from "@/components/Breadcrumb";
import CTABlock from "@/components/CTABlock";

export const metadata: Metadata = {
  title: "Comunidade Vem Aqui Pet: eventos, encontros e histórias de tutores",
  description:
    "Eventos, encontros, histórias de tutores e dicas locais para pets da Granja Viana, Cotia e região.",
};

const upcomingEvents = [
  {
    id: 1,
    title: "Caminhada coletiva com cães na Granja Viana",
    date: "Sábado, 7 de junho de 2025",
    location: "Parque Municipal da Granja Viana",
    type: "Atividade",
  },
  {
    id: 2,
    title: "Encontro de tutores e pets no Alphaville",
    date: "Domingo, 15 de junho de 2025",
    location: "Praça central do Alphaville Granja Viana",
    type: "Encontro",
  },
  {
    id: 3,
    title: "Palestra: Enriquecimento ambiental para gatos",
    date: "Quarta-feira, 18 de junho de 2025",
    location: "Online, via transmissão ao vivo",
    type: "Educativo",
  },
];

const stories = [
  {
    id: 1,
    petName: "Thor",
    tutorName: "Família Silva",
    location: "Granja Viana",
    excerpt:
      "Adotamos o Thor com 3 meses e não sabíamos nada sobre cuidados com cães. O Vem Aqui Pet nos ajudou a entender a rotina, as vacinas e até o comportamento dele.",
    emoji: "🐕",
  },
  {
    id: 2,
    petName: "Mel e Figo",
    tutorName: "Carla M.",
    location: "Cotia",
    excerpt:
      "Tenho dois gatos e sempre tive dificuldade em encontrar informação confiável sobre alimentação felina. Os guias do site são completos e escritos de forma clara.",
    emoji: "🐈",
  },
  {
    id: 3,
    petName: "Pipoca",
    tutorName: "João e Ana",
    location: "Fazendinha",
    excerpt:
      "Nossa cachorrinha tem ansiedade de separação. Os artigos de comportamento do site nos deram uma direção muito melhor do que seguir dicas aleatórias na internet.",
    emoji: "🐾",
  },
];

export default function ComunidadePage() {
  return (
    <>
      <section className="bg-[#243C4A] py-14 md:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Breadcrumb items={[{ label: "Comunidade", href: "/comunidade" }]} />
          <div className="mt-6 max-w-2xl">
            <h1
              className="text-3xl md:text-5xl font-extrabold text-[#FFF7EA] leading-tight mb-4"
              style={{ fontFamily: "var(--font-sora), sans-serif" }}
            >
              Comunidade Vem Aqui Pet
            </h1>
            <p className="text-[#FFF7EA]/70 text-base md:text-lg leading-relaxed">
              Histórias, encontros, eventos e dicas locais de tutores da Granja Viana, Cotia e
              arredores. Uma comunidade para quem vive a rotina pet na região.
            </p>
          </div>
        </div>
      </section>

      {/* Seções */}
      <section className="py-8 bg-[#FFF7EA] border-b border-[#F6EFE6]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap gap-3">
            {[
              { icon: <Calendar size={14} />, label: "Eventos", href: "/comunidade/eventos" },
              { icon: <MapPin size={14} />, label: "Encontros", href: "/comunidade/encontros" },
              { icon: <MessageCircle size={14} />, label: "Histórias", href: "/comunidade/historias-de-tutores" },
              { icon: <Heart size={14} />, label: "Envie sua história", href: "/comunidade/envie-sua-historia" },
            ].map((item) => (
              <Link
                key={item.label}
                href={item.href}
                className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white border border-[#F6EFE6] text-sm font-medium text-[#243C4A] hover:border-[#D9906A]/40 hover:text-[#D9906A] transition-colors"
              >
                {item.icon}
                {item.label}
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Próximos eventos */}
      <section className="py-14 bg-[#FFF7EA]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-end justify-between mb-8">
            <h2
              className="text-xl font-bold text-[#243C4A]"
              style={{ fontFamily: "var(--font-sora), sans-serif" }}
            >
              Próximos eventos
            </h2>
            <Link
              href="/comunidade/eventos"
              className="flex items-center gap-1.5 text-sm font-medium text-[#2F7D5A] hover:text-[#243C4A] transition-colors"
            >
              Ver todos <ArrowRight size={14} />
            </Link>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            {upcomingEvents.map((event) => (
              <div
                key={event.id}
                className="rounded-2xl bg-white border border-[#F6EFE6] p-5 hover:shadow-[0_4px_16px_rgba(36,60,74,0.08)] transition-shadow"
              >
                <span className="inline-block px-2.5 py-1 rounded-full text-xs font-medium bg-[#DFF3E8] text-[#2F7D5A] mb-4">
                  {event.type}
                </span>
                <h3
                  className="font-bold text-[#243C4A] text-sm mb-3 leading-snug"
                  style={{ fontFamily: "var(--font-sora), sans-serif" }}
                >
                  {event.title}
                </h3>
                <div className="space-y-1.5">
                  <p className="flex items-center gap-2 text-xs text-[#5F6F5A]">
                    <Calendar size={12} className="text-[#D9906A]" /> {event.date}
                  </p>
                  <p className="flex items-center gap-2 text-xs text-[#5F6F5A]">
                    <MapPin size={12} className="text-[#D9906A]" /> {event.location}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Histórias */}
      <section className="py-14 bg-[#F6EFE6]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-end justify-between mb-8">
            <h2
              className="text-xl font-bold text-[#243C4A]"
              style={{ fontFamily: "var(--font-sora), sans-serif" }}
            >
              Histórias de tutores
            </h2>
            <Link
              href="/comunidade/historias-de-tutores"
              className="flex items-center gap-1.5 text-sm font-medium text-[#2F7D5A] hover:text-[#243C4A] transition-colors"
            >
              Ver todas <ArrowRight size={14} />
            </Link>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            {stories.map((s) => (
              <div
                key={s.id}
                className="rounded-2xl bg-white p-6 shadow-[0_2px_8px_rgba(36,60,74,0.06)]"
              >
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-11 h-11 rounded-full bg-[#FFF7EA] flex items-center justify-center text-2xl">
                    {s.emoji}
                  </div>
                  <div>
                    <p
                      className="font-bold text-[#243C4A] text-sm"
                      style={{ fontFamily: "var(--font-sora), sans-serif" }}
                    >
                      {s.petName}
                    </p>
                    <p className="text-xs text-[#5F6F5A]">
                      {s.tutorName} · {s.location}
                    </p>
                  </div>
                </div>
                <p className="text-sm text-[#5F6F5A] leading-relaxed italic">"{s.excerpt}"</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Enviar história */}
      <section className="py-12 bg-[#FFF7EA]">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <CTABlock
            title="Compartilhe a história do seu pet."
            description="Tutores da região podem enviar histórias, fotos e dicas locais para fazer parte da comunidade Vem Aqui Pet."
            primaryCta={{ label: "Enviar minha história", href: "/comunidade/envie-sua-historia" }}
            secondaryCta={{ label: "Sugerir um local pet friendly", href: "/comunidade/envie-sua-historia" }}
            variant="clay"
          />
        </div>
      </section>
    </>
  );
}
