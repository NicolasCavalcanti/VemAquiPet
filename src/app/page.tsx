import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, Calendar, MapPin, Download, Users, Briefcase } from "lucide-react";
import BlogCard from "@/components/BlogCard";
import ServiceCard from "@/components/ServiceCard";
import CategoryCard from "@/components/CategoryCard";
import FAQAccordion from "@/components/FAQAccordion";
import NewsletterForm from "@/components/NewsletterForm";
import {
  blogPosts,
  services,
  localGuides,
  editorialCategories,
  contentMaterials,
  homeFAQs,
} from "@/lib/data";

export const metadata: Metadata = {
  title: "Vem Aqui Pet: portal pet da Granja Viana, Cotia e região",
  description:
    "Conteúdos confiáveis, guias locais, serviços em domicílio, vida ativa e soluções para tutores de pets da Granja Viana, Cotia e região.",
};

const featuredPosts = blogPosts.filter((p) => p.featured);
const recentPosts = blogPosts.slice(0, 6);

export default function HomePage() {
  return (
    <>
      {/* Hero */}
      <section className="relative bg-[#243C4A] overflow-hidden">
        <div className="absolute inset-0 opacity-5">
          <div
            className="absolute inset-0"
            style={{
              backgroundImage:
                "radial-gradient(circle at 25px 25px, #FFF7EA 2px, transparent 0)",
              backgroundSize: "50px 50px",
            }}
          />
        </div>
        <div className="absolute top-0 right-0 w-1/2 h-full opacity-10">
          <div className="w-full h-full bg-gradient-to-l from-[#D9906A] to-transparent" />
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-28">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-[#D9906A]/20 border border-[#D9906A]/30 mb-6">
              <MapPin size={12} className="text-[#D9906A]" />
              <span className="text-xs font-medium text-[#D9906A]">
                Granja Viana, Cotia e região
              </span>
            </div>

            <h1
              className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-[#FFF7EA] leading-[1.1] mb-6"
              style={{ fontFamily: "var(--font-sora), sans-serif", letterSpacing: "-0.02em" }}
            >
              Tudo para cuidar melhor do seu pet.
            </h1>

            <p className="text-lg md:text-xl text-[#FFF7EA]/70 leading-relaxed mb-10 max-w-2xl">
              Conteúdos confiáveis, guias locais, serviços em domicílio, vida ativa, bem-estar e
              soluções para tutores da Granja Viana, Cotia e região.
            </p>

            <div className="flex flex-wrap gap-3">
              <Link
                href="/blog"
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-[#FFF7EA] text-[#243C4A] text-sm font-semibold hover:bg-white transition-colors"
                style={{ fontFamily: "var(--font-sora), sans-serif" }}
              >
                Explorar conteúdos
                <ArrowRight size={15} />
              </Link>
              <Link
                href="/servicos"
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl border border-[#FFF7EA]/20 text-[#FFF7EA] text-sm font-semibold hover:bg-[#FFF7EA]/10 transition-colors"
                style={{ fontFamily: "var(--font-sora), sans-serif" }}
              >
                Encontrar serviços
              </Link>
              <Link
                href="/agendar"
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-[#D9906A] text-white text-sm font-semibold hover:bg-[#c47a56] transition-colors"
                style={{ fontFamily: "var(--font-sora), sans-serif" }}
              >
                <Calendar size={15} />
                Agendar atendimento
              </Link>
              <Link
                href="/guia-local"
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl border border-[#FFF7EA]/20 text-[#FFF7EA]/80 text-sm font-medium hover:bg-[#FFF7EA]/10 transition-colors"
                style={{ fontFamily: "var(--font-sora), sans-serif" }}
              >
                <MapPin size={15} />
                Guia local
              </Link>
            </div>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mt-16 pt-12 border-t border-[#FFF7EA]/10">
            {[
              { value: "12+", label: "Artigos publicados" },
              { value: "6", label: "Serviços disponíveis" },
              { value: "5", label: "Regiões atendidas" },
              { value: "100%", label: "Conteúdo gratuito" },
            ].map((stat) => (
              <div key={stat.label} className="text-center">
                <p
                  className="text-2xl font-extrabold text-[#D9906A]"
                  style={{ fontFamily: "var(--font-sora), sans-serif" }}
                >
                  {stat.value}
                </p>
                <p className="text-xs text-[#FFF7EA]/50 mt-0.5">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Explore por tema */}
      <section className="py-16 md:py-20 bg-[#FFF7EA]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-end justify-between mb-10">
            <div>
              <p className="text-xs font-semibold text-[#D9906A] uppercase tracking-widest mb-2">
                Explore
              </p>
              <h2
                className="text-2xl md:text-3xl font-extrabold text-[#243C4A]"
                style={{ fontFamily: "var(--font-sora), sans-serif" }}
              >
                Explore por tema
              </h2>
              <p className="text-[#5F6F5A] mt-2 text-sm">
                Conteúdo organizado para você encontrar o que precisa com facilidade.
              </p>
            </div>
            <Link
              href="/blog"
              className="hidden sm:flex items-center gap-1.5 text-sm font-medium text-[#2F7D5A] hover:text-[#243C4A] transition-colors"
            >
              Ver todos os conteúdos
              <ArrowRight size={14} />
            </Link>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {editorialCategories.map((cat) => (
              <CategoryCard key={cat.slug} category={cat} />
            ))}
          </div>
        </div>
      </section>

      {/* Conteúdos em destaque */}
      <section className="py-16 md:py-20 bg-[#F6EFE6]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-end justify-between mb-10">
            <div>
              <p className="text-xs font-semibold text-[#D9906A] uppercase tracking-widest mb-2">
                Conteúdos
              </p>
              <h2
                className="text-2xl md:text-3xl font-extrabold text-[#243C4A]"
                style={{ fontFamily: "var(--font-sora), sans-serif" }}
              >
                Conteúdos em destaque
              </h2>
              <p className="text-[#5F6F5A] mt-2 text-sm">
                Artigos úteis, práticos e escritos por profissionais.
              </p>
            </div>
            <Link
              href="/blog"
              className="hidden sm:flex items-center gap-1.5 text-sm font-medium text-[#2F7D5A] hover:text-[#243C4A] transition-colors"
            >
              Ver todos
              <ArrowRight size={14} />
            </Link>
          </div>

          <div className="space-y-4 mb-8">
            {featuredPosts.slice(0, 2).map((post) => (
              <BlogCard key={post.slug} post={post} featured />
            ))}
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {recentPosts.slice(0, 3).map((post) => (
              <BlogCard key={post.slug} post={post} />
            ))}
          </div>

          <div className="text-center mt-8">
            <Link
              href="/blog"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-xl border-2 border-[#2F7D5A] text-[#2F7D5A] text-sm font-semibold hover:bg-[#2F7D5A] hover:text-white transition-colors"
              style={{ fontFamily: "var(--font-sora), sans-serif" }}
            >
              Ver todos os artigos
              <ArrowRight size={14} />
            </Link>
          </div>
        </div>
      </section>

      {/* Guia Local */}
      <section className="py-16 md:py-20 bg-[#FFF7EA]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-10">
            <p className="text-xs font-semibold text-[#D9906A] uppercase tracking-widest mb-2">
              Guia Local Pet
            </p>
            <h2
              className="text-2xl md:text-3xl font-extrabold text-[#243C4A]"
              style={{ fontFamily: "var(--font-sora), sans-serif" }}
            >
              O guia pet da sua região
            </h2>
            <p className="text-[#5F6F5A] mt-2 text-sm max-w-lg">
              Parques, serviços, condomínios e locais pet friendly na Granja Viana, Cotia e
              arredores.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {localGuides.map((guide) => (
              <Link
                key={guide.slug}
                href={guide.href}
                className="group flex items-start gap-4 p-5 rounded-2xl bg-white border border-[#F6EFE6] hover:border-[#D9906A]/30 hover:shadow-[0_4px_16px_rgba(36,60,74,0.10)] transition-all duration-200"
              >
                <div className="w-10 h-10 rounded-xl bg-[#FFF7EA] flex items-center justify-center text-[#D9906A] flex-shrink-0 group-hover:bg-[#D9906A]/10 transition-colors">
                  <MapPin size={18} />
                </div>
                <div>
                  <h3
                    className="font-bold text-[#243C4A] text-sm group-hover:text-[#D9906A] transition-colors"
                    style={{ fontFamily: "var(--font-sora), sans-serif" }}
                  >
                    {guide.name}
                  </h3>
                  <p className="text-xs text-[#5F6F5A] mt-0.5 leading-relaxed">
                    {guide.description}
                  </p>
                </div>
              </Link>
            ))}
          </div>

          <div className="mt-8 text-center">
            <Link
              href="/guia-local"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-[#243C4A] text-[#FFF7EA] text-sm font-semibold hover:bg-[#344f61] transition-colors"
              style={{ fontFamily: "var(--font-sora), sans-serif" }}
            >
              Explorar o guia local completo
              <ArrowRight size={14} />
            </Link>
          </div>
        </div>
      </section>

      {/* Serviços */}
      <section className="py-16 md:py-20 bg-[#F6EFE6]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-10">
            <p className="text-xs font-semibold text-[#D9906A] uppercase tracking-widest mb-2">
              Serviços
            </p>
            <h2
              className="text-2xl md:text-3xl font-extrabold text-[#243C4A]"
              style={{ fontFamily: "var(--font-sora), sans-serif" }}
            >
              Serviços Vem Aqui Pet
            </h2>
            <p className="text-[#5F6F5A] mt-2 text-sm max-w-lg">
              Atendimentos especializados no conforto do seu lar, para facilitar a rotina de
              tutores.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {services.map((service) => (
              <ServiceCard key={service.slug} service={service} />
            ))}
          </div>
        </div>
      </section>

      {/* Agendar */}
      <section className="py-16 md:py-20 bg-[#2F7D5A]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <Calendar size={32} className="text-white/60 mx-auto mb-4" />
          <h2
            className="text-2xl md:text-3xl font-extrabold text-white mb-4"
            style={{ fontFamily: "var(--font-sora), sans-serif" }}
          >
            Agende um serviço
          </h2>
          <p className="text-white/70 text-base mb-8 max-w-xl mx-auto">
            Escolha o serviço, veja os horários disponíveis e agende de forma simples e rápida.
          </p>
          <Link
            href="/agendar"
            className="inline-flex items-center gap-2 px-8 py-4 rounded-xl bg-white text-[#2F7D5A] text-sm font-bold hover:bg-[#F6EFE6] transition-colors shadow-lg"
            style={{ fontFamily: "var(--font-sora), sans-serif" }}
          >
            Ver horários disponíveis
            <ArrowRight size={15} />
          </Link>
          <p className="text-white/40 text-xs mt-4">
            Triagem obrigatória para Vet em Casa. Atendimento domiciliar não cobre urgências ou
            emergências.
          </p>
        </div>
      </section>

      {/* Vida Ativa Pet */}
      <section className="py-16 md:py-20 bg-[#FFF7EA]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-10 items-center">
            <div>
              <p className="text-xs font-semibold text-[#D9906A] uppercase tracking-widest mb-2">
                Vida Ativa Pet
              </p>
              <h2
                className="text-2xl md:text-3xl font-extrabold text-[#243C4A] mb-4"
                style={{ fontFamily: "var(--font-sora), sans-serif" }}
              >
                Pets ativos são pets saudáveis.
              </h2>
              <p className="text-[#5F6F5A] leading-relaxed mb-6">
                Atividade física regular melhora o comportamento, a saúde e a qualidade de vida
                dos pets. O Vem Aqui Pet tem conteúdos, rotas e dicas para você e seu animal
                explorarem a região juntos.
              </p>
              <div className="grid grid-cols-2 gap-3 mb-6">
                {[
                  { icon: "🚶", label: "Caminhada com cães" },
                  { icon: "🏃", label: "Canicross" },
                  { icon: "🌲", label: "Trilhas com pets" },
                  { icon: "🌳", label: "Parques pet friendly" },
                ].map((item) => (
                  <div
                    key={item.label}
                    className="flex items-center gap-2.5 p-3 rounded-xl bg-white border border-[#F6EFE6]"
                  >
                    <span className="text-xl">{item.icon}</span>
                    <span className="text-sm font-medium text-[#243C4A]">{item.label}</span>
                  </div>
                ))}
              </div>
              <Link
                href="/vida-ativa-pet"
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-[#243C4A] text-[#FFF7EA] text-sm font-semibold hover:bg-[#344f61] transition-colors"
                style={{ fontFamily: "var(--font-sora), sans-serif" }}
              >
                Explorar vida ativa pet
                <ArrowRight size={14} />
              </Link>
            </div>

            <div className="rounded-2xl overflow-hidden bg-[#DFF3E8] aspect-video flex items-center justify-center">
              <div className="text-center">
                <p className="text-6xl mb-2">🐕</p>
                <p className="text-sm text-[#2F7D5A] font-medium">
                  Tutor caminhando com seu cão na Granja Viana
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Materiais gratuitos */}
      <section className="py-16 md:py-20 bg-[#F6EFE6]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-10">
            <p className="text-xs font-semibold text-[#D9906A] uppercase tracking-widest mb-2">
              Conteúdos Ricos
            </p>
            <h2
              className="text-2xl md:text-3xl font-extrabold text-[#243C4A]"
              style={{ fontFamily: "var(--font-sora), sans-serif" }}
            >
              Materiais gratuitos para tutores
            </h2>
            <p className="text-[#5F6F5A] mt-2 text-sm">
              Guias, checklists, calendários e mapas para organizar a vida com seu pet.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {contentMaterials.map((material) => (
              <Link
                key={material.slug}
                href={material.href}
                className="group flex items-start gap-4 p-5 rounded-2xl bg-white border border-[#F6EFE6] hover:border-[#2F7D5A]/20 hover:shadow-[0_4px_16px_rgba(36,60,74,0.10)] transition-all duration-200"
              >
                <div className="w-10 h-10 rounded-xl bg-[#DFF3E8] flex items-center justify-center text-[#2F7D5A] flex-shrink-0 group-hover:bg-[#2F7D5A]/20 transition-colors">
                  <Download size={16} />
                </div>
                <div>
                  <p className="text-[10px] font-semibold text-[#D9906A] uppercase tracking-wide mb-1">
                    {material.type}
                  </p>
                  <h3
                    className="font-bold text-[#243C4A] text-sm group-hover:text-[#2F7D5A] transition-colors"
                    style={{ fontFamily: "var(--font-sora), sans-serif" }}
                  >
                    {material.title}
                  </h3>
                  <p className="text-xs text-[#5F6F5A] mt-0.5 leading-relaxed">
                    {material.description}
                  </p>
                </div>
              </Link>
            ))}
          </div>

          <div className="mt-8 text-center">
            <Link
              href="/conteudos/materiais-gratuitos"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-xl border-2 border-[#2F7D5A] text-[#2F7D5A] text-sm font-semibold hover:bg-[#2F7D5A] hover:text-white transition-colors"
              style={{ fontFamily: "var(--font-sora), sans-serif" }}
            >
              Ver todos os materiais
              <ArrowRight size={14} />
            </Link>
          </div>
        </div>
      </section>

      {/* Comunidade */}
      <section className="py-16 md:py-20 bg-[#243C4A]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-10 items-center">
            <div>
              <p className="text-xs font-semibold text-[#D9906A] uppercase tracking-widest mb-2">
                Comunidade
              </p>
              <h2
                className="text-2xl md:text-3xl font-extrabold text-[#FFF7EA] mb-4"
                style={{ fontFamily: "var(--font-sora), sans-serif" }}
              >
                Uma comunidade para tutores da região.
              </h2>
              <p className="text-[#FFF7EA]/60 leading-relaxed mb-6">
                Histórias, encontros, dicas locais e experiências reais de tutores da Granja
                Viana, Cotia e arredores.
              </p>
              <Link
                href="/comunidade"
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-[#D9906A] text-white text-sm font-semibold hover:bg-[#c47a56] transition-colors"
                style={{ fontFamily: "var(--font-sora), sans-serif" }}
              >
                <Users size={15} />
                Participar da comunidade
              </Link>
            </div>
            <div className="grid grid-cols-2 gap-3">
              {[
                { emoji: "🗓️", title: "Eventos", desc: "Encontros e atividades na região" },
                { emoji: "📍", title: "Encontros", desc: "Tutores e pets se conectando" },
                { emoji: "💬", title: "Histórias", desc: "Experiências reais de tutores" },
                { emoji: "🗺️", title: "Locais", desc: "Dicas de lugares pet friendly" },
              ].map((item) => (
                <div
                  key={item.title}
                  className="p-4 rounded-xl bg-[#FFF7EA]/5 border border-[#FFF7EA]/10"
                >
                  <span className="text-2xl">{item.emoji}</span>
                  <p
                    className="font-bold text-[#FFF7EA] text-sm mt-2"
                    style={{ fontFamily: "var(--font-sora), sans-serif" }}
                  >
                    {item.title}
                  </p>
                  <p className="text-xs text-[#FFF7EA]/50 mt-0.5">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Trabalhe conosco */}
      <section className="py-16 md:py-20 bg-[#FFF7EA]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="w-12 h-12 rounded-2xl bg-[#DFF3E8] flex items-center justify-center text-[#2F7D5A] mx-auto mb-4">
            <Briefcase size={22} />
          </div>
          <h2
            className="text-2xl md:text-3xl font-extrabold text-[#243C4A] mb-3"
            style={{ fontFamily: "var(--font-sora), sans-serif" }}
          >
            Você é profissional da área pet?
          </h2>
          <p className="text-[#5F6F5A] mb-8 max-w-lg mx-auto">
            Veterinários, profissionais de banho e tosa, adestradores, pet sitters e
            passeadores podem se cadastrar para fazer parte da rede Vem Aqui Pet.
          </p>
          <Link
            href="/trabalhe-conosco"
            className="inline-flex items-center gap-2 px-7 py-3.5 rounded-xl bg-[#2F7D5A] text-white text-sm font-semibold hover:bg-[#266a4b] transition-colors"
            style={{ fontFamily: "var(--font-sora), sans-serif" }}
          >
            Quero fazer parte
            <ArrowRight size={14} />
          </Link>
        </div>
      </section>

      {/* Newsletter */}
      <section className="py-12 md:py-16 bg-[#F6EFE6]">
        <div className="max-w-2xl mx-auto px-4 sm:px-6">
          <NewsletterForm />
        </div>
      </section>

      {/* FAQ */}
      <section className="py-16 md:py-20 bg-[#FFF7EA]">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <p className="text-xs font-semibold text-[#D9906A] uppercase tracking-widest mb-2">
              Dúvidas
            </p>
            <h2
              className="text-2xl md:text-3xl font-extrabold text-[#243C4A]"
              style={{ fontFamily: "var(--font-sora), sans-serif" }}
            >
              Perguntas frequentes
            </h2>
          </div>
          <FAQAccordion faqs={homeFAQs} />
          <div className="text-center mt-8">
            <Link
              href="/perguntas-frequentes"
              className="text-sm font-medium text-[#2F7D5A] hover:text-[#243C4A] transition-colors"
            >
              Ver todas as perguntas frequentes
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
