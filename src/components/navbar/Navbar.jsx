import Sidebar from "../sidebar/Sidebar";
import "./navbar.scss";
import { motion } from "framer-motion";
import linkedin from '../../utils/images/linkedin.png'
import github from '../../utils/images/github.png'
import leetcode from '../../utils/images/leetcode.png'

const Navbar = () => {
  return (
    <div className="navbar">
      {/* Sidebar */}
      <Sidebar/>
      <div className="wrapper">
        <motion.span
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
        >
          Kanani Darpan
        </motion.span>
        <div className="social">
          <a href="https://www.linkedin.com/in/darpan-kanani" target="_blank" rel="noreferrer">
            <img src={linkedin} alt="" style={{height:"50px", width:"50px"}}/>
          </a>
          <a href="https://github.com/Darpan3011" target="_blank" rel="noreferrer">
            <img src={github} alt="" style={{height:"50px", width:"50px"}}/>
          </a>
          <a href="https://leetcode.com/u/Darpan301/" target="_blank" rel="noreferrer">
            <img src={leetcode} alt="" style={{height:"50px", width:"50px"}}/>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
