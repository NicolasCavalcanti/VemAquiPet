import type { BlogPost, Service, LocalGuide, Category, FAQ, ContentMaterial } from "./types";

export const blogPosts: BlogPost[] = [
  {
    slug: "como-saber-se-meu-cachorro-esta-com-dor",
    title: "Como saber se meu cachorro está com dor?",
    excerpt:
      "Cães não falam, mas comunicam desconforto de várias formas. Saiba quais sinais observar e quando agir.",
    category: "Saúde Pet",
    categorySlug: "saude-pet",
    author: "Equipe Vem Aqui Pet",
    readTime: 6,
    date: "2025-05-10",
    image: "/images/blog/cachorro-dor.jpg",
    tags: ["saúde", "cachorro", "comportamento", "dor"],
    featured: true,
  },
  {
    slug: "vacinas-essenciais-caes-gatos",
    title: "Vacinas essenciais para cães e gatos",
    excerpt:
      "Um calendário claro sobre quais vacinas seu pet precisa, quando aplicar e por que não atrasar.",
    category: "Saúde Pet",
    categorySlug: "saude-pet",
    author: "Equipe Vem Aqui Pet",
    readTime: 7,
    date: "2025-05-08",
    image: "/images/blog/vacinas-pet.jpg",
    tags: ["saúde", "vacinas", "prevenção"],
    featured: true,
  },
  {
    slug: "como-reduzir-estresse-gato-em-casa",
    title: "Como reduzir o estresse do gato dentro de casa",
    excerpt:
      "Gatos são sensíveis a mudanças e estímulos. Veja estratégias práticas para criar um ambiente mais tranquilo.",
    category: "Comportamento",
    categorySlug: "comportamento",
    author: "Equipe Vem Aqui Pet",
    readTime: 8,
    date: "2025-05-05",
    image: "/images/blog/gato-estresse.jpg",
    tags: ["gatos", "comportamento", "bem-estar"],
    featured: true,
  },
  {
    slug: "quando-chamar-atendimento-veterinario-em-casa",
    title: "Quando chamar atendimento veterinário em casa?",
    excerpt:
      "Entenda em quais situações o atendimento domiciliar é indicado e quando é necessário ir a uma clínica.",
    category: "Saúde Pet",
    categorySlug: "saude-pet",
    author: "Equipe Vem Aqui Pet",
    readTime: 5,
    date: "2025-04-28",
    image: "/images/blog/vet-em-casa.jpg",
    tags: ["saúde", "vet em casa", "serviços"],
  },
  {
    slug: "rotina-saudavel-para-o-pet",
    title: "Como criar uma rotina saudável para o pet",
    excerpt:
      "Alimentação, exercício, sono e estimulação mental: como organizar o dia a dia do seu animal.",
    category: "Rotina e Bem-estar",
    categorySlug: "rotina-e-bem-estar",
    author: "Equipe Vem Aqui Pet",
    readTime: 7,
    date: "2025-04-22",
    image: "/images/blog/rotina-pet.jpg",
    tags: ["rotina", "bem-estar", "alimentação"],
  },
  {
    slug: "onde-passear-com-cachorro-granja-viana",
    title: "Onde passear com cachorro na Granja Viana?",
    excerpt:
      "Parques, trilhas e locais pet friendly na Granja Viana e arredores. Guia completo com endereços e dicas.",
    category: "Guia Local",
    categorySlug: "guia-local",
    author: "Equipe Vem Aqui Pet",
    readTime: 9,
    date: "2025-04-15",
    image: "/images/blog/passeio-granja-viana.jpg",
    tags: ["guia local", "passeio", "Granja Viana", "vida ativa"],
    featured: true,
  },
  {
    slug: "cuidados-com-pet-idoso",
    title: "Cuidados especiais com o pet idoso",
    excerpt:
      "Pets vivem mais quando bem cuidados. Saiba como adaptar a rotina ao envelhecimento do seu animal.",
    category: "Saúde Pet",
    categorySlug: "saude-pet",
    author: "Equipe Vem Aqui Pet",
    readTime: 8,
    date: "2025-04-10",
    image: "/images/blog/pet-idoso.jpg",
    tags: ["saúde", "pet idoso", "prevenção"],
  },
  {
    slug: "como-preparar-casa-para-filhote",
    title: "Como preparar a casa para receber um filhote",
    excerpt:
      "Checklist completo para deixar o ambiente seguro, confortável e estimulante para o novo morador.",
    category: "Rotina e Bem-estar",
    categorySlug: "rotina-e-bem-estar",
    author: "Equipe Vem Aqui Pet",
    readTime: 6,
    date: "2025-04-05",
    image: "/images/blog/filhote-casa.jpg",
    tags: ["filhotes", "segurança", "rotina"],
  },
  {
    slug: "o-que-e-enriquecimento-ambiental",
    title: "O que é enriquecimento ambiental e por que ele importa?",
    excerpt:
      "Entenda como estimular o instinto natural do seu pet e reduzir comportamentos indesejados.",
    category: "Comportamento",
    categorySlug: "comportamento",
    author: "Equipe Vem Aqui Pet",
    readTime: 7,
    date: "2025-03-28",
    image: "/images/blog/enriquecimento.jpg",
    tags: ["comportamento", "enriquecimento ambiental", "bem-estar"],
  },
  {
    slug: "como-comecar-caminhar-com-cachorro",
    title: "Como começar a caminhar com seu cachorro com segurança",
    excerpt:
      "Dicas de equipamento, postura, frequência e como progressivamente aumentar a atividade física do seu cão.",
    category: "Vida Ativa Pet",
    categorySlug: "vida-ativa-pet",
    author: "Equipe Vem Aqui Pet",
    readTime: 6,
    date: "2025-03-20",
    image: "/images/blog/caminhada-cachorro.jpg",
    tags: ["vida ativa", "caminhada", "exercício"],
  },
  {
    slug: "guia-pet-granja-viana",
    title: "Guia pet completo da Granja Viana",
    excerpt:
      "Clínicas, petshops, parques, trilhas e locais pet friendly: tudo que você precisa saber para cuidar do seu pet na região.",
    category: "Guia Local",
    categorySlug: "guia-local",
    author: "Equipe Vem Aqui Pet",
    readTime: 12,
    date: "2025-03-15",
    image: "/images/blog/guia-granja-viana.jpg",
    tags: ["guia local", "Granja Viana", "serviços pet"],
  },
  {
    slug: "checklist-saude-preventiva-pets",
    title: "Checklist de saúde preventiva para pets",
    excerpt:
      "Vacinas, vermifugação, exames anuais, higiene dental e mais. Um guia prático para não esquecer nada.",
    category: "Saúde Pet",
    categorySlug: "saude-pet",
    author: "Equipe Vem Aqui Pet",
    readTime: 5,
    date: "2025-03-10",
    image: "/images/blog/checklist-saude.jpg",
    tags: ["saúde", "prevenção", "checklist"],
  },
];

export const services: Service[] = [
  {
    slug: "vet-em-casa",
    title: "Vet em Casa",
    description:
      "Consulta veterinária no conforto do seu lar, para avaliações de rotina, acompanhamento e orientação clínica.",
    icon: "stethoscope",
    status: "disponivel",
    cta: "Agendar",
    href: "/agendar/vet-em-casa",
  },
  {
    slug: "banho-em-casa",
    title: "Banho em Casa",
    description:
      "Serviço de banho e tosa com profissional especializado diretamente no seu endereço.",
    icon: "droplets",
    status: "lista-interesse",
    cta: "Entrar na lista",
    href: "/servicos/banho-em-casa",
  },
  {
    slug: "pet-sitter",
    title: "Pet Sitter",
    description:
      "Cuidador responsável para ficar com seu pet quando você precisar se ausentar.",
    icon: "heart",
    status: "lista-interesse",
    cta: "Entrar na lista",
    href: "/servicos/pet-sitter",
  },
  {
    slug: "adestramento",
    title: "Adestramento",
    description:
      "Treinamento comportamental com profissionais certificados, presencial ou em domicílio.",
    icon: "graduation-cap",
    status: "em-breve",
    cta: "Saiba mais",
    href: "/servicos/adestramento",
  },
  {
    slug: "passeador",
    title: "Passeador",
    description:
      "Passeios seguros e supervisionados para seu cão, na frequência que você precisar.",
    icon: "footprints",
    status: "em-breve",
    cta: "Saiba mais",
    href: "/servicos/passeador",
  },
  {
    slug: "para-condominios",
    title: "Para Condomínios",
    description:
      "Pacotes e serviços especiais para condomínios que queiram oferecer soluções pet para seus moradores.",
    icon: "building",
    status: "disponivel",
    cta: "Saiba mais",
    href: "/servicos/para-condominios",
  },
];

export const localGuides: LocalGuide[] = [
  {
    slug: "granja-viana",
    name: "Granja Viana",
    description: "Parques, serviços e dicas para tutores da Granja Viana.",
    icon: "map-pin",
    href: "/guia-local/granja-viana",
  },
  {
    slug: "cotia",
    name: "Cotia",
    description: "Guia completo de serviços pet em Cotia e bairros próximos.",
    icon: "map-pin",
    href: "/guia-local/cotia",
  },
  {
    slug: "sao-paulo-ii",
    name: "São Paulo II",
    description: "Locais pet friendly e serviços no bairro São Paulo II.",
    icon: "map-pin",
    href: "/guia-local/sao-paulo-ii",
  },
  {
    slug: "fazendinha",
    name: "Fazendinha",
    description: "Recursos e dicas para tutores da região da Fazendinha.",
    icon: "map-pin",
    href: "/guia-local/fazendinha",
  },
  {
    slug: "alphaville-granja-viana",
    name: "Alphaville Granja Viana",
    description: "Serviços, parques e comunidade pet em Alphaville.",
    icon: "map-pin",
    href: "/guia-local/alphaville-granja-viana",
  },
  {
    slug: "condominios-pet-friendly",
    name: "Condomínios Pet Friendly",
    description: "Condomínios que recebem e acolhem tutores e seus pets.",
    icon: "building-2",
    href: "/guia-local/condominios-pet-friendly",
  },
];

export const editorialCategories: Category[] = [
  {
    slug: "saude-pet",
    name: "Saúde Pet",
    description: "Prevenção, vacinas, sintomas, exames e cuidados com a saúde do seu animal.",
    icon: "heart-pulse",
    href: "/saude-pet",
    count: 24,
  },
  {
    slug: "comportamento",
    name: "Comportamento",
    description: "Adestramento, ansiedade, socialização e enriquecimento ambiental.",
    icon: "brain",
    href: "/comportamento",
    count: 18,
  },
  {
    slug: "rotina-e-bem-estar",
    name: "Rotina e Bem-estar",
    description: "Alimentação, higiene, cuidados diários e segurança doméstica.",
    icon: "sun",
    href: "/rotina-e-bem-estar",
    count: 20,
  },
  {
    slug: "vida-ativa-pet",
    name: "Vida Ativa Pet",
    description: "Caminhadas, canicross, trilhas e atividades ao ar livre com seu pet.",
    icon: "zap",
    href: "/vida-ativa-pet",
    count: 14,
  },
  {
    slug: "guia-local",
    name: "Guia Local",
    description: "Serviços, parques, locais e eventos na Granja Viana, Cotia e região.",
    icon: "map",
    href: "/guia-local",
    count: 16,
  },
  {
    slug: "servicos",
    name: "Serviços em Casa",
    description: "Vet, banho, adestramento, passeador e muito mais, direto no seu endereço.",
    icon: "home",
    href: "/servicos",
    count: 8,
  },
];

export const contentMaterials: ContentMaterial[] = [
  {
    slug: "checklist-saude-preventiva",
    title: "Checklist de Saúde Preventiva",
    type: "checklist",
    description: "Vacinas, exames e cuidados essenciais por faixa etária.",
    icon: "clipboard-check",
    href: "/conteudos/checklists/saude-preventiva",
  },
  {
    slug: "calendario-vacinacao-pet",
    title: "Calendário de Vacinação Pet",
    type: "calendario",
    description: "Quando e quais vacinas seu cão ou gato precisa ao longo da vida.",
    icon: "calendar",
    href: "/conteudos/checklists/calendario-vacinacao",
  },
  {
    slug: "guia-pet-idoso",
    title: "Guia do Pet Idoso",
    type: "guia",
    description: "Como adaptar a rotina e os cuidados para pets com mais de 7 anos.",
    icon: "book-open",
    href: "/conteudos/guias/pet-idoso",
  },
  {
    slug: "checklist-receber-filhote",
    title: "Checklist para Receber um Filhote",
    type: "checklist",
    description: "Tudo que você precisa preparar antes de trazer o novo pet para casa.",
    icon: "clipboard-list",
    href: "/conteudos/checklists/receber-filhote",
  },
  {
    slug: "guia-trilhas-passeios-pets",
    title: "Guia de Trilhas e Passeios com Pets",
    type: "guia",
    description: "Locais pet friendly, equipamentos e dicas de segurança para atividades externas.",
    icon: "map",
    href: "/conteudos/guias/trilhas-passeios-pets",
  },
  {
    slug: "mapa-pet-friendly-granja-viana",
    title: "Mapa Pet Friendly da Granja Viana",
    type: "mapa",
    description: "Restaurantes, parques e estabelecimentos que aceitam pets na região.",
    icon: "map-pin",
    href: "/conteudos/mapas/pet-friendly-granja-viana",
  },
];

export const homeFAQs: FAQ[] = [
  {
    question: "O Vem Aqui Pet é uma clínica veterinária?",
    answer:
      "Não. O Vem Aqui Pet é um ecossistema digital para tutores de pets. Oferecemos conteúdo educativo, guias locais, comunidade e serviços em domicílio para a Granja Viana, Cotia e região. O atendimento Vet em Casa é uma das verticais do ecossistema.",
  },
  {
    question: "O Vet em Casa atende emergências?",
    answer:
      "Não. O atendimento domiciliar é indicado para consultas de rotina, acompanhamento e orientação clínica. Situações de urgência como falta de ar, convulsões, sangramento, trauma ou intoxicação exigem atendimento em clínica ou hospital veterinário. Nossa triagem identifica esses casos antes do agendamento.",
  },
  {
    question: "Quais regiões são atendidas?",
    answer:
      "Atualmente atendemos Granja Viana, Cotia, São Paulo II, Fazendinha e Alphaville Granja Viana. A cobertura está em expansão. Verifique a disponibilidade no momento do agendamento.",
  },
  {
    question: "Como funciona o agendamento?",
    answer:
      "Você escolhe o serviço, informa sua região, seleciona data e horário disponíveis, preenche os dados do tutor e do pet e confirma. Para Vet em Casa, há uma triagem rápida antes da confirmação.",
  },
  {
    question: "Posso me cadastrar como profissional?",
    answer:
      "Sim. Veterinários, profissionais de banho e tosa, adestradores, pet sitters e passeadores podem se candidatar a fazer parte da rede Vem Aqui Pet. Acesse a página Trabalhe Conosco e preencha o formulário.",
  },
];
