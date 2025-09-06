---
description: Mobile-first responsive design guidelines ensuring compatibility with small screens, especially iPhone SE
author: Portfolio Project
version: 1.0
tags: ["mobile", "responsive", "design", "iphone-se", "behavioral"]
globs: ["**/*.{js,jsx,ts,tsx}", "**/*.css", "**/*.scss"]
---

# Mobile-First Responsive Design Rule

## Brief overview
Project-specific guidelines for developing mobile-friendly web applications with particular focus on iPhone SE compatibility (375px width). All UI components and layouts must prioritize mobile experience and scale up to larger screens.

## Mobile-first approach
- Design and develop for mobile screens first, then enhance for larger screens
- Use min-width media queries to progressively enhance for tablets and desktop
- Test all components on iPhone SE viewport (375px × 667px) as the baseline
- Ensure touch targets are minimum 44px × 44px for accessibility
- Prioritize vertical scrolling over horizontal scrolling

## Responsive breakpoints
- Mobile (default): 375px and up (iPhone SE baseline)
- Tablet: 768px and up
- Desktop: 1024px and up
- Large desktop: 1280px and up
- Use Tailwind CSS responsive prefixes: `sm:`, `md:`, `lg:`, `xl:`

## Layout considerations
- Use flexible layouts with CSS Grid and Flexbox
- Implement proper spacing that scales with screen size
- Ensure navigation is thumb-friendly on mobile devices
- Stack elements vertically on mobile, arrange horizontally on larger screens
- Use full-width containers on mobile with appropriate padding

## Typography and content
- Use responsive font sizes that remain readable on small screens
- Implement proper line height and letter spacing for mobile readability
- Ensure sufficient contrast ratios for outdoor mobile usage
- Keep content concise and scannable on mobile devices
- Use appropriate heading hierarchy that works on small screens

## Performance optimization
- Optimize images for mobile bandwidth and screen density
- Implement lazy loading for images and heavy components
- Minimize JavaScript bundle size for faster mobile loading
- Use appropriate image formats (WebP, AVIF) with fallbacks
- Consider mobile-first loading strategies

## Testing requirements
- Test on actual iPhone SE device or accurate browser simulation
- Verify touch interactions work properly (tap, swipe, pinch)
- Check that all content is accessible without horizontal scrolling
- Ensure forms are usable with mobile keyboards
- Test in both portrait and landscape orientations
- Validate performance on slower mobile networks

## Component guidelines
- Design buttons and interactive elements for finger navigation
- Implement proper focus states for keyboard navigation
- Use appropriate spacing between clickable elements
- Ensure modals and overlays work well on small screens
- Make sure dropdown menus and navigation work on touch devices
