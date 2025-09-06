"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { contactFormSchema, type ContactFormData } from "@/lib/validations";
import { Loader2, Send, CheckCircle } from "lucide-react";

export default function ContactForm() {
	const [isSubmitting, setIsSubmitting] = useState(false);
	const [isSubmitted, setIsSubmitted] = useState(false);

	const {
		register,
		handleSubmit,
		formState: { errors },
		reset,
	} = useForm<ContactFormData>({
		resolver: zodResolver(contactFormSchema),
	});

	const onSubmit = async (data: ContactFormData) => {
		setIsSubmitting(true);
		try {
			const response = await fetch("/api/contact", {
				method: "POST",
				headers: {
					"Content-Type": "application/json",
				},
				body: JSON.stringify(data),
			});

			if (response.ok) {
				setIsSubmitted(true);
				reset();
			} else {
				throw new Error("Failed to send message");
			}
		} catch (error) {
			console.error("Error sending message:", error);
			// Handle error (you could add a toast notification here)
		} finally {
			setIsSubmitting(false);
		}
	};

	const handleReset = () => {
		reset();
		setIsSubmitted(false);
	};

	if (isSubmitted) {
		return (
			<motion.div
				initial={{ opacity: 0, scale: 0.9 }}
				animate={{ opacity: 1, scale: 1 }}
				transition={{ duration: 0.5 }}
			>
				<Card className="w-full max-w-md mx-auto bg-card/50 backdrop-blur-sm border-primary/20">
					<CardContent className="pt-6">
						<div className="text-center">
							<CheckCircle className="w-16 h-16 text-primary mx-auto mb-4" />
							<h3 className="text-xl font-semibold mb-2">Message Sent!</h3>
							<p className="text-muted-foreground mb-4">
								Thank you for reaching out. I'll get back to you soon!
							</p>
							<Button onClick={handleReset} variant="outline">
								Send Another Message
							</Button>
						</div>
					</CardContent>
				</Card>
			</motion.div>
		);
	}

	return (
		<motion.div
			initial={{ opacity: 0, y: 20 }}
			animate={{ opacity: 1, y: 0 }}
			transition={{ duration: 0.6 }}
		>
			<Card className="w-full max-w-md mx-auto bg-card/50 backdrop-blur-sm border-primary/20">
				<CardHeader>
					<CardTitle className="text-center text-primary">Get In Touch</CardTitle>
				</CardHeader>
				<CardContent>
					<form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
						<div className="space-y-2">
							<Label htmlFor="name">Name</Label>
							<Input
								id="name"
								placeholder="Your name"
								{...register("name")}
								className="bg-input/50 border-border focus:border-primary"
							/>
							{errors.name && (
								<p className="text-sm text-destructive">{errors.name.message}</p>
							)}
						</div>

						<div className="space-y-2">
							<Label htmlFor="email">Email</Label>
							<Input
								id="email"
								type="email"
								placeholder="your.email@example.com"
								{...register("email")}
								className="bg-input/50 border-border focus:border-primary"
							/>
							{errors.email && (
								<p className="text-sm text-destructive">{errors.email.message}</p>
							)}
						</div>

						<div className="space-y-2">
							<Label htmlFor="message">Message</Label>
							<Textarea
								id="message"
								placeholder="Your message..."
								rows={5}
								{...register("message")}
								className="bg-input/50 border-border focus:border-primary resize-none"
							/>
							{errors.message && (
								<p className="text-sm text-destructive">{errors.message.message}</p>
							)}
						</div>

						<div className="flex gap-3 pt-2">
							<Button
								type="submit"
								disabled={isSubmitting}
								className="flex-1 bg-primary text-primary-foreground hover:bg-primary/90"
							>
								{isSubmitting ? (
									<>
										<Loader2 className="w-4 h-4 mr-2 animate-spin" />
										Sending...
									</>
								) : (
									<>
										<Send className="w-4 h-4 mr-2" />
										Send Message
									</>
								)}
							</Button>
							<Button
								type="button"
								variant="outline"
								onClick={handleReset}
								disabled={isSubmitting}
								className="border-primary text-primary hover:bg-primary/10"
							>
								Clear
							</Button>
						</div>
					</form>
				</CardContent>
			</Card>
		</motion.div>
	);
}
