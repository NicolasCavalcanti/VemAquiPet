import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import BlogImage from "@/components/BlogImage";
import { Clock, Calendar, Tag, ArrowLeft, ArrowRight } from "lucide-react";
import Breadcrumb from "@/components/Breadcrumb";
import BlogCard from "@/components/BlogCard";
import NewsletterForm from "@/components/NewsletterForm";
import { blogPosts } from "@/lib/data";

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return blogPosts.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const post = blogPosts.find((p) => p.slug === slug);
  if (!post) return {};
  const baseUrl = "https://vemaquipet.com.br";
  return {
    title: post.title,
    description: post.excerpt,
    openGraph: {
      title: post.title,
      description: post.excerpt,
      type: "article",
      publishedTime: post.date,
      images: [
        {
          url: `${baseUrl}${post.image}`,
          alt: post.imageAlt,
          width: 800,
          height: 450,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: post.title,
      description: post.excerpt,
      images: [`${baseUrl}${post.image}`],
    },
  };
}

type ContentBlock =
  | { kind: "p"; text: string }
  | { kind: "img"; src: string; alt: string; caption?: string };

const articleContents: Record<string, ContentBlock[]> = {
  "como-saber-se-meu-cachorro-esta-com-dor": [
    {
      kind: "p",
      text: "Identificar dor em cães exige atenção às mudanças de comportamento, pois os animais têm tendência natural a esconder o desconforto. Ao longo da evolução, demonstrar fraqueza poderia ser prejudicial à sobrevivência, e esse instinto permanece mesmo nos animais domésticos.",
    },
    {
      kind: "p",
      text: "Entre os sinais mais comuns de dor estão: relutância em se mover ou levantar, mudança na postura habitual, lambedura excessiva de uma parte do corpo, alteração no apetite, vocalização ao ser tocado em determinadas regiões e isolamento social.",
    },
    {
      kind: "img",
      src: "/images/blog/complem-sinais-dor-cachorro.png",
      alt: "Ilustração mostrando os principais pontos de observação para identificar dor em cães: postura, expressão facial e comportamento",
      caption: "Observe a postura, a expressão facial e as mudanças de comportamento do seu cão",
    },
    {
      kind: "p",
      text: "A expressão facial também é um indicador importante. Pesquisas desenvolveram escalas de avaliação de dor que observam mudanças nos olhos, nas orelhas e na tensão facial do animal. Olhos semicerrados, orelhas rebaixadas e testa franzida podem indicar desconforto.",
    },
    {
      kind: "p",
      text: "É fundamental distinguir dor aguda de dor crônica. A dor aguda, causada por lesões, geralmente produz reações imediatas e visíveis. A dor crônica, comum em artrites e doenças degenerativas, pode se manifestar de forma mais sutil ao longo de semanas ou meses.",
    },
    {
      kind: "p",
      text: "Sempre que houver suspeita de dor, o encaminhamento veterinário é necessário. O diagnóstico correto permite identificar a causa e o tratamento adequado. Nunca ofereça medicamentos humanos para dor ao seu cão, pois muitos são tóxicos para a espécie.",
    },
  ],

  "vacinas-essenciais-caes-gatos": [
    {
      kind: "p",
      text: "A vacinação é uma das ferramentas mais eficazes da medicina preventiva veterinária. Ela protege individualmente cada animal e contribui para a imunidade coletiva, reduzindo a circulação de doenças infecciosas na população de pets.",
    },
    {
      kind: "p",
      text: "Para cães, as vacinas essenciais incluem a polivalente V8 ou V10, que protege contra cinomose, parvovirose, hepatite infecciosa, leptospirose e outras doenças graves. A antirrábica é obrigatória por lei no Brasil e deve ser renovada anualmente.",
    },
    {
      kind: "p",
      text: "Para gatos, a vacina tríplice felina protege contra rinotraqueíte, calicivirose e panleucopenia. Gatos com acesso ao exterior ou convívio com outros felinos também se beneficiam da vacina antirrábica e da vacina contra leucemia felina.",
    },
    {
      kind: "img",
      src: "/images/blog/complem-calendario-vacinas.png",
      alt: "Calendário de vacinação para cães e gatos organizando as doses por faixa etária ao longo da vida do pet",
      caption: "Mantenha o calendário de vacinação atualizado do filhote à fase adulta e sênior",
    },
    {
      kind: "p",
      text: "O protocolo inicial para filhotes começa geralmente entre 45 e 60 dias de vida, com reforços a cada 3 a 4 semanas até os 4 meses de idade. Após o ciclo inicial, os adultos mantêm reforços anuais conforme recomendação do veterinário.",
    },
    {
      kind: "p",
      text: "Guarde sempre o cartão de vacinação do seu pet e leve-o às consultas. Esse documento é exigido em viagens, canis, hotéis para pets e situações de fronteira entre países. A regularidade das vacinas é parte fundamental da saúde preventiva.",
    },
  ],

  "como-reduzir-estresse-gato-em-casa": [
    {
      kind: "p",
      text: "Gatos são animais de rotina e territorialidade bem marcada. Qualquer mudança no ambiente, na convivência ou nos horários pode se tornar uma fonte de estresse. Reconhecer esses gatilhos é o primeiro passo para criar um lar mais equilibrado para o seu felino.",
    },
    {
      kind: "p",
      text: "Entre as principais causas de estresse em gatos domésticos estão: chegada de novos animais ou pessoas, mudanças de mobiliário, obras, barulhos intensos, alteração na rotina do tutor, limpeza com produtos químicos com cheiro forte e bandeja sanitária mal higienizada.",
    },
    {
      kind: "p",
      text: "O enriquecimento ambiental é uma das estratégias mais eficazes. Oferecer arranhadores, prateleiras e espaços elevados permite que o gato explore, observe o ambiente com segurança e exerça comportamentos naturais. Brinquedos de caça e rotação de itens mantêm o interesse ao longo do tempo.",
    },
    {
      kind: "img",
      src: "/images/blog/complem-espaco-gato.png",
      alt: "Gato em ambiente doméstico com prateleiras, esconderijos e arranhadores que promovem bem-estar e redução do estresse",
      caption: "Esconderijos, altura e arranhadores são essenciais para o bem-estar do gato dentro de casa",
    },
    {
      kind: "p",
      text: "Esconderijos são fundamentais. Caixas de papelão, tendas ou estruturas específicas para gatos permitem que o animal se retire quando sentir necessidade. Respeitar esse comportamento de isolamento voluntário é essencial — forçar contato em momentos de stress agrava o quadro.",
    },
    {
      kind: "p",
      text: "A regularidade dos horários de alimentação, brincadeiras e higiene da bandeja ajuda a criar previsibilidade. Gatos são mais tranquilos quando sabem o que esperar do dia. Feromonas sintéticas (como o Feliway) também podem ser auxiliares em períodos de transição ou maior agitação.",
    },
    {
      kind: "p",
      text: "Se mesmo com as adaptações o gato apresentar comportamentos persistentes como agressividade, marcação com urina, hideclampsia ou perda de apetite, uma consulta veterinária é indicada. Em alguns casos, suporte médico ou acompanhamento com médico veterinário especializado em comportamento é necessário.",
    },
  ],

  "quando-chamar-atendimento-veterinario-em-casa": [
    {
      kind: "p",
      text: "O atendimento veterinário domiciliar tem crescido muito nos últimos anos, especialmente para tutores que buscam uma experiência menos estressante para seus pets. Entender quando ele é a melhor opção — e quando não é — faz toda a diferença.",
    },
    {
      kind: "p",
      text: "A consulta em casa é especialmente indicada para avaliações de rotina, verificação de vacinas, acompanhamento de tratamentos crônicos, revisão de saúde em pets idosos e orientações gerais de saúde e comportamento. Para animais muito ansiosos ou que reagem mal ao deslocamento até clínicas, o ambiente doméstico pode facilitar muito o exame.",
    },
    {
      kind: "p",
      text: "Gatos são exemplos claros: a maioria desenvolve estresse intenso ao ser colocada em caixas de transporte e levada a clínicas. Uma consulta em casa, no espaço familiar do animal, reduz significativamente esse estresse e permite uma avaliação clínica mais precisa.",
    },
    {
      kind: "p",
      text: "Por outro lado, existem situações em que o atendimento domiciliar não é adequado e o pet deve ser levado imediatamente a uma clínica ou hospital veterinário: falta de ar, convulsões, sangramento ativo, trauma por atropelamento ou queda, intoxicação, obstrução gastrointestinal ou urinária, e qualquer quadro de emergência que exija exames de imagem, anestesia ou internação.",
    },
    {
      kind: "p",
      text: "Uma boa triagem antes do agendamento é fundamental. No Vem Aqui Pet, todos os pedidos de atendimento domiciliar passam por uma avaliação prévia para identificar se a situação é adequada ao modelo de visita em casa ou se requer encaminhamento a uma unidade de urgência.",
    },
    {
      kind: "p",
      text: "Para aproveitar ao máximo a consulta em casa, organize com antecedência: tenha à mão a carteira de vacinação, relate as últimas alterações observadas no pet, separe eventuais medicamentos em uso e escolha um cômodo tranquilo para realizar o atendimento, longe de outros animais ou fontes de barulho.",
    },
  ],

  "rotina-saudavel-para-o-pet": [
    {
      kind: "p",
      text: "Tanto cães quanto gatos se beneficiam enormemente de uma rotina bem estruturada. A previsibilidade nos horários de alimentação, passeio, brincadeira e descanso reduz ansiedade, melhora o comportamento e contribui diretamente para a saúde física e emocional do animal.",
    },
    {
      kind: "p",
      text: "A alimentação é o alicerce da rotina. Opte por horários fixos — geralmente duas vezes ao dia para adultos — e respeite a quantidade indicada para a raça, peso e fase de vida do pet. Evite deixar ração disponível o dia todo (especialmente para cães), pois isso pode levar ao sobrepeso e dificultar o controle alimentar.",
    },
    {
      kind: "img",
      src: "/images/blog/complem-alimentacao-rotina.png",
      alt: "Alimentação organizada em horários fixos para pet adulto, com porção adequada ao porte e fase de vida",
      caption: "Horários fixos de alimentação ajudam a regular o metabolismo e o comportamento do pet",
    },
    {
      kind: "p",
      text: "Os exercícios devem ser adaptados ao perfil do animal. Cães de raças ativas precisam de pelo menos 30 a 60 minutos de atividade física diária. Raças de menor porte ou mais calmas podem precisar de menos. Para gatos, sessões de brincadeira de 15 a 20 minutos duas vezes ao dia já fazem grande diferença no bem-estar.",
    },
    {
      kind: "p",
      text: "A estimulação mental é frequentemente subestimada. Jogos de farejar, brinquedos interativos, treinos de obediência e enriquecimento ambiental são tão importantes quanto o exercício físico. Um pet mentalmente estimulado tende a ser mais calmo e menos propenso a desenvolver comportamentos destrutivos.",
    },
    {
      kind: "p",
      text: "O descanso também faz parte da rotina saudável. Certifique-se de que o pet tem um espaço próprio, confortável e seguro para dormir. Cães dormem em média 12 a 14 horas por dia; gatos podem dormir até 16 horas. Respeitar esse ritmo é fundamental.",
    },
    {
      kind: "p",
      text: "Por fim, consultas veterinárias preventivas regulares completam a rotina de saúde. Pets adultos devem ser avaliados ao menos uma vez ao ano; idosos e filhotes com maior frequência. Uma rotina bem estruturada é, em si, uma forma de prevenção.",
    },
  ],

  "onde-passear-com-cachorro-granja-viana": [
    {
      kind: "p",
      text: "A Granja Viana e as regiões vizinhas de Cotia oferecem um ambiente privilegiado para tutores que querem qualidade de vida para seus cães. Entre áreas verdes, parques bem estruturados e ruas arborizadas, há muitas opções para passeios regulares e explorações mais longas.",
    },
    {
      kind: "p",
      text: "O Parque Municipal Juqueri é uma das principais referências da região para quem tem pets. Com trilhas, áreas abertas e muita vegetação, é um destino ideal para caminhadas mais longas. Lembre-se de sempre manter o cão na guia e levar sacos para recolher as fezes — o respeito ao espaço coletivo é essencial.",
    },
    {
      kind: "p",
      text: "Para os moradores da Granja Viana, os parques internos dos condomínios e as alamedas arborizadas já oferecem um percurso diário agradável. A topografia variada da região — com subidas, descidas e terrenos irregulares — é um bom exercício tanto para o cão quanto para o tutor.",
    },
    {
      kind: "p",
      text: "Nos fins de semana, vale explorar as áreas ao redor do Rodoanel e as vias de uso compartilhado no limite entre Cotia e a Grande São Paulo. Algumas fazendas e chácaras da região também oferecem programas pet friendly com espaço aberto para cães correrem com segurança.",
    },
    {
      kind: "p",
      text: "Antes de sair, verifique se o cão está com vacinas e antipulgas em dia. Em áreas de mata, o risco de exposição a carrapatos é maior. Use repelentes aprovados para cães, verifique o corpo do animal ao retornar e consulte o veterinário em caso de reação estranha após trilhas.",
    },
    {
      kind: "p",
      text: "Cafés, padarias e alguns restaurantes da região já recebem pets em áreas externas. Verifique com antecedência e sempre priorize locais com espaço confortável para o animal aguardar com tranquilidade. A cultura pet friendly na Granja Viana cresce a cada ano.",
    },
  ],

  "cuidados-com-pet-idoso": [
    {
      kind: "p",
      text: "Cães e gatos são considerados seniores a partir dos 7 anos de idade — e raças maiores de cão podem entrar nessa fase ainda mais cedo. Com o envelhecimento, o organismo muda: o metabolismo desacelera, as articulações ficam mais sensíveis, a visão e a audição podem declinar e a imunidade diminui.",
    },
    {
      kind: "p",
      text: "A alimentação precisa ser adaptada. Rações formuladas para pets idosos têm menos calorias, mais fibras, suplementação para articulações e, em alguns casos, restrição de proteínas para poupar os rins. Consulte o veterinário antes de trocar a dieta — cada animal tem necessidades específicas.",
    },
    {
      kind: "img",
      src: "/images/blog/complem-cuidados-pet-senior.png",
      alt: "Tutor dedicando atenção especial a cachorro idoso, massageando suas articulações com carinho em ambiente doméstico",
      caption: "Pets idosos precisam de atenção redobrada às articulações, alimentação e conforto",
    },
    {
      kind: "p",
      text: "O exercício continua sendo importante, mas deve ser moderado. Caminhadas mais curtas e frequentes substituem as longas e intensas. Para cães com artrite, a hidroterapia pode ser uma excelente alternativa. Observe sinais de cansaço excessivo, claudicação ou relutância em subir escadas — esses sinais merecem avaliação.",
    },
    {
      kind: "p",
      text: "Adapte o ambiente doméstico: tapetes antiderrapantes em superfícies lisas, rampas para camas ou sofás, camas ortopédicas e bebedouros e comedouros elevados reduzem o esforço físico e o desconforto nas articulações. Pequenos ajustes fazem grande diferença no dia a dia.",
    },
    {
      kind: "p",
      text: "Consultas veterinárias semestrais são recomendadas para pets seniores. Exames de sangue, urina, pressão arterial e avaliação ocular e dental ajudam a detectar precocemente condições como diabetes, insuficiência renal, hipertireoidismo (em gatos) e hiperplasia prostática (em cães).",
    },
    {
      kind: "p",
      text: "Além dos cuidados físicos, a atenção emocional é fundamental. Pets idosos podem desenvolver ansiedade de separação, desorientação e alterações de sono. Manter a rotina estável, oferecer estímulos mentais suaves e preservar o vínculo afetivo com o tutor são pilares do bem-estar na fase sênior.",
    },
  ],

  "como-preparar-casa-para-filhote": [
    {
      kind: "p",
      text: "Os primeiros dias de um filhote em casa são determinantes para sua formação. Um ambiente bem preparado antes da chegada reduz riscos, minimiza o estresse do animal e facilita a adaptação. Essa preparação começa antes mesmo de buscar o pet.",
    },
    {
      kind: "p",
      text: "A primeira providência é eliminar perigos: cabo elétricos expostos, produtos de limpeza em baixo de pias, plantas tóxicas (como comigo-ninguém-pode, espada-de-são-jorge e zamioculca), buracos em grades, frestas em portões e objetos pequenos que possam ser engolidos.",
    },
    {
      kind: "img",
      src: "/images/blog/complem-filhote-preparacao.png",
      alt: "Checklist de preparação da casa para receber filhote — itens essenciais organizados por categoria de segurança e conforto",
      caption: "Revise cada ambiente da casa com os olhos de um filhote curioso para identificar riscos",
    },
    {
      kind: "p",
      text: "Separe um espaço exclusivo para o filhote: caminha confortável (evite locais frios, com correntes de ar ou muito ensolarados), comedouro e bebedouro de fácil acesso, brinquedos seguros e, para cães, um tapete higiênico longe da área de alimentação.",
    },
    {
      kind: "p",
      text: "Os itens essenciais que devem estar prontos antes da chegada: coleira com identificação, guia para passeios, transportadora ou caixa de transporte, cama ou almofada, comedouro e bebedouro, ração adequada para a fase de filhote, areia (para gatos) e brinquedos de mastigação.",
    },
    {
      kind: "p",
      text: "Estabelecer limites desde o início é mais fácil do que corrigi-los depois. Defina desde o primeiro dia quais espaços o pet pode acessar, onde vai dormir e como a família vai interagir com ele. Consistência nas regras — todos da casa seguindo o mesmo padrão — acelera o aprendizado.",
    },
    {
      kind: "p",
      text: "A primeira consulta veterinária deve acontecer em até 72 horas após a chegada. Esse exame inicial avalia a saúde geral do filhote, inicia ou dá continuidade ao protocolo vacinal, trata parasitas intestinais e orienta o tutor sobre alimentação, socialização e cuidados preventivos.",
    },
  ],

  "o-que-e-enriquecimento-ambiental": [
    {
      kind: "p",
      text: "Enriquecimento ambiental é o conjunto de estratégias que estimulam o instinto natural dos animais domésticos dentro do ambiente em que vivem. O objetivo é oferecer oportunidades para explorar, farejar, caçar, escalar, mastigar e resolver problemas — comportamentos que fazem parte da natureza de cães e gatos, mesmo que vivam dentro de apartamentos.",
    },
    {
      kind: "p",
      text: "Sem estímulo suficiente, pets podem desenvolver comportamentos indesejados como destruição de móveis, latidos excessivos, lambedura compulsiva, agressividade ou apatia. Esses comportamentos raramente são 'malícia' do animal — são sintomas de uma necessidade não atendida.",
    },
    {
      kind: "p",
      text: "Existem cinco categorias de enriquecimento: sensorial (novos cheiros, texturas, sons), alimentar (esconder ração, usar comedouros interativos), cognitivo (brinquedos-puzzle, treinos de obediência), social (interação com pessoas e outros animais) e físico (obstáculos, estruturas de escalada, espaços para explorar).",
    },
    {
      kind: "img",
      src: "/images/blog/complem-brinquedos-enriquecimento.png",
      alt: "Seleção de brinquedos e estruturas de enriquecimento ambiental para pets, incluindo comedouros interativos e brinquedos de caça",
      caption: "Variar os tipos de estimulação mantém o interesse do pet e previne o tédio",
    },
    {
      kind: "p",
      text: "Para gatos, o enriquecimento vertical é especialmente importante: arranhadores, prateleiras, janelas com vista para a rua e estruturas que permitam escalar e observar o ambiente de cima. A rotação de brinquedos — oferecendo novidades com frequência — mantém o interesse e reduz o entédio.",
    },
    {
      kind: "p",
      text: "Para cães, esconder petiscos pela casa para ativar o olfato, usar Kong com pasta dentro, oferecer ossos ou brinquedos de mastigação seguros e realizar treinos curtos de obediência são formas simples e eficazes de enriquecimento. A caminhada também é enriquecimento — permitir que o cão faça pausas para farejar é mais valioso do que caminhar rápido sem paradas.",
    },
    {
      kind: "p",
      text: "O enriquecimento não exige investimentos altos. Caixas de papelão, rolos de papel higiênico preenchidos com petiscos, tapetes de farejar feitos com retalhos de tecido e a própria interação com o tutor são recursos valiosos. O que importa é a consistência: um pouco de estimulação todos os dias faz mais diferença do que sessões intensas esporádicas.",
    },
  ],

  "como-comecar-caminhar-com-cachorro": [
    {
      kind: "p",
      text: "Caminhar com o cão é um dos hábitos mais saudáveis que um tutor pode cultivar. Além do exercício físico para o animal, a caminhada oferece estimulação sensorial, socialização, fortalecimento do vínculo com o tutor e melhora do comportamento geral. Mas começar da forma certa faz toda a diferença.",
    },
    {
      kind: "p",
      text: "O primeiro passo é o equipamento adequado. Para a maioria dos cães, um peitoral de ajuste duplo (com ponto de fixação no peito) é preferível à coleira, pois distribui melhor a força sem pressionar a traqueia. A guia deve ter entre 1,20 m e 1,80 m — nem curta demais nem longa demais para manter controle com conforto.",
    },
    {
      kind: "img",
      src: "/images/blog/complem-equipamento-caminhada.png",
      alt: "Peitoral, guia e itens essenciais para caminhar com segurança com o cachorro na rua",
      caption: "O equipamento certo garante conforto para o cão e controle seguro para o tutor",
    },
    {
      kind: "p",
      text: "Para cães que nunca saíram com regularidade, comece com 15 a 20 minutos por dia. Observe como o animal reage: se mostrar cansaço excessivo, claudicação ou relutância antes de completar o percurso, reduza o tempo. A frequência é mais importante que a duração: caminhar todos os dias, mesmo que pouco, gera mais benefícios do que uma longa caminhada semanal.",
    },
    {
      kind: "p",
      text: "Ensinar o cão a andar sem puxar a guia exige paciência e consistência. Quando o cão puxar, pare completamente. Só retome quando a guia estiver frouxa. Recompense com petiscos e elogios quando ele caminhar ao seu lado. Nada de puxões — o treinamento baseado em reforço positivo é mais eficaz e preserva a saúde da articulação do pescoço.",
    },
    {
      kind: "p",
      text: "Preste atenção às condições climáticas. No verão, evite sair nos horários mais quentes (entre 11h e 16h) e sempre verifique a temperatura do asfalto: se a palma da sua mão não aguentar 5 segundos no chão, também está quente demais para as patinhas do cão. Leve água para hidratação.",
    },
    {
      kind: "p",
      text: "Conforme o condicionamento avançar, você pode progressivamente aumentar o tempo, o ritmo e incluir terrenos variados — subidas, areia, parques. Se quiser ir além das caminhadas, o canicross (corrida com cão) e trilhas são excelentes modalidades para tutores que buscam uma experiência mais ativa com seus animais.",
    },
  ],

  "guia-pet-granja-viana": [
    {
      kind: "p",
      text: "A Granja Viana consolidou-se nos últimos anos como uma das regiões mais pet friendly do estado de São Paulo. Com uma população de tutores bastante engajada, a região oferece uma boa infraestrutura de serviços veterinários, petshops, espaços de lazer e condomínios com áreas pet.",
    },
    {
      kind: "p",
      text: "No campo da saúde animal, a região conta com diversas clínicas veterinárias com bom nível técnico, algumas com atendimento 24 horas ou plantão noturno. Para emergências, é importante que o tutor conheça previamente qual é o hospital veterinário de referência mais próximo e mantenha o contato salvo no celular.",
    },
    {
      kind: "p",
      text: "Os petshops locais oferecem desde rações e acessórios até serviços de banho, tosa e creche. A variedade de opções permite comparar preços e encontrar profissionais de confiança para cada necessidade. Algumas unidades também oferecem serviços de adestramento e comportamento animal.",
    },
    {
      kind: "p",
      text: "Para lazer e exercício, a Granja Viana tem parques e alamedas com boa arborização. O Parque da Cidade de Cotia e as áreas verdes dentro dos condomínios são referências frequentes entre os tutores da região. Grupos de caminhada com pets têm se organizado com frequência crescente nas redes sociais locais.",
    },
    {
      kind: "p",
      text: "A gastronomia pet friendly também cresce na região. Cafeterias, padarias e restaurantes com área externa já incluem em seu cardápio opções para pets — petiscos naturais e tigelas de água são alguns exemplos. Verifique sempre com o estabelecimento antes de ir para garantir a experiência mais confortável para o seu animal.",
    },
    {
      kind: "p",
      text: "Por fim, a comunidade de tutores da Granja Viana é bastante ativa. Grupos em aplicativos de mensagens compartilham indicações de profissionais, alertas de pets desaparecidos e eventos como feiras de adoção e mutirões de vacinação. Participar dessas redes é uma forma valiosa de se informar e se conectar com outros tutores da região.",
    },
  ],

  "checklist-saude-preventiva-pets": [
    {
      kind: "p",
      text: "Cuidar da saúde do pet vai muito além de levar ao veterinário quando algo parece errado. A prevenção é sempre mais eficaz — e menos custosa — do que o tratamento. Um checklist anual de saúde preventiva ajuda o tutor a manter o controle sobre os cuidados essenciais do seu animal.",
    },
    {
      kind: "p",
      text: "Vacinas em dia: verifique o cartão de vacinação e agende com o veterinário as doses de reforço necessárias. As vacinas mais comuns incluem a polivalente (cães), a tríplice felina (gatos) e a antirrábica (obrigatória para ambos). Pets que frequentam ambientes coletivos podem precisar de vacinas adicionais.",
    },
    {
      kind: "p",
      text: "Vermifugação regular: filhotes devem ser vermifugados com frequência maior (a partir das 2 semanas de vida). Adultos devem ser tratados a cada 3 a 6 meses dependendo do estilo de vida. Mesmo pets que vivem exclusivamente em apartamentos podem ser expostos a parasitas por contato indireto.",
    },
    {
      kind: "p",
      text: "Exame clínico anual: uma consulta preventiva por ano, mesmo sem sinais de doença, permite ao veterinário identificar alterações precoces. O exame físico geral inclui avaliação de peso, temperatura, pressão arterial, condição dos dentes, pelagem, olhos e ouvidos.",
    },
    {
      kind: "p",
      text: "Higiene dental: doenças periodontais afetam a maioria dos cães e gatos adultos e podem comprometer coração, rins e fígado. Escovar os dentes do pet regularmente, oferecer petiscos dentais e realizar limpeza profissional veterinária quando indicado são hábitos que fazem grande diferença.",
    },
    {
      kind: "p",
      text: "Controle de ectoparasitas: pulgas, carrapatos e piolhos precisam de controle contínuo. Há diversas opções no mercado — pipetas, coleiras, comprimidos e sprays. A escolha deve ser feita com o veterinário, considerando o estilo de vida do pet e a eficácia de cada produto na região.",
    },
    {
      kind: "p",
      text: "Monitoramento de peso e condição corporal: a obesidade é um dos maiores problemas de saúde dos pets domésticos e está associada a diabetes, artrite, problemas cardíacos e menor expectativa de vida. Pese o pet regularmente e converse com o veterinário se perceber ganho de peso sem mudança na alimentação.",
    },
  ],
};

function formatDate(dateStr: string) {
  const date = new Date(dateStr + "T00:00:00");
  return date.toLocaleDateString("pt-BR", { day: "numeric", month: "long", year: "numeric" });
}

export default async function BlogPostPage({ params }: Props) {
  const { slug } = await params;
  const post = blogPosts.find((p) => p.slug === slug);
  if (!post) notFound();

  const related = blogPosts
    .filter((p) => p.slug !== slug && p.categorySlug === post.categorySlug)
    .slice(0, 3);
  const fallbackRelated = related.length < 3
    ? [...related, ...blogPosts.filter((p) => p.slug !== slug).slice(0, 3 - related.length)]
    : related;

  const content = articleContents[slug] ?? [
    {
      kind: "p" as const,
      text: "A saúde e o bem-estar dos pets dependem de uma combinação de boa alimentação, rotina de exercícios, acompanhamento veterinário regular e um ambiente seguro e estimulante. Tutores bem informados fazem uma diferença enorme na qualidade de vida dos seus animais.",
    },
    {
      kind: "p" as const,
      text: "Pequenas mudanças na rotina podem ter grande impacto. Estabelecer horários regulares para alimentação, passeios e brincadeiras ajuda o pet a se sentir seguro e reduz comportamentos ansiosos. A previsibilidade é confortante para cães e gatos.",
    },
    {
      kind: "p" as const,
      text: "O acompanhamento veterinário preventivo é essencial mesmo quando o animal parece saudável. Exames anuais permitem identificar alterações precoces antes que evoluam para problemas mais sérios. Muitas doenças têm tratamento mais simples quando diagnosticadas cedo.",
    },
    {
      kind: "p" as const,
      text: "Observar o comportamento do seu pet no dia a dia é uma habilidade valiosa. Mudanças no apetite, no nível de energia, na qualidade do pelo ou nas fezes são sinais que merecem atenção. O tutor que conhece bem o animal percebe rapidamente quando algo está diferente.",
    },
    {
      kind: "p" as const,
      text: "Informação de qualidade é a base para decisões responsáveis. O Vem Aqui Pet reúne conteúdo educativo, guias práticos e acesso a profissionais para ajudar tutores a cuidar melhor dos seus pets a cada etapa da vida do animal.",
    },
  ];

  const schema = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: post.title,
    description: post.excerpt,
    datePublished: post.date,
    image: `https://vemaquipet.com.br${post.image}`,
    author: { "@type": "Organization", name: post.author },
    publisher: {
      "@type": "Organization",
      name: "Vem Aqui Pet",
      url: "https://vemaquipet.com.br",
    },
    mainEntityOfPage: `https://vemaquipet.com.br/blog/${post.slug}`,
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      />

      {/* Hero */}
      <section className="bg-[#243C4A] py-12 md:py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <Breadcrumb
            items={[
              { label: "Blog", href: "/blog" },
              { label: post.category, href: `/blog?categoria=${post.categorySlug}` },
              { label: post.title },
            ]}
          />
          <div className="mt-6">
            <div className="flex flex-wrap items-center gap-3 mb-5">
              <span className="px-3 py-1 rounded-full text-xs font-medium bg-[#D9906A]/20 text-[#D9906A]">
                {post.category}
              </span>
              <span className="flex items-center gap-1 text-xs text-[#FFF7EA]/50">
                <Clock size={11} /> {post.readTime} min de leitura
              </span>
              <span className="flex items-center gap-1 text-xs text-[#FFF7EA]/50">
                <Calendar size={11} /> {formatDate(post.date)}
              </span>
            </div>
            <h1
              className="text-2xl md:text-4xl font-extrabold text-[#FFF7EA] leading-tight mb-4"
              style={{ fontFamily: "var(--font-sora), sans-serif" }}
            >
              {post.title}
            </h1>
            <p className="text-[#FFF7EA]/70 text-base md:text-lg">{post.excerpt}</p>
          </div>
        </div>
      </section>

      {/* Content + Sidebar */}
      <section className="py-12 bg-[#FFF7EA]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-3 gap-10">
            {/* Article */}
            <article className="lg:col-span-2">
              {/* Hero image */}
              <div className="w-full h-64 md:h-80 rounded-2xl overflow-hidden mb-8 relative bg-[#E7D9C0]">
                <BlogImage
                  src={post.image}
                  alt={post.imageAlt}
                  priority
                  className="absolute inset-0 w-full h-full object-cover rounded-2xl"
                />
              </div>

              {/* Article body */}
              <div className="space-y-6">
                {content.map((block, i) => {
                  if (block.kind === "img") {
                    return (
                      <figure key={i} className="my-8 rounded-xl overflow-hidden">
                        <div className="w-full h-48 md:h-64 relative bg-[#E7D9C0] rounded-xl overflow-hidden">
                          <BlogImage
                            src={block.src}
                            alt={block.alt}
                            className="absolute inset-0 w-full h-full object-cover"
                          />
                        </div>
                        {block.caption && (
                          <figcaption className="mt-2 text-xs text-[#5F6F5A] italic text-center px-2">
                            {block.caption}
                          </figcaption>
                        )}
                      </figure>
                    );
                  }
                  return (
                    <p key={i} className="text-[#263238] leading-relaxed text-base">
                      {block.text}
                    </p>
                  );
                })}
              </div>

              {/* Tags */}
              <div className="flex flex-wrap gap-2 mt-8 pt-6 border-t border-[#F6EFE6]">
                <Tag size={13} className="text-[#5F6F5A] mt-0.5" />
                {post.tags.map((tag) => (
                  <span
                    key={tag}
                    className="px-3 py-1 rounded-full text-xs font-medium bg-[#F6EFE6] text-[#5F6F5A]"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              {/* Author */}
              <div className="mt-8 p-5 rounded-2xl bg-[#F6EFE6] flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-[#243C4A] flex items-center justify-center text-[#D9906A] font-bold text-lg">
                  V
                </div>
                <div>
                  <p className="font-semibold text-[#243C4A] text-sm" style={{ fontFamily: "var(--font-sora), sans-serif" }}>
                    {post.author}
                  </p>
                  <p className="text-xs text-[#5F6F5A] mt-0.5">
                    Conteúdo produzido pela equipe editorial do Vem Aqui Pet.
                  </p>
                </div>
              </div>

              {/* Back */}
              <div className="mt-8">
                <Link
                  href="/blog"
                  className="inline-flex items-center gap-2 text-sm font-medium text-[#2F7D5A] hover:text-[#243C4A] transition-colors"
                >
                  <ArrowLeft size={14} /> Voltar para o blog
                </Link>
              </div>
            </article>

            {/* Sidebar */}
            <aside className="space-y-6">
              <div className="rounded-2xl bg-[#F6EFE6] p-5">
                <h3
                  className="font-bold text-[#243C4A] text-sm mb-4"
                  style={{ fontFamily: "var(--font-sora), sans-serif" }}
                >
                  Mais em {post.category}
                </h3>
                <div className="space-y-3">
                  {fallbackRelated.slice(0, 3).map((p) => (
                    <Link
                      key={p.slug}
                      href={`/blog/${p.slug}`}
                      className="block group"
                    >
                      <p className="text-sm font-medium text-[#243C4A] group-hover:text-[#2F7D5A] transition-colors leading-snug">
                        {p.title}
                      </p>
                      <p className="text-xs text-[#5F6F5A] mt-0.5">{p.readTime} min</p>
                    </Link>
                  ))}
                </div>
              </div>

              <div className="rounded-2xl bg-[#243C4A] p-5">
                <h3
                  className="font-bold text-[#FFF7EA] text-sm mb-2"
                  style={{ fontFamily: "var(--font-sora), sans-serif" }}
                >
                  Receba conteúdos por e-mail
                </h3>
                <p className="text-xs text-[#FFF7EA]/60 mb-4">
                  Novidades, guias práticos e dicas para tutores.
                </p>
                <NewsletterForm compact />
              </div>

              <div className="rounded-2xl bg-[#DFF3E8] p-5">
                <h3
                  className="font-bold text-[#2F7D5A] text-sm mb-2"
                  style={{ fontFamily: "var(--font-sora), sans-serif" }}
                >
                  Precisa de atendimento?
                </h3>
                <p className="text-xs text-[#5F6F5A] mb-4">
                  Agende uma visita veterinária ou outro serviço em domicílio.
                </p>
                <Link
                  href="/agendar"
                  className="inline-flex items-center gap-1.5 text-sm font-semibold text-[#2F7D5A] hover:text-[#243C4A] transition-colors"
                >
                  Ver horários disponíveis <ArrowRight size={13} />
                </Link>
              </div>
            </aside>
          </div>
        </div>
      </section>

      {/* Related */}
      <section className="py-12 pb-16 bg-[#F6EFE6]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2
            className="text-lg font-bold text-[#243C4A] mb-6"
            style={{ fontFamily: "var(--font-sora), sans-serif" }}
          >
            Artigos relacionados
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {fallbackRelated.map((p) => (
              <BlogCard key={p.slug} post={p} />
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
