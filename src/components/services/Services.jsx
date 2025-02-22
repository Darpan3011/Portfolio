import { useRef } from "react";
import "./services.scss";
import { useScroll, useSpring, useTransform } from "framer-motion";
import Null from '../../utils/images/Null.png'
import Patidar from '../../utils/images/Patidar.png'
import Dash from '../../utils/images/Dash_Logo.svg'

const items = [
  {
    id: 0,
    title: "Dash Technologies",
    date: "Feb 2025 - Present",
    position: "Junior Software Engineer",
    desc: [
      "Refactored existing Spring Boot services, reducing redundant code by 15% and improving maintainability.",
      "Optimized API request validation, reducing malformed requests by 20%, ensuring data consistency.",
      "Enhanced database queries, improving response time by 10-15% for frequently accessed endpoints."
    ],
    link: "https://dashtechinc.com/",
    wordDone: [],
    logo: [Dash]
  },
  {
    id: 1,
    title: "Dash Technologies",
    date: "Aug 2024 - Feb 2025",
    position: "Full Stack Developer Intern",
    desc: [
      "Collaborated with senior developers to designand implement new features, focusing on scalability and code maintainability.",
      "Implemented routing and middleware components in ASP.NET Core to enhance request processing and performance.",
      "Engaged in debugging and troubleshooting to resolve bugs and enhance the overall performance of web applications.",
      "Regularly engaged in learning new frameworks and technologies, applying them to real world projects."
    ],
    link: "https://dashtechinc.com/",
    wordDone: [
      {title: "Spill-rx", url: "https://spill-rx.com/"}
    ],
    logo: [Dash]
  },
  {
    id: 2,
    title: "Patidar IT",
    date: "Jun 2024 - Aug 2024",
    position: "Frontend developer",
    desc: [
      "Developed multiple user-friendly, responsive webpages, ensuring cross-device compatibility and improving user experience by 25%.",
      "Integrated various RESTAPIs, enhancing the functionality and interconnectivity of the application with external services by 30%.",
      "Implemented Redux for efficient global state management,reducing code complexity by 20% and improving scalability by 40%"
    ],
    link: "https://patidarit.com/",
    wordDone: [],
    logo: [Patidar]
  },
  {
    id: 3,
    title: "NULL INNOVATION",
    date: "Jan 2024 - May 2024",
    position: "Frontend developer Intern",
    desc: [
      "Developed a Chrome Extension for Twitter and its corresponding website with Next.js.",
      "Engineered automatic reply generation based on sentiments like positive, happy, negative, etc.",
      "Integrated an authentication system for accessing premium features.",
      "Emphasized user-friendly responsive design for an enhanced experience.",
      "Successfully integrated the Stripe payment gateway."
    ],
    link: "https://dolphy.io/",
    wordDone: [
      { title: "Extension", url: "https://chromewebstore.google.com/detail/tweefeed/kdedcliogoegnmpfepijoghehpacocml?hl=en" },
      { title: "Website", url: "https://dolphy.io/tweefeed" },
      { title: "WordPress", url: "https://www.capitalcompute.com" }
    ],
    logo: [Null]
  },
  {
    id: 4,
    title: "Patidar IT",
    desc: [
      "Proficiently learned and applied the MERN stack, gaining valuable experience in modern web development technologies.",
      "Created multiple interactive web pages using React.js, showcasing strong front-end development skills.",
      "Ensured user data security by implementing robust user authentication methods, securely storing access tokens and userinformation in local storage."
    ],
    date: "May 2023 - July 2023",
    position: "Frontend developer Intern",
    link: "https://patidarit.com/",
    wordDone: [], // You can add wordDone for this item if needed
    logo: [Patidar]
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
            <div style={{display:"flex", gap:"5px", alignItems:"start", flexDirection:"column", marginBottom:"10px"}}>
              {/* add logo list here */}
              {/* {item.logo.map((asdf, idx)=>(
                <img src={asdf} alt={asdf} key={idx}/>
              ))} */}
              {item.logo.map((logo, idx) => (
                <a key={idx} href={item.link}>
                <img src={logo} alt={`Logo ${idx}`}  style={{ height: "40px" }} />
                </a>
              ))}
            <h2>{item.title}</h2>
            <h3>{item.position}</h3>

            </div>
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
                // eslint-disable-next-line react/jsx-key
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
