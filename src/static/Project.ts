import booking from '../utils/images/Booking.png'
import social from '../utils/images/Social.png'
import weather from '../utils/images/Weather.png'
import TaskBackend from '../utils/images/TaskManagemntBackend.jpeg'
import TaskFrontend from '../utils/images/TaskFrontend.png'
import underConstru from '../utils/images/underConstruction.png'
import VotingSystem from '../utils/images/VoteSystem.png'
import chat from '../utils/images/chat.png'
import springSecurity from '../utils/images/springSecurity.png'
import AuditSpringBoot from '../utils/images/AuditSpringBoot.png'

export const projects = [
    {
      title: "Voting System with Blockchain (Java SpringBoot Spring Security SQL JPA)",
      img: VotingSystem,
      desc: "Admin can create election, add candidates and voters. Voters can vote for their preferred candidate. . Blockchain is used to store the votes and ensure the integrity of the voting process.",
      link: "https://github.com/Darpan3011/Voting-System-SpringBoot-BlockChain"
    },
    {
      title: "Reusable Spring Security Starter Setup (Java SpringBoot JWT Spring Security JPA)",
      img: springSecurity,
      desc: "Developed a Spring Boot starter module for JWT-based authentication and session management, enabling quick integration, secure user handling (registration, login, logout), and automated Spring Security setup with token blacklisting, reducing setup and configuration time by up to 90%.",
      link: "https://github.com/Darpan3011/reusable-jwt-security-dependency.git"
    },
    {
      title: "Audit models in Spring Boot (Java SpringBoot Spring Security JPA)",
      img: AuditSpringBoot,
      desc: "Updated the Spring Boot application to include audit models for tracking changes made to data with date and user details, enhancing data integrity and compliance with regulatory requirements.",
      link: "https://github.com/Darpan3011/Audit-in-springboot.git"
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