import TaskBackend from '../utils/images/TaskManagemntBackend.jpeg'
import TaskFrontend from '../utils/images/TaskFrontend.png'
import RealTimeQuiz from '../utils/images/RealTimeQuiz.png'
import VotingSystem from '../utils/images/VoteSystem.png'
import chat from '../utils/images/chat.png'
import springSecurity from '../utils/images/springSecurity.png'
import reusableMethod from '../utils/images/reusableMethod.png'
import aiAgent from '../utils/images/aiAgent.png'
import ratelimit from '../utils/images/ratelimit.png'

export const projects = [
  {
    title: "Reusable Spring Security Starter Setup (Java SpringBoot JWT Spring Security JPA OAuth2 OIDC)",
    img: springSecurity,
    desc: "Developed a Spring Boot authentication module supporting JWT and OAuth2 (GitHub, Google, Microsoft), enabling rapid integration with minimal configuration, implemented secure user registration/login with email-based MFA and JWT token handling (generation, validation, blacklisting), and automated Spring Security setup via a single pom.xml import to cut setup time by up to 90%.",
    link: "https://github.com/Darpan3011/ReusableSecurityModule"
  },
  {
    title: "AI Agent for database (Java SpringBoot)",
    img: aiAgent,
    desc: "Developed an AI agent for database that can answer questions about the database and can also generate SQL queries to perform operations on the database and give human readable response. Also we can exclude tables or columns from scanning to improve the performance and security.",
    link: "https://github.com/Darpan3011/AiAgent-for-database"
  },
  {
    title: "Rate Limiter (Java SpringBoot with Redis and Lua)",
    img: ratelimit,
    desc: "A zero-boilerplate, highly pluggable Spring Boot library for distributed rate limiting using Redis and Lua scripts",
    link: "https://github.com/Darpan3011/reusable-rate-limiter"
  },
  {
    title: "Real Time Quiz Multiplayer Backend (Java SpringBoot)",
    img: RealTimeQuiz,
    desc: "(Under Development check Github code) Realtime quiz for multiplayer. Create quiz, generate code for quiz and allow users to join the quiz.",
    link: "https://github.com/Darpan3011/RealTimeQuizMultiPlayer"
  },
  {
    title: "Reusable method for sorting, filtering, searching, pagination (Java SpringBoot)",
    img: reusableMethod,
    desc: "Developed a reusable method for sorting, filtering, searching, and pagination, enabling quick integration.",
    link: "https://github.com/Darpan3011/Reusable-method-for-sorting-filtering-searching"
  },
  {
    title: "Voting System with Blockchain (Java SpringBoot Spring Security SQL JPA)",
    img: VotingSystem,
    desc: "Admin can create election, add candidates and voters. Voters can vote for their preferred candidate. . Blockchain is used to store the votes and ensure the integrity of the voting process.",
    link: "https://github.com/Darpan3011/Voting-System-SpringBoot-BlockChain"
  },
  {
    title: "Task Management Backend",
    img: TaskBackend,
    desc: "Manage, Assign task to users with Authentication and Authorization.",
    link: "https://github.com/Darpan3011/TaskManagementBackend"
  },
  {
    title: "Task Management Frontend (Angular)",
    img: TaskFrontend,
    desc: "UI for Task Management backend.",
    link: "https://github.com/Darpan3011/TaskManagementUI"
  },
  {
    title: "Real Time Chatting app with Websocket and Spring Security (Java SpringBoot)",
    img: chat,
    desc: "Chat publicly and personally with someone with login functionality.",
    link: "https://github.com/Darpan3011/ChatApplicationWithPrivateChats"
  }
];