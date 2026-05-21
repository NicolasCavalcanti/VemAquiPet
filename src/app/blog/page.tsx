import type { Metadata } from "next";
import Link from "next/link";
import { Search } from "lucide-react";
import Breadcrumb from "@/components/Breadcrumb";
import BlogCard from "@/components/BlogCard";
import NewsletterForm from "@/components/NewsletterForm";
import { blogPosts, editorialCategories } from "@/lib/data";

export const metadata: Metadata = {
  title: "Blog Vem Aqui Pet: saúde, comportamento e bem-estar para tutores",
  description:
    "Artigos sobre saúde pet, comportamento, rotina, bem-estar, vida ativa e guias locais para tutores da Granja Viana, Cotia e região.",
};

const featured = blogPosts.filter((p) => p.featured).slice(0, 2);

export default function BlogPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-[#243C4A] py-14 md:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Breadcrumb items={[{ label: "Blog", href: "/blog" }]} />
          <div className="mt-6 max-w-2xl">
            <h1
              className="text-3xl md:text-5xl font-extrabold text-[#FFF7EA] leading-tight mb-4"
              style={{ fontFamily: "var(--font-sora), sans-serif" }}
            >
              Blog Vem Aqui Pet
            </h1>
            <p className="text-[#FFF7EA]/70 text-base md:text-lg leading-relaxed">
              Conteúdo educativo sobre saúde, comportamento, rotina, bem-estar, vida ativa e
              guias locais para tutores da Granja Viana, Cotia e região.
            </p>
          </div>

          {/* Search */}
          <div className="mt-8 max-w-lg">
            <div className="flex items-center gap-3 px-4 py-3 rounded-xl bg-[#FFF7EA]/10 border border-[#FFF7EA]/20">
              <Search size={16} className="text-[#FFF7EA]/50" />
              <span className="text-sm text-[#FFF7EA]/40">Buscar artigos...</span>
            </div>
          </div>
        </div>
      </section>

      {/* Filtros por categoria */}
      <section className="py-6 bg-[#FFF7EA] border-b border-[#F6EFE6]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap gap-2">
            <span className="px-4 py-1.5 rounded-full text-sm font-medium bg-[#243C4A] text-[#FFF7EA] cursor-pointer">
              Todos
            </span>
            {editorialCategories.map((cat) => (
              <Link
                key={cat.slug}
                href={`/blog?categoria=${cat.slug}`}
                className="px-4 py-1.5 rounded-full text-sm font-medium bg-white border border-[#F6EFE6] text-[#5F6F5A] hover:border-[#D9906A]/40 hover:text-[#D9906A] transition-colors"
              >
                {cat.name}
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Destaques */}
      <section className="py-14 bg-[#FFF7EA]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2
            className="text-lg font-bold text-[#243C4A] mb-6"
            style={{ fontFamily: "var(--font-sora), sans-serif" }}
          >
            Artigos em destaque
          </h2>
          <div className="space-y-4">
            {featured.map((post) => (
              <BlogCard key={post.slug} post={post} featured />
            ))}
          </div>
        </div>
      </section>

      {/* Todos os artigos */}
      <section className="py-10 pb-16 bg-[#F6EFE6]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2
            className="text-lg font-bold text-[#243C4A] mb-6"
            style={{ fontFamily: "var(--font-sora), sans-serif" }}
          >
            Todos os artigos
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {blogPosts.map((post) => (
              <BlogCard key={post.slug} post={post} />
            ))}
          </div>
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
