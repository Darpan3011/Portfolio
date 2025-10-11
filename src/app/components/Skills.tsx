"use client"

import { motion } from 'framer-motion'
import { useState } from 'react'

const Skills = () => {
  const [activeCategory, setActiveCategory] = useState('backend')

  const skillsData = {
    backend: {
      title: "Backend Development",
      icon: "⚙️",
      skills: [
        { name: "Java", level: 92, color: "from-orange-400 to-orange-600" },
        { name: "Spring Boot", level: 95, color: "from-green-400 to-green-600" },
        { name: "Spring Security", level: 88, color: "from-purple-400 to-purple-600" },
        { name: "Microservices", level: 80, color: "from-indigo-400 to-indigo-600" },
        { name: "JPA/Hibernate", level: 85, color: "from-cyan-400 to-cyan-600" },
        { name: "REST APIs", level: 90, color: "from-blue-400 to-blue-600" },
        { name: "C#", level: 88, color: "from-blue-400 to-blue-600" }
      ]
    },
    database: {
      title: "Database & Performance",
      icon: "🗄️",
      skills: [
        { name: "MySQL", level: 92, color: "from-blue-400 to-blue-600" },
        { name: "PostgreSQL", level: 88, color: "from-blue-500 to-blue-700" },
        { name: "Redis", level: 90, color: "from-red-400 to-red-600" },
        { name: "Query Optimization", level: 90, color: "from-yellow-400 to-yellow-600" },
        { name: "Database Design", level: 88, color: "from-purple-400 to-purple-600" },
      ]
    },
    frameworks: {
      title: "Frameworks & Tools",
      icon: "🔧",
      skills: [
        { name: ".NET Core", level: 85, color: "from-purple-400 to-purple-600" },
        { name: "Node.js", level: 80, color: "from-green-500 to-green-700" },
        { name: "Express.js", level: 75, color: "from-gray-400 to-gray-600" },
        { name: "Docker", level: 78, color: "from-blue-400 to-blue-600" },
        { name: "AWS", level: 75, color: "from-orange-400 to-orange-600" },
      ]
    },
    frontend: {
      title: "Frontend (Supporting)",
      icon: "🎨",
      skills: [
        { name: "Angular", level: 90, color: "from-red-400 to-red-600" },
        { name: "Next.js", level: 90, color: "from-gray-400 to-gray-600" },
        { name: "React", level: 85, color: "from-blue-400 to-blue-600" },
        { name: "TypeScript", level: 85, color: "from-blue-500 to-blue-700" },
        { name: "JavaScript", level: 85, color: "from-yellow-400 to-yellow-600" },
        { name: "Tailwind CSS", level: 80, color: "from-cyan-400 to-cyan-600" },
      ]
    }
  }

  const categories = Object.keys(skillsData)

  return (
    <motion.section 
      id="skills" 
      className="section-padding"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8 }}
    >
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl lg:text-5xl font-bold mb-4">
            <span className="gradient-text">Skills &</span> Expertise
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            A comprehensive overview of my technical skills and expertise across different domains
          </p>
        </motion.div>

        {/* Category Tabs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="flex flex-wrap justify-center gap-4 mb-12"
        >
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`px-6 py-3 rounded-xl font-semibold transition-all duration-300 ${
                activeCategory === category
                  ? 'bg-primary text-white shadow-lg shadow-primary/25'
                  : 'bg-card text-muted-foreground hover:bg-card-hover hover:text-white border border-border'
              }`}
            >
              <span className="mr-2">{skillsData[category as keyof typeof skillsData].icon}</span>
              {skillsData[category as keyof typeof skillsData].title}
            </button>
          ))}
        </motion.div>

        {/* Skills Grid */}
        <motion.div
          key={activeCategory}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {skillsData[activeCategory as keyof typeof skillsData].skills.map((skill, index) => (
            <motion.div
              key={skill.name}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="glass rounded-2xl p-6 hover:bg-card-hover transition-all duration-300 group"
            >
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-lg font-semibold text-white group-hover:text-primary transition-colors">
                  {skill.name}
                </h3>
                <span className="text-sm font-medium text-muted-foreground">
                  {skill.level}%
                </span>
              </div>
              
              <div className="w-full bg-background-secondary rounded-full h-2 mb-2">
                <motion.div
                  initial={{ width: 0 }}
                  animate={{ width: `${skill.level}%` }}
                  transition={{ duration: 1, delay: index * 0.1 + 0.3 }}
                  className={`h-2 rounded-full bg-gradient-to-r ${skill.color} shadow-lg`}
                />
              </div>
              
              <div className="flex items-center justify-between text-sm text-muted-foreground">
                <span>Beginner</span>
                <span>Expert</span>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Additional Info */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-16 text-center"
        >
          <div className="glass rounded-2xl p-8 max-w-4xl mx-auto">
            <h3 className="text-2xl font-bold mb-4 gradient-text">
              Continuous Learning & Growth
            </h3>
            <p className="text-lg text-muted-foreground mb-6">
              I&apos;m passionate about staying up-to-date with the latest technologies and best practices. 
              Currently exploring advanced cloud architectures, microservices, and modern DevOps practices.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <span className="px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-medium border border-primary/20">
                Always Learning
              </span>
              <span className="px-4 py-2 bg-secondary/10 text-secondary rounded-full text-sm font-medium border border-secondary/20">
                Problem Solver
              </span>
              <span className="px-4 py-2 bg-accent/10 text-accent rounded-full text-sm font-medium border border-accent/20">
                Team Player
              </span>
            </div>
          </div>
        </motion.div>
      </div>
    </motion.section>
  )
}

export default Skills
