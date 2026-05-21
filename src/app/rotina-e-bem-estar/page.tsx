import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, Sun, Utensils, Bath, Home, Plane, ShieldCheck } from "lucide-react";
import Breadcrumb from "@/components/Breadcrumb";
import FAQAccordion from "@/components/FAQAccordion";
import BlogCard from "@/components/BlogCard";
import CTABlock from "@/components/CTABlock";
import NewsletterForm from "@/components/NewsletterForm";
import { blogPosts } from "@/lib/data";
import type { FAQ } from "@/lib/types";

export const metadata: Metadata = {
  title: "Rotina e Bem-estar Pet: alimentação, higiene e cuidados",
  description:
    "Guias sobre alimentação, higiene, banho, cuidados em casa, viagem com pets e segurança doméstica para tutores.",
};

const subcategories = [
  {
    slug: "alimentacao",
    name: "Alimentação",
    description: "Dietas, porções, alimentos seguros e restritos.",
    icon: <Utensils size={20} />,
  },
  {
    slug: "higiene",
    name: "Higiene",
    description: "Cuidados com dentes, unhas, ouvidos e pelagem.",
    icon: <Bath size={20} />,
  },
  {
    slug: "banho-e-tosa",
    name: "Banho e Tosa",
    description: "Frequência, técnicas e cuidados com banho em casa ou fora.",
    icon: <Sun size={20} />,
  },
  {
    slug: "cuidados-em-casa",
    name: "Cuidados em Casa",
    description: "Rotina diária, descanso, estimulação e ambiente saudável.",
    icon: <Home size={20} />,
  },
  {
    slug: "viagem-com-pets",
    name: "Viagem com Pets",
    description: "Como viajar com segurança, documentos e dicas práticas.",
    icon: <Plane size={20} />,
  },
  {
    slug: "seguranca-domestica",
    name: "Segurança Doméstica",
    description: "Plantas tóxicas, produtos perigosos e como proteger o pet em casa.",
    icon: <ShieldCheck size={20} />,
  },
];

const faqs: FAQ[] = [
  {
    question: "Com que frequência devo dar banho no meu cachorro?",
    answer:
      "A frequência ideal varia conforme a raça, o porte e o estilo de vida do animal. Em geral, cães de pelagem curta podem ser banhados a cada 3 a 4 semanas. Raças de pelagem longa ou que frequentam ambientes externos podem precisar de banhos mais frequentes. Banhos excessivos removem os óleos naturais da pele e podem causar ressecamento.",
  },
  {
    question: "Quais alimentos são tóxicos para cães e gatos?",
    answer:
      "Vários alimentos comuns na dieta humana são perigosos para pets. Entre os mais conhecidos estão uva, passa, cebola, alho, chocolate, cafeína, abacate, nozes macadâmia, xilitol (adoçante artificial) e álcool. Qualquer dúvida sobre a segurança de um alimento deve ser consultada com um veterinário.",
  },
  {
    question: "Como posso preparar minha casa para deixá-la mais segura para o pet?",
    answer:
      "O principal é identificar e remover plantas tóxicas do alcance do animal, guardar produtos de limpeza e medicamentos em armários fechados, cobrir tomadas elétricas acessíveis, evitar objetos pequenos que possam ser ingeridos e garantir que janelas e sacadas sejam protegidas com telas de segurança.",
  },
  {
    question: "Preciso de documentos para viajar com meu pet?",
    answer:
      "Depende do destino. Para viagens domésticas de avião, a maioria das companhias exige atestado de saúde emitido por veterinário com CRMV, além de comprovante de vacinação antirrábica. Para viagens internacionais, os requisitos variam por país e devem ser verificados com antecedência junto à embaixada do destino.",
  },
];

export default function RotinaPage() {
  const posts = blogPosts
    .filter((p) => p.categorySlug === "rotina-e-bem-estar")
    .slice(0, 6);
  const fallbackPosts = posts.length < 3 ? blogPosts.slice(0, 6) : posts;

  return (
    <>
      {/* Hero */}
      <section className="bg-[#243C4A] py-14 md:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Breadcrumb items={[{ label: "Rotina e Bem-estar", href: "/rotina-e-bem-estar" }]} />
          <div className="mt-6 max-w-2xl">
            <h1
              className="text-3xl md:text-5xl font-extrabold text-[#FFF7EA] leading-tight mb-4"
              style={{ fontFamily: "var(--font-sora), sans-serif" }}
            >
              Rotina e Bem-estar
            </h1>
            <p className="text-[#FFF7EA]/70 text-base md:text-lg leading-relaxed">
              Alimentação equilibrada, higiene regular e um ambiente seguro são a base para uma
              vida saudável e feliz. Encontre aqui guias práticos sobre a rotina do seu pet.
            </p>
          </div>
        </div>
      </section>

      {/* Subcategorias */}
      <section className="py-16 bg-[#FFF7EA]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2
            className="text-xl font-bold text-[#243C4A] mb-8"
            style={{ fontFamily: "var(--font-sora), sans-serif" }}
          >
            Explore por tema
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {subcategories.map((sub) => (
              <Link
                key={sub.slug}
                href={`/rotina-e-bem-estar/${sub.slug}`}
                className="group flex items-start gap-4 p-5 rounded-2xl bg-white border border-[#F6EFE6] hover:border-[#D9906A]/30 hover:shadow-[0_4px_16px_rgba(36,60,74,0.10)] transition-all duration-200"
              >
                <div className="w-10 h-10 rounded-xl bg-[#FFF7EA] flex items-center justify-center text-[#D9906A] flex-shrink-0 group-hover:bg-[#D9906A]/10 transition-colors">
                  {sub.icon}
                </div>
                <div>
                  <h3
                    className="font-bold text-[#243C4A] text-sm group-hover:text-[#D9906A] transition-colors"
                    style={{ fontFamily: "var(--font-sora), sans-serif" }}
                  >
                    {sub.name}
                  </h3>
                  <p className="text-xs text-[#5F6F5A] mt-1 leading-relaxed">{sub.description}</p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Artigos */}
      <section className="py-16 bg-[#F6EFE6]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-end justify-between mb-8">
            <h2
              className="text-xl font-bold text-[#243C4A]"
              style={{ fontFamily: "var(--font-sora), sans-serif" }}
            >
              Artigos em destaque
            </h2>
            <Link
              href="/blog"
              className="flex items-center gap-1.5 text-sm font-medium text-[#2F7D5A] hover:text-[#243C4A] transition-colors"
            >
              Ver todos <ArrowRight size={14} />
            </Link>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {fallbackPosts.map((post) => (
              <BlogCard key={post.slug} post={post} />
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-12 bg-[#FFF7EA]">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <CTABlock
            title="Veja os serviços que ajudam na rotina do seu pet."
            description="Do banho em casa ao cuidador, encontre soluções para facilitar o dia a dia com seu animal."
            primaryCta={{ label: "Ver serviços disponíveis", href: "/servicos" }}
            variant="ink"
          />
        </div>
      </section>

      {/* FAQ */}
      <section className="py-16 bg-[#F6EFE6]">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2
            className="text-xl font-bold text-[#243C4A] mb-8"
            style={{ fontFamily: "var(--font-sora), sans-serif" }}
          >
            Perguntas frequentes
          </h2>
          <FAQAccordion faqs={faqs} />
        </div>
      </section>

      {/* Newsletter */}
      <section className="py-12 bg-[#FFF7EA]">
        <div className="max-w-2xl mx-auto px-4 sm:px-6">
          <NewsletterForm />
        </div>
      </section>
    </>
  );
}
