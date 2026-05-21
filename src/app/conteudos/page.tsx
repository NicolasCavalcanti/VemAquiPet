import type { Metadata } from "next";
import Link from "next/link";
import { Download, ArrowRight } from "lucide-react";
import Breadcrumb from "@/components/Breadcrumb";
import { contentMaterials } from "@/lib/data";

export const metadata: Metadata = {
  title: "Conteúdos Ricos: guias, checklists e materiais gratuitos para tutores",
  description:
    "Guias, checklists, calendários e mapas pet friendly para tutores da Granja Viana, Cotia e região. Todos gratuitos.",
};

const typeLabels: Record<string, string> = {
  guia: "Guia",
  checklist: "Checklist",
  mapa: "Mapa",
  comparativo: "Comparativo",
  calendario: "Calendário",
};

const typeColors: Record<string, string> = {
  guia: "bg-[#DFF3E8] text-[#2F7D5A]",
  checklist: "bg-[#FFF7EA] text-[#D9906A]",
  mapa: "bg-[#243C4A]/10 text-[#243C4A]",
  comparativo: "bg-[#F6EFE6] text-[#5F6F5A]",
  calendario: "bg-[#DFF3E8] text-[#2F7D5A]",
};

export default function ConteudosPage() {
  return (
    <>
      <section className="bg-[#243C4A] py-14 md:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Breadcrumb items={[{ label: "Conteúdos", href: "/conteudos" }]} />
          <div className="mt-6 max-w-2xl">
            <h1
              className="text-3xl md:text-5xl font-extrabold text-[#FFF7EA] leading-tight mb-4"
              style={{ fontFamily: "var(--font-sora), sans-serif" }}
            >
              Materiais gratuitos
            </h1>
            <p className="text-[#FFF7EA]/70 text-base md:text-lg leading-relaxed">
              Guias, checklists, calendários e mapas para organizar a vida com seu pet.
              Conteúdos gratuitos criados pela equipe Vem Aqui Pet.
            </p>
          </div>
        </div>
      </section>

      {/* Filtros */}
      <section className="py-6 bg-[#FFF7EA] border-b border-[#F6EFE6]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap gap-2">
            <span className="px-4 py-1.5 rounded-full text-sm font-medium bg-[#243C4A] text-[#FFF7EA]">Todos</span>
            {["guia","checklist","mapa","calendario"].map((type) => (
              <Link
                key={type}
                href={`/conteudos/${type === "guia" ? "guias" : type === "checklist" ? "checklists" : type === "mapa" ? "mapas" : "checklists"}`}
                className="px-4 py-1.5 rounded-full text-sm font-medium bg-white border border-[#F6EFE6] text-[#5F6F5A] hover:border-[#D9906A]/40 hover:text-[#D9906A] transition-colors capitalize"
              >
                {typeLabels[type]}
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="py-14 bg-[#FFF7EA]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {contentMaterials.map((m) => (
              <Link
                key={m.slug}
                href={m.href}
                className="group flex flex-col p-6 rounded-2xl bg-white border border-[#F6EFE6] hover:border-[#2F7D5A]/20 hover:shadow-[0_4px_16px_rgba(36,60,74,0.10)] transition-all duration-200"
              >
                <div className="flex items-start justify-between mb-4">
                  <div className="w-11 h-11 rounded-xl bg-[#DFF3E8] flex items-center justify-center text-[#2F7D5A] group-hover:bg-[#2F7D5A]/20 transition-colors">
                    <Download size={18} />
                  </div>
                  <span className={`px-2.5 py-1 rounded-full text-[10px] font-semibold uppercase tracking-wide ${typeColors[m.type]}`}>
                    {typeLabels[m.type]}
                  </span>
                </div>
                <h3
                  className="font-bold text-[#243C4A] group-hover:text-[#2F7D5A] transition-colors mb-2"
                  style={{ fontFamily: "var(--font-sora), sans-serif" }}
                >
                  {m.title}
                </h3>
                <p className="text-sm text-[#5F6F5A] leading-relaxed flex-1">{m.description}</p>
                <span className="mt-4 inline-flex items-center gap-1.5 text-sm font-medium text-[#2F7D5A] group-hover:gap-2.5 transition-all">
                  Acessar gratuitamente <ArrowRight size={13} />
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
