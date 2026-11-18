// ONE place to edit your details. Every component reads from here.

export const site = {
  name: "Henke Fourie",
  firstName: "Henke",
  role: "Junior Python & AI Agent Developer",
  tagline:
    "Python developer building AI agents and backend APIs. Agents use real tools, the maths stays in tested code, and a person approves every change.",
  location: "South Africa",
  github: "https://github.com/henke4rie-oss",
  // Public email shown as a mail icon. Leave "" to hide it (contact form still works).
  email: "",
  // TODO: put your LinkedIn URL here, or set to "" to hide the icon
  linkedin: "https://www.linkedin.com/in/henke-fourie-05115240a/",
  // TODO: sign up free at formspree.io, create a form, paste the ID here
  formspreeId: "mzerrbzv",
  // Public URL of the deployed site (used for meta tags)
  siteUrl: "https://henke4rie-oss.github.io/portfolio/",
};

export interface Project {
  title: string;
  summary: string;
  stack: string[];
  status: string;
  repo: string;
  demo?: string; // add once you have a live demo
  video?: string; // add once you have a Loom
}

export const projects: Project[] = [
  {
    title: "payroll-agent",
    summary:
      "AI payroll assistant for SA small businesses. An LLM turns plain-language questions into structured tool calls; a deterministic SARS 2026/27 engine does every calculation; every data change needs human approval and is audit-logged. Measured with a 30-case live eval (28/30) and 93 tests; input tokens per question cut from ~3.1k to ~0.75k.",
    stack: ["Python", "LLM tool calling", "Pydantic", "Pytest", "Evals"],
    status: "AI agent",
    repo: "https://github.com/henke4rie-oss/payroll-agent",
  },
  {
    title: "PayrollZA",
    summary:
      "South African PAYE payroll engine. FastAPI backend with exact Decimal tax maths, React front end wired to the API (payroll runs, SA ID validation, compliance calendar).",
    stack: ["FastAPI", "PostgreSQL", "Docker", "React"],
    status: "Tax engine behind payroll-agent",
    repo: "https://github.com/henke4rie-oss/PayrollZA",
  },
  {
    title: "logistics-api",
    summary:
      "REST API for customs and container manifests. Pydantic validation, Alembic migrations, pytest suite, Dockerised. Tagged v1.0.0.",
    stack: ["FastAPI", "PostgreSQL", "Alembic", "Pytest"],
    status: "v1.0.0",
    repo: "https://github.com/henke4rie-oss/logistics-api",
  },
];

// Scrolling stack strip. `icon` is the simple-icons export name (see simpleicons.org).
// Leave it out for text-only entries.
export const stack: { name: string; icon?: string }[] = [
  { name: "Python", icon: "siPython" },
  { name: "LLM tool calling" },
  { name: "Groq" },
  { name: "FastAPI", icon: "siFastapi" },
  { name: "PostgreSQL", icon: "siPostgresql" },
  { name: "SQLAlchemy", icon: "siSqlalchemy" },
  { name: "Alembic" },
  { name: "Pydantic", icon: "siPydantic" },
  { name: "Pytest", icon: "siPytest" },
  { name: "Ruff", icon: "siRuff" },
  { name: "Docker", icon: "siDocker" },
  { name: "GitHub Actions", icon: "siGithubactions" },
  { name: "React", icon: "siReact" },
  { name: "Git", icon: "siGit" },
  { name: "Bash", icon: "siGnubash" },
];

// "What I do" accordion
export const skills: Record<string, string[]> = {
  "AI agents": [
    "Tool calling with structured arguments",
    "Human-in-the-loop approval and audit logs",
    "Live evals, token and latency tuning",
  ],
  "Backend APIs": [
    "REST APIs with FastAPI and Pydantic",
    "PostgreSQL with SQLAlchemy",
    "Schema migrations with Alembic",
  ],
  "Testing & QA": [
    "Pytest suites, parametrised cases",
    "Linting and CI with Ruff and GitHub Actions",
    "Edge-case thinking for money and dates",
  ],
  "Payroll & tax logic": [
    "PAYE, UIF and SDL calculations",
    "Exact Decimal maths, no float drift",
    "SARS compliance dates (EMP201 / EMP501)",
  ],
};
