export const profile = {
  name: "Mukul Katewa",
  role: "Software Engineer",
  tagline: "Backend · Distributed Systems · Full-Stack",
  location: "Bengaluru, India",
  email: "katewamukul@gmail.com",
  phone: "+91 9257722605",
  resumeUrl:
    "https://drive.google.com/file/d/1bK73p0Sm6gt9KJqKyHy0IPgBNnizTbLx/view?usp=sharing",
  socials: {
    github: "https://github.com/mukulkatewa",
    linkedin: "https://www.linkedin.com/in/mukul-katewa-33b74b216/",
    x: "https://x.com/katewa_saab",
  },
};

export const experience = [
  {
    company: "Vadai",
    role: "Software Developer Intern",
    period: "May 2025 — Oct 2025",
    location: "Remote",
    summary:
      "Built backend infrastructure for an EdTech MVP — Node/Express APIs, PostgreSQL schemas, caching, OpenAI integrations, and JWT-based RBAC with request logging.",
  },
];

export type ProjectDetail = {
  slug: string;
  name: string;
  tagline: string;
  category: string;
  featured?: boolean;
  stack: string[];
  period: string;
  repo?: string;
  live?: string;
  shortDescription: string;
  metrics?: { label: string; value: string }[];
  overview: string;
  highlights: string[];
  architecture?: string[];
  learnings: string[];
};

const projectsUnordered: ProjectDetail[] = [
  {
    slug: "aetherius",
    name: "Aetherius",
    tagline: "AI-powered business workflow optimization",
    category: "AI · Workflow",
    featured: true,
    stack: ["Next.js", "TypeScript", "OpenAI", "Node.js"],
    period: "2025",
    shortDescription:
      "Generative-AI platform for automating and optimizing enterprise workflows — winner of the OpenAI × NxtWave GenAI Buildathon among 2,000+ teams.",
    overview:
      "Aetherius is a generative-AI platform that ingests existing business workflows, identifies inefficiencies, and proposes optimized replacements driven by agentic LLM planning. It was built in under a week for the OpenAI × NxtWave GenAI Buildathon and took first place among 2,000+ competing teams. The stack pairs a Next.js frontend with a typed Node backend and the OpenAI API for planning and rewriting workflow graphs.",
    highlights: [
      "Ingests workflow graphs (process steps, owners, inputs) and classifies bottlenecks.",
      "LLM-generated optimized workflows with measurable time/cost deltas.",
      "Clean review UX showing original vs. optimized side by side.",
      "Winner — OpenAI × NxtWave GenAI Buildathon (1st / 2,000+ teams).",
    ],
    learnings: [
      "Designing an LLM pipeline that returns structured, auditable plans.",
      "Shipping a polished product under hackathon time pressure.",
    ],
  },
  {
    slug: "clove",
    name: "Clove",
    tagline: "Microkernel runtime for AI agents",
    category: "AI · Systems",
    featured: true,
    stack: ["Microkernel", "IPC", "Capability-based", "Sandbox"],
    period: "2025",
    repo: "https://github.com/aniiiiXD/Clove",
    live: "https://clovexo.com",
    shortDescription:
      "Capability-based microkernel for staging autonomous AI agents at scale. Contributed across 3 merged PRs to the open-source project.",
    overview:
      "Clove is a user-space microkernel for staging AI agents and running large-scale ML experiments. It provides the missing kernel-level abstractions — process isolation, resource quotas, and fault boundaries — that let multi-agent systems and distributed training run reliably. I contributed across 3 merged PRs to the core runtime.",
    highlights: [
      "Capability-based security: agents run as isolated processes with their own resource quotas.",
      "Deterministic execution — one rogue agent can't take down the system.",
      "Process + sandbox model with minimal kernel primitives.",
      "IPC, scheduling, and process management built in.",
    ],
    learnings: [
      "Reading and extending a systems-level TypeScript/Node runtime.",
      "Capability-based security as a practical isolation model.",
    ],
  },
  {
    slug: "dexorders",
    name: "DexOrders",
    tagline: "Distributed order execution engine for Solana DEXs",
    category: "Distributed Systems",
    featured: true,
    stack: ["TypeScript", "Fastify", "PostgreSQL", "Redis", "BullMQ", "WebSocket"],
    period: "2025",
    repo: "https://github.com/mukulkatewa/dexOrders",
    live: "https://dexorders-yhto.onrender.com/",
    shortDescription:
      "Production-focused Solana order execution engine that aggregates liquidity across Raydium, Meteora, Orca, and Jupiter with tuple-based routing.",
    metrics: [
      { label: "DEX venues", value: "4" },
      { label: "Routing strategies", value: "4" },
      { label: "Throughput", value: "100 orders/min" },
    ],
    overview:
      "DexOrders is a production-focused Solana order execution engine. It aggregates live quotes from Raydium, Meteora, Orca, and Jupiter, applies tuple-based routing strategies to pick the optimal venue, and streams real-time order progress over WebSocket. The execution path is designed around market orders for their immediate-fill semantics — the cleanest way to showcase parallel quote fetching, intelligent routing, and live telemetry without the orchestration overhead of resting orders. The core is a Fastify server backed by per-DEX BullMQ queues (rate-limited to 10 jobs/sec ≈ 100 orders/minute), a custom DexOrders Liquidity Engine modeling constant-product pools (x·y=k) with live reserve updates, and a PostgreSQL/Redis persistence layer. The stack also includes a historical backtesting engine with synthetic data generation and performance analytics.",
    highlights: [
      "BEST_PRICE, LOWEST_SLIPPAGE, HIGHEST_LIQUIDITY, and FASTEST_EXECUTION routing policies.",
      "Dedicated BullMQ queue per DEX for parallel quote fetching with 10 jobs/sec rate-limit.",
      "Custom AMM liquidity engine (x·y=k) with live reserve updates for price discovery.",
      "WebSocket lifecycle stream: pending → routing → building → submitted → confirmed.",
      "Historical backtesting engine with synthetic data generation and performance analytics.",
    ],
    architecture: [
      "Client POSTs `/api/orders/execute` → Fastify validates, persists to PostgreSQL, caches in Redis.",
      "Four quote jobs are dispatched in parallel — one per DEX queue — each rate-limited at the queue level.",
      "Workers call `MockDexRouter` backed by the DexOrders Liquidity Engine to produce realistic quotes.",
      "RoutingHub selects the winning quote via the configured strategy (price, slippage, liquidity, or latency).",
      "Chosen DEX runs the swap; reserves are updated; order status events stream to the client over WebSocket (`pending → routing → building → submitted → confirmed`).",
    ],
    learnings: [
      "Designing backpressure-aware worker fan-out with BullMQ.",
      "Reasoning about order lifecycles under partial failure and retries.",
      "Modeling AMM math and slippage in a test-first fashion.",
    ],
  },
  {
    slug: "agrivision",
    name: "AgriVision",
    tagline: "AI-powered precision agriculture with satellite analytics",
    category: "Full-Stack · AI",
    featured: true,
    stack: ["React", "Vite", "Node.js", "Express", "Firebase", "Tailwind CSS", "Recharts", "Leaflet"],
    period: "2025",
    repo: "https://github.com/mukulkatewa/farmAnalysis",
    live: "https://frontend-taupe-rho-64.vercel.app/",
    shortDescription:
      "Full-stack precision agriculture platform with satellite imagery, IoT sensors, AI chat, and multilingual support. National finalist at Smart India Hackathon.",
    metrics: [
      { label: "Languages", value: "EN · HI · BN" },
      { label: "Indices", value: "NDVI · EVI · NDRE" },
      { label: "SIH", value: "National Finalist" },
    ],
    overview:
      "AgriVision is a full-stack precision-agriculture platform combining Sentinel-2 satellite imagery, IoT sensor telemetry, and AI to give farmers concrete, localized insights. The dashboard is a React/Vite app styled with Tailwind and wired up with Recharts and Leaflet for satellite analytics; the backend is an Express API with controllers and services for NDVI/analytics ingestion, AI descriptions, and PDF report generation. It integrates Firebase Auth + Realtime DB for identity and sync, Sentinel Hub for imagery, and Gemini/Groq for LLM features — including the Kisan Mitra assistant. The UI is multilingual (English, Hindi, Bengali) and designed for rural connectivity. AgriVision was selected as a national finalist at the Smart India Hackathon.",
    highlights: [
      "Real-time vegetation indices (NDVI, EVI, NDRE) with interactive map overlays.",
      "AI chat assistant (Kisan Mitra) for crop and weather guidance.",
      "Multilingual UI — English, Hindi, and Bengali — for rural accessibility.",
      "Soil-health monitoring driven by live IoT sensor data.",
      "PDF report generation with satellite imagery and analytics.",
    ],
    architecture: [
      "Frontend: React/Vite dashboard with Tailwind, Recharts, Leaflet.",
      "Backend: Express controllers/services for reports, AI descriptions, and NDVI ingestion.",
      "Firebase Auth + Realtime DB; Sentinel Hub for imagery; Gemini/Groq for AI.",
    ],
    learnings: [
      "Working with geospatial data and vegetation-index math.",
      "Designing a multilingual UX around noisy rural connectivity.",
      "Integrating multiple LLM providers behind a stable service interface.",
    ],
  },
  {
    slug: "health-ai",
    name: "Health AI",
    tagline: "AI-assisted medical platform",
    category: "Full-Stack · AI",
    stack: ["Next.js", "TypeScript", "Express", "Prisma", "PostgreSQL", "OpenAI", "Google GenAI"],
    period: "2025",
    repo: "https://github.com/mukulkatewa/health-ai",
    live: "https://medico-sync-cgkaobdxc-kaksaab2605-8884s-projects.vercel.app/",
    shortDescription:
      "Web platform for doctor–patient workflows with AI-assisted features, built on Express + TypeScript and a Next.js client.",
    overview:
      "Health AI is a web platform designed to assist doctor–patient workflows with AI-driven features for record lookup and clinical help. The backend is a typed Express 5 service with Prisma and PostgreSQL, hardened with `express-rate-limit`, `express-validator`, and JWT-based auth using bcrypt for password hashing. Two AI integrations — OpenAI and Google GenAI — sit behind a provider-agnostic interface so prompts can be routed per use-case. The frontend is deployed on Vercel and integrates with the API for doctor and patient dashboards, appointments, and chat-style assistance.",
    highlights: [
      "Doctor and patient modules with JWT auth and role-based routes.",
      "AI assistance via OpenAI and Google GenAI for clinical prompts.",
      "Express 5 with express-rate-limit, express-validator, and bcrypt.",
      "Prisma schema with migrations for structured medical records.",
    ],
    learnings: [
      "Shipping a typed Express 5 API with strict input validation.",
      "Separating AI provider adapters behind a single interface.",
    ],
  },
  {
    slug: "event-booking",
    name: "Event Booking",
    tagline: "Full-stack event reservation system",
    category: "Full-Stack",
    stack: ["React", "Vite", "Express", "Prisma", "PostgreSQL", "Tailwind CSS", "shadcn/ui", "Cloudinary"],
    period: "2025",
    repo: "https://github.com/mukulkatewa/event-booking",
    live: "https://frontend-topaz-tau-47.vercel.app/",
    shortDescription:
      "End-to-end event booking platform with authentication, ticketing, image uploads, and role-based access for students and clubs.",
    overview:
      "A full-stack event booking platform with a React/Vite + shadcn/ui frontend and an Express + Prisma + PostgreSQL backend. The app supports user registration and JWT auth with student and admin/club roles, end-to-end event management (create, browse, view), ticket booking with seat selection, and Cloudinary-hosted event posters. The frontend uses shadcn/ui components over Tailwind for a polished, responsive UI; the backend exposes a clean REST surface over Prisma, with a migration-first DB workflow and environment-driven configuration for DB, JWT, and media credentials.",
    highlights: [
      "JWT-based authentication with student and admin/club roles.",
      "Event CRUD with Cloudinary-hosted posters.",
      "Ticket booking with seat selection.",
      "Shadcn/ui + Tailwind for a clean, responsive UI.",
    ],
    learnings: [
      "Setting up a clean Prisma schema and migration workflow for a mid-sized app.",
      "Integrating third-party media storage without leaking credentials.",
    ],
  },
  {
    slug: "galilio",
    name: "Galilio",
    tagline: "Provably fair gaming platform",
    category: "Full-Stack",
    stack: ["Node.js", "Express", "React", "Vite", "Prisma", "PostgreSQL", "JWT"],
    period: "2025",
    repo: "https://github.com/mukulkatewa/galilio",
    live: "https://galilio-jmxy3axg3-kaksaab2605-8884s-projects.vercel.app/login",
    shortDescription:
      "Full-stack gaming platform supporting Crash, Dice, Keno, Limbo, and DragonTower with provably fair cryptographic RNG.",
    overview:
      "Galilio is a full-stack gaming platform inspired by modern crypto casinos, built with Node.js/Express + Prisma on the backend and React + Vite on the frontend. It ships five provably fair games — Dice, Keno, Limbo, Crash, and DragonTower — all driven by a provably fair RNG based on server/client seeds and nonce validation so outcomes can be independently verified. The platform handles secure JWT auth, real-time balance tracking, complete game history, and a responsive dark-themed UI. An admin dashboard surfaces user and game analytics. The backend is organized into controllers, routes, middleware, and services with a Prisma schema and migrations driving the database layer.",
    highlights: [
      "Five games: Crash, Dice, Keno, Limbo, DragonTower.",
      "Server/client seed + nonce RNG for provably fair results.",
      "Real-time balance tracking and game history.",
      "Admin dashboard with user and game stats.",
    ],
    learnings: [
      "Cryptographic RNG design and seed commitment schemes.",
      "Structuring a monorepo with shared types and Prisma.",
    ],
  },
  {
    slug: "http-proxy",
    name: "HTTP Proxy Server",
    tagline: "Multi-threaded proxy in C with LRU cache",
    category: "Systems",
    stack: ["C", "POSIX Threads", "Semaphores", "Sockets"],
    period: "2026",
    repo: "https://github.com/mukulkatewa/HTTPProxyINC",
    shortDescription:
      "Concurrent HTTP proxy server in C using POSIX threads, semaphore-based synchronization, and an LRU cache.",
    overview:
      "A multi-threaded HTTP proxy server written in C, built to internalize OS primitives — threading, locks, semaphores, and caching. It uses POSIX threads with semaphore-based synchronization (sem_wait/sem_post) instead of pthread_join for worker coordination, which keeps the API parameter-free and makes the concurrency model easier to reason about. The proxy handles parallel client requests, speaks a full HTTP parsing + socket-programming pipeline, and layers in a thread-safe LRU cache on top to reduce redundant upstream traffic and improve response latency. The codebase is intentionally annotated — it's as much a learning artifact as it is a working proxy — and the README discusses limitations (fixed cache-entry size, single-method support) and extensions (multi-process parallelism, URL allow-listing).",
    highlights: [
      "Semaphore-synchronized worker threads handle concurrent clients.",
      "Thread-safe LRU cache with fixed-size entries.",
      "Full HTTP parsing and socket-programming pipeline.",
      "Designed as a learning vehicle for OS primitives — threading, locks, caching.",
    ],
    learnings: [
      "Trade-offs between semaphores and condition variables for worker coordination.",
      "Cache-line-friendly data structures in a tight C codebase.",
    ],
  },
  {
    slug: "key-management-system",
    name: "Key Management System",
    tagline: "Cryptographic key lifecycle service",
    category: "Security",
    stack: ["Node.js", "TypeScript", "Crypto", "PostgreSQL"],
    period: "2025",
    repo: "https://github.com/mukulkatewa/key-management-system",
    shortDescription:
      "KMS for generating, rotating, and auditing cryptographic keys with role-based access and envelope encryption.",
    overview:
      "A Key Management Service for handling the cryptographic key lifecycle end-to-end — generation, rotation, revocation, and auditing — with envelope encryption used to wrap application secrets. Role-based access cleanly separates administrative operations (create/rotate/revoke) from application consumers (encrypt/decrypt/sign). Every key operation is recorded in an append-only audit log. The service is designed as a least-privilege primitive: the consumer APIs never expose master keys, and rotation is non-disruptive so dependent systems can re-wrap at their own pace.",
    highlights: [
      "Envelope encryption pattern for wrapping application secrets.",
      "Key rotation without downtime.",
      "Audit log for all key operations.",
      "Role-separated admin vs. consumer APIs.",
    ],
    learnings: [
      "Designing a least-privilege key-access model.",
      "Balancing auditability with throughput in a crypto-heavy service.",
    ],
  },
];

const projectOrder = [
  "dexorders",
  "agrivision",
  "galilio",
  "http-proxy",
  "health-ai",
  "key-management-system",
  "event-booking",
  "aetherius",
  "clove",
];

export const projects: ProjectDetail[] = projectOrder
  .map((slug) => projectsUnordered.find((p) => p.slug === slug)!)
  .filter(Boolean);

export const openSource = [
  {
    project: "Clove",
    org: "aniiiiXD/Clove",
    url: "https://github.com/aniiiiXD/Clove/pulls?q=is%3Apr+is%3Aclosed+author%3Amukulkatewa",
    count: 3,
    description:
      "Agent kernel for orchestrating autonomous workflows. Contributed features and bug fixes across 3 merged PRs.",
  },
];

export const awards = [
  { title: "Winner — OpenAI × NxtWave GenAI Buildathon", detail: "1st among 2,000+ teams" },
  { title: "Finalist — Smart India Hackathon", detail: "National finalist · AgriVision" },
  { title: "2nd Prize — 100xBuildathon", detail: "Runner-up among 1,500+ teams" },
];

export type TechIcon = { name: string; slug: string };

export const stack: TechIcon[] = [
  { name: "TypeScript", slug: "typescript" },
  { name: "JavaScript", slug: "javascript" },
  { name: "Node.js", slug: "nodedotjs" },
  { name: "Express", slug: "express" },
  { name: "Fastify", slug: "fastify" },
  { name: "Next.js", slug: "nextdotjs" },
  { name: "React", slug: "react" },
  { name: "Vite", slug: "vite" },
  { name: "Tailwind CSS", slug: "tailwindcss" },
  { name: "PostgreSQL", slug: "postgresql" },
  { name: "Redis", slug: "redis" },
  { name: "MongoDB", slug: "mongodb" },
  { name: "Prisma", slug: "prisma" },
  { name: "Firebase", slug: "firebase" },
  { name: "Docker", slug: "docker" },
  { name: "Linux", slug: "linux" },
  { name: "Git", slug: "git" },
  { name: "GitHub", slug: "github" },
  { name: "Vercel", slug: "vercel" },
  { name: "C", slug: "c" },
  { name: "C++", slug: "cplusplus" },
  { name: "Python", slug: "python" },
  { name: "OpenAI", slug: "openai" },
];

export function getProject(slug: string) {
  return projectsUnordered.find((p) => p.slug === slug);
}
