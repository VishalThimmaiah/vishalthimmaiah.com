/**
 * Analytics Hook
 * Custom hook for analytics tracking with React integration
 */

import { useCallback, useEffect, useRef } from 'react';
import { useTheme } from 'next-themes';
import {
	trackNavigation,
	trackThemeToggle,
	trackContactFormSubmission,
	trackSectionView,
	trackPageView,
	trackCustomEvent,
	trackPerformance,
	trackError,
	type AnalyticsEvent,
} from '@/lib/analytics/events';

export const useAnalytics = () => {
	const { theme } = useTheme();
	const previousThemeRef = useRef<string | undefined>(undefined);

	// Track page views automatically
	const trackCurrentPageView = useCallback((pageName?: string) => {
		const currentPage = pageName || window.location.pathname;
		trackPageView(currentPage);
	}, []);

	// Track navigation with source context
	const trackNav = useCallback((destination: string, source?: string) => {
		trackNavigation(destination, source);
	}, []);

	// Track theme changes
	const trackTheme = useCallback((newTheme: string) => {
		trackThemeToggle(newTheme, previousThemeRef.current);
	}, []);

	// Track contact form submissions
	const trackContactForm = useCallback((success: boolean, errorMessage?: string) => {
		trackContactFormSubmission(success, errorMessage);
	}, []);

	// Track section visibility
	const trackSection = useCallback((sectionName: string, timeSpent?: number) => {
		trackSectionView(sectionName, timeSpent);
	}, []);

	// Track custom events
	const trackEvent = useCallback((event: AnalyticsEvent) => {
		trackCustomEvent(event);
	}, []);

	// Track performance metrics
	const trackMetric = useCallback((metric: string, value: number, unit?: string) => {
		trackPerformance(metric, value, unit);
	}, []);

	// Track errors
	const trackErrorEvent = useCallback((error: Error, context?: string) => {
		trackError(error, context);
	}, []);

	// Auto-track theme changes
	useEffect(() => {
		if (theme && previousThemeRef.current && theme !== previousThemeRef.current) {
			trackTheme(theme);
		}
		if (theme) {
			previousThemeRef.current = theme;
		}
	}, [theme, trackTheme]);

	return {
		trackPageView: trackCurrentPageView,
		trackNavigation: trackNav,
		trackThemeToggle: trackTheme,
		trackContactFormSubmission: trackContactForm,
		trackSectionView: trackSection,
		trackCustomEvent: trackEvent,
		trackPerformance: trackMetric,
		trackError: trackErrorEvent,
	};
};

// Hook for intersection observer-based section tracking
export const useSectionTracking = (sectionName: string, threshold: number = 0.5) => {
	const { trackSectionView } = useAnalytics();

	useEffect(() => {
		const observer = new IntersectionObserver(
			(entries) => {
				entries.forEach((entry) => {
					if (entry.isIntersecting) {
						trackSectionView(sectionName);
					}
				});
			},
			{ threshold }
		);

		const element = document.getElementById(sectionName.toLowerCase().replace(/\s+/g, '-'));
		if (element) {
			observer.observe(element);
		}

		return () => {
			if (element) {
				observer.unobserve(element);
			}
		};
	}, [sectionName, threshold, trackSectionView]);
};

// Hook for performance tracking
export const usePerformanceTracking = () => {
	const { trackPerformance } = useAnalytics();

	useEffect(() => {
		// Track Core Web Vitals
		if (typeof window !== 'undefined' && 'performance' in window) {
			// Track page load time
			window.addEventListener('load', () => {
				const loadTime = performance.now();
				trackPerformance('page_load_time', Math.round(loadTime));
			});

			// Track First Contentful Paint
			const observer = new PerformanceObserver((list) => {
				list.getEntries().forEach((entry) => {
					if (entry.name === 'first-contentful-paint') {
						trackPerformance('first_contentful_paint', Math.round(entry.startTime));
					}
				});
			});

			observer.observe({ entryTypes: ['paint'] });

			return () => {
				observer.disconnect();
			};
		}
	}, [trackPerformance]);
};
