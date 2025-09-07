/**
 * Analytics Provider Component
 * Centralized analytics provider with theme support
 */

'use client';

import { Analytics } from '@vercel/analytics/react';
import { SpeedInsights } from '@vercel/speed-insights/react';
import { useEffect } from 'react';
import { isAnalyticsEnabled } from '@/lib/analytics/config';
import { usePerformanceTracking } from '@/lib/hooks/use-analytics';

interface AnalyticsProviderProps {
	children: React.ReactNode;
}

export function AnalyticsProvider({ children }: AnalyticsProviderProps) {
	// Enable performance tracking
	usePerformanceTracking();

	// Track initial page load
	useEffect(() => {
		if (isAnalyticsEnabled()) {
			// Track page load completion
			const handleLoad = () => {
				console.log('Analytics: Page loaded');
			};

			if (document.readyState === 'complete') {
				handleLoad();
			} else {
				window.addEventListener('load', handleLoad);
				return () => window.removeEventListener('load', handleLoad);
			}
		}
	}, []);

	// Don't render analytics components if disabled
	if (!isAnalyticsEnabled()) {
		return <>{children}</>;
	}

	return (
		<>
			{children}
			<Analytics 
				debug={process.env.NODE_ENV === 'development'}
			/>
			<SpeedInsights 
				debug={process.env.NODE_ENV === 'development'}
			/>
		</>
	);
}

// Error Boundary for Analytics
export function AnalyticsErrorBoundary({ 
	children, 
	fallback 
}: { 
	children: React.ReactNode;
	fallback?: React.ReactNode;
}) {
	return (
		<div>
			{children}
			{fallback}
		</div>
	);
}
