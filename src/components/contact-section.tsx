"use client"

import React, { useState } from "react"
import { motion } from "framer-motion"
import { 
  Mail, 
  Phone, 
  MapPin, 
  Send, 
  Linkedin, 
  Instagram, 
  Twitter, 
  Youtube,
  MessageCircle,
  CheckCircle,
  AlertCircle
} from "lucide-react"
import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import * as z from "zod"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { BackgroundGradient } from "@/components/ui/background-gradient"

const formSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters"),
  email: z.string().email("Please enter a valid email address"),
  subject: z.string().min(5, "Subject must be at least 5 characters"),
  message: z.string().min(10, "Message must be at least 10 characters"),
})

type FormData = z.infer<typeof formSchema>

const contactInfo = [
  {
    icon: Mail,
    label: "Email",
    value: "hello@vishalthimmaiah.com",
    href: "mailto:hello@vishalthimmaiah.com",
    color: "text-blue-600"
  },
  {
    icon: MapPin,
    label: "Location",
    value: "Available Worldwide",
    href: null,
    color: "text-green-600"
  },
  {
    icon: Phone,
    label: "Response Time",
    value: "Within 24 hours",
    href: null,
    color: "text-purple-600"
  }
]

const socialLinks = [
  {
    name: "LinkedIn",
    href: "https://www.linkedin.com/in/vishalthimmaiah/",
    icon: Linkedin,
    color: "hover:text-blue-600",
    description: "Professional networking"
  },
  {
    name: "Instagram",
    href: "https://www.instagram.com/vishalthimmaiah/",
    icon: Instagram,
    color: "hover:text-pink-600",
    description: "Personal updates & lifestyle"
  },
  {
    name: "Twitter",
    href: "https://twitter.com/VishalThimmaiah",
    icon: Twitter,
    color: "hover:text-blue-400",
    description: "Thoughts & industry insights"
  },
  {
    name: "YouTube",
    href: "https://www.youtube.com/@vishalthimmaiah/",
    icon: Youtube,
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

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <Card className="h-fit">
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Send className="mr-3 h-6 w-6 text-primary" />
                  Send Message
                </CardTitle>
                <CardDescription>
                  {`Fill out the form below and I'll get back to you within 24 hours.`}
                </CardDescription>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-4">
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
                      rows={6}
                      {...register("message")}
                      className={errors.message ? "border-red-500" : ""}
                    />
                    {errors.message && (
                      <p className="text-red-500 text-sm mt-1">{errors.message.message}</p>
                    )}
                  </div>

                  {submitStatus === 'success' && (
                    <motion.div
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      className="flex items-center text-green-600 bg-green-50 dark:bg-green-900/20 p-3 rounded-md"
                    >
                      <CheckCircle className="h-5 w-5 mr-2" />
                      {`Message sent successfully! I'll get back to you soon.`}
                    </motion.div>
                  )}

                  {submitStatus === 'error' && (
                    <motion.div
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      className="flex items-center text-red-600 bg-red-50 dark:bg-red-900/20 p-3 rounded-md"
                    >
                      <AlertCircle className="h-5 w-5 mr-2" />
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
                        <Send className="ml-2 h-4 w-4" />
                      </>
                    )}
                  </Button>
                </form>
              </CardContent>
            </Card>
          </motion.div>

          {/* Contact Info & Social */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="space-y-8"
          >
            {/* Contact Information */}
            <Card>
              <CardHeader>
                <CardTitle>Contact Information</CardTitle>
                <CardDescription>
                  {`Here's how you can reach me directly.`}
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                {contactInfo.map((info, index) => (
                  <motion.div
                    key={info.label}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.6 + index * 0.1 }}
                    className="flex items-center space-x-4"
                  >
                    <div className={`p-3 rounded-full bg-primary/10`}>
                      <info.icon className={`h-5 w-5 ${info.color}`} />
                    </div>
                    <div>
                      <p className="font-medium">{info.label}</p>
                      {info.href ? (
                        <a 
                          href={info.href}
                          className="text-muted-foreground hover:text-primary transition-colors"
                        >
                          {info.value}
                        </a>
                      ) : (
                        <p className="text-muted-foreground">{info.value}</p>
                      )}
                    </div>
                  </motion.div>
                ))}
              </CardContent>
            </Card>

            {/* Social Media */}
            <Card>
              <CardHeader>
                <CardTitle>Connect on Social Media</CardTitle>
                <CardDescription>
                  Follow me on social platforms for updates and insights.
                </CardDescription>
              </CardHeader>
              <CardContent>
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
              </CardContent>
            </Card>

            {/* Special Message */}
            <BackgroundGradient className="rounded-[22px] p-6 bg-background">
              <div className="text-center">
                <MessageCircle className="mx-auto mb-4 h-12 w-12 text-primary" />
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
          </motion.div>
        </div>
      </div>
    </div>
  )
}
