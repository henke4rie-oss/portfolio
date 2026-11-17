// ONE place to edit your details. Every component reads from here.

export const site = {
  name: "Henke Fourie",
  firstName: "Henke",
  role: "Junior Python / Backend Developer",
  tagline:
    "Building tested backend APIs with FastAPI and PostgreSQL. Exact decimal maths, clean migrations, tests alongside the code.",
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
    title: "PayrollZA",
    summary:
      "South African PAYE payroll engine. FastAPI backend with exact Decimal tax maths, React front end wired to the API (payroll runs, SA ID validation, compliance calendar).",
    stack: ["FastAPI", "PostgreSQL", "Docker", "React"],
    status: "Flagship project",
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
