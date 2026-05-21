import type { Metadata } from "next";
import Link from "next/link";
import { ShoppingBag, ArrowRight, Clock } from "lucide-react";
import Breadcrumb from "@/components/Breadcrumb";

export const metadata: Metadata = {
  title: "Shop Vem Aqui Pet: kits e produtos recomendados para tutores",
  description:
    "Kits selecionados, guias de compra e produtos recomendados para tutores de pets. Em breve.",
};

const comingSoon = [
  { emoji: "📦", title: "Kits para tutores", desc: "Kits curados com os melhores produtos para a rotina pet." },
  { emoji: "📋", title: "Guias de compra", desc: "O que comprar, o que evitar e como comparar produtos." },
  { emoji: "⭐", title: "Recomendados", desc: "Produtos testados e aprovados por profissionais da rede." },
];

export default function ShopPage() {
  return (
    <>
      <section className="bg-[#243C4A] py-14 md:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Breadcrumb items={[{ label: "Shop", href: "/shop" }]} />
          <div className="mt-6 max-w-xl">
            <h1
              className="text-3xl md:text-5xl font-extrabold text-[#FFF7EA] leading-tight mb-4"
              style={{ fontFamily: "var(--font-sora), sans-serif" }}
            >
              Shop Vem Aqui Pet
            </h1>
            <p className="text-[#FFF7EA]/70 text-base md:text-lg">
              Kits, guias de compra e produtos recomendados para facilitar a rotina dos tutores.
            </p>
          </div>
        </div>
      </section>

      <section className="py-16 bg-[#FFF7EA]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#D9906A]/10 border border-[#D9906A]/30 mb-8">
            <Clock size={14} className="text-[#D9906A]" />
            <span className="text-sm font-medium text-[#D9906A]">Em breve</span>
          </div>

          <ShoppingBag size={40} className="text-[#5F6F5A] mx-auto mb-4" />
          <h2
            className="text-2xl font-bold text-[#243C4A] mb-3"
            style={{ fontFamily: "var(--font-sora), sans-serif" }}
          >
            O shop está chegando.
          </h2>
          <p className="text-[#5F6F5A] mb-10 max-w-md mx-auto">
            Estamos selecionando os melhores produtos e parceiros para compor o shop do Vem
            Aqui Pet. Em breve você encontrará kits e recomendações por aqui.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-10">
            {comingSoon.map((item) => (
              <div
                key={item.title}
                className="p-5 rounded-2xl bg-white border border-[#F6EFE6] text-center"
              >
                <span className="text-3xl">{item.emoji}</span>
                <p
                  className="font-bold text-[#243C4A] text-sm mt-3 mb-1"
                  style={{ fontFamily: "var(--font-sora), sans-serif" }}
                >
                  {item.title}
                </p>
                <p className="text-xs text-[#5F6F5A]">{item.desc}</p>
              </div>
            ))}
          </div>

          <p className="text-sm text-[#5F6F5A] mb-4">
            Enquanto isso, explore nossos guias e conteúdos gratuitos.
          </p>
          <Link
            href="/conteudos"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-[#243C4A] text-[#FFF7EA] text-sm font-semibold hover:bg-[#344f61] transition-colors"
            style={{ fontFamily: "var(--font-sora), sans-serif" }}
          >
            Ver materiais gratuitos <ArrowRight size={14} />
          </Link>
        </div>
      </section>
    </>
  );
}
