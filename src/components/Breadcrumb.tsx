import Link from "next/link";
import { ChevronRight, Home } from "lucide-react";

interface BreadcrumbItem {
  label: string;
  href?: string;
}

interface BreadcrumbProps {
  items: BreadcrumbItem[];
}

export default function Breadcrumb({ items }: BreadcrumbProps) {
  const allItems = [{ label: "Início", href: "/" }, ...items];

  const schema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: allItems.map((item, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: item.label,
      item: item.href ? `https://vemaquipet.com.br${item.href}` : undefined,
    })),
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      />
      <nav aria-label="Breadcrumb" className="flex items-center gap-1 text-sm flex-wrap">
        {allItems.map((item, i) => (
          <span key={i} className="flex items-center gap-1">
            {i > 0 && <ChevronRight size={13} className="text-[#5F6F5A]" />}
            {item.href && i < allItems.length - 1 ? (
              <Link
                href={item.href}
                className="flex items-center gap-1 text-[#5F6F5A] hover:text-[#2F7D5A] transition-colors"
              >
                {i === 0 && <Home size={12} />}
                {item.label}
              </Link>
            ) : (
              <span className="text-[#243C4A] font-medium">{item.label}</span>
            )}
          </span>
        ))}
      </nav>
    </>
  );
}
