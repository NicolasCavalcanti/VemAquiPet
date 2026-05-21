import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, HeartPulse, Syringe, Microscope, ShieldCheck, Clock3, Baby, Cat, Dog } from "lucide-react";
import Breadcrumb from "@/components/Breadcrumb";
import FAQAccordion from "@/components/FAQAccordion";
import BlogCard from "@/components/BlogCard";
import CTABlock from "@/components/CTABlock";
import NewsletterForm from "@/components/NewsletterForm";
import { blogPosts } from "@/lib/data";
import type { FAQ } from "@/lib/types";

export const metadata: Metadata = {
  title: "Saúde Pet: guias, sintomas, vacinas e prevenção",
  description:
    "Conteúdos confiáveis sobre saúde animal: vacinas, sintomas, exames, prevenção, filhotes, pets idosos, gatos e cachorros. Tudo para cuidar bem do seu pet.",
};

const faqs: FAQ[] = [
  {
    question: "Com que frequência devo levar meu pet ao veterinário?",
    answer:
      "Pets adultos saudáveis devem fazer consultas de rotina pelo menos uma vez por ano. Filhotes e pets idosos precisam de acompanhamento mais frequente: a cada três a seis meses. Qualquer alteração de comportamento, apetite ou aparência justifica uma consulta antes do prazo previsto.",
  },
  {
    question: "Quais vacinas são obrigatórias para cães e gatos?",
    answer:
      "Para cães, as vacinas essenciais incluem a V8 ou V10 (que protege contra cinomose, parvovirose, hepatite, leptospirose, entre outras) e a antirrábica. Para gatos, o protocolo básico inclui a tríplice felina e a antirrábica. O calendário exato varia por faixa etária e estilo de vida do animal.",
  },
  {
    question: "Como identificar se meu pet está com dor?",
    answer:
      "Cães e gatos costumam esconder a dor, mas alguns sinais indicam desconforto: vocalização incomum, relutância em se movimentar, lamber ou morder uma região específica, perda de apetite, alteração no padrão de sono e mudança de comportamento. Diante de qualquer suspeita, consulte um veterinário.",
  },
  {
    question: "O que é medicina preventiva para pets?",
    answer:
      "Medicina preventiva é o conjunto de cuidados que visam evitar doenças antes que elas se instalem. Isso inclui vacinação em dia, vermifugação regular, controle de pulgas e carrapatos, exames de rotina, higiene dental, alimentação adequada e acompanhamento do peso. Prevenir é mais eficiente e menos custoso do que tratar.",
  },
];

const subcategories = [
  {
    label: "Sintomas",
    description: "Identifique sinais de alerta no seu pet",
    icon: <HeartPulse size={20} />,
    href: "/saude-pet/sintomas",
    color: "text-[#D9906A]",
    bg: "bg-[#D9906A]/10",
  },
  {
    label: "Vacinas",
    description: "Calendário e protocolos de vacinação",
    icon: <Syringe size={20} />,
    href: "/saude-pet/vacinas",
    color: "text-[#2F7D5A]",
    bg: "bg-[#DFF3E8]",
  },
  {
    label: "Exames",
    description: "Quais exames fazer e com qual frequência",
    icon: <Microscope size={20} />,
    href: "/saude-pet/exames",
    color: "text-[#243C4A]",
    bg: "bg-[#F6EFE6]",
  },
  {
    label: "Prevenção",
    description: "Cuidados para evitar doenças",
    icon: <ShieldCheck size={20} />,
    href: "/saude-pet/prevencao",
    color: "text-[#2F7D5A]",
    bg: "bg-[#DFF3E8]",
  },
  {
    label: "Pet Idoso",
    description: "Cuidados especiais para a terceira idade",
    icon: <Clock3 size={20} />,
    href: "/saude-pet/pet-idoso",
    color: "text-[#4B3930]",
    bg: "bg-[#FFF7EA]",
  },
  {
    label: "Filhotes",
    description: "Primeiros meses e desenvolvimento saudável",
    icon: <Baby size={20} />,
    href: "/saude-pet/filhotes",
    color: "text-[#D9906A]",
    bg: "bg-[#D9906A]/10",
  },
  {
    label: "Gatos",
    description: "Saúde específica para felinos",
    icon: <Cat size={20} />,
    href: "/saude-pet/gatos",
    color: "text-[#5F6F5A]",
    bg: "bg-[#F6EFE6]",
  },
  {
    label: "Cachorros",
    description: "Saúde específica para cães",
    icon: <Dog size={20} />,
    href: "/saude-pet/cachorros",
    color: "text-[#243C4A]",
    bg: "bg-[#DFF3E8]",
  },
];

export default function SaudePetPage() {
  const posts = blogPosts.filter((p) => p.categorySlug === "saude-pet").slice(0, 6);

  return (
    <>
      {/* Hero */}
      <section className="bg-[#243C4A] py-14 md:py-18">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-6">
            <Breadcrumb items={[{ label: "Saúde Pet" }]} />
          </div>
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-[#D9906A]/20 border border-[#D9906A]/30 mb-5">
              <HeartPulse size={12} className="text-[#D9906A]" />
              <span className="text-xs font-medium text-[#D9906A]">Saúde e prevenção</span>
            </div>
            <h1
              className="text-4xl sm:text-5xl font-extrabold text-[#FFF7EA] leading-tight mb-5"
              style={{ fontFamily: "var(--font-sora), sans-serif", letterSpacing: "-0.02em" }}
            >
              Saúde Pet
            </h1>
            <p className="text-lg text-[#FFF7EA]/70 leading-relaxed">
              Guias práticos sobre vacinas, sintomas, exames e prevenção. Conteúdo confiável para
              ajudar tutores a identificar problemas cedo, tomar decisões seguras e manter a saúde
              do seu pet em dia.
            </p>
          </div>
        </div>
      </section>

      {/* Subcategorias */}
      <section className="py-14 md:py-18 bg-[#FFF7EA]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-8">
            <p className="text-xs font-semibold text-[#D9906A] uppercase tracking-widest mb-2">
              Navegar por tema
            </p>
            <h2
              className="text-2xl md:text-3xl font-extrabold text-[#243C4A]"
              style={{ fontFamily: "var(--font-sora), sans-serif" }}
            >
              Explore por assunto
            </h2>
            <p className="text-[#5F6F5A] mt-2 text-sm">
              Escolha um tema e acesse os conteúdos mais relevantes para o seu pet.
            </p>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
            {subcategories.map((sub) => (
              <Link
                key={sub.label}
                href={sub.href}
                className="group flex flex-col p-5 rounded-2xl bg-white border border-[#F6EFE6] hover:border-[#2F7D5A]/20 shadow-[0_2px_8px_rgba(36,60,74,0.06)] hover:shadow-[0_4px_16px_rgba(36,60,74,0.12)] transition-all duration-300 hover:-translate-y-0.5"
              >
                <div
                  className={`w-10 h-10 rounded-xl ${sub.bg} flex items-center justify-center ${sub.color} mb-3 transition-colors`}
                >
                  {sub.icon}
                </div>
                <h3
                  className="font-bold text-[#243C4A] group-hover:text-[#2F7D5A] transition-colors text-sm mb-1"
                  style={{ fontFamily: "var(--font-sora), sans-serif" }}
                >
                  {sub.label}
                </h3>
                <p className="text-xs text-[#5F6F5A] leading-relaxed">{sub.description}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Posts */}
      <section className="py-14 md:py-18 bg-[#F6EFE6]">
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
                Artigos sobre Saúde Pet
              </h2>
              <p className="text-[#5F6F5A] mt-2 text-sm">
                Leituras práticas para tutores que querem cuidar melhor do seu animal.
              </p>
            </div>
            <Link
              href="/blog?categoria=saude-pet"
              className="hidden sm:flex items-center gap-1.5 text-sm font-medium text-[#2F7D5A] hover:text-[#243C4A] transition-colors"
            >
              Ver todos
              <ArrowRight size={14} />
            </Link>
          </div>

          {posts.length > 0 ? (
            <>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
                {posts.map((post) => (
                  <BlogCard key={post.slug} post={post} />
                ))}
              </div>
              <div className="text-center mt-8">
                <Link
                  href="/blog?categoria=saude-pet"
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-xl border-2 border-[#2F7D5A] text-[#2F7D5A] text-sm font-semibold hover:bg-[#2F7D5A] hover:text-white transition-colors"
                  style={{ fontFamily: "var(--font-sora), sans-serif" }}
                >
                  Ver todos os artigos de Saúde Pet
                  <ArrowRight size={14} />
                </Link>
              </div>
            </>
          ) : (
            <p className="text-[#5F6F5A] text-sm">
              Novos conteúdos de Saúde Pet em breve.
            </p>
          )}
        </div>
      </section>

      {/* FAQ */}
      <section className="py-14 md:py-18 bg-[#FFF7EA]">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <p className="text-xs font-semibold text-[#D9906A] uppercase tracking-widest mb-2">
              Dúvidas frequentes
            </p>
            <h2
              className="text-2xl md:text-3xl font-extrabold text-[#243C4A]"
              style={{ fontFamily: "var(--font-sora), sans-serif" }}
            >
              Perguntas sobre saúde pet
            </h2>
            <p className="text-[#5F6F5A] mt-2 text-sm">
              Respostas diretas para as dúvidas mais comuns dos tutores.
            </p>
          </div>
          <FAQAccordion faqs={faqs} />
        </div>
      </section>

      {/* CTA */}
      <section className="py-14 md:py-18 bg-[#F6EFE6]">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <CTABlock
            title="Precisa de orientação profissional?"
            description="Veja os serviços disponíveis na Granja Viana, Cotia e região. Consulta veterinária domiciliar, sem precisar sair de casa."
            variant="ink"
            primaryCta={{ label: "Ver serviços disponíveis", href: "/servicos" }}
            secondaryCta={{ label: "Agendar Vet em Casa", href: "/agendar/vet-em-casa" }}
          />
        </div>
      </section>

      {/* Newsletter */}
      <section className="py-12 md:py-16 bg-[#FFF7EA]">
        <div className="max-w-2xl mx-auto px-4 sm:px-6">
          <NewsletterForm
            title="Receba conteúdos sobre saúde pet"
            description="Guias, artigos e dicas práticas enviadas diretamente para o seu e-mail."
          />
        </div>
      </section>
    </>
  );
}
