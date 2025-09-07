/**
 * Analytics Event Tracking Utilities
 * Centralized event tracking functions
 */

import { track } from '@vercel/analytics';
import { analyticsConfig, isAnalyticsEnabled } from './config';

// Event types for type safety
export interface AnalyticsEvent {
	name: string;
	properties?: Record<string, string | number | boolean>;
}

// Navigation events
export const trackNavigation = (destination: string, source?: string) => {
	if (!isAnalyticsEnabled() || !analyticsConfig.customEvents.trackNavigation) {
		return;
	}

	track('navigation', {
		destination,
		source: source || 'unknown',
		timestamp: Date.now(),
	});
};

// Theme toggle events
export const trackThemeToggle = (newTheme: string, previousTheme?: string) => {
	if (!isAnalyticsEnabled() || !analyticsConfig.customEvents.trackThemeToggle) {
		return;
	}

	track('theme_toggle', {
		new_theme: newTheme,
		previous_theme: previousTheme || 'unknown',
		timestamp: Date.now(),
	});
};

// Contact form events
export const trackContactFormSubmission = (success: boolean, errorMessage?: string) => {
	if (!isAnalyticsEnabled() || !analyticsConfig.customEvents.trackContactForm) {
		return;
	}

	track('contact_form_submission', {
		success,
		error_message: errorMessage || '',
		timestamp: Date.now(),
	});
};

// Section view events (for scroll tracking)
export const trackSectionView = (sectionName: string, timeSpent?: number) => {
	if (!isAnalyticsEnabled() || !analyticsConfig.customEvents.trackSectionViews) {
		return;
	}

	track('section_view', {
		section: sectionName,
		time_spent: timeSpent || 0,
		timestamp: Date.now(),
	});
};

// Page view events
export const trackPageView = (pageName: string, referrer?: string) => {
	if (!isAnalyticsEnabled()) {
		return;
	}

	track('page_view', {
		page: pageName,
		referrer: referrer || document.referrer || 'direct',
		timestamp: Date.now(),
	});
};

// Custom event tracking
export const trackCustomEvent = (event: AnalyticsEvent) => {
	if (!isAnalyticsEnabled()) {
		return;
	}

	track(event.name, {
		...event.properties,
		timestamp: Date.now(),
	});
};

// Performance tracking
export const trackPerformance = (metric: string, value: number, unit: string = 'ms') => {
	if (!isAnalyticsEnabled()) {
		return;
	}

	track('performance_metric', {
		metric,
		value,
		unit,
		timestamp: Date.now(),
	});
};

// Error tracking
export const trackError = (error: Error, context?: string) => {
	if (!isAnalyticsEnabled()) {
		return;
	}

	track('error', {
		message: error.message,
		stack: error.stack?.substring(0, 500) || '', // Limit stack trace length
		context: context || 'unknown',
		timestamp: Date.now(),
	});
};
