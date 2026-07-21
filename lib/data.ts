import { NavItem, SkillItem, IndustryExperienceItem, AcademicInstitutionItem } from "./types";
import { LuHouse, LuUser, LuBriefcase, LuCode, LuMail } from "react-icons/lu";

export const NAV_ITEMS: NavItem[] = [
  { id: "hero", label: "Home", icon: LuHouse },
  { id: "about", label: "Motivation", icon: LuUser },
  { id: "experience", label: "Experience", icon: LuBriefcase },
  { id: "projects", label: "Blog", icon: LuCode },
  { id: "contact", label: "Contact", icon: LuMail },
];

export const HERO_DATA = {
  badge: "AI/ML Engineer & Data Scientist",
  headlinePrefix: "Behind the MLOps, ",
  headlineHighlight: "are the subsystems.",
  bioPrefix: "Production ML systems, and ",
  bioHighlight: "AI agents",
  bioSuffix:
    " bridging last mile modelling with the cloud infrastructure needed to sustain reliable operations.",
  ctaText: "Get in Touch",
  ctaLink: "#contact",
  secondaryCtaText: "Explore Blog",
  secondaryCtaLink: "#projects",
};

export const SKILLS_DATA: SkillItem[] = [
  // Core ML & AI
  { name: "Python", category: "Core ML & AI", logo: "/logos/python.png", url: "https://www.python.org/" },
  { name: "PyTorch", category: "Core ML & AI", logo: "/logos/pytorch.png", url: "https://pytorch.org/" },
  { name: "LangChain", category: "Core ML & AI", logo: "/logos/langchain.png", url: "https://www.langchain.com/" },
  { name: "OpenAI", category: "Core ML & AI", logo: "/logos/openai.png", url: "https://openai.com/" },
  { name: "Google Gemini", category: "Core ML & AI", logo: "/logos/googlegemini.png", url: "https://gemini.google.com/" },
  { name: "Hugging Face", category: "Core ML & AI", logo: "/logos/huggingface.png", url: "https://huggingface.co/" },
  { name: "Scikit-learn", category: "Core ML & AI", logo: "/logos/sklearn.png", url: "https://scikit-learn.org/" },
  { name: "NumPy", category: "Core ML & AI", logo: "/logos/numpy.png", url: "https://numpy.org/" },
  { name: "Pandas", category: "Core ML & AI", logo: "/logos/pandas.jpeg", url: "https://pandas.pydata.org/" },
  { name: "Wolfram", category: "Core ML & AI", logo: "/logos/wolfram.png", url: "https://www.wolfram.com/" },

  // Backend & Distributed Systems
  { name: "FastAPI", category: "Backend & Distributed Systems", logo: "/logos/fastapi.png", url: "https://fastapi.tiangolo.com/" },
  { name: "Django", category: "Backend & Distributed Systems", logo: "/logos/django.png", url: "https://www.djangoproject.com/" },
  { name: "Apache Spark", category: "Backend & Distributed Systems", logo: "/logos/apachespark.png", url: "https://spark.apache.org/" },
  { name: "Temporal.io", category: "Backend & Distributed Systems", logo: "/logos/temporal.png", url: "https://temporal.io/" },
  { name: "Apache Kafka", category: "Backend & Distributed Systems", logo: "/logos/apachekafka.png", url: "https://kafka.apache.org/" },
  { name: "Apache Airflow", category: "Backend & Distributed Systems", logo: "/logos/airflow.png", url: "https://airflow.apache.org/" },
  { name: "PostgreSQL", category: "Backend & Distributed Systems", logo: "/logos/postgresql.png", url: "https://www.postgresql.org/" },
  { name: "MongoDB", category: "Backend & Distributed Systems", logo: "/logos/mongodb.png", url: "https://www.mongodb.com/" },
  { name: "Redis", category: "Backend & Distributed Systems", logo: "/logos/redis.png", url: "https://redis.io/" },
  { name: "Qdrant", category: "Backend & Distributed Systems", logo: "/logos/qdrant.png", url: "https://qdrant.tech/" },

  // DevOps, Cloud & Infrastructure
  { name: "Docker / uv", category: "DevOps, Cloud & Infrastructure", logo: "/logos/docker.png", url: "https://www.docker.com/" },
  { name: "AWS", category: "DevOps, Cloud & Infrastructure", logo: "/logos/aws.png", url: "https://aws.amazon.com/" },
  { name: "Linux", category: "DevOps, Cloud & Infrastructure", logo: "/logos/linux.png", url: "https://www.linux.org/" },
  { name: "Terraform", category: "DevOps, Cloud & Infrastructure", logo: "/logos/terraform.png", url: "https://www.terraform.io/" },
  { name: "GitHub Actions", category: "DevOps, Cloud & Infrastructure", logo: "/logos/githubactions.png", url: "https://github.com/features/actions" },
  { name: "Git", category: "DevOps, Cloud & Infrastructure", logo: "/logos/git.png", url: "https://git-scm.com/" },
  { name: "Sentry", category: "DevOps, Cloud & Infrastructure", logo: "/logos/sentry.png", url: "https://sentry.io/" },
  { name: "Vercel", category: "DevOps, Cloud & Infrastructure", logo: "/logos/vercel.png", url: "https://vercel.com/" },

  // Frontend & Application Frameworks
  { name: "Next.js", category: "Frontend & Application Frameworks", logo: "/logos/nextjs.png", url: "https://nextjs.org/" },
  { name: "React", category: "Frontend & Application Frameworks", logo: "/logos/react.png", url: "https://reactjs.org/" },
  { name: "TypeScript", category: "Frontend & Application Frameworks", logo: "/logos/typescript.png", url: "https://www.typescriptlang.org/" },
  { name: "Gradio", category: "Frontend & Application Frameworks", logo: "/logos/gradio.png", url: "https://www.gradio.app/" },
  { name: "Streamlit", category: "Frontend & Application Frameworks", logo: "/logos/streamlit.png", url: "https://streamlit.io/" },
  { name: "Chakra UI", category: "Frontend & Application Frameworks", logo: "/logos/chakra.png", url: "https://chakra-ui.com/" },
];

export const INDUSTRY_EXPERIENCE: IndustryExperienceItem[] = [
  {
    image: "/logos/arkham.jpg",
    company: "Arkham Technologies",
    title: "Senior Data Scientist",
    externalUrl: "https://www.arkham.tech/es",
    technologies: [
      "EMR Serverless",
      "Spark",
      "Temporal",
      "Kafka",
      "FastAPI",
      "PostgreSQL",
      "Docker",
      "AWS EMR",
      "GitHub Actions",
      "Terraform",
    ],
    date: "April 2025 – Present",
    details: [
      "Scaled 1K JUMEX models on 100 EMR Serverless workers via Spark, Temporal, Kafka, FastAPI; integrated into ML platform (SDK, Livy).",
      "Automated AI agent monitoring via verifiable metrics and LLM-as-Judge via FastAPI, PostgreSQL, Temporal and Arkham's dashboard.",
      "Led CI/CD of PyPI and Docker for staging and prod ML platform via AWS EMR, GitHub Actions, Terraform. 25% memory, 10× faster vs baseline.",
      "Engineered cross-provider LLM integrations for AI agent with 100+/week users.",
      "Debugged FastAPI/Kafka ML and AI microservices via CloudWatch and Sentry.",
    ],
    keywords: [
      "ML Platform Engineering",
      "AI Agents",
      "CI/CD",
      "Big Data",
      "Distributed Compute",
    ],
  },
  {
    image: "/logos/mxai.png",
    company: "MXAI",
    title: "AI Engineer",
    externalUrl: "https://mxai.dev",
    technologies: [
      "Next.js",
      "AWS",
      "LlamaIndex",
      "Redis",
      "Python",
      "TypeScript",
    ],
    date: "November 2024 – April 2025",
    details: [
      "Ran client discovery and shipped deployable catalog and FAQ AI agent MVPs (+95% recall@3 on 10% of SKU) with Next.js, AWS, LlamaIndex and Redis.",
    ],
    keywords: ["RAG", "AI Agents", "Full Stack", "LlamaIndex", "Client Discovery"],
  },
  {
    image: "/logos/kuona.jpeg",
    company: "Kuona",
    title: "Data Scientist",
    externalUrl: "https://kuona.ai/en/",
    technologies: [
      "PyTorch",
      "Django",
      "PostgreSQL",
      "AWS",
      "Docker",
      "Pandas",
      "scikit-learn",
    ],
    date: "November 2023 – June 2024",
    details: [
      "Tuned PyTorch RNNs for sales forecasting in enterprise retail revenue management for major clients (12% forward MAPE); AWS batch ML via Django.",
      "Modeled competitors' pricing data, reducing forecasting MAPE by 40% and enabling price-demand elasticity analysis via Pandas and scikit-learn.",
      "Designed QLoRA and sales-weighted loss functions for revenue KPIs.",
    ],
    keywords: ["Forecasting", "PyTorch RNNs", "Revenue Management", "QLoRA"],
  },
  {
    image: "/logos/entropia_ai.jpeg",
    company: "Entropía AI",
    title: "Jr. Data Scientist",
    externalUrl: "https://entropia.ai/",
    technologies: [
      "Python",
      "bs4",
      "Airflow",
      "MongoDB",
      "LlamaIndex",
      "LangChain",
      "Dash",
      "Plotly",
    ],
    date: "February 2023 – November 2023",
    details: [
      "Built 8 ETL pipelines (Python, bs4, Airflow) ingesting 2K docs with 100M+ tokens from official Mexican government sites into MongoDB for legal partners.",
      "Engineered RAG pipelines; raised custom QA LLM-as-Judge accuracy from 8% to 72% on legal corpora using LlamaIndex, MongoDB and LangChain.",
    ],
    keywords: ["ETL Pipelines", "RAG", "LlamaIndex", "MongoDB", "Airflow"],
  },
  {
    image: "/logos/wolfram.png",
    company: "Wolfram Research",
    title: "Software Developer",
    externalUrl: "https://www.wolfram.com/company/",
    technologies: ["Wolfram Language", "XML", "Wolfram Cloud"],
    date: "February 2021 – February 2022",
    details: [
      "Sysadmin. Fullstack dev of portal for 'Wolfram Summer Camp' (+40 users).",
      "Published paper 'Turing Patterns in Networks' in Complex Systems Journal.",
    ],
    keywords: ["Full Stack", "Sysadmin", "Wolfram Language", "Complex Systems"],
  },
];

export const ACADEMIC_INSTITUTIONS: AcademicInstitutionItem[] = [
  {
    institutionAcronym: "UNAM",
    institutionName: "National Autonomous University of Mexico",
    image: "/logos/unam.png",
    externalLink: "http://english.unam.mx/",
    startDate: "August 2015",
    endDate: "December 2022",
    summary: `UNAM stands as Mexico's premier public research university, consistently ranked among Latin America's top institutions. With over 360,000 students and 40,000 academic staff, it maintains extensive research partnerships with leading global institutions and contributes significantly to international scientific publications. The university's commitment to academic excellence is matched by its dedication to social responsibility and technological innovation.`,
  },
  {
    institutionAcronym: "CFATA-UNAM",
    institutionName: "Center of Applied Physics and Advanced Technology",
    degree: "Bachelor in Science",
    major: "Technology",
    image: "/logos/cfata.png",
    externalLink: "http://www.fata.unam.mx/en/",
    summary: `CFATA represents UNAM's innovative approach to technological education, hosting nine specialized research centers in Juriquilla's research hub. As part of this unique ecosystem, students engage directly with cutting-edge research projects and industry partnerships. The center's interdisciplinary environment combines theoretical foundations with practical applications, fostering collaboration between academia and industry through its High Technology Unit. This setting provided me hands-on experience in applying mathematical and physical principles to solve real-world technological challenges.`,
    startDate: "August 2015",
    endDate: "June 2020",
    notableCurriculum: [
      "Signal processing",
      "Numerical methods",
      "Network science",
      "Discrete mathematics",
      "Parallel computing",
      "Non-linear dynamics",
      "Linear algebra",
      "Probability and statistics",
      "Physical chemistry",
      "Biophysics",
    ],
    status: "Completed Degree",
  },
  {
    institutionAcronym: "University of Groningen",
    institutionName: "University of Groningen",
    degree: "Exchange Semester",
    major: "Artificial Intelligence",
    image: "/logos/groningen.png",
    externalLink: "https://www.rug.nl/research/bernoulli/?lang=en",
    startDate: "February 2019",
    endDate: "June 2019",
    summary: `At the Bernoulli Institute for Mathematics and AI, I engaged with both theoretical foundations and practical applications of machine learning. The institute's focus on mathematical rigor combined with real-world problem solving provided invaluable theoretical knowledge in Computer Science, Artificial Intelligence and Data Science working on image processing tasks like image segmentation at master level courses on AWS hardware with a pretrained VGG as well as custom architectures.`,
    notableCurriculum: [
      "Artificial intelligence",
      "Algorithms and data structures",
      "Deep learning",
      "Relational databases",
    ],
    status: "Completed Degree",
  },
  {
    institutionAcronym: "IIMAS-UNAM",
    institutionName: "Institute of Interdisciplinary Mathematics and Applied Systems",
    degree: "Master in Science",
    major: "Mathematics",
    image: "/logos/iimas.webp",
    externalLink: "https://www.matem.unam.mx/servicios/becarios/registros/danielparra",
    summary: `IIMAS stands at the forefront of interdisciplinary mathematical research in Latin America, specializing in the mathematical foundations of artificial intelligence and complex systems. The institute's approach combines rigorous theoretical frameworks with practical applications involving machine learning and statistical analysis like analysis of brain activity through Fitzhugh-Nagumo model, differential privacy mechanisms and spiking neural networks to leverage analog hardware for energy efficient AI.`,
    startDate: "August 2020",
    endDate: "December 2022",
    notableCurriculum: [
      "Introduction to theoretical machine learning",
      "Introduction to information theory",
      "Introduction to statistical privacy",
      "Numerical analysis",
      "Real analysis",
      "Frequentist statistics",
    ],
    status: "Completed Non-Degree",
  },
];

export const LOOP_INDUSTRY = [...INDUSTRY_EXPERIENCE, ...INDUSTRY_EXPERIENCE, ...INDUSTRY_EXPERIENCE, ...INDUSTRY_EXPERIENCE];
export const LOOP_ACADEMIC = [...ACADEMIC_INSTITUTIONS, ...ACADEMIC_INSTITUTIONS, ...ACADEMIC_INSTITUTIONS, ...ACADEMIC_INSTITUTIONS];


export const SOCIAL_LINKS = {
  github: "https://github.com/danivpv",
  linkedin: "https://linkedin.com/in/danivpv",
  email: "danivpv@gmail.com",
  huggingface: "https://huggingface.co/danivpv",
};


