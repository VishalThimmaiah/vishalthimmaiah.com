import type { Metadata } from "next";
import { ContactSection } from "@/components/contact-section";
import { pageContent, breadcrumbData } from "@/lib/content/seo-content";

export const metadata: Metadata = {
	title: "Contact",
	description: pageContent.contact.description,
	keywords: pageContent.contact.keywords,
	alternates: {
		canonical: 'https://vishalthimmaiah.com/contact',
	},
	openGraph: {
		title: pageContent.contact.title,
		description: pageContent.contact.description,
		url: 'https://vishalthimmaiah.com/contact',
		type: 'website',
	},
	twitter: {
		title: pageContent.contact.title,
		description: pageContent.contact.description,
	},
};

export default function ContactPage() {
	return (
		<>
			<script
				type="application/ld+json"
				dangerouslySetInnerHTML={{
					__html: JSON.stringify({
						"@context": "https://schema.org",
						"@type": "BreadcrumbList",
						"itemListElement": breadcrumbData.contact
					}),
				}}
			/>
			<ContactSection />
		</>
	);
}
