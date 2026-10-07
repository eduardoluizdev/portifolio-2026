export const personalInfo = {
  name: "Eduardo Porciuncula",
  role: "Desenvolvedor Full Stack Sênior",
  taglines: [
    "Transformando ideias em produtos de alto impacto.",
    "Especialista em React, Next.js e Node.js.",
    "15+ anos construindo experiências web.",
  ],
  intro:
    "Mais de 15 anos desenvolvendo aplicações web modernas, do design ao deploy. Especialista em React, Next.js e Node.js, com foco em Clean Code, performance e Design System.",
  email: "hello@eduardoluiz.dev",
  whatsapp: "5521993548954",
  location: "Nilópolis, RJ - Brasil",
  resumeUrl: "/curriculo.pdf",
  social: {
    github: "https://github.com/eduardoluizdev",
    linkedin: "https://www.linkedin.com/in/eduardoluizdev",
  },
  stats: [
    { value: "15+", label: "Anos de experiência" },
    { value: "10+", label: "Empresas atendidas" },
    { value: "15+", label: "Tecnologias dominadas" },
    { value: "1M+", label: "Acessos/mês em produção" },
  ],
  about: [
    "Profissional com mais de 15 anos de experiência no desenvolvimento de aplicações web, atuando em todo o ciclo de vida do software, desde a concepção até o deploy e manutenção. Especialista em ReactJS, Next.js e Node.js, com sólida vivência em ambientes ágeis (Scrum/Kanban), integrações complexas, sincronização de dados e arquiteturas escaláveis e Serverless.",
    "Tenho forte foco em qualidade de código, performance e experiência do usuário, aplicando princípios de Clean Code e Design System em todos os projetos. Atuei em segmentos como saúde, pagamentos, finanças, e-commerce, notícias, jogos e Web3, desenvolvendo soluções inovadoras e seguras. Minha missão é transformar ideias em produtos de alto impacto, contribuindo para o sucesso e crescimento das empresas em que atuo.",
  ],
  specialties: [
    "Clean Code",
    "Design System",
    "React/Next.js",
    "Node.js",
    "GraphQL",
    "Arquitetura Escalável",
  ],
};

export const navLinks = [
  { href: "#hero", label: "Início" },
  { href: "#projects", label: "Projetos" },
  { href: "#technologies", label: "Tecnologias" },
  { href: "#experience", label: "Experiência" },
  { href: "#about", label: "Sobre" },
  { href: "#contact", label: "Contato" },
];

export const technologies = {
  "Front-end": ["ReactJS", "Next.js", "TypeScript", "JavaScript", "TailwindCSS"],
  "Back-end": [
    "Node.js",
    "GraphQL",
    "REST APIs",
    "Serverless",
    "PostgreSQL",
    "MongoDB",
    "CMS Headless",
  ],
  "Ferramentas & Práticas": [
    "Docker",
    "Git",
    "Jest",
    "Cypress",
    "Figma",
    "Web3",
    "Clean Code",
    "Scrum",
  ],
};

export const experience = [
  {
    period: "Julho/2026 — Atual",
    company: "Suzano",
    role: "Desenvolvedor FullStack Sênior",
    description: [
      "Desenvolvimento de novas funcionalidades e melhorias contínuas para a plataforma SOMMOS, com foco em performance e usabilidade.",
      "Migração da base de código para uma arquitetura componentizada e escalável, facilitando a manutenção e a evolução do produto.",
      "Modularização da API, organizando as regras de negócio em módulos independentes para suportar o crescimento da plataforma.",
      "Reestruturação visual do painel administrativo, criação de um quadro Kanban e upgrade das aplicações para React 19.",
    ],
  },
  {
    period: "Março/2026 — Outubro/2026",
    company: "i4H Saúde",
    role: "Desenvolvedor FullStack Sênior",
    description: [
      "Migração de todos os projetos da empresa para React 19 e Next.js 15, eliminando APIs depreciadas e melhorando performance e manutenibilidade.",
      "Processos de importação de bases de dados com scripts automatizados e monitoramento contínuo de dados sensíveis.",
      "Sincronização de dados entre PostgreSQL e MongoDB, mantendo a consistência entre bancos relacionais e não relacionais.",
      "Serviços em Node.js com arquitetura Serverless, priorizando escalabilidade e custo.",
    ],
  },
  {
    period: "Maio/2024 — Julho/2026",
    company: "Yever",
    role: "Desenvolvedor Front-end Sênior",
    description: [
      "Desenvolvimento e manutenção de aplicações de pagamento críticas (Checkout, Cliente, Público e Administração) com Next.js 13–16, processando milhares de transações diárias.",
      "Construção de um Design System escalável com TailwindCSS e React, reduzindo o tempo de desenvolvimento em 40%.",
      "Liderança do desenvolvimento colaborativo com o time de design, com React Hook Form, Jest e Cypress e mais de 90% de cobertura de código.",
    ],
  },
  {
    period: "Fevereiro/2024 — Junho/2024",
    company: "Banco Master (via Eclipseworks)",
    role: "Desenvolvedor Front-end Sênior",
    description: [
      "Desenvolvimento de um sistema financeiro-jurídico para gestão de precatórios com ReactJS, Ant Design e React Query, processando milhões em acordos judiciais.",
      "Criação de uma biblioteca com mais de 50 componentes reutilizáveis, reduzindo o ciclo de desenvolvimento em 35%.",
    ],
  },
  {
    period: "Junho/2021 — Junho/2024",
    company: "Taller",
    role: "Desenvolvedor FullStack Sênior",
    description: [
      "Desenvolvimento de portais e aplicações Web3 com ReactJS, Next.js e Node.js.",
      "Integrações de API com gateways de pagamento e sistemas externos via GraphQL.",
      "Atuação em aplicações com mais de 1 milhão de acessos mensais, garantindo escalabilidade e performance.",
      "Desenvolvimento mobile com Flutter e soluções com IA (ChatGPT 3/4).",
    ],
  },
  {
    period: "Janeiro/2018 — Janeiro/2025",
    company: "Devshub",
    role: "Desenvolvedor FullStack Sênior",
    description: [
      "Mais de 15 aplicações SaaS e Micro-SaaS com React.js, Next.js e Node.js, gerando mais de US$ 500 mil em receita recorrente.",
      "APIs RESTful e integrações GraphQL com sistemas externos, melhorando a eficiência da sincronização de dados em 60%.",
      "CMS headless (Prismic, WordPress, Strapi) para o gerenciamento de conteúdo de mais de 50 sites de clientes.",
    ],
  },
  {
    period: "Junho/2016 — Junho/2021",
    company: "ISBrasil",
    role: "Desenvolvedor Front-end",
    description: [
      "Desenvolvimento de sites e sistemas com ReactJS, Next.js e WordPress, além de HTML5, CSS3, SASS e JavaScript.",
      "Criação de temas WordPress personalizados, manutenção de sistemas legados em PHP e otimização de hospedagens cPanel.",
    ],
  },
];

export const education = [
  {
    period: "2025 – 2027",
    institution: "UniFECAF",
    course: "Inteligência Artificial e Automação Digital",
  },
  {
    period: "2021",
    institution: "Rocketseat",
    course: "Bootcamp ReactJS",
  },
  {
    period: "2021 – 2022",
    institution: "JStack",
    course: "Tecnologia da Informação",
  },
  {
    period: "2015",
    institution: "Instituto Infnet",
    course: "Tecnólogo em Design Gráfico",
  },
];
