export interface BlogPost {
  slug: string;
  title: string;
  excerpt: string;
  category: string;
  categorySlug: string;
  author: string;
  readTime: number;
  date: string;
  image: string;
  tags: string[];
  featured?: boolean;
}

export interface Service {
  slug: string;
  title: string;
  description: string;
  icon: string;
  status: "disponivel" | "lista-interesse" | "em-breve";
  cta: string;
  href: string;
}

export interface LocalGuide {
  slug: string;
  name: string;
  description: string;
  icon: string;
  href: string;
}

export interface Category {
  slug: string;
  name: string;
  description: string;
  icon: string;
  href: string;
  count?: number;
}

export interface FAQ {
  question: string;
  answer: string;
}

export interface ContentMaterial {
  slug: string;
  title: string;
  type: "guia" | "checklist" | "mapa" | "comparativo" | "calendario";
  description: string;
  icon: string;
  href: string;
}
