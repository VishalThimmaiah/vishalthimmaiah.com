import type { Metadata, Viewport } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

import { ThemeProvider } from "@/components/theme-provider";
import { Navigation } from "@/components/navigation";
import { AnalyticsProvider } from "@/components/analytics/analytics-provider";
import { siteConfig, structuredData } from "@/lib/content/seo-content";

const inter = Inter({
	subsets: ["latin"],
	variable: "--font-inter",
});

export const viewport: Viewport = {
	width: 'device-width',
	initialScale: 1,
};

export const metadata: Metadata = {
	title: {
		template: '%s | Vishal Thimmaiah',
		default: siteConfig.title,
	},
	description: siteConfig.description,
	keywords: siteConfig.keywords,
	authors: [{ name: siteConfig.author.name, url: siteConfig.url }],
	creator: siteConfig.author.name,
	metadataBase: new URL(siteConfig.url),
	alternates: {
		canonical: siteConfig.url,
	},
	openGraph: {
		type: 'website',
		locale: 'en_US',
		url: siteConfig.url,
		siteName: siteConfig.name,
		title: siteConfig.title,
		description: siteConfig.description,
		images: [
			{
				url: siteConfig.ogImage,
				width: 1200,
				height: 630,
				alt: siteConfig.title,
			},
		],
	},
	twitter: {
		card: 'summary_large_image',
		title: siteConfig.title,
		description: siteConfig.description,
		images: [siteConfig.ogImage],
		creator: siteConfig.author.twitter,
	},
	robots: {
		index: true,
		follow: true,
		googleBot: {
			index: true,
			follow: true,
			'max-video-preview': -1,
			'max-image-preview': 'large',
			'max-snippet': -1,
		},
	},
	icons: {
		icon: '/favicon.ico',
		shortcut: '/favicon-16x16.png',
		apple: '/apple-touch-icon.png',
	},
	manifest: '/site.webmanifest',
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="en" suppressHydrationWarning>
			<head>
				<script
					type="application/ld+json"
					dangerouslySetInnerHTML={{
						__html: JSON.stringify(structuredData.person),
					}}
				/>
				<script
					type="application/ld+json"
					dangerouslySetInnerHTML={{
						__html: JSON.stringify(structuredData.website),
					}}
				/>
				<script
					type="application/ld+json"
					dangerouslySetInnerHTML={{
						__html: JSON.stringify(structuredData.organization),
					}}
				/>
			</head>
			<body className={`${inter.variable} font-sans antialiased`}>
				<ThemeProvider
					attribute="class"
					defaultTheme="system"
					enableSystem
					disableTransitionOnChange
				>
					<AnalyticsProvider>
						<div className="relative flex min-h-screen flex-col">
							<Navigation />
							<main className="flex-1 flex flex-col">{children}</main>
							<footer className="border-t py-6 md:py-0">
								<div className="container mx-auto flex flex-col items-center justify-center gap-4 md:h-16 md:flex-row px-4">
									<p className="text-center text-sm leading-loose text-muted-foreground">
										© {new Date().getFullYear()} Vishal Thimmaiah. All Rights Reserved.
									</p>
								</div>
							</footer>
						</div>
					</AnalyticsProvider>
				</ThemeProvider>
			</body>
		</html>
	);
}
