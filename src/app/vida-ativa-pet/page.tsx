import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, Zap, Footprints, Mountain, TreePine, Trophy } from "lucide-react";
import Breadcrumb from "@/components/Breadcrumb";
import FAQAccordion from "@/components/FAQAccordion";
import BlogCard from "@/components/BlogCard";
import CTABlock from "@/components/CTABlock";
import NewsletterForm from "@/components/NewsletterForm";
import { blogPosts } from "@/lib/data";
import type { FAQ } from "@/lib/types";

export const metadata: Metadata = {
  title: "Vida Ativa Pet: caminhada, canicross e trilhas com seu cão",
  description:
    "Conteúdos sobre caminhada com cães, canicross, trilhas pet friendly, parques e esportes para pets ativos.",
};

const subcategories = [
  {
    slug: "caminhada-com-caes",
    name: "Caminhada com Cães",
    description: "Como começar, equipamentos e boas práticas para caminhar com seu cão.",
    icon: <Footprints size={20} />,
  },
  {
    slug: "canicross",
    name: "Canicross",
    description: "O esporte de corrida com cães: técnica, equipamento e treinamento.",
    icon: <Zap size={20} />,
  },
  {
    slug: "trilhas-com-pets",
    name: "Trilhas com Pets",
    description: "Trilhas pet friendly, segurança e o que levar para a aventura.",
    icon: <Mountain size={20} />,
  },
  {
    slug: "parques-pet-friendly",
    name: "Parques Pet Friendly",
    description: "Parques e áreas verdes que recebem pets na Granja Viana e região.",
    icon: <TreePine size={20} />,
  },
  {
    slug: "esportes-com-caes",
    name: "Esportes com Cães",
    description: "Agility, flyball, dock diving e outros esportes para cães ativos.",
    icon: <Trophy size={20} />,
  },
];

const benefits = [
  {
    emoji: "❤️",
    title: "Saúde cardiovascular",
    desc: "Exercício regular reduz risco de obesidade, diabetes e doenças cardíacas.",
  },
  {
    emoji: "🧠",
    title: "Equilíbrio comportamental",
    desc: "Pets com rotina de atividades têm menos comportamentos destrutivos e menos ansiedade.",
  },
  {
    emoji: "🤝",
    title: "Vínculo com o tutor",
    desc: "Atividades em conjunto fortalecem a relação entre pet e tutor.",
  },
  {
    emoji: "😴",
    title: "Sono melhor",
    desc: "Pets ativos dormem mais profundamente e têm energia bem regulada.",
  },
];

const faqs: FAQ[] = [
  {
    question: "Com que idade meu cachorro pode começar a correr comigo?",
    answer:
      "Raças de médio e grande porte geralmente podem iniciar corridas leves a partir de 12 a 18 meses, quando o crescimento ósseo está mais completo. Raças menores e braquicefálicas (focinho curto) têm limitações próprias. Antes de começar qualquer rotina de corrida, consulte um veterinário para avaliar a condição física do animal.",
  },
  {
    question: "Quais cuidados são necessários em trilhas com pets?",
    answer:
      "Leve água suficiente para o pet e para você, pois a hidratação é essencial. Use uma guia resistente e nunca solte o animal em áreas desconhecidas. Verifique o estado das patas após a trilha, pois pedras e terra quente podem machucar. Evite trilhas nos horários de maior calor, especialmente para raças braquicefálicas.",
  },
  {
    question: "Quantas vezes por semana devo caminhar com meu cachorro?",
    answer:
      "Depende da raça, idade e condicionamento do animal. Para a maioria dos cães, 2 a 3 caminhadas por semana de 20 a 40 minutos cada já traz benefícios significativos. Raças de trabalho e esportivas precisam de mais estímulo. Filhotes e idosos têm necessidades menores e devem ser avaliados individualmente.",
  },
  {
    question: "Meu gato pode praticar atividades externas?",
    answer:
      "Sim, com adaptação gradual. Gatos podem ser treinados para usar peitoral e guia e apreciar ambientes externos controlados. O processo exige paciência e sempre deve respeitar o ritmo do animal. Ambientes externos também exigem que o gato esteja com as vacinas e antiparasitários em dia.",
  },
];

export default function VidaAtivaPage() {
  const posts = blogPosts
    .filter((p) => p.categorySlug === "vida-ativa-pet")
    .slice(0, 6);
  const fallbackPosts = posts.length < 3 ? blogPosts.slice(0, 6) : posts;

  return (
    <>
      {/* Hero */}
      <section className="bg-[#2F7D5A] py-14 md:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Breadcrumb items={[{ label: "Vida Ativa Pet", href: "/vida-ativa-pet" }]} />
          <div className="mt-6 max-w-2xl">
            <h1
              className="text-3xl md:text-5xl font-extrabold text-[#FFF7EA] leading-tight mb-4"
              style={{ fontFamily: "var(--font-sora), sans-serif" }}
            >
              Vida Ativa Pet
            </h1>
            <p className="text-[#FFF7EA]/80 text-base md:text-lg leading-relaxed">
              Caminhadas, canicross, trilhas e esportes para pets e tutores que querem explorar
              a região juntos. Encontre conteúdo, rotas e dicas para uma vida mais ativa com seu
              animal.
            </p>
          </div>
        </div>
      </section>

      {/* Benefícios */}
      <section className="py-14 bg-[#FFF7EA]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2
            className="text-xl font-bold text-[#243C4A] mb-8"
            style={{ fontFamily: "var(--font-sora), sans-serif" }}
          >
            Por que a vida ativa transforma a saúde do pet?
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {benefits.map((b) => (
              <div
                key={b.title}
                className="p-5 rounded-2xl bg-white border border-[#F6EFE6] text-center"
              >
                <span className="text-3xl">{b.emoji}</span>
                <h3
                  className="font-bold text-[#243C4A] text-sm mt-3 mb-1"
                  style={{ fontFamily: "var(--font-sora), sans-serif" }}
                >
                  {b.title}
                </h3>
                <p className="text-xs text-[#5F6F5A] leading-relaxed">{b.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Subcategorias */}
      <section className="py-16 bg-[#F6EFE6]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2
            className="text-xl font-bold text-[#243C4A] mb-8"
            style={{ fontFamily: "var(--font-sora), sans-serif" }}
          >
            Explore por tipo de atividade
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {subcategories.map((sub) => (
              <Link
                key={sub.slug}
                href={`/vida-ativa-pet/${sub.slug}`}
                className="group flex items-start gap-4 p-5 rounded-2xl bg-white border border-[#F6EFE6] hover:border-[#2F7D5A]/30 hover:shadow-[0_4px_16px_rgba(36,60,74,0.10)] transition-all duration-200"
              >
                <div className="w-10 h-10 rounded-xl bg-[#DFF3E8] flex items-center justify-center text-[#2F7D5A] flex-shrink-0 group-hover:bg-[#2F7D5A]/20 transition-colors">
                  {sub.icon}
                </div>
                <div>
                  <h3
                    className="font-bold text-[#243C4A] text-sm group-hover:text-[#2F7D5A] transition-colors"
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
      <section className="py-16 bg-[#FFF7EA]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-end justify-between mb-8">
            <h2
              className="text-xl font-bold text-[#243C4A]"
              style={{ fontFamily: "var(--font-sora), sans-serif" }}
            >
              Artigos sobre vida ativa
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

      {/* CTA Comunidade */}
      <section className="py-12 bg-[#F6EFE6]">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <CTABlock
            title="Descubra eventos e encontros com pets na região."
            description="Caminhadas em grupo, trilhas coletivas e eventos pet friendly na Granja Viana, Cotia e arredores."
            primaryCta={{ label: "Ver eventos e encontros", href: "/comunidade/eventos" }}
            secondaryCta={{ label: "Explorar guia local", href: "/guia-local" }}
            variant="green"
          />
        </div>
      </section>

      {/* FAQ */}
      <section className="py-16 bg-[#FFF7EA]">
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

      <section className="py-12 bg-[#F6EFE6]">
        <div className="max-w-2xl mx-auto px-4 sm:px-6">
          <NewsletterForm />
        </div>
      </section>
    </>
  );
}
