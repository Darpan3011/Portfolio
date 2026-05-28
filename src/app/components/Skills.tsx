"use client"

import { motion } from 'framer-motion'

const Skills = () => {
  const skillCategories = [
    {
      title: "Backend Development",
      skills: ["Java", "Spring Boot", "Spring Security", "Microservices", "JPA/Hibernate", "REST APIs", "Spring Data"]
    },
    {
      title: "Database & Performance",
      skills: ["MySQL", "PostgreSQL", "Redis", "Query Optimization", "Database Design", "MongoDB"]
    },
    {
      title: "DevOps & Tools",
      skills: ["Docker", "AWS", "Jenkins", "Git", "CI/CD", "Linux"]
    },
    {
      title: "Frontend (Supporting)",
      skills: ["Angular", "Next.js", "React", "TypeScript", "JavaScript", "Tailwind CSS"]
    }
  ]

  return (
    <section
      id="skills"
      className="section-padding"
    >
      <div className="container mx-auto px-4">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <span className="section-label mb-3 block">02 / Skills</span>
          <h2 className="text-4xl lg:text-5xl font-display font-bold mb-4">
            Skills & <span className="gradient-text">Expertise</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl leading-relaxed">
            Technologies and tools I use to build scalable, production-grade systems.
          </p>
        </motion.div>

        {/* Skills categories */}
        <div className="space-y-12">
          {skillCategories.map((category, catIndex) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: catIndex * 0.1 }}
            >
              <div className="flex items-center gap-4 mb-5">
                <h3 className="text-lg font-display font-semibold text-foreground/80">
                  {category.title}
                </h3>
                <div className="flex-1 h-px bg-white/[0.06]" />
              </div>

              <div className="flex flex-wrap gap-3">
                {category.skills.map((skill, skillIndex) => (
                  <motion.span
                    key={skill}
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{
                      duration: 0.4,
                      delay: catIndex * 0.1 + skillIndex * 0.05,
                      ease: [0.16, 1, 0.3, 1]
                    }}
                    whileHover={{ scale: 1.05, y: -2 }}
                    className="px-5 py-2.5 bg-background-secondary text-foreground/80 rounded-xl text-sm font-medium border border-white/[0.06] hover:border-primary/30 hover:text-primary hover:bg-primary/[0.05] transition-all duration-300 cursor-default"
                  >
                    {skill}
                  </motion.span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Continuous Learning callout */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-16"
        >
          <div className="bg-background-secondary rounded-2xl p-8 border border-white/[0.06] card-glow relative overflow-hidden">
            {/* Subtle accent gradient */}
            <div className="absolute top-0 right-0 w-48 h-48 bg-primary/[0.04] rounded-full blur-[80px]" />
            
            <div className="relative">
              <h3 className="text-xl font-display font-bold mb-3 text-foreground">
                Continuous Learning
              </h3>
              <p className="text-muted-foreground mb-6 max-w-2xl leading-relaxed">
                Currently exploring advanced cloud architectures, microservices patterns, and modern DevOps practices to build more resilient systems.
              </p>
              <div className="flex flex-wrap gap-2">
                <span className="px-3 py-1.5 bg-primary/10 text-primary rounded-lg text-xs font-medium border border-primary/20">
                  Always Learning
                </span>
                <span className="px-3 py-1.5 bg-secondary/10 text-secondary rounded-lg text-xs font-medium border border-secondary/20">
                  Problem Solver
                </span>
                <span className="px-3 py-1.5 bg-white/[0.04] text-foreground/60 rounded-lg text-xs font-medium border border-white/[0.06]">
                  Team Player
                </span>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default Skills
