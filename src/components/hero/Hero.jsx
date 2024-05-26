import "./hero.scss";
import { motion } from "framer-motion";

const textVariants = {
  initial: {
    x: -500,
    opacity: 0,
  },
  animate: {
    x: 0,
    opacity: 1,
    transition: {
      duration: 1,
      staggerChildren: 0.1,
    },
  },
  scrollButton: {
    opacity: 0,
    y: 10,
    transition: {
      duration: 2,
      repeat: Infinity,
    },
  },
};
const sliderVariants = {
  initial: {
    x: 0,
  },
  animate: {
    x: "-220%",
    transition: {
      repeat: Infinity,
      repeatType:"mirror",
      duration: 20,
    },
  },
};

function handleClick(loc){
  // scroll to div having id = loc
  document.getElementById(loc).scrollIntoView({ behavior: "smooth" });
}

const Hero = () => {
  return (
    <div className="hero">
      <div className="wrapper">
        <motion.div
          className="textContainer"
          variants={textVariants}
          initial="initial"
          animate="animate"
        >
          <motion.h2 variants={textVariants}>Kanani Darpan</motion.h2>
          <motion.h1 variants={textVariants}>
            Software Developer
          </motion.h1>
          <motion.div variants={textVariants} className="buttons" style={{zIndex:"100"}}>
            <motion.button onClick={()=>handleClick("Portfolio")}>
              See the Latest Works
            </motion.button>
            <motion.button variants={textVariants} onClick={()=>handleClick("Contact")}>Contact Me</motion.button>
          </motion.div>
          <motion.img
            variants={textVariants}
            animate="scrollButton"
            src="/scroll.png"
            alt=""
          />
        </motion.div>
      </div>
      <motion.div
        className="slidingTextContainer"
        variants={sliderVariants}
        initial="initial"
        animate="animate"
        style={{zIndex:"0"}}
      >
        Software Developer Web Developer
      </motion.div>
      {/* <div className="imageContainer">
        <img src="/hero.png" alt="" />
      </div> */}
    </div>
  );
};

export default Hero;
