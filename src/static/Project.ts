import booking from '../utils/images/Booking.png'
import social from '../utils/images/Social.png'
import weather from '../utils/images/Weather.png'
import TaskBackend from '../utils/images/TaskManagemntBackend.jpeg'
import TaskFrontend from '../utils/images/TaskFrontend.png'
import underConstru from '../utils/images/underConstruction.png'

export const projects = [
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
      title: "Real Time Quiz Multiplayer Backend (Java SpringBoot)",
      img: underConstru,
      desc: "(Under Development check Github code) Realtime quiz for multiplayer. Create quiz, generate code for quiz and allow users to join the quiz.",
      link: "https://github.com/Darpan3011/RealTimeQuizMultiPlayer"
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