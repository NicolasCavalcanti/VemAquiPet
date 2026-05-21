import type { Metadata } from "next";
import Link from "next/link";
import { MapPin, Trees, Wrench, Building2, Heart, CalendarDays, TriangleAlert, ArrowRight } from "lucide-react";
import Breadcrumb from "@/components/Breadcrumb";
import BlogCard from "@/components/BlogCard";
import FAQAccordion from "@/components/FAQAccordion";
import { blogPosts, localGuides } from "@/lib/data";
import type { FAQ } from "@/lib/types";

export const metadata: Metadata = {
  title: "Guia Local Pet: Granja Viana, Cotia e região",
  description:
    "O guia pet da Granja Viana, Cotia e região. Parques, serviços, condomínios e locais pet friendly.",
};

const guideCategories = [
  {
    icon: Trees,
    title: "Parques e Trilhas",
    description: "Áreas verdes, parques e trilhas pet friendly na região.",
    href: "/guia-local/categorias/parques-e-trilhas",
    color: "bg-[#DFF3E8] text-[#2F7D5A]",
  },
  {
    icon: Wrench,
    title: "Serviços Pet",
    description: "Clínicas, petshops, grooming e outros serviços locais.",
    href: "/guia-local/categorias/servicos-pet",
    color: "bg-[#FFF7EA] text-[#D9906A]",
  },
  {
    icon: Building2,
    title: "Condomínios Pet Friendly",
    description: "Condomínios que acolhem tutores e seus animais.",
    href: "/guia-local/condominios-pet-friendly",
    color: "bg-[#F6EFE6] text-[#5F6F5A]",
  },
  {
    icon: Heart,
    title: "Locais Pet Friendly",
    description: "Restaurantes, cafés e estabelecimentos que recebem pets.",
    href: "/guia-local/categorias/locais-pet-friendly",
    color: "bg-[#DFF3E8] text-[#2F7D5A]",
  },
  {
    icon: CalendarDays,
    title: "Eventos Locais",
    description: "Encontros, feiras e atividades pet na Granja Viana e Cotia.",
    href: "/guia-local/categorias/eventos-locais",
    color: "bg-[#FFF7EA] text-[#D9906A]",
  },
  {
    icon: TriangleAlert,
    title: "Alertas da Região",
    description: "Informações relevantes sobre saúde e segurança na área.",
    href: "/guia-local/categorias/alertas",
    color: "bg-[#F6EFE6] text-[#5F6F5A]",
  },
];

const localFAQs: FAQ[] = [
  {
    question: "A Granja Viana tem parques pet friendly?",
    answer:
      "Sim. A região conta com áreas verdes e parques que aceitam cães com coleira, além de trilhas com acesso para tutores acompanhados de pets. O Parque Estadual do Jurupará e áreas da Serra de Caucaia são opções para atividades ao ar livre. Consulte as regras específicas de cada local antes de visitar.",
  },
  {
    question: "Quais condomínios na Granja Viana são pet friendly?",
    answer:
      "Diversos condomínios fechados da Granja Viana e Alphaville possuem regras favoráveis a tutores e seus animais, incluindo espaços pet, pet places e regulamentos que permitem cães e gatos. O guia lista os principais com suas características e contatos.",
  },
  {
    question: "Como faço para encontrar serviços veterinários próximos?",
    answer:
      "O guia local do Vem Aqui Pet reúne clínicas, hospitais veterinários, petshops e profissionais autônomos da Granja Viana, Cotia e região. Além disso, o serviço Vet em Casa realiza atendimentos domiciliares para consultas de rotina no seu endereço.",
  },
  {
    question: "Há transporte pet friendly na região de Cotia e Granja Viana?",
    answer:
      "A região tem acesso facilitado por carro, e alguns aplicativos de transporte aceitam animais de pequeno porte em transportadora. Para pets de médio e grande porte, a melhor opção é o transporte particular. O guia local traz dicas específicas sobre deslocamento com pets na região.",
  },
];

const localGuidesPosts = blogPosts.filter((p) => p.categorySlug === "guia-local");

export default function GuiaLocalPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-[#243C4A] py-14 md:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Breadcrumb items={[{ label: "Guia Local" }]} />
          <div className="mt-6 max-w-2xl">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-[#D9906A]/20 border border-[#D9906A]/30 mb-5">
              <MapPin size={12} className="text-[#D9906A]" />
              <span className="text-xs font-medium text-[#D9906A]">
                Granja Viana, Cotia e região
              </span>
            </div>
            <h1
              className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-[#FFF7EA] leading-tight mb-4"
              style={{ fontFamily: "var(--font-sora), sans-serif", letterSpacing: "-0.02em" }}
            >
              Guia Local Pet
            </h1>
            <p className="text-[#FFF7EA]/70 text-base md:text-lg leading-relaxed">
              O guia pet da Granja Viana, Cotia e região. Parques, serviços, condomínios e locais
              pet friendly reunidos em um só lugar.
            </p>
          </div>
        </div>
      </section>

      {/* Regiões */}
      <section className="py-14 md:py-18 bg-[#FFF7EA]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-10">
            <p className="text-xs font-semibold text-[#D9906A] uppercase tracking-widest mb-2">
              Regiões
            </p>
            <h2
              className="text-2xl md:text-3xl font-extrabold text-[#243C4A]"
              style={{ fontFamily: "var(--font-sora), sans-serif" }}
            >
              Explore por região
            </h2>
            <p className="text-[#5F6F5A] mt-2 text-sm max-w-lg">
              Selecione a sua região e encontre parques, serviços e dicas locais específicos para
              tutores de cada área.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {localGuides.map((guide) => (
              <Link
                key={guide.slug}
                href={guide.href}
                className="group flex items-start gap-4 p-5 rounded-2xl bg-white border border-[#F6EFE6] hover:border-[#D9906A]/30 hover:shadow-[0_4px_20px_rgba(36,60,74,0.10)] transition-all duration-200"
              >
                <div className="w-11 h-11 rounded-xl bg-[#FFF7EA] flex items-center justify-center text-[#D9906A] flex-shrink-0 group-hover:bg-[#D9906A]/10 transition-colors">
                  <MapPin size={20} />
                </div>
                <div className="flex-1 min-w-0">
                  <div className="flex items-center justify-between gap-2">
                    <h3
                      className="font-bold text-[#243C4A] text-sm group-hover:text-[#D9906A] transition-colors leading-snug"
                      style={{ fontFamily: "var(--font-sora), sans-serif" }}
                    >
                      {guide.name}
                    </h3>
                    <ArrowRight
                      size={14}
                      className="text-[#5F6F5A] flex-shrink-0 opacity-0 group-hover:opacity-100 transition-opacity"
                    />
                  </div>
                  <p className="text-xs text-[#5F6F5A] mt-1 leading-relaxed">
                    {guide.description}
                  </p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Categorias do Guia Local */}
      <section className="py-14 md:py-18 bg-[#F6EFE6]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-10">
            <p className="text-xs font-semibold text-[#D9906A] uppercase tracking-widest mb-2">
              Categorias
            </p>
            <h2
              className="text-2xl md:text-3xl font-extrabold text-[#243C4A]"
              style={{ fontFamily: "var(--font-sora), sans-serif" }}
            >
              Categorias do Guia Local
            </h2>
            <p className="text-[#5F6F5A] mt-2 text-sm max-w-lg">
              Encontre o que procura por tipo de local ou atividade na região.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {guideCategories.map((cat) => {
              const Icon = cat.icon;
              return (
                <Link
                  key={cat.title}
                  href={cat.href}
                  className="group flex items-start gap-4 p-5 rounded-2xl bg-white border border-[#F6EFE6] hover:border-[#2F7D5A]/20 hover:shadow-[0_4px_20px_rgba(36,60,74,0.10)] transition-all duration-200"
                >
                  <div
                    className={`w-11 h-11 rounded-xl flex items-center justify-center flex-shrink-0 ${cat.color}`}
                  >
                    <Icon size={20} />
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center justify-between gap-2">
                      <h3
                        className="font-bold text-[#243C4A] text-sm group-hover:text-[#2F7D5A] transition-colors"
                        style={{ fontFamily: "var(--font-sora), sans-serif" }}
                      >
                        {cat.title}
                      </h3>
                      <ArrowRight
                        size={14}
                        className="text-[#5F6F5A] flex-shrink-0 opacity-0 group-hover:opacity-100 transition-opacity"
                      />
                    </div>
                    <p className="text-xs text-[#5F6F5A] mt-1 leading-relaxed">
                      {cat.description}
                    </p>
                  </div>
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      {/* Artigos do Guia Local */}
      {localGuidesPosts.length > 0 && (
        <section className="py-14 md:py-18 bg-[#FFF7EA]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex items-end justify-between mb-10">
              <div>
                <p className="text-xs font-semibold text-[#D9906A] uppercase tracking-widest mb-2">
                  Conteúdo
                </p>
                <h2
                  className="text-2xl md:text-3xl font-extrabold text-[#243C4A]"
                  style={{ fontFamily: "var(--font-sora), sans-serif" }}
                >
                  Artigos sobre a região
                </h2>
                <p className="text-[#5F6F5A] mt-2 text-sm">
                  Guias, dicas e informações sobre a Granja Viana, Cotia e arredores.
                </p>
              </div>
              <Link
                href="/blog"
                className="hidden sm:flex items-center gap-1.5 text-sm font-medium text-[#2F7D5A] hover:text-[#243C4A] transition-colors"
              >
                Ver todos os artigos
                <ArrowRight size={14} />
              </Link>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
              {localGuidesPosts.map((post) => (
                <BlogCard key={post.slug} post={post} />
              ))}
            </div>
          </div>
        </section>
      )}

      {/* FAQ */}
      <section className="py-14 md:py-18 bg-[#F6EFE6]">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <p className="text-xs font-semibold text-[#D9906A] uppercase tracking-widest mb-2">
              Dúvidas
            </p>
            <h2
              className="text-2xl md:text-3xl font-extrabold text-[#243C4A]"
              style={{ fontFamily: "var(--font-sora), sans-serif" }}
            >
              Perguntas sobre a região
            </h2>
            <p className="text-[#5F6F5A] mt-2 text-sm">
              Respostas para dúvidas comuns de tutores da Granja Viana, Cotia e arredores.
            </p>
          </div>
          <FAQAccordion faqs={localFAQs} />
        </div>
      </section>
    </>
  );
}
