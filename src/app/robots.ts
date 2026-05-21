import type { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: "*",
        allow: "/",
        disallow: ["/agendar/confirmar", "/agendar/obrigado", "/api/"],
      },
    ],
    sitemap: "https://vemaquipet.com.br/sitemap.xml",
  };
}
