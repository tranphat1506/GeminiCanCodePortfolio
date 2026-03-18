// Portfolio Projects Data - Refined with localized descriptions and bilingual content
export const projects = [
  // {
  //   id: 'kbms',
  //   title: 'Knowledge Base Management System (KBMS)',
  //   period: 'Sep 2025 - Apr 2026',
  //   role: 'Fullstack Developer / AI Architect',
  //   roleVi: 'Phát triển Fullstack / Kiến trúc sư AI',
  //   type: 'Capstone Project',
  //   typeVi: 'Đồ án tốt nghiệp',
  //   strength: 'Backend / AI / System Engineering',
  //   strengthVi: 'Backend / AI / Kỹ thuật hệ thống',
  //   stack: ['C#', '.NET 8', 'TCP/IP', 'B+ Tree', 'WAL', 'COKB'],
  //   tags: ['Backend', 'AI', 'Database'],
  //   image: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc48?q=80&w=2000&auto=format&fit=crop',
  //   description: 'A sophisticated database management system designed to handle complex data relationships and rule-based logic with high efficiency.',
  //   descriptionVi: 'Hệ quản trị cơ sở tri thức hiện đại được thiết kế để xử lý các mối quan hệ dữ liệu phức tạp và logic dựa trên luật với hiệu suất cao.',
  //   highlights: [
  //     'Engineered a custom SQL-like query language (KBQL) with a full compiler pipeline (Lexer, Parser, AST).',
  //     'Built an inference engine using FClosure matrix algorithms and numerical solvers (Newton-Raphson).',
  //     'Implemented a high-performance binary storage layer with B+ Tree indexing and Write-Ahead Logging (WAL).',
  //     'Integrated TCP/IP-based RBAC for secure multi-user access and derivation tracing for logic transparency.'
  //   ],
  //   highlightsVi: [
  //     'Xây dựng ngôn ngữ truy vấn giống SQL (KBQL) với quy trình biên dịch hoàn chỉnh (Lexer, Parser, AST).',
  //     'Phát triển công cụ suy diễn sử dụng thuật toán ma trận FClosure và các bộ giải số học (Newton-Raphson).',
  //     'Triển khai lớp lưu trữ nhị phân hiệu suất cao với chỉ mục B+ Tree và Write-Ahead Logging (WAL).',
  //     'Tích hợp RBAC dựa trên TCP/IP để truy cập đa người dùng an toàn và truy vết suy dẫn minh bạch.'
  //   ],
  //   github: 'https://github.com/tranphat1506/KBMS'
  // },
  // {
  //   id: 'anh-gia-tattoo',
  //   title: 'Anh Gia Tattoo Web',
  //   period: 'Dec 2025 - Jan 2026',
  //   role: 'Freelance Full-Stack Developer',
  //   roleVi: 'Phát triển Full-Stack tự do',
  //   type: 'Commercial Project',
  //   typeVi: 'Dự án thương mại',
  //   strength: 'Frontend / SEO / Security',
  //   strengthVi: 'Frontend / SEO / Bảo mật',
  //   stack: ['PHP', 'MySQL', 'JavaScript', 'Google Ads', 'SEO'],
  //   tags: ['Frontend', 'SEO', 'Business'],
  //   image: 'https://images.unsplash.com/photo-1598371380353-840905e3698b?q=80&w=2000&auto=format&fit=crop',
  //   description: 'An SEO-optimized studio website with custom Admin Panel, achieving 100+ daily organic visits within the first month.',
  //   descriptionVi: 'Website studio tối ưu SEO với bảng điều khiển tùy chỉnh, đạt hơn 100 lượt truy cập tự nhiên mỗi ngày ngay trong tháng đầu tiên.',
  //   highlights: [
  //     'Developed an SEO-optimized landing page generating 100+ high-potential leads monthly.',
  //     'Built a custom Admin Panel for seamless content updates and automated email notifications.',
  //     'Implemented robust anti-spam mechanisms including rate limiting and IP blocking.',
  //     'Designed a tracking system using SQL Stored Procedures for daily engagement statistics.'
  //   ],
  //   highlightsVi: [
  //     'Phát triển trang đích tối ưu SEO tạo ra hơn 100 khách hàng tiềm năng mỗi tháng.',
  //     'Xây dựng bảng điều khiển quản trị tùy chỉnh để cập nhật nội dung mượt mà và thông báo email tự động.',
  //     'Triển khai các cơ chế chống spam mạnh mẽ bao gồm giới hạn tốc độ và chặn IP.',
  //     'Thiết kế hệ thống theo dõi sử dụng SQL Stored Procedures cho thống kê tương tác hàng ngày.'
  //   ],
  //   github: 'https://github.com/tranphat1506/AnhGiaTattoo'
  // },
  // {
  //   id: 'it-asset-management',
  //   title: 'IT Asset Management System',
  //   period: 'Sep 2025 - Nov 2025',
  //   role: 'Full-Stack Developer Intern',
  //   roleVi: 'Thực tập sinh Phát triển Full-Stack',
  //   type: 'Enterprise System',
  //   typeVi: 'Hệ thống doanh nghiệp',
  //   strength: 'Fullstack / Workflow Automation',
  //   strengthVi: 'Fullstack / Tự động hóa quy trình',
  //   stack: ['React 19', 'Node.js', 'MongoDB', 'Redis', 'JWT', 'QR Code'],
  //   tags: ['React', 'Enterprise', 'Cloud'],
  //   image: 'https://images.unsplash.com/photo-1551288049-bbbda5366391?q=80&w=2000&auto=format&fit=crop',
  //   description: 'A comprehensive IT asset tracking system for SEN VIET SOFTWARE JOINT STOCK COMPANY with automated maintenance scheduling.',
  //   descriptionVi: 'Hệ thống theo dõi tài sản CNTT toàn diện cho CÔNG TY CỔ PHẦN PHẦN MỀM SEN VIỆT với tính năng lập lịch bảo trì tự động.',
  //   highlights: [
  //     'Reduced manual tracking effort by 40% through an automated maintenance scheduling system.',
  //     'Engineered a secure authentication layer using JWT with Refresh Tokens and session management via Redis.',
  //     'Built a responsive dashboard using React, improving data entry speed by 30%.',
  //     'Integrated QR code management and detailed audit trails for every asset change.'
  //   ],
  //   highlightsVi: [
  //     'Giảm 40% công sức theo dõi thủ công thông qua hệ thống lập lịch bảo trì tự động.',
  //     'Thiết kế lớp xác thực an toàn sử dụng JWT với Refresh Tokens và quản lý phiên qua Redis.',
  //     'Xây dựng bảng điều khiển phản hồi nhanh bằng React, cải thiện tốc độ nhập dữ liệu lên 30%.',
  //     'Tích hợp quản lý mã QR và nhật ký kiểm tra chi tiết cho mọi thay đổi tài sản.'
  //   ],
  //   github: 'https://github.com/tranphat1506/IT-ASSET-MANAGEMENT-SYSTEM-2'
  // },
  // {
  //   id: 'classtrack',
  //   title: 'ClassTrack (CTrack)',
  //   period: 'Feb 2026 - Mar 2026',
  //   role: 'Lead Backend Developer',
  //   roleVi: 'Phát triển Backend chính',
  //   type: 'System Component',
  //   typeVi: 'Thành phần hệ thống',
  //   strength: 'Infra / Conccurency / DevOps',
  //   strengthVi: 'Hạ tầng / Đồng thời / DevOps',
  //   stack: ['Node.js', 'RabbitMQ', 'PostgreSQL', 'Docker', 'Express'],
  //   tags: ['Backend', 'PostgreSQL', 'Infra'],
  //   image: 'https://images.unsplash.com/photo-1517694712202-14dd9538aa97?q=80&w=2000&auto=format&fit=crop',
  //   description: 'A reliable school management system for tracking classroom attendance, built to handle large numbers of students simultaneously.',
  //   descriptionVi: 'Hệ thống quản lý trường học tin cậy để theo dõi điểm danh lớp học, được xây dựng để xử lý số lượng lớn sinh viên cùng lúc.',
  //   highlights: [
  //     'Design a scalable check-in architecture using RabbitMQ for asynchronous processing.',
  //     'Achieved ~450 req/sec with 0% data loss under heavy load testing.',
  //     'Containerized the entire stack using Docker Compose with optimized resource limits.',
  //     'Implemented a Dead Letter Queue (DLQ) for robust error handling of failed check-ins.'
  //   ],
  //   highlightsVi: [
  //     'Thiết kế kiến trúc điểm danh có thể mở rộng sử dụng RabbitMQ để xử lý bất đồng bộ.',
  //     'Đạt ~450 yêu cầu/giây với 0% mất dữ liệu trong thử nghiệm tải nặng.',
  //     'Container hóa toàn bộ stack sử dụng Docker Compose với giới hạn tài nguyên tối ưu.',
  //     'Triển khai Dead Letter Queue (DLQ) để xử lý lỗi mạnh mẽ cho các lượt điểm danh thất bại.'
  //   ],
  //   github: 'https://github.com/tranphat1506/ClassTrack'
  // },
  // {
  //   id: 'natanu',
  //   title: 'Natanu - Healthy Snack',
  //   period: 'Jun 2024 - Oct 2024',
  //   role: 'Frontend Developer',
  //   roleVi: 'Phát triển Frontend',
  //   type: 'Startup Project',
  //   typeVi: 'Dự án Startup',
  //   strength: 'UI/UX / Branding',
  //   strengthVi: 'UI/UX / Thương hiệu',
  //   stack: ['React', 'TypeScript', 'Vite', 'CSS3'],
  //   tags: ['Startup', 'React', 'Branding'],
  //   image: 'https://images.unsplash.com/photo-1512428559087-560fa5ceab42?q=80&w=2000&auto=format&fit=crop',
  //   description: 'The digital storefront for a healthy snack startup that won 1st Prize at the HIU Startup Competition.',
  //   descriptionVi: 'Cửa hàng trực tuyến cho startup đồ ăn nhẹ tốt cho sức khỏe, đã giành giải Nhất tại Cuộc thi Startup HIU.',
  //   highlights: [
  //     'Developed a modern, visual-heavy e-commerce landing page with localized data handling.',
  //     'Created interactive product displays and team sections to build brand narrative.',
  //     'Contributed to the overall technological strategy that secured a first-prize finish.',
  //     'Optimized for mobile-first experience to cater to young, health-conscious consumers.'
  //   ],
  //   highlightsVi: [
  //     'Phát triển trang đích thương mại điện tử hiện đại, tập trung hình ảnh với xử lý dữ liệu bản địa hóa.',
  //     'Tạo các màn hình hiển thị sản phẩm tương tác và phần giới thiệu nhóm để xây dựng câu chuyện thương hiệu.',
  //     'Đóng góp vào chiến lược công nghệ tổng thể giúp đạt vị trí quán quân.',
  //     'Tối ưu hóa trải nghiệm ưu tiên di động để phục vụ người tiêu dùng trẻ coi trọng sức khỏe.'
  //   ],
  //   github: 'https://github.com/tranphat1506/natanu-react'
  // }
];

export const education = [
  {
    id: 'freelance',
    school: 'FULLSTACK FREELANCER',
    schoolVi: 'FULLSTACK FREELANCER (TỰ DO)',
    degree: 'Web & AI Model Developer',
    degreeVi: 'Phát triển Web & Mô hình AI',
    major: 'Custom Web Design & AI Implementation',
    majorVi: 'Thiết kế Web & Triển khai AI theo yêu cầu',
    period: '2022 - 2026',
    gpa: null,
    achievements: [
      'Successfully designed and implemented custom web solutions for diverse clients using React, .NET, and Node.js.',
      'Developed and integrated AI models (LLMs, RAG) into business workflows to automate tasks and improve efficiency.',
      'Designed architectural blueprints and technical roadmaps for small-to-medium scale digital products.',
      'Maintained consistent client satisfaction through high-quality code delivery and technical consultation.'
    ],
    achievementsVi: [
      'Thiết kế và triển khai thành công các giải pháp web tùy chỉnh cho nhiều khách hàng khác nhau sử dụng React, .NET và Node.js.',
      'Phát triển và tích hợp các mô hình AI (LLMs, RAG) vào quy trình kinh doanh để tự động hóa tác vụ và tăng hiệu quả.',
      'Thiết kế bản vẽ kiến trúc và lộ trình kỹ thuật cho các sản phẩm kỹ thuật số quy mô vừa và nhỏ.',
      'Duy trì sự hài lòng của khách hàng thông qua việc bàn giao code chất lượng cao và tư vấn kỹ thuật chuyên sâu.'
    ]
  },
  {
    id: 'senviet',
    school: 'SEN VIET SOFTWARE JOINT STOCK COMPANY',
    schoolVi: 'CÔNG TY CỔ PHẦN PHẦN MỀM SEN VIỆT',
    degree: 'Full-Stack Developer Intern',
    degreeVi: 'Thực tập sinh Phát triển Full-Stack',
    major: 'IT Asset Management System',
    majorVi: 'Hệ thống Quản lý Tài sản CNTT',
    period: 'Sep, 2025 - Nov, 2025',
    gpa: null,
    achievements: [
      'Developed an IT Asset Management System using Node.js, React, and MongoDB.',
      'Built RESTful APIs and responsive UI for asset tracking and maintenance workflows.',
      'Implemented JWT authentication and automated scheduling features.',
      'Wrote tests and used Docker for consistent development and deployment.'
    ],
    achievementsVi: [
      'Phát triển Hệ thống Quản lý Tài sản CNTT sử dụng Node.js, React và MongoDB.',
      'Xây dựng các API RESTful và giao diện phản hồi nhanh để theo dõi tài sản và quy trình bảo trì.',
      'Triển khai xác thực JWT và các tính năng lập lịch tự động.',
      'Viết bài kiểm tra và sử dụng Docker để phát triển và triển khai đồng bộ.'
    ]
  },
  {
    id: 'hiu',
    school: 'Hong Bang International University',
    schoolVi: 'Đại học Quốc tế Hồng Bàng',
    degree: 'BACHELOR OF COMPUTER SCIENCE',
    degreeVi: 'CỬ NHÂN KHOA HỌC MÁY TÍNH',
    major: 'Artificial Intelligence & Software Development',
    majorVi: 'Trí tuệ nhân tạo & Phát triển phần mềm',
    period: 'Sep, 2022 - Apr, 2026',
    gpa: null,
    achievements: [
      'HIU Startup Competition: Innovative healthy snack startup project focusing on nutritional value and market potential – First Prize',
      'AI-based Efficiency Improvement Contest (BOSCH): AI-integrated smart scale solution for automated warehouse inventory and mechanical inspection – Consolation Prize',
      'BUIDL Vietnam Hackathon: Blockchain-based digital music rights management system using Smart Contracts and decentralized storage – Consolation Prize'
    ],
    achievementsVi: [
      'Cuộc thi Khởi nghiệp HIU: Dự án startup đồ ăn nhẹ lành mạnh sáng tạo, tập trung vào giá trị dinh dưỡng và tiềm năng thị trường – Giải Nhất',
      'Cuộc thi Cải thiện Hiệu quả dựa trên AI (BOSCH): Giải pháp cân thông minh tích hợp AI để kiểm kho tự động và kiểm tra cơ khí – Giải Khuyến khích',
      'Hackathon BUIDL Vietnam: Hệ thống quản lý bản quyền âm nhạc kỹ thuật số dựa trên Blockchain sử dụng Smart Contracts và lưu trữ phi tập trung – Giải Khuyến khích'
    ]
  }
];

export const personalInfo = {
  name: 'Lê Châu Trần Phát',
  nickname: 'GeminiCanCode',
  alias: 'GCC.',
  role: 'Fullstack Developer / AI & Software Engineer',
  roleVi: 'Phát triển Fullstack / Kỹ sư AI & Phần mềm',
  description: "I'm Phat, a final-year CS student at HIU. I'm all about building software that actually works and solves real problems. My focus is on combining deep technical execution with a professional, detail-oriented approach to deliver high-quality digital products.",
  descriptionVi: 'Mình là Phát, sinh viên kiến tập ngành Khoa học máy tính tại HIU. Thay vì chỉ tập trung vào lý thuyết, mình ưu tiên việc tạo ra những sản phẩm thực tế, có thể giải quyết tốt các vấn đề cụ thể bằng tư duy kỹ thuật chuyên sâu và thái độ làm việc chỉn chu.',
  email: 'lechautranphat@gmail.com',
  github: 'https://github.com/tranphat1506',
  linkedin: 'https://www.linkedin.com/in/geminicancode',
  phone: '+84 898 486 184',
  status: 'Student Year 4 (HIU)',
  statusVi: 'Sinh viên năm 4 (HIU)',
  profileImage: '/images/profile_image.png',
  skills: {
    programming: ['JavaScript (ES6+)', 'TypeScript', 'C#'],
    frontend: ['ReactJS', 'React Native', 'Next.js', 'HTML5', 'CSS3', 'Tailwind CSS', 'Material UI', 'Native Base'],
    backend: ['Express.js', 'Next.js', 'ASP.NET Core', 'Entity Framework Core (EF Core)'],
    dbInfra: ['MongoDB', 'MySQL', 'SQL Server', 'Redis', 'RabbitMQ'],
    devops: ['Git', 'GitHub', 'Nginx', 'Linux Server', 'GitHub Actions (CI/CD)', 'Docker'],
    aiIntern: [
      'Machine Learning (Reg, Clf, Clust)',
      'Deep Learning (CNN, RNN Basics)',
      'Computer Vision (OpenCV)',
      'LLM APIs (OpenAI, Gemini)',
      'Prompt Engineering'
    ],
    softSkills: ['Problem Solving', 'Team Collaboration', 'Result-oriented Leadership', 'Time Management', 'Fast Learning & Adaptability']
  },
  skillsVi: {
    programming: ['JavaScript (ES6+)', 'TypeScript', 'C#'],
    frontend: ['ReactJS', 'React Native', 'Next.js', 'HTML5', 'CSS3', 'Tailwind CSS', 'Material UI', 'Native Base'],
    backend: ['Express.js', 'Next.js', 'ASP.NET Core', 'EF Core'],
    dbInfra: ['MongoDB', 'MySQL', 'SQL Server', 'Redis', 'RabbitMQ'],
    devops: ['Git', 'GitHub', 'Nginx', 'Linux Server', 'CI/CD', 'Docker'],
    aiIntern: [
      'Machine Learning (Cơ bản)',
      'Deep Learning (CNN, RNN)',
      'Thị giác máy tính (OpenCV)',
      'Tích hợp LLM APIs',
      'Prompt Engineering'
    ],
    softSkills: ['Giải quyết vấn đề', 'Làm việc nhóm', 'Lãnh đạo tập trung kết quả', 'Quản lý thời gian', 'Học nhanh & Thích nghi']
  }
};
