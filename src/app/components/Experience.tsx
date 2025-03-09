"use client"

import React from 'react'
import Image from "next/image";
import { motion } from "framer-motion";
import Link from 'next/link';
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
      wordDone: [
        {title: "Heritage Medcall", url: "https://heritagemedcall.com"}
      ],
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
        {title: "Spill-rx Website", url: "https://spill-rx.com/"}
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
        { title: "TweeFeed Website", url: "https://dolphy.io/tweefeed" },
        { title: "Capital Compute Website", url: "https://www.capitalcompute.com" }
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

const Experience = () => {
  return (
    <motion.section id="experience" className="bg-gray-950"
    initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6, delay: 0.2 }}>
    <h2 className="text-4xl font-semibold mb-6">Experience</h2>
    <div className="mx-auto space-y-8">
      {items.map((exp, index) => (
        <div key={index} className="bg-gray-800 p-6 rounded-lg shadow-lg">
          <div className="flex items-center gap-4">
            <Image src={exp.logo[0]} alt={exp.title} width={50} height={50} />
            <div>
              <h3 className="text-2xl font-bold">{exp.title}</h3>
              <p className="text-gray-400 text-sm">{exp.position} | {exp.date}</p>
            </div>
          </div>
          <ul className="list-disc pl-6 text-gray-300 space-y-2 mt-4">
            {exp.desc.map((point, i) => (
              <li key={i}>{point}</li>
            ))}
          </ul>
          {exp.wordDone.length > 0 && (
            <div className="mt-4 flex flex-wrap gap-4">
            {exp.wordDone.map((work, i) => (
              <Link key={i} href={work.url} target='_blank' className="inline-flex items-center bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-400 transition-all shadow-md">
                {work.title}
              </Link>              
            ))}
          </div>
          
          )}
        </div>
      ))}
    </div>
  </motion.section>
  )
}

export default Experience