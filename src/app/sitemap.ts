import type { MetadataRoute } from "next";
import { blogPosts } from "@/lib/data";

const BASE_URL = "https://vemaquipet.com.br";

export default function sitemap(): MetadataRoute.Sitemap {
  const staticPages = [
    { url: BASE_URL, priority: 1.0 },
    { url: `${BASE_URL}/blog`, priority: 0.9 },
    { url: `${BASE_URL}/saude-pet`, priority: 0.9 },
    { url: `${BASE_URL}/comportamento`, priority: 0.9 },
    { url: `${BASE_URL}/rotina-e-bem-estar`, priority: 0.9 },
    { url: `${BASE_URL}/vida-ativa-pet`, priority: 0.9 },
    { url: `${BASE_URL}/guia-local`, priority: 0.9 },
    { url: `${BASE_URL}/servicos`, priority: 0.8 },
    { url: `${BASE_URL}/servicos/vet-em-casa`, priority: 0.8 },
    { url: `${BASE_URL}/servicos/banho-em-casa`, priority: 0.7 },
    { url: `${BASE_URL}/servicos/pet-sitter`, priority: 0.7 },
    { url: `${BASE_URL}/servicos/adestramento`, priority: 0.7 },
    { url: `${BASE_URL}/servicos/passeador`, priority: 0.7 },
    { url: `${BASE_URL}/servicos/para-condominios`, priority: 0.7 },
    { url: `${BASE_URL}/agendar`, priority: 0.8 },
    { url: `${BASE_URL}/guia-local/granja-viana`, priority: 0.8 },
    { url: `${BASE_URL}/guia-local/cotia`, priority: 0.8 },
    { url: `${BASE_URL}/guia-local/alphaville-granja-viana`, priority: 0.7 },
    { url: `${BASE_URL}/comunidade`, priority: 0.7 },
    { url: `${BASE_URL}/trabalhe-conosco`, priority: 0.6 },
    { url: `${BASE_URL}/clube`, priority: 0.6 },
    { url: `${BASE_URL}/shop`, priority: 0.6 },
    { url: `${BASE_URL}/conteudos`, priority: 0.7 },
    { url: `${BASE_URL}/sobre`, priority: 0.5 },
    { url: `${BASE_URL}/perguntas-frequentes`, priority: 0.5 },
    { url: `${BASE_URL}/contato`, priority: 0.5 },
  ].map((p) => ({
    url: p.url,
    lastModified: new Date(),
    changeFrequency: "weekly" as const,
    priority: p.priority,
  }));

  const blogPages = blogPosts.map((post) => ({
    url: `${BASE_URL}/blog/${post.slug}`,
    lastModified: new Date(post.date),
    changeFrequency: "monthly" as const,
    priority: 0.7,
  }));

  return [...staticPages, ...blogPages];
}
