/**
 * Edit this list to reflect your roles. Each entry appears on Home (preview),
 * the About page (cards), and the Experience page (timeline).
 */

export const experiences = [
  {
    id: "omniful-sde",
    role: "Software Engineer",
    organization: "Omniful Technologies Pvt. Ltd.",
    location: "Gurugram, India",
    period: "July 2025 – Present",
    type: "Full-Time",
    summary:
      "Architecting scalable multi-tenant supply chain micro-frontends and microservices with a focus on API rate-limiting, performance tuning, and zero-downtime releases.",
    highlights: [
      "Engineered a multi-tenant supply chain platform in React 18, TypeScript, and Tailwind CSS, supporting 5+ enterprise clients with dynamic whitelabeling, RBAC, and rate-limited API gateways.",
      "Implemented client & server-side rate limiting algorithms (Token Bucket) to prevent API abuse, reducing payload overhead and protecting critical endpoints.",
      "Refactored 20+ core shared UI component primitives, reducing bundle duplication by ~30% and improving sub-100ms render performance across all viewport sizes.",
      "Implemented fine-grained RBAC using CASL, enforcing security policies across 5 role tiers in a complex multi-tenant environment.",
      "Achieved ~25–30% performance speedup by eliminating unnecessary React re-renders via memoization (`useMemo`/`useCallback`), code splitting, and asset compression.",
      "Maintained production observability using Sentry log streams, debugging 15+ complex production edge cases and minimizing MTTR for critical path services.",
      "Followed rigorous Git flow (feature → dev → staging → release), managing weekly zero-downtime production deployments."
    ],
    tech: [
      "React 18",
      "TypeScript",
      "Node.js",
      "Redux Toolkit",
      "API Rate Limiting",
      "CASL RBAC",
      "Tailwind CSS",
      "REST Microservices",
      "Sentry",
      "Git & GitHub",
      "Performance Optimization"
    ],
    link: "https://www.omniful.ai",
  },
  {
    id: "educerns-intern",
    role: "Software Developer Intern",
    organization: "EduCerns Technologies",
    location: "Remote / India",
    period: "May 2025 – July 2025",
    type: "Internship",
    summary:
      "Developed high-throughput, responsive UI modules for ed-tech assessment platforms with strict performance requirements.",
    highlights: [
      "Architected and optimized high-traffic UI components for the GST Simulator and EduSkill exam platform using React and Tailwind CSS.",
      "Implemented client-side request debouncing and image preloading to achieve fluid transitions during online examinations.",
      "Converted Figma prototypes into accessible, responsive design components adhering to WCAG standards.",
      "Collaborated in an agile team environment with peer code reviews and automated deployment checks."
    ],
    tech: [
      "React.js",
      "Tailwind CSS",
      "JavaScript (ES6+)",
      "REST APIs",
      "Sass",
      "Git",
      "Web Performance"
    ],
    link: "https://educerns.org",
  },
];