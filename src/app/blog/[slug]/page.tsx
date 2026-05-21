import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { Clock, Calendar, Tag, ArrowLeft, ArrowRight } from "lucide-react";
import Breadcrumb from "@/components/Breadcrumb";
import BlogCard from "@/components/BlogCard";
import NewsletterForm from "@/components/NewsletterForm";
import { blogPosts } from "@/lib/data";

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return blogPosts.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const post = blogPosts.find((p) => p.slug === slug);
  if (!post) return {};
  return {
    title: post.title,
    description: post.excerpt,
    openGraph: {
      title: post.title,
      description: post.excerpt,
      type: "article",
      publishedTime: post.date,
    },
  };
}

const articleContents: Record<string, string[]> = {
  "como-saber-se-meu-cachorro-esta-com-dor": [
    "Identificar dor em cães exige atenção às mudanças de comportamento, pois os animais têm tendência natural a esconder o desconforto. Ao longo da evolução, demonstrar fraqueza poderia ser prejudicial à sobrevivência, e esse instinto permanece mesmo nos animais domésticos.",
    "Entre os sinais mais comuns de dor estão: relutância em se mover ou levantar, mudança na postura habitual, lambedura excessiva de uma parte do corpo, alteração no apetite, vocalização ao ser tocado em determinadas regiões e isolamento social.",
    "A expressão facial também é um indicador importante. Pesquisas desenvolveram escalas de avaliação de dor que observam mudanças nos olhos, nas orelhas e na tensão facial do animal. Olhos semicerrados, orelhas rebaixadas e testa franzida podem indicar desconforto.",
    "É fundamental distinguir dor aguda de dor crônica. A dor aguda, causada por lesões, geralmente produz reações imediatas e visíveis. A dor crônica, comum em artrites e doenças degenerativas, pode se manifestar de forma mais sutil ao longo de semanas ou meses.",
    "Sempre que houver suspeita de dor, o encaminhamento veterinário é necessário. O diagnóstico correto permite identificar a causa e o tratamento adequado. Nunca ofereça medicamentos humanos para dor ao seu cão, pois muitos são tóxicos para a espécie.",
  ],
  "vacinas-essenciais-caes-gatos": [
    "A vacinação é uma das ferramentas mais eficazes da medicina preventiva veterinária. Ela protege individualmente cada animal e contribui para a imunidade coletiva, reduzindo a circulação de doenças infecciosas na população de pets.",
    "Para cães, as vacinas essenciais incluem a polivalente V8 ou V10, que protege contra cinomose, parvovirose, hepatite infecciosa, leptospirose e outras doenças graves. A antirrábica é obrigatória por lei no Brasil e deve ser renovada anualmente.",
    "Para gatos, a vacina tríplice felina protege contra rinotraqueíte, calicivirose e panleucopenia. Gatos com acesso ao exterior ou convívio com outros felinos também se beneficiam da vacina antirrábica e da vacina contra leucemia felina.",
    "O protocolo inicial para filhotes começa geralmente entre 45 e 60 dias de vida, com reforços a cada 3 a 4 semanas até os 4 meses de idade. Após o ciclo inicial, os adultos mantêm reforços anuais conforme recomendação do veterinário.",
    "Guarde sempre o cartão de vacinação do seu pet e leve-o às consultas. Esse documento é exigido em viagens, canis, hotéis para pets e situações de fronteira entre países. A regularidade das vacinas é parte fundamental da saúde preventiva.",
  ],
};

const defaultContent = [
  "A saúde e o bem-estar dos pets dependem de uma combinação de boa alimentação, rotina de exercícios, acompanhamento veterinário regular e um ambiente seguro e estimulante. Tutores bem informados fazem uma diferença enorme na qualidade de vida dos seus animais.",
  "Pequenas mudanças na rotina podem ter grande impacto. Estabelecer horários regulares para alimentação, passeios e brincadeiras ajuda o pet a se sentir seguro e reduz comportamentos ansiosos. A previsibilidade é confortante para cães e gatos.",
  "O acompanhamento veterinário preventivo é essencial mesmo quando o animal parece saudável. Exames anuais permitem identificar alterações precoces antes que evoluam para problemas mais sérios. Muitas doenças têm tratamento mais simples quando diagnosticadas cedo.",
  "Observar o comportamento do seu pet no dia a dia é uma habilidade valiosa. Mudanças no apetite, no nível de energia, na qualidade do pelo ou nas fezes são sinais que merecem atenção. O tutor que conhece bem o animal percebe rapidamente quando algo está diferente.",
  "Informação de qualidade é a base para decisões responsáveis. O Vem Aqui Pet reúne conteúdo educativo, guias práticos e acesso a profissionais para ajudar tutores a cuidar melhor dos seus pets a cada etapa da vida do animal.",
];

function formatDate(dateStr: string) {
  const date = new Date(dateStr + "T00:00:00");
  return date.toLocaleDateString("pt-BR", { day: "numeric", month: "long", year: "numeric" });
}

export default async function BlogPostPage({ params }: Props) {
  const { slug } = await params;
  const post = blogPosts.find((p) => p.slug === slug);
  if (!post) notFound();

  const related = blogPosts
    .filter((p) => p.slug !== slug && p.categorySlug === post.categorySlug)
    .slice(0, 3);
  const fallbackRelated = related.length < 3
    ? [...related, ...blogPosts.filter((p) => p.slug !== slug).slice(0, 3 - related.length)]
    : related;

  const content = articleContents[slug] ?? defaultContent;

  const schema = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: post.title,
    description: post.excerpt,
    datePublished: post.date,
    author: { "@type": "Organization", name: post.author },
    publisher: {
      "@type": "Organization",
      name: "Vem Aqui Pet",
      url: "https://vemaquipet.com.br",
    },
    mainEntityOfPage: `https://vemaquipet.com.br/blog/${post.slug}`,
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      />

      {/* Hero */}
      <section className="bg-[#243C4A] py-12 md:py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <Breadcrumb
            items={[
              { label: "Blog", href: "/blog" },
              { label: post.category, href: `/blog?categoria=${post.categorySlug}` },
              { label: post.title },
            ]}
          />
          <div className="mt-6">
            <div className="flex flex-wrap items-center gap-3 mb-5">
              <span className="px-3 py-1 rounded-full text-xs font-medium bg-[#D9906A]/20 text-[#D9906A]">
                {post.category}
              </span>
              <span className="flex items-center gap-1 text-xs text-[#FFF7EA]/50">
                <Clock size={11} /> {post.readTime} min de leitura
              </span>
              <span className="flex items-center gap-1 text-xs text-[#FFF7EA]/50">
                <Calendar size={11} /> {formatDate(post.date)}
              </span>
            </div>
            <h1
              className="text-2xl md:text-4xl font-extrabold text-[#FFF7EA] leading-tight mb-4"
              style={{ fontFamily: "var(--font-sora), sans-serif" }}
            >
              {post.title}
            </h1>
            <p className="text-[#FFF7EA]/70 text-base md:text-lg">{post.excerpt}</p>
          </div>
        </div>
      </section>

      {/* Content + Sidebar */}
      <section className="py-12 bg-[#FFF7EA]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-3 gap-10">
            {/* Article */}
            <article className="lg:col-span-2">
              {/* Cover image placeholder */}
              <div className="aspect-video rounded-2xl bg-[#DFF3E8] flex items-center justify-center mb-8">
                <span className="text-6xl">🐾</span>
              </div>

              <div className="prose prose-sm max-w-none space-y-5">
                {content.map((para, i) => (
                  <p key={i} className="text-[#263238] leading-relaxed text-base">
                    {para}
                  </p>
                ))}
              </div>

              {/* Tags */}
              <div className="flex flex-wrap gap-2 mt-8 pt-6 border-t border-[#F6EFE6]">
                <Tag size={13} className="text-[#5F6F5A] mt-0.5" />
                {post.tags.map((tag) => (
                  <span
                    key={tag}
                    className="px-3 py-1 rounded-full text-xs font-medium bg-[#F6EFE6] text-[#5F6F5A]"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              {/* Author */}
              <div className="mt-8 p-5 rounded-2xl bg-[#F6EFE6] flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-[#243C4A] flex items-center justify-center text-[#D9906A] font-bold text-lg">
                  V
                </div>
                <div>
                  <p className="font-semibold text-[#243C4A] text-sm" style={{ fontFamily: "var(--font-sora), sans-serif" }}>
                    {post.author}
                  </p>
                  <p className="text-xs text-[#5F6F5A] mt-0.5">
                    Conteúdo produzido pela equipe editorial do Vem Aqui Pet.
                  </p>
                </div>
              </div>

              {/* Back */}
              <div className="mt-8">
                <Link
                  href="/blog"
                  className="inline-flex items-center gap-2 text-sm font-medium text-[#2F7D5A] hover:text-[#243C4A] transition-colors"
                >
                  <ArrowLeft size={14} /> Voltar para o blog
                </Link>
              </div>
            </article>

            {/* Sidebar */}
            <aside className="space-y-6">
              <div className="rounded-2xl bg-[#F6EFE6] p-5">
                <h3
                  className="font-bold text-[#243C4A] text-sm mb-4"
                  style={{ fontFamily: "var(--font-sora), sans-serif" }}
                >
                  Mais em {post.category}
                </h3>
                <div className="space-y-3">
                  {fallbackRelated.slice(0, 3).map((p) => (
                    <Link
                      key={p.slug}
                      href={`/blog/${p.slug}`}
                      className="block group"
                    >
                      <p className="text-sm font-medium text-[#243C4A] group-hover:text-[#2F7D5A] transition-colors leading-snug">
                        {p.title}
                      </p>
                      <p className="text-xs text-[#5F6F5A] mt-0.5">{p.readTime} min</p>
                    </Link>
                  ))}
                </div>
              </div>

              <div className="rounded-2xl bg-[#243C4A] p-5">
                <h3
                  className="font-bold text-[#FFF7EA] text-sm mb-2"
                  style={{ fontFamily: "var(--font-sora), sans-serif" }}
                >
                  Receba conteúdos por e-mail
                </h3>
                <p className="text-xs text-[#FFF7EA]/60 mb-4">
                  Novidades, guias práticos e dicas para tutores.
                </p>
                <NewsletterForm compact />
              </div>

              <div className="rounded-2xl bg-[#DFF3E8] p-5">
                <h3
                  className="font-bold text-[#2F7D5A] text-sm mb-2"
                  style={{ fontFamily: "var(--font-sora), sans-serif" }}
                >
                  Precisa de atendimento?
                </h3>
                <p className="text-xs text-[#5F6F5A] mb-4">
                  Agende uma visita veterinária ou outro serviço em domicílio.
                </p>
                <Link
                  href="/agendar"
                  className="inline-flex items-center gap-1.5 text-sm font-semibold text-[#2F7D5A] hover:text-[#243C4A] transition-colors"
                >
                  Ver horários disponíveis <ArrowRight size={13} />
                </Link>
              </div>
            </aside>
          </div>
        </div>
      </section>

      {/* Related */}
      <section className="py-12 pb-16 bg-[#F6EFE6]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2
            className="text-lg font-bold text-[#243C4A] mb-6"
            style={{ fontFamily: "var(--font-sora), sans-serif" }}
          >
            Artigos relacionados
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {fallbackRelated.map((p) => (
              <BlogCard key={p.slug} post={p} />
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
