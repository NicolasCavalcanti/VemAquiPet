import Link from "next/link";
import Logo from "./Logo";
import { Mail, Phone } from "lucide-react";

function IconInstagram() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <rect x="2" y="2" width="20" height="20" rx="5" ry="5"/>
      <circle cx="12" cy="12" r="4.5"/>
      <circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none"/>
    </svg>
  );
}
function IconFacebook() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/>
    </svg>
  );
}
function IconYoutube() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M22.54 6.42a2.78 2.78 0 0 0-1.95-1.96C18.88 4 12 4 12 4s-6.88 0-8.59.46a2.78 2.78 0 0 0-1.95 1.96A29 29 0 0 0 1 12a29 29 0 0 0 .46 5.58 2.78 2.78 0 0 0 1.95 1.96C5.12 20 12 20 12 20s6.88 0 8.59-.46a2.78 2.78 0 0 0 1.95-1.96A29 29 0 0 0 23 12a29 29 0 0 0-.46-5.58z"/>
      <polygon points="9.75 15.02 15.5 12 9.75 8.98 9.75 15.02" fill="currentColor" stroke="none"/>
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
                href="https://instagram.com/vemaquipet"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-lg bg-[#FFF7EA]/10 hover:bg-[#D9906A]/30 transition-colors"
                aria-label="Instagram Vem Aqui Pet"
              >
                <IconInstagram />
              </a>
              <a
                href="https://facebook.com/vemaquipet"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-lg bg-[#FFF7EA]/10 hover:bg-[#D9906A]/30 transition-colors"
                aria-label="Facebook Vem Aqui Pet"
              >
                <IconFacebook />
              </a>
              <a
                href="https://youtube.com/vemaquipet"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-lg bg-[#FFF7EA]/10 hover:bg-[#D9906A]/30 transition-colors"
                aria-label="YouTube Vem Aqui Pet"
              >
                <IconYoutube />
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
              <a
                href="https://wa.me/5511999999999"
                className="flex items-center gap-2 text-sm text-[#FFF7EA]/70 hover:text-[#D9906A] transition-colors"
              >
                <Phone size={13} />
                (11) 99999-9999
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
