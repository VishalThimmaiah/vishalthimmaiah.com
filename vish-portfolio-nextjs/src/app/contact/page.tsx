import { Metadata } from "next";
import Link from "next/link";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import ContactForm from "@/components/forms/ContactForm";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Instagram } from "lucide-react";

export const metadata: Metadata = {
	title: "Contact Me",
	description: "Get in touch with Vishal Thimmaiah. Send a message or connect on social media.",
};

export default function Contact() {
	return (
		<div className="min-h-screen flex flex-col">
			<Header />
			<main className="flex-1 relative">
				<section className="w-full py-12 px-4">
					<div className="max-w-4xl mx-auto">
						<div className="text-center mb-12">
							<h1 className="text-3xl md:text-4xl font-bold mb-4 text-primary">Contact Me</h1>
							<p className="text-lg text-muted-foreground max-w-2xl mx-auto">
								Have a question or just want to say hi? Drop me a message!
							</p>
						</div>

						<div className="grid md:grid-cols-2 gap-8 items-start">
							{/* Contact Form */}
							<div>
								<ContactForm />
							</div>

							{/* Additional Contact Info */}
							<div className="space-y-6">
								{/* Instagram Direct Message */}
								<Card className="bg-card/50 backdrop-blur-sm border-primary/20">
									<CardHeader>
										<CardTitle className="text-center text-primary flex items-center justify-center gap-2">
											<Instagram className="w-5 h-5" />
											Feeling Low? Let's Talk!
										</CardTitle>
									</CardHeader>
									<CardContent className="text-center">
										<p className="text-muted-foreground mb-4">
											If you ever need someone to talk to, reach out to me on Instagram. You're not alone.
										</p>
										<Button asChild className="bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white">
											<Link 
												href="https://www.instagram.com/direct/t/17844061985887692" 
												target="_blank"
												rel="noopener noreferrer"
											>
												Message Me on Instagram
											</Link>
										</Button>
									</CardContent>
								</Card>

								{/* Contact Information */}
								<Card className="bg-card/50 backdrop-blur-sm border-primary/20">
									<CardHeader>
										<CardTitle className="text-center text-primary">Other Ways to Connect</CardTitle>
									</CardHeader>
									<CardContent className="space-y-4">
										<div className="text-center">
											<p className="text-muted-foreground mb-4">
												Connect with me on social media or send me a professional message through LinkedIn.
											</p>
											<div className="flex flex-col gap-2">
												<Button asChild variant="outline" className="border-primary text-primary hover:bg-primary/10">
													<Link 
														href="https://www.linkedin.com/in/vishalthimmaiah/" 
														target="_blank"
														rel="noopener noreferrer"
													>
														LinkedIn
													</Link>
												</Button>
												<Button asChild variant="outline" className="border-primary text-primary hover:bg-primary/10">
													<Link 
														href="https://twitter.com/VishalThimmaiah" 
														target="_blank"
														rel="noopener noreferrer"
													>
														Twitter
													</Link>
												</Button>
											</div>
										</div>
									</CardContent>
								</Card>
							</div>
						</div>
					</div>
				</section>
			</main>
			<Footer />
		</div>
	);
}
