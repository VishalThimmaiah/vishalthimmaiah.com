import type { Metadata } from "next";
import { AboutSection } from "@/components/about-section";
import { pageContent, breadcrumbData } from "@/lib/content/seo-content";

export const metadata: Metadata = {
	title: "About",
	description: pageContent.about.description,
	keywords: pageContent.about.keywords,
	alternates: {
		canonical: '/about',
	},
	openGraph: {
		title: pageContent.about.title,
		description: pageContent.about.description,
		url: 'https://vishalthimmaiah.com/about',
		type: 'website',
	},
	twitter: {
		title: pageContent.about.title,
		description: pageContent.about.description,
	},
};

export default function AboutPage() {
	return (
		<>
			<script
				type="application/ld+json"
				dangerouslySetInnerHTML={{
					__html: JSON.stringify({
						"@context": "https://schema.org",
						"@type": "BreadcrumbList",
						"itemListElement": breadcrumbData.about
					}),
				}}
			/>
			<AboutSection />
		</>
	);
}
