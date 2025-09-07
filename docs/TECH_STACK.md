# Technology Stack Documentation

## 🎯 Overview
This document provides detailed technical specifications for the Vishal Thimmaiah portfolio migration to Next.js.

---

## 📦 Dependencies & Versions

### Core Dependencies
```json
{
  "next": "^15.1.0",
  "react": "^19.0.0",
  "react-dom": "^19.0.0",
  "typescript": "^5.7.0"
}
```

### UI & Styling
```json
{
  "tailwindcss": "^4.0.0",
  "@tailwindcss/typography": "^0.5.15",
  "class-variance-authority": "^0.7.0",
  "clsx": "^2.1.1",
  "tailwind-merge": "^2.5.4"
}
```

### Animation Libraries
```json
{
  "framer-motion": "^11.11.17",
  "aceternity-ui": "^0.2.0"
}
```

### Form Handling
```json
{
  "react-hook-form": "^7.53.2",
  "zod": "^3.23.8",
  "@hookform/resolvers": "^3.9.1"
}
```

### Email & Communication
```json
{
  "nodemailer": "^6.9.8",
  "@types/nodemailer": "^6.4.14"
}
```

### Icons & Assets
```json
{
  "lucide-react": "^0.460.0",
  "sharp": "^0.33.5"
}
```

### Development Tools
```json
{
  "eslint": "^9.15.0",
  "prettier": "^3.3.3",
  "husky": "^9.1.7",
  "lint-staged": "^15.2.10",
  "@types/node": "^22.9.0",
  "@types/react": "^18.3.12",
  "@types/react-dom": "^18.3.1"
}
```

---

## 🏗️ Architecture Decisions

### 1. Next.js App Router
**Choice**: App Router over Pages Router
**Reasoning**: 
- Latest Next.js paradigm
- Better performance with React Server Components
- Improved developer experience
- Future-proof architecture

### 2. TypeScript Configuration
**Choice**: Strict mode enabled
**Configuration**:
```json
{
  "compilerOptions": {
    "strict": true,
    "noUncheckedIndexedAccess": true,
    "noImplicitReturns": true,
    "noFallthroughCasesInSwitch": true
  }
}
```

### 3. Styling Strategy
**Choice**: Tailwind CSS + Shadcn/ui + Aceternity UI
**Reasoning**:
- Utility-first approach for rapid development
- Component library for consistency
- Advanced animations for visual appeal
- No runtime CSS-in-JS overhead

### 4. State Management
**Choice**: React built-in state + Server Actions
**Reasoning**:
- Simple portfolio doesn't need complex state management
- Server Actions for form handling
- Reduced bundle size

---

## 🎨 Design System Implementation

### Color System
```typescript
// tailwind.config.ts
const colors = {
  background: "hsl(0 0% 0%)",        // #000000
  foreground: "hsl(0 0% 100%)",      // #ffffff
  primary: {
    DEFAULT: "hsl(51 100% 50%)",     // #FFD700 (Gold)
    foreground: "hsl(0 0% 0%)",      // #000000
  },
  muted: {
    DEFAULT: "hsl(0 0% 10%)",        // #1a1a1a
    foreground: "hsl(0 0% 65%)",     // #a1a1aa
  },
  border: "hsl(0 0% 15%)",           // #27272a
  input: "hsl(0 0% 9%)",             // #18181b
}
```

### Typography Scale
```typescript
const fontSize = {
  xs: ['0.75rem', { lineHeight: '1rem' }],
  sm: ['0.875rem', { lineHeight: '1.25rem' }],
  base: ['1rem', { lineHeight: '1.5rem' }],
  lg: ['1.125rem', { lineHeight: '1.75rem' }],
  xl: ['1.25rem', { lineHeight: '1.75rem' }],
  '2xl': ['1.5rem', { lineHeight: '2rem' }],
  '3xl': ['1.875rem', { lineHeight: '2.25rem' }],
  '4xl': ['2.25rem', { lineHeight: '2.5rem' }],
  '5xl': ['3rem', { lineHeight: '1' }],
}
```

### Spacing System
```typescript
const spacing = {
  px: '1px',
  0: '0px',
  0.5: '0.125rem',
  1: '0.25rem',
  1.5: '0.375rem',
  2: '0.5rem',
  2.5: '0.625rem',
  3: '0.75rem',
  3.5: '0.875rem',
  4: '1rem',
  5: '1.25rem',
  6: '1.5rem',
  7: '1.75rem',
  8: '2rem',
  9: '2.25rem',
  10: '2.5rem',
  11: '2.75rem',
  12: '3rem',
  14: '3.5rem',
  16: '4rem',
  20: '5rem',
  24: '6rem',
  28: '7rem',
  32: '8rem',
  36: '9rem',
  40: '10rem',
  44: '11rem',
  48: '12rem',
  52: '13rem',
  56: '14rem',
  60: '15rem',
  64: '16rem',
  72: '18rem',
  80: '20rem',
  96: '24rem',
}
```

---

## 🚀 Performance Optimizations

### 1. Image Optimization
```typescript
// next.config.js
const nextConfig = {
  images: {
    formats: ['image/webp', 'image/avif'],
    deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
  },
}
```

### 2. Bundle Optimization
```typescript
const nextConfig = {
  experimental: {
    optimizePackageImports: [
      'lucide-react',
      'framer-motion',
      '@radix-ui/react-icons'
    ],
  },
  compiler: {
    removeConsole: process.env.NODE_ENV === 'production',
  },
}
```

### 3. Font Optimization
```typescript
// app/layout.tsx
import { Inter } from 'next/font/google'

const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-inter',
})
```

---

## 📧 Email System Architecture

### 1. Gmail SMTP Configuration
```typescript
// lib/email.ts
import nodemailer from 'nodemailer'

const transporter = nodemailer.createTransporter({
  service: 'gmail',
  auth: {
    user: process.env.GMAIL_USER,
    pass: process.env.GMAIL_APP_PASSWORD,
  },
})

export async function sendContactEmail(data: ContactFormData) {
  return await transporter.sendMail({
    from: process.env.GMAIL_USER,
    to: process.env.GMAIL_USER, // Send to yourself
    subject: `Portfolio Contact: New message from ${data.name}`,
    html: `
      <h2>New Contact Form Submission</h2>
      <p><strong>Name:</strong> ${data.name}</p>
      <p><strong>Email:</strong> ${data.email}</p>
      <p><strong>Message:</strong></p>
      <p>${data.message.replace(/\n/g, '<br>')}</p>
      <hr>
      <p><em>Sent from your portfolio contact form</em></p>
    `,
  })
}
```

### 2. Gmail Setup Requirements
```bash
# Required Gmail Configuration Steps:
# 1. Enable 2-Factor Authentication on Gmail
# 2. Generate App Password in Google Account Settings
# 3. Use App Password (not regular Gmail password)
# 4. Set environment variables in .env.local

# Environment Variables:
GMAIL_USER=your.email@gmail.com
GMAIL_APP_PASSWORD=your-16-character-app-password
```

---

## 🔒 Security Considerations

### 1. Environment Variables
```bash
# .env.local
GMAIL_USER=your.email@gmail.com
GMAIL_APP_PASSWORD=your-16-character-app-password
NEXT_PUBLIC_SITE_URL=https://vishalthimmaiah.com
```

### 2. Form Validation
```typescript
// lib/validations.ts
import { z } from 'zod'

export const contactFormSchema = z.object({
  name: z.string().min(2, 'Name must be at least 2 characters'),
  email: z.string().email('Please enter a valid email address'),
  message: z.string().min(10, 'Message must be at least 10 characters'),
})
```

### 3. Rate Limiting
```typescript
// app/api/contact/route.ts
import { ratelimit } from '@/lib/ratelimit'

export async function POST(request: Request) {
  const ip = request.headers.get('x-forwarded-for') ?? 'anonymous'
  const { success } = await ratelimit.limit(ip)
  
  if (!success) {
    return new Response('Rate limit exceeded', { status: 429 })
  }
  
  // Process form submission
}
```

---

## 📱 Responsive Design Strategy

### Breakpoints
```typescript
const screens = {
  sm: '640px',
  md: '768px',
  lg: '1024px',
  xl: '1280px',
  '2xl': '1536px',
}
```

### Mobile-First Approach
- Base styles for mobile (320px+)
- Progressive enhancement for larger screens
- Touch-friendly interactive elements
- Optimized images for different screen densities

---

## 🎭 Animation Strategy

### 1. Framer Motion Configuration
```typescript
// lib/animations.ts
export const fadeInUp = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6, ease: 'easeOut' }
}

export const staggerContainer = {
  animate: {
    transition: {
      staggerChildren: 0.1
    }
  }
}
```

### 2. Aceternity UI Components
- TextGenerateEffect for typing animations
- BackgroundGradient for hero section
- CardHoverEffect for project cards
- FloatingNav for navigation
- SparklesCore for background effects

---

## 🔍 SEO Implementation

### 1. Metadata API
```typescript
// app/layout.tsx
export const metadata: Metadata = {
  title: {
    default: 'Vishal Thimmaiah - IT Business Analyst',
    template: '%s | Vishal Thimmaiah'
  },
  description: 'IT Business Analyst with passion for technology, fitness, and creative visual arts.',
  keywords: ['IT Business Analyst', 'Technology', 'Portfolio', 'Vishal Thimmaiah'],
  authors: [{ name: 'Vishal Thimmaiah' }],
  creator: 'Vishal Thimmaiah',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://vishalthimmaiah.com',
    siteName: 'Vishal Thimmaiah Portfolio',
  },
  twitter: {
    card: 'summary_large_image',
    creator: '@VishalThimmaiah',
  },
}
```

### 2. Structured Data
```typescript
// components/StructuredData.tsx
export function PersonStructuredData() {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Person",
    "name": "Vishal Thimmaiah",
    "jobTitle": "IT Business Analyst",
    "url": "https://vishalthimmaiah.com",
    "sameAs": [
      "https://www.linkedin.com/in/vishalthimmaiah/",
      "https://www.instagram.com/vishalthimmaiah/",
      "https://twitter.com/VishalThimmaiah"
    ]
  }

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
    />
  )
}
```

---

## 🚀 Deployment Configuration

### Vercel Configuration
```json
{
  "buildCommand": "pnpm build",
  "devCommand": "pnpm dev",
  "installCommand": "pnpm install",
  "framework": "nextjs",
  "outputDirectory": ".next"
}
```

### Environment Variables (Production)
- `GMAIL_USER`: Gmail account for sending emails
- `GMAIL_APP_PASSWORD`: Gmail app-specific password
- `NEXT_PUBLIC_SITE_URL`: Site URL for absolute links
- `NODE_ENV`: Production environment flag

---

## 📊 Monitoring & Analytics

### 1. Vercel Analytics
```typescript
// app/layout.tsx
import { Analytics } from '@vercel/analytics/react'

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        {children}
        <Analytics />
      </body>
    </html>
  )
}
```

### 2. Performance Monitoring
- Core Web Vitals tracking
- Bundle size monitoring
- Error boundary implementation
- Loading state management

---

This technical documentation will be updated as the project evolves and new requirements emerge.
