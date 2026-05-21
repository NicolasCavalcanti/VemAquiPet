import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, Brain, GraduationCap, Wind, Users, Puzzle, AlertTriangle } from "lucide-react";
import Breadcrumb from "@/components/Breadcrumb";
import FAQAccordion from "@/components/FAQAccordion";
import BlogCard from "@/components/BlogCard";
import CTABlock from "@/components/CTABlock";
import NewsletterForm from "@/components/NewsletterForm";
import { blogPosts } from "@/lib/data";
import type { FAQ } from "@/lib/types";

export const metadata: Metadata = {
  title: "Comportamento Pet: adestramento, ansiedade e socialização",
  description:
    "Guias sobre comportamento animal: adestramento positivo, ansiedade, socialização, enriquecimento ambiental e como lidar com problemas comuns do dia a dia.",
};

const faqs: FAQ[] = [
  {
    question: "Adestramento com reforço positivo realmente funciona?",
    answer:
      "Sim. O adestramento baseado em reforço positivo é o método mais recomendado pela medicina veterinária comportamental. Ele recompensa comportamentos desejados em vez de punir os indesejados, fortalecendo o vínculo entre tutor e pet e produzindo resultados mais duradouros. Punição física ou psicológica pode aumentar a ansiedade e agravar problemas comportamentais.",
  },
  {
    question: "Como identificar se meu pet tem ansiedade?",
    answer:
      "Sinais comuns de ansiedade em cães incluem destruição de objetos, vocalização excessiva, eliminação inadequada, tremores, salivação exagerada e comportamentos repetitivos. Em gatos, observe esconder-se excessivamente, perda de apetite, agressividade repentina ou mudanças nos hábitos de higiene. Um médico veterinário ou etologista pode confirmar o diagnóstico e indicar o tratamento adequado.",
  },
  {
    question: "A partir de que idade devo socializar meu filhote?",
    answer:
      "O período crítico de socialização em cães vai aproximadamente das 3 às 14 semanas de idade. Nessa fase, expor o filhote a diferentes pessoas, ambientes, sons e animais de forma positiva e controlada é fundamental para o desenvolvimento de um adulto equilibrado. Mesmo após esse período, a socialização gradual continua sendo importante ao longo da vida do pet.",
  },
  {
    question: "O que é enriquecimento ambiental e por que ele importa?",
    answer:
      "Enriquecimento ambiental é o conjunto de estratégias que estimulam os instintos naturais do animal dentro de casa: farejar, caçar, explorar e resolver desafios. Para cães e gatos, ele reduz comportamentos indesejados causados por tédio e estresse, como destruição, vocalização e agressividade. Brinquedos de inteligência, esconderijos, comedouros interativos e tempo de atividade livre são exemplos simples e eficazes.",
  },
];

const subcategories = [
  {
    label: "Adestramento",
    description: "Técnicas de treino baseadas em reforço positivo",
    icon: <GraduationCap size={20} />,
    href: "/comportamento/adestramento",
    color: "text-[#2F7D5A]",
    bg: "bg-[#DFF3E8]",
  },
  {
    label: "Ansiedade",
    description: "Reconheça os sinais e ajude seu pet a se acalmar",
    icon: <Wind size={20} />,
    href: "/comportamento/ansiedade",
    color: "text-[#D9906A]",
    bg: "bg-[#D9906A]/10",
  },
  {
    label: "Socialização",
    description: "Como apresentar seu pet ao mundo com segurança",
    icon: <Users size={20} />,
    href: "/comportamento/socializacao",
    color: "text-[#243C4A]",
    bg: "bg-[#F6EFE6]",
  },
  {
    label: "Enriquecimento Ambiental",
    description: "Estimule o instinto natural do seu pet em casa",
    icon: <Puzzle size={20} />,
    href: "/comportamento/enriquecimento-ambiental",
    color: "text-[#5F6F5A]",
    bg: "bg-[#FFF7EA]",
  },
  {
    label: "Problemas Comuns",
    description: "Latido, destruição, marcação e outros desafios",
    icon: <AlertTriangle size={20} />,
    href: "/comportamento/problemas-comuns",
    color: "text-[#4B3930]",
    bg: "bg-[#D9906A]/10",
  },
];

export default function ComportamentoPage() {
  const posts = blogPosts.filter((p) => p.categorySlug === "comportamento").slice(0, 6);

  return (
    <>
      {/* Hero */}
      <section className="bg-[#243C4A] py-14 md:py-18">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-6">
            <Breadcrumb items={[{ label: "Comportamento" }]} />
          </div>
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-[#D9906A]/20 border border-[#D9906A]/30 mb-5">
              <Brain size={12} className="text-[#D9906A]" />
              <span className="text-xs font-medium text-[#D9906A]">Adestramento e comportamento</span>
            </div>
            <h1
              className="text-4xl sm:text-5xl font-extrabold text-[#FFF7EA] leading-tight mb-5"
              style={{ fontFamily: "var(--font-sora), sans-serif", letterSpacing: "-0.02em" }}
            >
              Comportamento
            </h1>
            <p className="text-lg text-[#FFF7EA]/70 leading-relaxed">
              Entenda como seu pet pensa, sente e se comunica. Conteúdos práticos sobre
              adestramento positivo, ansiedade, socialização e enriquecimento ambiental para
              fortalecer o vínculo entre você e seu animal.
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
              Conteúdo organizado para você encontrar respostas com facilidade.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {subcategories.map((sub) => (
              <Link
                key={sub.label}
                href={sub.href}
                className="group flex flex-col p-6 rounded-2xl bg-white border border-[#F6EFE6] hover:border-[#2F7D5A]/20 shadow-[0_2px_8px_rgba(36,60,74,0.06)] hover:shadow-[0_4px_16px_rgba(36,60,74,0.12)] transition-all duration-300 hover:-translate-y-0.5"
              >
                <div
                  className={`w-10 h-10 rounded-xl ${sub.bg} flex items-center justify-center ${sub.color} mb-4 transition-colors`}
                >
                  {sub.icon}
                </div>
                <h3
                  className="font-bold text-[#243C4A] group-hover:text-[#2F7D5A] transition-colors mb-2 text-base"
                  style={{ fontFamily: "var(--font-sora), sans-serif" }}
                >
                  {sub.label}
                </h3>
                <p className="text-sm text-[#5F6F5A] leading-relaxed">{sub.description}</p>
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
                Artigos sobre Comportamento
              </h2>
              <p className="text-[#5F6F5A] mt-2 text-sm">
                Leituras para tutores que querem entender melhor o seu pet.
              </p>
            </div>
            <Link
              href="/blog?categoria=comportamento"
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
                  href="/blog?categoria=comportamento"
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-xl border-2 border-[#2F7D5A] text-[#2F7D5A] text-sm font-semibold hover:bg-[#2F7D5A] hover:text-white transition-colors"
                  style={{ fontFamily: "var(--font-sora), sans-serif" }}
                >
                  Ver todos os artigos de Comportamento
                  <ArrowRight size={14} />
                </Link>
              </div>
            </>
          ) : (
            <p className="text-[#5F6F5A] text-sm">
              Novos conteúdos de Comportamento em breve.
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
              Perguntas sobre comportamento pet
            </h2>
            <p className="text-[#5F6F5A] mt-2 text-sm">
              Respostas diretas para as dúvidas mais comuns sobre o comportamento do seu animal.
            </p>
          </div>
          <FAQAccordion faqs={faqs} />
        </div>
      </section>

      {/* CTA */}
      <section className="py-14 md:py-18 bg-[#F6EFE6]">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <CTABlock
            title="Quer um profissional de adestramento?"
            description="Conheça os serviços de adestramento disponíveis na Granja Viana, Cotia e região. Treinamento presencial ou domiciliar com profissionais certificados."
            variant="green"
            primaryCta={{ label: "Ver serviços de adestramento", href: "/servicos/adestramento" }}
            secondaryCta={{ label: "Ver todos os serviços", href: "/servicos" }}
          />
        </div>
      </section>

      {/* Newsletter */}
      <section className="py-12 md:py-16 bg-[#FFF7EA]">
        <div className="max-w-2xl mx-auto px-4 sm:px-6">
          <NewsletterForm
            title="Receba conteúdos sobre comportamento pet"
            description="Artigos sobre adestramento, ansiedade e bem-estar animal direto no seu e-mail."
          />
        </div>
      </section>
    </>
  );
}
