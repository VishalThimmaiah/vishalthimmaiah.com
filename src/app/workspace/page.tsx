import type { Metadata } from "next";
import { WorkspaceSection } from "@/components/workspace-section";
import { pageContent, breadcrumbData } from "@/lib/content/seo-content";

export const metadata: Metadata = {
	title: "Workspace",
	description: pageContent.workspace.description,
	keywords: pageContent.workspace.keywords,
	alternates: {
		canonical: '/workspace',
	},
	openGraph: {
		title: pageContent.workspace.title,
		description: pageContent.workspace.description,
		url: 'https://vishalthimmaiah.com/workspace',
		type: 'website',
	},
	twitter: {
		title: pageContent.workspace.title,
		description: pageContent.workspace.description,
	},
};

export default function WorkspacePage() {
	return (
		<>
			<script
				type="application/ld+json"
				dangerouslySetInnerHTML={{
					__html: JSON.stringify({
						"@context": "https://schema.org",
						"@type": "BreadcrumbList",
						"itemListElement": breadcrumbData.workspace
					}),
				}}
			/>
			<WorkspaceSection />
		</>
	);
}
