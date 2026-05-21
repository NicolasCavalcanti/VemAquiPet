import Link from "next/link";
import Logo from "./Logo";
import { Mail } from "lucide-react";

function IconInstagram() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <rect x="2" y="2" width="20" height="20" rx="5" ry="5"/>
      <circle cx="12" cy="12" r="4.5"/>
      <circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none"/>
    </svg>
  );
}
function IconTikTok() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" stroke="none">
      <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-2.88 2.5 2.89 2.89 0 0 1-2.89-2.89 2.89 2.89 0 0 1 2.89-2.89c.28 0 .54.04.79.1V9.01a6.27 6.27 0 0 0-.79-.05 6.34 6.34 0 0 0-6.34 6.34 6.34 6.34 0 0 0 6.34 6.34 6.34 6.34 0 0 0 6.33-6.34l-.01-8.7a8.16 8.16 0 0 0 4.77 1.52V4.67a4.85 4.85 0 0 1-1-.02z"/>
    </svg>
  );
}

const footerLinks = {
  conteudo: [
    { label: "Saúde Pet", href: "/saude-pet" },
    { label: "Comportamento", href: "/comportamento" },
    { label: "Rotina e Bem-estar", href: "/rotina-e-bem-estar" },
    { label: "Vida Ativa Pet", href: "/vida-ativa-pet" },
    { label: "Guia Local", href: "/guia-local" },
    { label: "Blog", href: "/blog" },
    { label: "Materiais Gratuitos", href: "/conteudos/materiais-gratuitos" },
  ],
  servicos: [
    { label: "Vet em Casa", href: "/servicos/vet-em-casa" },
    { label: "Banho em Casa", href: "/servicos/banho-em-casa" },
    { label: "Pet Sitter", href: "/servicos/pet-sitter" },
    { label: "Adestramento", href: "/servicos/adestramento" },
    { label: "Passeador", href: "/servicos/passeador" },
    { label: "Para Condomínios", href: "/servicos/para-condominios" },
    { label: "Agendar", href: "/agendar" },
  ],
  ecossistema: [
    { label: "Sobre o Vem Aqui Pet", href: "/sobre" },
    { label: "Comunidade", href: "/comunidade" },
    { label: "Clube", href: "/clube" },
    { label: "Shop", href: "/shop" },
    { label: "Trabalhe Conosco", href: "/trabalhe-conosco" },
    { label: "Contato", href: "/contato" },
    { label: "Perguntas Frequentes", href: "/perguntas-frequentes" },
  ],
};

export default function Footer() {
  return (
    <footer className="bg-[#243C4A] text-[#FFF7EA]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Brand column */}
          <div className="space-y-4">
            <Logo variant="white" size="md" />
            <p className="text-sm text-[#FFF7EA]/70 leading-relaxed max-w-xs">
              O portal pet da Granja Viana, Cotia e região. Conteúdo confiável, guia local,
              serviços em domicílio e comunidade para tutores.
            </p>
            <div className="flex items-center gap-3">
              <a
                href="https://www.instagram.com/VemAquiPet"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-lg bg-[#FFF7EA]/10 hover:bg-[#D9906A]/30 transition-colors"
                aria-label="Instagram Vem Aqui Pet"
              >
                <IconInstagram />
              </a>
              <a
                href="https://www.tiktok.com/@VemAquiPet"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-lg bg-[#FFF7EA]/10 hover:bg-[#D9906A]/30 transition-colors"
                aria-label="TikTok Vem Aqui Pet"
              >
                <IconTikTok />
              </a>
            </div>
            <div className="space-y-2">
              <a
                href="mailto:contato@vemaquipet.com.br"
                className="flex items-center gap-2 text-sm text-[#FFF7EA]/70 hover:text-[#D9906A] transition-colors"
              >
                <Mail size={13} />
                contato@vemaquipet.com.br
              </a>
            </div>
          </div>

          {/* Conteúdo */}
          <div>
            <h3
              className="text-sm font-semibold text-[#D9906A] uppercase tracking-wider mb-4"
              style={{ fontFamily: "var(--font-sora), sans-serif" }}
            >
              Conteúdo
            </h3>
            <ul className="space-y-2">
              {footerLinks.conteudo.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-[#FFF7EA]/70 hover:text-[#FFF7EA] transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Serviços */}
          <div>
            <h3
              className="text-sm font-semibold text-[#D9906A] uppercase tracking-wider mb-4"
              style={{ fontFamily: "var(--font-sora), sans-serif" }}
            >
              Serviços
            </h3>
            <ul className="space-y-2">
              {footerLinks.servicos.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-[#FFF7EA]/70 hover:text-[#FFF7EA] transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Ecossistema */}
          <div>
            <h3
              className="text-sm font-semibold text-[#D9906A] uppercase tracking-wider mb-4"
              style={{ fontFamily: "var(--font-sora), sans-serif" }}
            >
              Ecossistema
            </h3>
            <ul className="space-y-2">
              {footerLinks.ecossistema.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-[#FFF7EA]/70 hover:text-[#FFF7EA] transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Sub-brands */}
        <div className="mt-12 pt-8 border-t border-[#FFF7EA]/10">
          <p
            className="text-xs text-[#FFF7EA]/40 mb-4 uppercase tracking-wider"
            style={{ fontFamily: "var(--font-sora), sans-serif" }}
          >
            Verticais do Ecossistema
          </p>
          <div className="flex flex-wrap gap-3">
            {["Vet em Casa", "Cuida", "Banho", "Treina", "Esportes", "Clube"].map((brand) => (
              <span
                key={brand}
                className="px-3 py-1 rounded-full text-xs bg-[#FFF7EA]/8 text-[#FFF7EA]/50 border border-[#FFF7EA]/10"
              >
                VemAqui {brand}
              </span>
            ))}
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-8 pt-6 border-t border-[#FFF7EA]/10 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-[#FFF7EA]/40">
            © {new Date().getFullYear()} Vem Aqui Pet. Todos os direitos reservados.
          </p>
          <div className="flex items-center gap-4">
            <Link
              href="/politica-de-privacidade"
              className="text-xs text-[#FFF7EA]/40 hover:text-[#FFF7EA]/70 transition-colors"
            >
              Política de Privacidade
            </Link>
            <Link
              href="/termos-de-uso"
              className="text-xs text-[#FFF7EA]/40 hover:text-[#FFF7EA]/70 transition-colors"
            >
              Termos de Uso
            </Link>
            <Link
              href="/seguranca-e-compliance"
              className="text-xs text-[#FFF7EA]/40 hover:text-[#FFF7EA]/70 transition-colors"
            >
              Segurança
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
