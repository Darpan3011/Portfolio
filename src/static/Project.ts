import booking from '../utils/images/Booking.png'
import social from '../utils/images/Social.png'
import weather from '../utils/images/Weather.png'
import TaskBackend from '../utils/images/TaskManagemntBackend.jpeg'
import TaskFrontend from '../utils/images/TaskFrontend.png'
import underConstru from '../utils/images/underConstruction.png'
import VotingSystem from '../utils/images/VoteSystem.png'
import chat from '../utils/images/chat.png'
import springSecurity from '../utils/images/springSecurity.png'
import reusableMethod from '../utils/images/reusableMethod.png'
import aiAgent from '../utils/images/aiAgent.png'

export const projects = [
  {
    title: "Reusable Spring Security Starter Setup (Java SpringBoot JWT Spring Security JPA OAuth2 OIDC)",
    img: springSecurity,
    desc: "Developed a Spring Boot authentication module supporting JWT and OAuth2 (GitHub, Google, Microsoft), enabling rapid integration with minimal configuration, implemented secure user registration/login with email-based MFA and JWT token handling (generation, validation, blacklisting), and automated Spring Security setup via a single pom.xml import to cut setup time by up to 90%.",
    link: "https://github.com/Darpan3011/ReusableSecurityModule"
  },
  {
    title: "Voting System with Blockchain (Java SpringBoot Spring Security SQL JPA)",
    img: VotingSystem,
    desc: "Admin can create election, add candidates and voters. Voters can vote for their preferred candidate. . Blockchain is used to store the votes and ensure the integrity of the voting process.",
    link: "https://github.com/Darpan3011/Voting-System-SpringBoot-BlockChain"
  },
  {
    title: "AI Agent for database (Java SpringBoot)",
    img: aiAgent,
    desc: "Developed an AI agent for database that can answer questions about the database and can also generate SQL queries to perform operations on the database and give human readable response. Also we can exclude tables or columns from scanning to improve the performance and security.",
    link: "https://github.com/Darpan3011/AiAgent-for-database"
  },
  {
    title: "Reusable method for sorting, filtering, searching, pagination (Java SpringBoot)",
    img: reusableMethod,
    desc: "Developed a reusable method for sorting, filtering, searching, and pagination, enabling quick integration.",
    link: "https://github.com/Darpan3011/Reusable-method-for-sorting-filtering-searching"
  },
  {
    title: "Real Time Quiz Multiplayer Backend (Java SpringBoot)",
    img: underConstru,
    desc: "(Under Development check Github code) Realtime quiz for multiplayer. Create quiz, generate code for quiz and allow users to join the quiz.",
    link: "https://github.com/Darpan3011/RealTimeQuizMultiPlayer"
  },
  {
    title: "Task Management Backend (.NET)",
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
    title: "Real Time Chating app with Websocket and Spring Security (Java SpringBoot)",
    img: chat,
    desc: "Chat publicily and personally with someone with login functionality.",
    link: "https://github.com/Darpan3011/ChatApplicationWithPrivateChats"
  },
  {
    title: "Hotel Booking (MERN)",
    img: booking,
    desc: "On this website user can register and login and book hotels, based on city and the price changes as based on number of people selected. Hotel filtering is also there.",
    link: "https://booking-app-iota-two.vercel.app/"
  },
  {
    title: "Social Media (MERN)",
    img: social,
    desc: "In this user can create account, follow their friends, create posts, comment on their posts, like their posts.",
    link: "https://social-media-ashy-three.vercel.app/login"
  },
  {
    title: "Weather Web (MERN)",
    img: weather,
    desc: "Get weather info based on city name and zipcode.",
    link: "https://weather-app-qrx3.vercel.app/"
  }
];