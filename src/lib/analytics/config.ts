/**
 * Analytics Configuration
 * Centralized configuration for all analytics services
 */

export interface AnalyticsConfig {
	vercel: {
		enabled: boolean;
		debug: boolean;
	};
	customEvents: {
		enabled: boolean;
		trackNavigation: boolean;
		trackThemeToggle: boolean;
		trackContactForm: boolean;
		trackSectionViews: boolean;
	};
	privacy: {
		respectDoNotTrack: boolean;
		anonymizeIp: boolean;
	};
}

export const analyticsConfig: AnalyticsConfig = {
	vercel: {
		enabled: true,
		debug: process.env.NODE_ENV === 'development',
	},
	customEvents: {
		enabled: true,
		trackNavigation: true,
		trackThemeToggle: true,
		trackContactForm: true,
		trackSectionViews: true,
	},
	privacy: {
		respectDoNotTrack: true,
		anonymizeIp: true,
	},
};

// Environment-based settings
export const isAnalyticsEnabled = () => {
	// Respect Do Not Track header
	if (analyticsConfig.privacy.respectDoNotTrack &&
		typeof navigator !== 'undefined' &&
		navigator.doNotTrack === '1') {
		return false;
	}

	// Enable analytics in production and when explicitly enabled in development
	return process.env.NODE_ENV === 'production' ||
		process.env.NEXT_PUBLIC_ANALYTICS_DEBUG === 'true';
};
