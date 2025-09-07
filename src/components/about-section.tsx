"use client"

import React from "react"
import { motion } from "framer-motion"
import { 
  Code, 
  Database, 
  BarChart3, 
  Users, 
  Lightbulb, 
  Target,
  Dumbbell,
  Camera,
  Palette,
  Brain,
  Heart,
  Zap
} from "lucide-react"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { BackgroundGradient } from "@/components/ui/background-gradient"

const skills = [
  {
    category: "Business Analysis",
    icon: BarChart3,
    color: "text-blue-600",
    items: [
      "Requirements Gathering & Analysis",
      "Process Mapping & Optimization",
      "Stakeholder Management",
      "Business Process Modeling",
      "Gap Analysis",
      "User Story Creation"
    ]
  },
  {
    category: "Technical Skills",
    icon: Code,
    color: "text-green-600",
    items: [
      "SQL & Database Management",
      "Data Analysis & Visualization",
      "System Integration",
      "API Documentation",
      "Agile/Scrum Methodologies",
      "Project Management Tools"
    ]
  },
  {
    category: "Tools & Technologies",
    icon: Database,
    color: "text-purple-600",
    items: [
      "Microsoft Office Suite",
      "Tableau & Power BI",
      "JIRA & Confluence",
      "Visio & Lucidchart",
      "SharePoint",
      "Azure DevOps"
    ]
  },
  {
    category: "Soft Skills",
    icon: Users,
    color: "text-orange-600",
    items: [
      "Communication & Presentation",
      "Problem Solving",
      "Critical Thinking",
      "Team Leadership",
      "Client Relationship Management",
      "Change Management"
    ]
  }
]

const interests = [
  {
    name: "Fitness & Wellness",
    icon: Dumbbell,
    description: "Passionate about maintaining physical and mental health through regular exercise and wellness practices."
  },
  {
    name: "Creative Visual Arts",
    icon: Palette,
    description: "Exploring creativity through various visual mediums, design, and artistic expression."
  },
  {
    name: "Photography",
    icon: Camera,
    description: "Capturing moments and stories through the lens, with a focus on composition and storytelling."
  },
  {
    name: "Innovation",
    icon: Lightbulb,
    description: "Always seeking new ways to innovate, improve processes, and create meaningful solutions."
  }
]

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1
    }
  }
}

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5
    }
  }
}

export function AboutSection() {
  return (
    <div className="min-h-screen py-20">
      <div className="container mx-auto px-4">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            About{" "}
            <span className="bg-gradient-to-r from-primary via-purple-500 to-primary bg-clip-text text-transparent">
              Me
            </span>
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            I&apos;m a dedicated IT Business Analyst who bridges the gap between technology and business needs.
            With a passion for innovation and a commitment to excellence, I help organizations transform 
            their processes and achieve their goals.
          </p>
        </motion.div>

        {/* Professional Journey */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mb-20"
        >
          <BackgroundGradient className="rounded-[22px] p-8 bg-background">
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div>
                <h2 className="text-3xl font-bold mb-6 flex items-center">
                  <Target className="mr-3 h-8 w-8 text-primary" />
                  My Journey
                </h2>
                <div className="space-y-4 text-muted-foreground">
                  <p>
                    As an IT Business Analyst, I specialize in understanding complex business requirements 
                    and translating them into actionable technical solutions. My approach combines analytical 
                    thinking with creative problem-solving to deliver results that matter.
                  </p>
                  <p>
                    {`I believe in the power of collaboration and communication. Whether I'm working with 
                    stakeholders to define requirements, collaborating with development teams, or presenting 
                    solutions to executives, I ensure that everyone is aligned and moving toward the same goals.`}
                  </p>
                  <p>
                    {`Beyond my professional work, I'm passionate about personal growth, fitness, and creative 
                    expression. I believe that a well-rounded approach to life enhances both personal 
                    satisfaction and professional performance.`}
                  </p>
                </div>
              </div>
              <div className="flex justify-center">
                <div className="relative">
                  <div className="w-64 h-64 bg-gradient-to-br from-primary/20 to-purple-500/20 rounded-full flex items-center justify-center">
                    <Brain className="w-32 h-32 text-primary" />
                  </div>
                  <motion.div
                    className="absolute -top-4.5 -right-4 w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center"
                    animate={{ rotate: 360 }}
                    transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                  >
                    <Zap className="w-8 h-8 text-primary" />
                  </motion.div>
                </div>
              </div>
            </div>
          </BackgroundGradient>
        </motion.section>

        {/* Skills Section */}
        <motion.section
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="mb-20"
        >
          <motion.h2
            variants={itemVariants}
            className="text-3xl font-bold text-center mb-12"
          >
            Skills & Expertise
          </motion.h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {skills.map((skill, index) => (
              <motion.div key={skill.category} variants={itemVariants}>
                <Card className="h-full hover:shadow-lg transition-shadow duration-300">
                  <CardHeader>
                    <CardTitle className="flex items-center text-lg">
                      <skill.icon className={`mr-3 h-6 w-6 ${skill.color}`} />
                      {skill.category}
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2">
                      {skill.items.map((item, itemIndex) => (
                        <motion.li
                          key={item}
                          initial={{ opacity: 0, x: -10 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ delay: 0.5 + index * 0.1 + itemIndex * 0.05 }}
                          className="text-sm text-muted-foreground flex items-center"
                        >
                          <div className="w-1.5 h-1.5 bg-primary rounded-full mr-2 flex-shrink-0" />
                          {item}
                        </motion.li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </motion.section>

        {/* Interests Section */}
        <motion.section
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="mb-20"
        >
          <motion.h2
            variants={itemVariants}
            className="text-3xl font-bold text-center mb-12"
          >
            Personal Interests
          </motion.h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                        {interests.map((interest) => (
              <motion.div key={interest.name} variants={itemVariants}>
                <Card className="h-full hover:shadow-lg transition-all duration-300 hover:scale-105">
                  <CardHeader className="text-center">
                    <div className="mx-auto mb-4 p-3 bg-primary/10 rounded-full w-fit">
                      <interest.icon className="h-8 w-8 text-primary" />
                    </div>
                    <CardTitle className="text-lg">{interest.name}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <CardDescription className="text-center">
                      {interest.description}
                    </CardDescription>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </motion.section>

        {/* Call to Action */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="text-center"
        >
          <BackgroundGradient className="rounded-[22px] p-8 bg-background">
            <div className="max-w-2xl mx-auto">
              <Heart className="mx-auto mb-6 h-12 w-12 text-primary" />
              <h2 className="text-3xl font-bold mb-4">{`Let's Connect`}</h2>
              <p className="text-muted-foreground mb-6">
                {`I'm always interested in discussing new opportunities, sharing insights, 
                or simply connecting with like-minded professionals. Whether you're looking 
                for collaboration or just want to chat about technology and innovation, 
                I'd love to hear from you.`}
              </p>
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <a
                  href="/contact"
                  className="inline-flex items-center px-6 py-3 bg-primary text-primary-foreground rounded-full font-medium hover:bg-primary/90 transition-colors"
                >
                  Get In Touch
                </a>
              </motion.div>
            </div>
          </BackgroundGradient>
        </motion.section>
      </div>
    </div>
  )
}
