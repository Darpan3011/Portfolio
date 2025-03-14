import booking from '../utils/images/Booking.png'
import social from '../utils/images/Social.png'
import weather from '../utils/images/Weather.png'
import TaskBackend from '../utils/images/TaskManagemntBackend.jpeg'
import TaskFrontend from '../utils/images/TaskFrontend.png'

export const projects = [
    {
      id: -1,
      title: "Task Management Backend (.NET)",
      img: TaskBackend,
      desc: "Manage, Assign task to users with Authentication and Authorization.",
      link: "https://github.com/Darpan3011/darpan_dotNet_taskManagment"
    },
    {
      id: 0,
      title: "Task Management Frontend (Angular)",
      img: TaskFrontend,
      desc: "UI for Task Management backend.",
      link: "https://github.com/Darpan3011/TaskManagementUI"
    },
    {
      id: 1,
      title: "Hotel Booking (MERN)",
      img: booking,
      desc: "On this website user can register and login and book hotels, based on city and the price changes as based on number of people selected. Hotel filtering is also there.",
      link: "https://booking-app-iota-two.vercel.app/"
    },
    {
      id: 2,
      title: "Social Media (MERN)",
      img: social,
      desc: "In this user can create account, follow their friends, create posts, comment on their posts, like their posts.",
      link: "https://social-media-ashy-three.vercel.app/login"
    },
    {
      id: 3,
      title: "Weather Web (MERN)",
      img: weather,
      desc: "Get weather info based on city name and zipcode.",
      link: "https://weather-app-qrx3.vercel.app/"
    }
  ];