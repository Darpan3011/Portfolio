import Null from '../utils/images/Null.png'
import Dash from '../utils/images/Dash_Logo.svg'
import Accumn from '../utils/images/Accumn.png'
import star from '../utils/images/star.svg'

export const experiences = [
  {
    title: "Star Health and Allied Insurance",
    date: "Apr 2026 - Present",
    position: "Software Development Engineer 1",
    desc: [
      "Engineered a self-service claim creation flow enabling 20,000 customers to submit insurance claims independently, eliminating agent dependency for standard claim types.",
    ],
    link: "https://www.starhealth.in/",
    logo: [star]
  },
  {
    title: "Accumn - a Yubi company",
    date: "Dec 2025 - Apr 2026",
    position: "Software Engineer",
    desc: [
      "Built a database-driven input validation system with Redis caching to enforce client-specific rules for multiple banking partners (ICICI, HDFC, AU, IDFL, Sundaram), cutting validation latency and boosting request processing efficiency by 50%.",
      "Designed and exposed RESTful APIs handling 10,000 daily requests from banking partners, ensuring consistent response formatting and robust error handling across all endpoints."
    ],
    link: "https://hello.accumn.ai",
    logo: [Accumn]
  },
  {
    title: "Dash Technologies",
    date: "Aug 2024 - Dec 2025",
    position: "Junior Software Engineer",
    desc: [
      "Boosted system performance by 10x by integrating Redis caching with Redis Template, minimizing redundant database calls across microservices.",
      "Resolved 2200+ static analysis blockers, critical issues, and code smells in a CI/CD pipeline, lowering technical debt and raising the overall code quality score.",
      "Debugged and fixed 20+ high-priority production incidents, increasing application stability and cutting user-reported issues by over 30%.",
      "Optimized high-traffic database queries, slashing average response times by 15% under peak load.",
      "Standardized global exception handling across 20+ REST endpoints using Spring Boot exception handler, eliminating duplicate error logic and doubling consistency in error responses."
    ],
    link: "https://dashtechinc.com/",
    logo: [Dash]
  },
  {
    title: "NULL INNOVATION",
    date: "Jan 2024 - Aug 2024",
    position: "Software Developer Intern",
    desc: [
      "Integrated secure payment workflows with Stripe API and Spring Boot backend, lifting transaction success rate by 25% and ensuring reliable asynchronous processing.",
      "Architected modular service-layer components using Spring Data JPA and MVC patterns, raising code reusability by 20% and cutting redundant data processing by 15%.",
      "Executed background processing logic for async tasks using Spring Async and scheduled jobs, increasing system responsiveness under load by 10%."
    ],
    link: null,
    logo: [Null]
  }
];