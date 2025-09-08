// Simplified SEO Content Management for vishalthimmaiah.com

export const siteConfig = {
	name: "Vishal Thimmaiah",
	title: "Vishal Thimmaiah - IT Business Analyst & Creative Professional",
	description: "Portfolio of Vishal Thimmaiah - IT Business Analyst with expertise in technology, fitness, and creative visual arts.",
	url: "https://vishalthimmaiah.com",
	ogImage: "https://vishalthimmaiah.com/assets/og-image.jpg",
	author: {
		name: "Vishal Thimmaiah",
		email: "hello@vishalthimmaiah.com",
		twitter: "@VishalThimmaiah",
		linkedin: "https://www.linkedin.com/in/vishalthimmaiah/",
		instagram: "https://www.instagram.com/vishalthimmaiah/",
		youtube: "https://www.youtube.com/@vishalthimmaiah/",
	},
	keywords: [
		"IT Business Analyst",
		"Technology Consultant",
		"Creative Professional",
		"Vishal Thimmaiah"
	],
}

export const pageContent = {
	home: {
		title: "Vishal Thimmaiah - IT Business Analyst & Creative Professional",
		description: "Welcome to the portfolio of Vishal Thimmaiah - IT Business Analyst with a passion for technology, fitness, and creative visual arts.",
		keywords: ["IT Business Analyst portfolio", "Technology professional", "Creative visual arts"],
		hero: {
			badge: "Welcome to my portfolio",
			title: "Hi, I'm Vishal Thimmaiah",
			subtitle: "IT Business Analyst with a passion for technology, fitness, and creative visual arts. A true jack of all trades, I thrive on building a strong personal brand and exploring new ways to innovate and inspire.",
			cta: {
				primary: "Learn More About Me",
				secondary: "Get In Touch"
			},
			socialPrompt: "Connect with me:"
		}
	},

	about: {
		title: "About - Vishal Thimmaiah | IT Business Analyst & Creative Professional",
		description: "Learn more about Vishal Thimmaiah - IT Business Analyst with expertise in technology, fitness, and creative visual arts.",
		keywords: ["IT Business Analyst experience", "Technology expertise", "Creative professional background"]
	},

	contact: {
		title: "Contact - Vishal Thimmaiah | Get In Touch",
		description: "Get in touch with Vishal Thimmaiah for IT Business Analysis, technology consulting, creative projects, or collaboration opportunities.",
		keywords: ["Contact IT Business Analyst", "Technology consulting inquiry", "Creative collaboration"]
	},

	workspace: {
		title: "Workspace - Vishal Thimmaiah | Projects & Portfolio",
		description: "Explore Vishal Thimmaiah's workspace featuring IT Business Analysis projects, creative works, and innovative solutions.",
		keywords: ["IT Business Analyst projects", "Technology portfolio", "Creative workspace"]
	}
}

export const structuredData = {
	person: {
		"@context": "https://schema.org",
		"@type": "Person",
		"name": "Vishal Thimmaiah",
		"jobTitle": "IT Business Analyst",
		"description": "IT Business Analyst with expertise in technology, fitness, and creative visual arts",
		"url": "https://vishalthimmaiah.com",
		"image": "https://vishalthimmaiah.com/assets/indexpic.jpg",
		"email": "hello@vishalthimmaiah.com",
		"sameAs": [
			"https://www.linkedin.com/in/vishalthimmaiah/",
			"https://www.instagram.com/vishalthimmaiah/",
			"https://twitter.com/VishalThimmaiah",
			"https://www.youtube.com/@vishalthimmaiah/"
		]
	},

	website: {
		"@context": "https://schema.org",
		"@type": "WebSite",
		"name": "Vishal Thimmaiah Portfolio",
		"description": "Portfolio of Vishal Thimmaiah - IT Business Analyst and Creative Professional",
		"url": "https://vishalthimmaiah.com",
		"author": {
			"@type": "Person",
			"name": "Vishal Thimmaiah"
		},
		"inLanguage": "en-US"
	},

	organization: {
		"@context": "https://schema.org",
		"@type": "ProfessionalService",
		"name": "Vishal Thimmaiah - IT Business Analysis Services",
		"description": "Professional IT Business Analysis and Technology Consulting Services",
		"url": "https://vishalthimmaiah.com",
		"founder": {
			"@type": "Person",
			"name": "Vishal Thimmaiah"
		}
	}
}

export const breadcrumbData = {
	home: [
		{
			"@type": "ListItem",
			"position": 1,
			"name": "Home",
			"item": "https://vishalthimmaiah.com"
		}
	],
	about: [
		{
			"@type": "ListItem",
			"position": 1,
			"name": "Home",
			"item": "https://vishalthimmaiah.com"
		},
		{
			"@type": "ListItem",
			"position": 2,
			"name": "About",
			"item": "https://vishalthimmaiah.com/about"
		}
	],
	contact: [
		{
			"@type": "ListItem",
			"position": 1,
			"name": "Home",
			"item": "https://vishalthimmaiah.com"
		},
		{
			"@type": "ListItem",
			"position": 2,
			"name": "Contact",
			"item": "https://vishalthimmaiah.com/contact"
		}
	],
	workspace: [
		{
			"@type": "ListItem",
			"position": 1,
			"name": "Home",
			"item": "https://vishalthimmaiah.com"
		},
		{
			"@type": "ListItem",
			"position": 2,
			"name": "Workspace",
			"item": "https://vishalthimmaiah.com/workspace"
		}
	]
}
