import { useRef } from "react";
import "./services.scss";
import { motion, useScroll, useSpring, useTransform } from "framer-motion";

const items = [
  {
    id: 1,
    title: "NULL INNOVATION",
    date: "1st Jan - 31st May",
    desc: [
      "Developed a Chrome Extension for Twitter and its corresponding website with Next.js.",
      "Engineered automatic reply generation based on sentiments like positive, happy, negative, etc.",
      "Integrated an authentication system for accessing premium features.",
      "Emphasized user-friendly responsive design for an enhanced experience.",
      "Successfully integrated the Stripe payment gateway."
    ],
    link: "https://booking-app-iota-two.vercel.app/",
    wordDone: [
      { title: "Extension", url: "https://chromewebstore.google.com/detail/tweefeed/kdedcliogoegnmpfepijoghehpacocml?hl=en" },
      { title: "Website", url: "https://dolphy.io/tweefeed" },
      { title: "WordPress", url: "https://www.capitalcompute.com" }
    ]
  },
  {
    id: 2,
    title: "Patidar IT",
    desc: [
      "Proficiently learned and applied the MERN stack, gaining valuable experience in modern web development technologies.",
      "Created multiple interactive web pages using React.js, showcasing strong front-end development skills.",
      "Ensured user data security by implementing robust user authentication methods, securely storing access tokens and userinformation in local storage."
    ],
    date: "1st Jan - 31st May",
    link: "https://social-media-ashy-three.vercel.app/login",
    wordDone: [] // You can add wordDone for this item if needed
  }
];

const Single = ({ item }) => {
  const ref = useRef();

  const { scrollYProgress } = useScroll({
    target: ref,
  });

  const y = useTransform(scrollYProgress, [0, 1], [-300, 300]);

  return (
    <section>
      <div className="container">
        <div className="wrapper2" style={{overflowY:"auto"}}>
          <div style={{ display: "flex", flexDirection: "column" }}>
            <h2>{item.title}</h2>
            <h5>{item.date}</h5>
          </div>
          <ul style={{ paddingLeft: "30px" }}>
            {item.desc.map((desc, idx) => (
              <li key={idx}>{desc}</li>
            ))}
          </ul>
          {item.wordDone.length>0 && <div style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
            <h3>Work Done Links</h3>
            <ul style={{ display: "flex", flexDirection: "column", paddingLeft: "30px", gap:"15px" }}>
              {item.wordDone.map((link, idx) => (
                <li> <a key={idx} href={link.url} target="_blank" rel="noopener noreferrer">
                  {link.title}
                </a></li>
              ))}
            </ul>
          </div>}
        </div>
      </div>
    </section>
  );
};

const Services = () => {
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
      {/* <div className="progress">
        <h1>Internships</h1>
        <motion.div style={{ scaleX }} className="progressBar"></motion.div>
      </div> */}
      {items.map((item) => (
        <Single item={item} key={item.id} />
      ))}
    </div>
  );
};

export default Services;
