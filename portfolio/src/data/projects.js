export const projects = [
  {
    id: 'kbms',
    title: 'Knowledge Base Management System (KBMS)',
    period: 'Sep 2025 - Apr 2026',
    role: 'Fullstack Developer / AI Architect',
    type: 'Capstone Project',
    strength: 'Backend / AI / System Engineering',
    stack: ['C#', '.NET 8', 'TCP/IP', 'B+ Tree', 'WAL', 'COKB'],
    description: 'A sophisticated database management system designed to handle complex data relationships and rule-based logic with high efficiency.',
    highlights: [
      'Engineered a custom SQL-like query language (KBQL) with a full compiler pipeline (Lexer, Parser, AST).',
      'Built an inference engine using FClosure matrix algorithms and numerical solvers (Newton-Raphson).',
      'Implemented a high-performance binary storage layer with B+ Tree indexing and Write-Ahead Logging (WAL).',
      'Integrated TCP/IP-based RBAC for secure multi-user access and derivation tracing for logic transparency.'
    ],
    github: 'https://github.com/tranphat1506/KBMS'
  },
  {
    id: 'anh-gia-tattoo',
    title: 'Anh Gia Tattoo Web',
    period: 'Dec 2025 - Jan 2026',
    role: 'Freelance Full-Stack Developer',
    type: 'Commercial Project',
    strength: 'Frontend / SEO / Security',
    stack: ['PHP', 'MySQL', 'JavaScript', 'Google Ads', 'SEO'],
    description: 'An SEO-optimized studio website with custom Admin Panel, achieving 100+ daily organic visits within the first month.',
    highlights: [
      'Developed an SEO-optimized landing page generating 100+ high-potential leads monthly.',
      'Built a custom Admin Panel for seamless content updates and automated email notifications.',
      'Implemented robust anti-spam mechanisms including rate limiting and IP blocking.',
      'Designed a tracking system using SQL Stored Procedures for daily engagement statistics.'
    ],
    github: 'https://github.com/tranphat1506/AnhGiaTattoo'
  },
  {
    id: 'it-asset-management',
    title: 'IT Asset Management System',
    period: 'Sep 2025 - Nov 2025',
    role: 'Full-Stack Developer Intern',
    type: 'Enterprise System',
    strength: 'Fullstack / Workflow Automation',
    stack: ['React 19', 'Node.js', 'MongoDB', 'Redis', 'JWT', 'QR Code'],
    description: 'A comprehensive IT asset tracking system for Sen Viet Co., Ltd with automated maintenance scheduling.',
    highlights: [
      'Reduced manual tracking effort by 40% through an automated maintenance scheduling system.',
      'Engineered a secure authentication layer using JWT with Refresh Tokens and session management via Redis.',
      'Built a responsive dashboard using React, improving data entry speed by 30%.',
      'Integrated QR code management and detailed audit trails for every asset change.'
    ],
    github: 'https://github.com/tranphat1506/IT-ASSET-MANAGEMENT-SYSTEM-2'
  },
  {
    id: 'classtrack',
    title: 'ClassTrack (CTrack)',
    period: 'Feb 2026 - Mar 2026',
    role: 'Lead Backend Developer',
    type: 'System Component',
    strength: 'Infra / Conccurency / DevOps',
    stack: ['Node.js', 'RabbitMQ', 'PostgreSQL', 'Docker', 'Express'],
    description: 'A reliable school management system for tracking classroom attendance, built to handle large numbers of students simultaneously.',
    highlights: [
      'Designed a scalable check-in architecture using RabbitMQ for asynchronous processing.',
      'Achieved ~450 req/sec with 0% data loss under heavy load testing.',
      'Containerized the entire stack using Docker Compose with optimized resource limits.',
      'Implemented a Dead Letter Queue (DLQ) for robust error handling of failed check-ins.'
    ],
    github: 'https://github.com/tranphat1506/ClassTrack'
  },
  {
    id: 'natanu',
    title: 'Natanu - Healthy Snack',
    period: 'Jun 2024 - Oct 2024',
    role: 'Frontend Developer',
    type: 'Startup Project',
    strength: 'UI/UX / Branding',
    stack: ['React', 'TypeScript', 'Vite', 'CSS3'],
    description: 'The digital storefront for a healthy snack startup that won 1st Prize at the HIU Startup Competition.',
    highlights: [
      'Developed a modern, visual-heavy e-commerce landing page with localized data handling.',
      'Created interactive product displays and team sections to build brand narrative.',
      'Contributed to the overall technological strategy that secured a first-prize finish.',
      'Optimized for mobile-first experience to cater to young, health-conscious consumers.'
    ],
    github: 'https://github.com/tranphat1506/natanu-react'
  }
];

export const education = [
  {
    school: 'Sen Viet Co., Ltd',
    degree: 'Full-Stack Developer Intern',
    major: 'IT Asset Management System',
    period: 'Sep, 2025 - Nov, 2025',
    gpa: null,
    achievements: [
      'Developed an IT Asset Management System using Node.js, React, and MongoDB.',
      'Built RESTful APIs and responsive UI for asset tracking and maintenance workflows.',
      'Implemented JWT authentication and automated scheduling features.',
      'Wrote tests and used Docker for consistent development and deployment.'
    ]
  },
  {
    school: 'Hong Bang International University',
    degree: 'BACHELOR OF COMPUTER SCIENCE',
    major: 'Artificial Intelligence & Software Development',
    period: 'Sep, 2022 - Apr, 2026',
    gpa: '2.8/4.0',
    achievements: [
      'Relevant Coursework (Points): Web Application Development (9.4), Introduction to Programming (9.8), Advanced Artificial Intelligence (9.3), Graph Theory (9.1), Introduction to Artificial Intelligence (8.4), Information Security (8.1), Programming Techniques (8.0), Python Programming (8.0)'
    ]
  }
];

export const personalInfo = {
  name: 'Lê Châu Trần Phát',
  nickname: 'GeminiCanCode',
  alias: 'GCC.',
  role: 'Fullstack Developer / AI & Software Engineer',
  description: 'I am a final-year Computer Science student at HIU with a passion for building practical, high-quality software solutions. My expertise lies in fullstack development, AI applications, and creating efficient systems that solve real-world problems. I focus on writing clean, maintainable code and delivering professional digital products from the ground up.',
  email: 'lechautranphat@gmail.com',
  github: 'https://github.com/tranphat1506',
  linkedin: 'https://www.linkedin.com/in/geminicancode',
  phone: '+84 898 486 184',
  status: 'Student Year 4 (HIU)',
  profileImage: '/images/profile_image.png'
};
