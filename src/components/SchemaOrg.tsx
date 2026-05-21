export function SchemaOrg() {
  const schema = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Organization",
        "@id": "https://vemaquipet.com.br/#organization",
        name: "Vem Aqui Pet",
        url: "https://vemaquipet.com.br",
        logo: "https://vemaquipet.com.br/logo.png",
        sameAs: [
          "https://www.instagram.com/VemAquiPet",
          "https://www.tiktok.com/@VemAquiPet",
        ],
      },
      {
        "@type": "WebSite",
        "@id": "https://vemaquipet.com.br/#website",
        url: "https://vemaquipet.com.br",
        name: "Vem Aqui Pet",
        description:
          "Portal pet da Granja Viana, Cotia e região. Conteúdo, guia local, serviços em domicílio e comunidade para tutores.",
        publisher: { "@id": "https://vemaquipet.com.br/#organization" },
        potentialAction: {
          "@type": "SearchAction",
          target: {
            "@type": "EntryPoint",
            urlTemplate: "https://vemaquipet.com.br/blog?q={search_term_string}",
          },
          "query-input": "required name=search_term_string",
        },
      },
      {
        "@type": "LocalBusiness",
        "@id": "https://vemaquipet.com.br/#localbusiness",
        name: "Vem Aqui Pet",
        image: "https://vemaquipet.com.br/og-image.jpg",
        url: "https://vemaquipet.com.br",
        address: {
          "@type": "PostalAddress",
          addressLocality: "Cotia",
          addressRegion: "SP",
          addressCountry: "BR",
        },
        areaServed: ["Granja Viana", "Cotia", "Alphaville", "São Paulo"],
        description:
          "Ecossistema digital pet com conteúdo educativo, guias locais e serviços em domicílio para tutores da Granja Viana, Cotia e região.",
      },
    ],
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}
