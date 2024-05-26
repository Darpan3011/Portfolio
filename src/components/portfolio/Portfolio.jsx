import { useRef } from "react";
import "./portfolio.scss";
import { motion, useScroll, useSpring, useTransform } from "framer-motion";
import booking from '../../utils/images/Booking.png'
import social from '../../utils/images/Social.png'
import weather from '../../utils/images/Weather.png'

const items = [
  {
    id: 1,
    title: "Hotel Booking",
    img: booking,
    desc: "On this website user can register and login and book hotels, based on city and the price changes as based on number of people selected. Hotel filtering is also there.",
    link: "https://booking-app-iota-two.vercel.app/"
  },
  {
    id: 2,
    title: "Social Media",
    img: social,
    desc: "In this user can create account, follow their friends, create posts, comment on their posts, like their posts.",
    link: "https://social-media-ashy-three.vercel.app/login"
  },
  {
    id: 3,
    title: "Weather Web",
    img: weather,
    desc: "Get weather info based on city name and zipcode.",
    link: "https://weather-app-qrx3.vercel.app/"
  },
];

function handleClick(link) {
  window.open(link, '_blank').focus();
}

const Single = ({ item }) => {
  const ref = useRef();

  const { scrollYProgress } = useScroll({
    target: ref,
  });

  const y = useTransform(scrollYProgress, [0, 1], [-300, 300]);

  return (
    <section >
      <div className="container">
        <div className="wrapper">
          <div className="imageContainer" ref={ref}>
            <img src={item.img} alt="" />
          </div>
          <motion.div className="textContainer" style={{y}}>
            <h2>{item.title}</h2>
            <p>{item.desc}</p>
            <button onClick={()=>handleClick(item.link)}>See Demo</button>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

const Portfolio = () => {
  const ref = useRef();

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["end end", "start start"],
  });

  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
  });

  return (
    <div className="portfolio" ref={ref}>
      <div className="progress">
        <h1>Featured Works</h1>
        <motion.div style={{ scaleX }} className="progressBar"></motion.div>
      </div>
      {items.map((item) => (
        <Single item={item} key={item.id} />
      ))}
    </div>
  );
};

export default Portfolio;
