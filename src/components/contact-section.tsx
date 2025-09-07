"use client"

import React, { useState } from "react"
import { motion } from "framer-motion"
import { 
  FaLinkedin, 
  FaInstagram, 
  FaYoutube,
  FaEnvelope,
  FaPaperPlane,
  FaComments,
  FaCheckCircle,
  FaExclamationCircle
} from 'react-icons/fa'
import { FaXTwitter } from 'react-icons/fa6'
import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import * as z from "zod"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { BackgroundGradient } from "@/components/ui/background-gradient"
import { PageWrapper } from "@/components/page-wrapper"

const formSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters"),
  email: z.string().email("Please enter a valid email address"),
  subject: z.string().min(5, "Subject must be at least 5 characters"),
  message: z.string().min(10, "Message must be at least 10 characters"),
})

type FormData = z.infer<typeof formSchema>

const contactInfo = [
  {
    icon: FaEnvelope,
    label: "Email",
    value: "hello@vishalthimmaiah.com",
    href: "mailto:vishalthimmaiah@gmail.com",
    color: "text-blue-600"
  }
]

const socialLinks = [
  {
    name: "LinkedIn",
    href: "https://www.linkedin.com/in/vishalthimmaiah/",
    icon: FaLinkedin,
    color: "hover:text-blue-600",
    description: "Professional networking"
  },
  {
    name: "Instagram",
    href: "https://www.instagram.com/vishalthimmaiah/",
    icon: FaInstagram,
    color: "hover:text-pink-600",
    description: "Personal updates & lifestyle"
  },
  {
    name: "X",
    href: "https://twitter.com/VishalThimmaiah",
    icon: FaXTwitter,
    color: "hover:text-gray-800 dark:hover:text-white",
    description: "Thoughts & industry insights"
  },
  {
    name: "YouTube",
    href: "https://www.youtube.com/@vishalthimmaiah/",
    icon: FaYoutube,
    color: "hover:text-red-600",
    description: "Video content & tutorials"
  }
]

export function ContactSection() {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle')

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset
  } = useForm<FormData>({
    resolver: zodResolver(formSchema)
  })

  const onSubmit = async (data: FormData) => {
    setIsSubmitting(true)
    setSubmitStatus('idle')

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      })

      if (response.ok) {
        setSubmitStatus('success')
        reset()
      } else {
        setSubmitStatus('error')
      }
    } catch {
      setSubmitStatus('error')
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <PageWrapper>
      <div className="container mx-auto px-4">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            Get In{" "}
            <span className="bg-gradient-to-r from-primary via-purple-500 to-primary bg-clip-text text-transparent">
              Touch
            </span>
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            {`Have a question or want to work together? I'd love to hear from you. 
            Send me a message and I'll respond as soon as possible.`}
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-stretch">
          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <Card className="h-full">
              <CardHeader>
                <CardTitle className="flex items-center">
                  <FaPaperPlane className="mr-3 h-6 w-6 text-primary" />
                  Send Message
                </CardTitle>
                <CardDescription>
                  {`Fill out the form below and I'll get back to you within 24 hours.`}
                </CardDescription>
              </CardHeader>
              <CardContent className="flex flex-col h-full">
                <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col h-full space-y-4">
                  <div className="grid md:grid-cols-2 gap-3">
                    <div>
                      <Input
                        placeholder="Your Name"
                        {...register("name")}
                        className={errors.name ? "border-red-500" : ""}
                      />
                      {errors.name && (
                        <p className="text-red-500 text-sm mt-1">{errors.name.message}</p>
                      )}
                    </div>
                    <div>
                      <Input
                        type="email"
                        placeholder="Your Email"
                        {...register("email")}
                        className={errors.email ? "border-red-500" : ""}
                      />
                      {errors.email && (
                        <p className="text-red-500 text-sm mt-1">{errors.email.message}</p>
                      )}
                    </div>
                  </div>
                  
                  <div>
                    <Input
                      placeholder="Subject"
                      {...register("subject")}
                      className={errors.subject ? "border-red-500" : ""}
                    />
                    {errors.subject && (
                      <p className="text-red-500 text-sm mt-1">{errors.subject.message}</p>
                    )}
                  </div>
                  
                  <div>
                    <Textarea
                      placeholder="Your Message"
                      {...register("message")}
                      className={`resize-none md:h-64 overflow-y-auto ${errors.message ? "border-red-500" : ""}`}
                    />
                    {errors.message && (
                      <p className="text-red-500 text-sm mt-1">{errors.message.message}</p>
                    )}
                  </div>

                  <div className="space-y-3 mt-4">
                  {submitStatus === 'success' && (
                    <motion.div
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      className="flex items-center text-green-600 bg-green-50 dark:bg-green-900/20 p-3 rounded-md"
                    >
                      <FaCheckCircle className="h-5 w-5 mr-2" />
                      {`Message sent successfully! I'll get back to you soon.`}
                    </motion.div>
                  )}

                  {submitStatus === 'error' && (
                    <motion.div
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      className="flex items-center text-red-600 bg-red-50 dark:bg-red-900/20 p-3 rounded-md"
                    >
                      <FaExclamationCircle className="h-5 w-5 mr-2" />
                      Failed to send message. Please try again or contact me directly.
                    </motion.div>
                  )}

                  <Button 
                    type="submit" 
                    className="w-full" 
                    size="lg"
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? (
                      <>
                        <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white mr-2" />
                        Sending...
                      </>
                    ) : (
                      <>
                        Send Message
                        <FaPaperPlane className="ml-2 h-4 w-4" />
                      </>
                    )}
                  </Button>
                  </div>
                </form>
              </CardContent>
            </Card>
          </motion.div>

          {/* Contact Info & Social */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="flex flex-col space-y-8 h-full"
          >
          
{/* Centered Need Support Section */}
            <div className="w-full">
            <BackgroundGradient className="rounded-[22px] p-6 bg-background">
              <div className="text-center">
                <FaComments className="mx-auto mb-4 h-12 w-12 text-primary" />
                <h3 className="text-xl font-bold mb-2">Need Support?</h3>
                <p className="text-muted-foreground mb-4">
                  {`If you ever need someone to talk to, reach out to me on Instagram. 
                  You're not alone, and I'm here to listen.`}
                </p>
                <Button asChild variant="outline">
                  <a 
                    href="https://www.instagram.com/direct/t/17844061985887692" 
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Message Me on Instagram
                  </a>
                </Button>
              </div>
            </BackgroundGradient>
          </div>


            {/* Social Media & Contact Info */}
            <Card className="flex-1 flex flex-col">
              <CardHeader>
                <CardTitle>Connect on Social Media</CardTitle>
                <CardDescription>
                  Follow me on social platforms for updates and insights.
                </CardDescription>
              </CardHeader>
              <CardContent className="flex-1 flex flex-col">
                <div className="grid grid-cols-2 gap-4">
                  {socialLinks.map((social, index) => (
                    <motion.a
                      key={social.name}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      initial={{ opacity: 0, scale: 0.9 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ delay: 0.8 + index * 0.1 }}
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className={`flex items-center space-x-3 p-3 rounded-lg bg-muted/50 transition-all duration-300 ${social.color} hover:bg-muted`}
                    >
                      <social.icon className="h-5 w-5" />
                      <div>
                        <p className="font-medium text-sm">{social.name}</p>
                        <p className="text-xs text-muted-foreground">{social.description}</p>
                      </div>
                    </motion.a>
                  ))}
                </div>

                {/* Contact Information - Simplified */}
                <div className="mt-auto pt-6">
                  <div className="text-center">
                    <motion.a
                      href={contactInfo[0].href}
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 1.2 }}
                      className="inline-flex items-center space-x-2 text-muted-foreground hover:text-primary transition-colors"
                    >
                      {React.createElement(contactInfo[0].icon, { className: "h-4 w-4" })}
                      <span className="text-sm">{contactInfo[0].value}</span>
                    </motion.a>
                  </div>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </div>
    </PageWrapper>
  )
}
