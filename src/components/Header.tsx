"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X, ChevronDown, Calendar } from "lucide-react";
import Logo from "./Logo";

const navItems = [
  {
    label: "Saúde Pet",
    href: "/saude-pet",
    children: [
      { label: "Sintomas", href: "/saude-pet/sintomas" },
      { label: "Vacinas", href: "/saude-pet/vacinas" },
      { label: "Exames", href: "/saude-pet/exames" },
      { label: "Prevenção", href: "/saude-pet/prevencao" },
      { label: "Pet Idoso", href: "/saude-pet/pet-idoso" },
      { label: "Filhotes", href: "/saude-pet/filhotes" },
    ],
  },
  {
    label: "Comportamento",
    href: "/comportamento",
    children: [
      { label: "Adestramento", href: "/comportamento/adestramento" },
      { label: "Ansiedade", href: "/comportamento/ansiedade" },
      { label: "Socialização", href: "/comportamento/socializacao" },
      { label: "Enriquecimento Ambiental", href: "/comportamento/enriquecimento-ambiental" },
    ],
  },
  {
    label: "Rotina e Bem-estar",
    href: "/rotina-e-bem-estar",
    children: [
      { label: "Alimentação", href: "/rotina-e-bem-estar/alimentacao" },
      { label: "Higiene", href: "/rotina-e-bem-estar/higiene" },
      { label: "Cuidados em Casa", href: "/rotina-e-bem-estar/cuidados-em-casa" },
      { label: "Viagem com Pets", href: "/rotina-e-bem-estar/viagem-com-pets" },
    ],
  },
  {
    label: "Vida Ativa",
    href: "/vida-ativa-pet",
    children: [
      { label: "Caminhada com Cães", href: "/vida-ativa-pet/caminhada-com-caes" },
      { label: "Canicross", href: "/vida-ativa-pet/canicross" },
      { label: "Trilhas com Pets", href: "/vida-ativa-pet/trilhas-com-pets" },
      { label: "Parques Pet Friendly", href: "/vida-ativa-pet/parques-pet-friendly" },
    ],
  },
  {
    label: "Guia Local",
    href: "/guia-local",
    children: [
      { label: "Granja Viana", href: "/guia-local/granja-viana" },
      { label: "Cotia", href: "/guia-local/cotia" },
      { label: "Alphaville Granja Viana", href: "/guia-local/alphaville-granja-viana" },
      { label: "Condomínios Pet Friendly", href: "/guia-local/condominios-pet-friendly" },
    ],
  },
  {
    label: "Serviços",
    href: "/servicos",
    children: [
      { label: "Vet em Casa", href: "/servicos/vet-em-casa" },
      { label: "Banho em Casa", href: "/servicos/banho-em-casa" },
      { label: "Pet Sitter", href: "/servicos/pet-sitter" },
      { label: "Adestramento", href: "/servicos/adestramento" },
      { label: "Para Condomínios", href: "/servicos/para-condominios" },
    ],
  },
];

export default function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 16);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setMobileOpen(false);
    setActiveDropdown(null);
  }, [pathname]);

  return (
    <header
      className={`sticky top-0 z-50 w-full transition-all duration-200 ${
        scrolled
          ? "bg-[#FFF7EA]/95 backdrop-blur-md shadow-[0_2px_12px_rgba(36,60,74,0.10)]"
          : "bg-[#FFF7EA]"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 lg:h-18">
          <Logo />

          {/* Desktop nav */}
          <nav className="hidden lg:flex items-center gap-0.5" aria-label="Navegação principal">
            {navItems.map((item) => (
              <div
                key={item.href}
                className="relative group"
                onMouseEnter={() => setActiveDropdown(item.href)}
                onMouseLeave={() => setActiveDropdown(null)}
              >
                <Link
                  href={item.href}
                  className={`flex items-center gap-1 px-3 py-2 rounded-lg text-sm font-medium transition-colors ${
                    pathname.startsWith(item.href)
                      ? "text-[#2F7D5A] bg-[#DFF3E8]"
                      : "text-[#243C4A] hover:text-[#2F7D5A] hover:bg-[#DFF3E8]"
                  }`}
                  style={{ fontFamily: "var(--font-sora), sans-serif" }}
                >
                  {item.label}
                  <ChevronDown
                    size={13}
                    className="opacity-60 group-hover:rotate-180 transition-transform duration-200"
                  />
                </Link>

                {/* Dropdown */}
                {activeDropdown === item.href && (
                  <div className="absolute top-full left-0 mt-1 w-56 bg-white rounded-xl shadow-xl border border-[#F6EFE6] py-2 z-50 animate-fade-in">
                    {item.children.map((child) => (
                      <Link
                        key={child.href}
                        href={child.href}
                        className="block px-4 py-2 text-sm text-[#243C4A] hover:bg-[#FFF7EA] hover:text-[#2F7D5A] transition-colors"
                        style={{ fontFamily: "var(--font-inter), sans-serif" }}
                      >
                        {child.label}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </nav>

          {/* Desktop CTA */}
          <div className="hidden lg:flex items-center gap-3">
            <Link
              href="/blog"
              className="text-sm font-medium text-[#243C4A] hover:text-[#2F7D5A] transition-colors"
              style={{ fontFamily: "var(--font-sora), sans-serif" }}
            >
              Blog
            </Link>
            <Link
              href="/agendar"
              className="flex items-center gap-2 px-4 py-2 rounded-lg bg-[#D9906A] text-white text-sm font-semibold hover:bg-[#c47a56] transition-colors shadow-sm"
              style={{ fontFamily: "var(--font-sora), sans-serif" }}
            >
              <Calendar size={14} />
              Agendar
            </Link>
          </div>

          {/* Mobile toggle */}
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="lg:hidden p-2 rounded-lg text-[#243C4A] hover:bg-[#F6EFE6] transition-colors"
            aria-label={mobileOpen ? "Fechar menu" : "Abrir menu"}
          >
            {mobileOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="lg:hidden bg-white border-t border-[#F6EFE6] shadow-lg max-h-[80vh] overflow-y-auto">
          <nav className="px-4 py-4 space-y-1" aria-label="Menu mobile">
            <Link
              href="/blog"
              className="block px-3 py-2.5 rounded-lg text-sm font-medium text-[#243C4A] hover:bg-[#FFF7EA] hover:text-[#2F7D5A]"
            >
              Explorar conteúdos
            </Link>
            {navItems.map((item) => (
              <div key={item.href}>
                <button
                  onClick={() =>
                    setActiveDropdown(activeDropdown === item.href ? null : item.href)
                  }
                  className="w-full flex items-center justify-between px-3 py-2.5 rounded-lg text-sm font-medium text-[#243C4A] hover:bg-[#FFF7EA]"
                >
                  {item.label}
                  <ChevronDown
                    size={14}
                    className={`transition-transform duration-200 ${
                      activeDropdown === item.href ? "rotate-180" : ""
                    }`}
                  />
                </button>
                {activeDropdown === item.href && (
                  <div className="ml-4 mt-1 space-y-0.5">
                    <Link
                      href={item.href}
                      className="block px-3 py-2 text-sm text-[#5F6F5A] hover:text-[#2F7D5A]"
                    >
                      Ver tudo em {item.label}
                    </Link>
                    {item.children.map((child) => (
                      <Link
                        key={child.href}
                        href={child.href}
                        className="block px-3 py-2 text-sm text-[#263238] hover:text-[#2F7D5A]"
                      >
                        {child.label}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ))}
            <div className="pt-2 border-t border-[#F6EFE6] mt-2">
              <Link
                href="/trabalhe-conosco"
                className="block px-3 py-2.5 text-sm text-[#5F6F5A] hover:text-[#2F7D5A]"
              >
                Trabalhe Conosco
              </Link>
              <Link
                href="/contato"
                className="block px-3 py-2.5 text-sm text-[#5F6F5A] hover:text-[#2F7D5A]"
              >
                Contato
              </Link>
            </div>
            <div className="pt-2">
              <Link
                href="/agendar"
                className="flex items-center justify-center gap-2 w-full px-4 py-3 rounded-xl bg-[#D9906A] text-white text-sm font-semibold hover:bg-[#c47a56] transition-colors"
              >
                <Calendar size={15} />
                Agendar atendimento
              </Link>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}
