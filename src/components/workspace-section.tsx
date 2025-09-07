"use client"

import React from "react"
import { motion } from "framer-motion"
import { 
  ExternalLink, 
  Briefcase, 
  TrendingUp, 
  Users, 
  Database,
  BarChart3,
  FileText,
  Settings,
  Zap
} from "lucide-react"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { BackgroundGradient } from "@/components/ui/background-gradient"

const projects = [
  {
    title: "Business Process Optimization",
    description: "Led a comprehensive analysis and optimization of core business processes, resulting in 30% efficiency improvement and cost reduction.",
    category: "Process Improvement",
    icon: TrendingUp,
    color: "text-green-600",
    technologies: ["Process Mapping", "Stakeholder Analysis", "Change Management", "KPI Development"],
    achievements: [
      "30% reduction in process completion time",
      "Improved stakeholder satisfaction by 25%",
      "Streamlined workflow across 3 departments"
    ]
  },
  {
    title: "Data Analytics Dashboard",
    description: "Designed and implemented comprehensive analytics dashboards for executive decision-making and operational insights.",
    category: "Data Analysis",
    icon: BarChart3,
    color: "text-blue-600",
    technologies: ["Power BI", "SQL", "Data Modeling", "Visualization"],
    achievements: [
      "Real-time insights for C-level executives",
      "Automated reporting reduced manual effort by 60%",
      "Enhanced data-driven decision making"
    ]
  },
  {
    title: "System Integration Project",
    description: "Managed the integration of multiple legacy systems with modern cloud-based solutions, ensuring seamless data flow.",
    category: "System Integration",
    icon: Database,
    color: "text-purple-600",
    technologies: ["API Integration", "Cloud Migration", "Data Mapping", "Testing"],
    achievements: [
      "Successfully integrated 5 legacy systems",
      "Zero data loss during migration",
      "Improved system reliability by 40%"
    ]
  },
  {
    title: "Requirements Documentation",
    description: "Created comprehensive business requirements documentation for a major software implementation project.",
    category: "Documentation",
    icon: FileText,
    color: "text-orange-600",
    technologies: ["Requirements Analysis", "User Stories", "Process Documentation", "Stakeholder Management"],
    achievements: [
      "Documented 200+ business requirements",
      "Facilitated smooth development process",
      "Reduced project scope creep by 50%"
    ]
  },
  {
    title: "Agile Transformation",
    description: "Led the organizational transition from waterfall to agile methodology, improving project delivery and team collaboration.",
    category: "Process Transformation",
    icon: Zap,
    color: "text-yellow-600",
    technologies: ["Agile/Scrum", "Team Training", "Process Design", "Change Management"],
    achievements: [
      "Reduced project delivery time by 35%",
      "Improved team collaboration scores",
      "Successful adoption across 4 teams"
    ]
  },
  {
    title: "Stakeholder Management",
    description: "Coordinated complex stakeholder relationships across multiple departments for a enterprise-wide system upgrade.",
    category: "Stakeholder Management",
    icon: Users,
    color: "text-indigo-600",
    technologies: ["Communication Planning", "Conflict Resolution", "Meeting Facilitation", "Reporting"],
    achievements: [
      "Managed 20+ stakeholders across 6 departments",
      "Maintained 95% stakeholder satisfaction",
      "Delivered project on time and budget"
    ]
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

export function WorkspaceSection() {
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
            My{" "}
            <span className="bg-gradient-to-r from-primary via-purple-500 to-primary bg-clip-text text-transparent">
              Workspace
            </span>
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Explore my professional projects and achievements as an IT Business Analyst. 
            Each project represents a unique challenge solved through analytical thinking, 
            stakeholder collaboration, and innovative solutions.
          </p>
        </motion.div>

        {/* Professional Overview */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mb-20"
        >
          <BackgroundGradient className="rounded-[22px] p-8 bg-background">
            <div className="text-center">
              <Briefcase className="mx-auto mb-6 h-16 w-16 text-primary" />
              <h2 className="text-3xl font-bold mb-4">Professional Focus</h2>
              <p className="text-muted-foreground max-w-2xl mx-auto mb-8">
                As an IT Business Analyst, I specialize in bridging the gap between business needs 
                and technical solutions. My work involves analyzing complex business processes, 
                gathering requirements, and ensuring successful project delivery.
              </p>
              <div className="grid md:grid-cols-3 gap-6 mt-8">
                <div className="text-center">
                  <div className="bg-primary/10 rounded-full p-4 w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                    <TrendingUp className="h-8 w-8 text-primary" />
                  </div>
                  <h3 className="font-semibold mb-2">Process Optimization</h3>
                  <p className="text-sm text-muted-foreground">Streamlining workflows for maximum efficiency</p>
                </div>
                <div className="text-center">
                  <div className="bg-primary/10 rounded-full p-4 w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                    <Users className="h-8 w-8 text-primary" />
                  </div>
                  <h3 className="font-semibold mb-2">Stakeholder Management</h3>
                  <p className="text-sm text-muted-foreground">Building bridges between teams and departments</p>
                </div>
                <div className="text-center">
                  <div className="bg-primary/10 rounded-full p-4 w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                    <Database className="h-8 w-8 text-primary" />
                  </div>
                  <h3 className="font-semibold mb-2">Data Analysis</h3>
                  <p className="text-sm text-muted-foreground">Transforming data into actionable insights</p>
                </div>
              </div>
            </div>
          </BackgroundGradient>
        </motion.section>

        {/* Projects Grid */}
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
            Featured Projects
          </motion.h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {projects.map((project) => (
              <motion.div key={project.title} variants={itemVariants}>
                <Card className="h-full hover:shadow-lg transition-all duration-300 hover:scale-105 group">
                  <CardHeader>
                    <div className="flex items-center justify-between mb-4">
                      <div className={`p-3 rounded-full bg-primary/10 group-hover:bg-primary/20 transition-colors`}>
                        <project.icon className={`h-6 w-6 ${project.color}`} />
                      </div>
                      <span className="text-xs bg-muted px-2 py-1 rounded-full">
                        {project.category}
                      </span>
                    </div>
                    <CardTitle className="text-lg mb-2">{project.title}</CardTitle>
                    <CardDescription>{project.description}</CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div>
                      <h4 className="font-semibold text-sm mb-2">Technologies & Methods:</h4>
                      <div className="flex flex-wrap gap-1">
                        {project.technologies.map((tech) => (
                          <span
                            key={tech}
                            className="text-xs bg-primary/10 text-primary px-2 py-1 rounded"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                    <div>
                      <h4 className="font-semibold text-sm mb-2">Key Achievements:</h4>
                      <ul className="space-y-1">
                        {project.achievements.map((achievement, idx) => (
                          <li key={idx} className="text-xs text-muted-foreground flex items-start">
                            <div className="w-1 h-1 bg-primary rounded-full mt-2 mr-2 flex-shrink-0" />
                            {achievement}
                          </li>
                        ))}
                      </ul>
                    </div>
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
              <Settings className="mx-auto mb-6 h-12 w-12 text-primary" />
              <h2 className="text-3xl font-bold mb-4">Ready to Collaborate?</h2>
              <p className="text-muted-foreground mb-6">
                {`I'm always looking for new challenges and opportunities to apply my business analysis 
                skills. Whether you need help with process optimization, requirements gathering, 
                or stakeholder management, I'd love to discuss how we can work together.`}
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Button asChild size="lg">
                    <a href="/contact">
                      Start a Project
                      <ExternalLink className="ml-2 h-4 w-4" />
                    </a>
                  </Button>
                </motion.div>
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Button asChild variant="outline" size="lg">
                    <a href="/about">
                      Learn More About Me
                    </a>
                  </Button>
                </motion.div>
              </div>
            </div>
          </BackgroundGradient>
        </motion.section>
      </div>
    </div>
  )
}
