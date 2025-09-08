import { HeroSection } from "@/components/hero-section";

export default function Home() {
	return (
		<>
			<script
				type="application/ld+json"
				dangerouslySetInnerHTML={{
					__html: JSON.stringify({
						"@context": "https://schema.org",
						"@type": "BreadcrumbList",
						"itemListElement": [
							{
								"@type": "ListItem",
								"position": 1,
								"name": "Home",
								"item": "https://vishalthimmaiah.com"
							}
						]
					}),
				}}
			/>
			<HeroSection />
		</>
	);
}
