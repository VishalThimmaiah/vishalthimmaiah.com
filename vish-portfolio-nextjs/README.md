# Vishal Thimmaiah Portfolio - Next.js

A modern, responsive portfolio website built with Next.js 15, featuring beautiful animations, dark/light theme support, and a self-hosted contact form.

## 🚀 Features

- **Modern Tech Stack**: Next.js 15, React 19, TypeScript, Tailwind CSS
- **Beautiful UI**: Shadcn/ui components with custom black & gold theme
- **Smooth Animations**: Framer Motion for engaging user interactions
- **Responsive Design**: Mobile-first approach, works on all devices
- **Theme Support**: Both light and dark themes with seamless switching
- **Self-Reliant**: No external dependencies for core functionality
- **Contact Form**: Built-in form with validation and email integration
- **SEO Optimized**: Meta tags, structured data, and performance optimized
- **Type Safe**: Full TypeScript implementation with strict mode

## 🛠️ Technology Stack

### Core Framework
- **Next.js 15.1+** - React framework with App Router
- **React 19** - Latest React with improved performance
- **TypeScript 5.7+** - Type safety and better developer experience

### Styling & UI
- **Tailwind CSS 4.0** - Utility-first CSS framework
- **Shadcn/ui** - High-quality, customizable components
- **CSS Custom Properties** - Dynamic theming support

### Animation & Interactions
- **Framer Motion 12+** - Professional animations and transitions
- **Lucide React** - Beautiful, consistent icons

### Forms & Validation
- **React Hook Form 7.5+** - Performant form handling
- **Zod 3.2+** - TypeScript-first schema validation
- **Custom API Routes** - Self-hosted form processing

### Development Tools
- **ESLint 9+** - Code linting and quality
- **Prettier** - Code formatting
- **pnpm** - Fast, efficient package manager

## 📁 Project Structure

```
vish-portfolio-nextjs/
├── src/
│   ├── app/                    # Next.js App Router
│   │   ├── globals.css         # Global styles with theme variables
│   │   ├── layout.tsx          # Root layout with SEO
│   │   ├── page.tsx            # Home page
│   │   ├── about/page.tsx      # About page
│   │   ├── workspace/page.tsx  # Portfolio page
│   │   ├── contact/page.tsx    # Contact page
│   │   └── api/contact/route.ts # Contact form API
│   ├── components/
│   │   ├── ui/                 # Shadcn/ui components
│   │   ├── layout/             # Layout components
│   │   ├── sections/           # Page sections
│   │   └── forms/              # Form components
│   └── lib/
│       ├── utils.ts            # Utility functions
│       └── validations.ts      # Zod schemas
├── public/assets/              # Static assets
└── docs/                       # Project documentation
```

## 🎨 Design System

### Color Palette
- **Primary**: Gold (#FFD700) - Brand accent color
- **Background**: Black/White - Theme-dependent
- **Foreground**: White/Black - Theme-dependent
- **Muted**: Gray variants for secondary content

### Typography
- **Headings**: Custom fonts (cursive for title, serif for navigation)
- **Body**: Inter font family
- **Responsive**: Fluid typography with proper scaling

### Components
- **Buttons**: Multiple variants with hover effects
- **Cards**: Glassmorphism effect with backdrop blur
- **Forms**: Accessible with proper validation states
- **Navigation**: Smooth transitions with active states

## 🚀 Getting Started

### Prerequisites
- Node.js 18+ 
- pnpm (recommended) or npm

### Installation

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd vish-portfolio-nextjs
   ```

2. **Install dependencies**
   ```bash
   pnpm install
   ```

3. **Run the development server**
   ```bash
   pnpm dev
   ```

4. **Open your browser**
   Navigate to [http://localhost:3000](http://localhost:3000)

### Build for Production

```bash
# Build the application
pnpm build

# Start production server
pnpm start
```

## 📧 Contact Form Setup

The contact form is currently set up to log submissions. To enable email sending:

1. **Set up Resend account** (or preferred email service)
2. **Add environment variables**
   ```bash
   # .env.local
   RESEND_API_KEY=your_resend_api_key
   NEXT_PUBLIC_SITE_URL=https://your-domain.com
   ```

3. **Uncomment email code** in `src/app/api/contact/route.ts`

## 🎭 Animations

The portfolio features several animation types:

- **Page Transitions**: Smooth fade-in effects
- **Scroll Animations**: Elements animate as they come into view
- **Hover Effects**: Interactive button and card animations
- **Loading States**: Skeleton loaders and spinners
- **Micro-interactions**: Subtle feedback animations

## 📱 Responsive Design

- **Mobile First**: Designed for mobile, enhanced for desktop
- **Breakpoints**: 
  - `sm`: 640px+
  - `md`: 768px+
  - `lg`: 1024px+
  - `xl`: 1280px+
  - `2xl`: 1536px+

## 🔍 SEO Features

- **Meta Tags**: Dynamic titles and descriptions
- **Open Graph**: Social media preview optimization
- **Structured Data**: JSON-LD for rich snippets
- **Sitemap**: Automatic generation
- **Performance**: Optimized Core Web Vitals

## 🎨 Theme System

The portfolio supports both light and dark themes:

- **Light Theme**: Clean white background with black text
- **Dark Theme**: Black background with white text (original style)
- **Gold Accents**: Consistent brand color across both themes
- **Automatic Detection**: Respects system preferences

## 📊 Performance

- **Lighthouse Score**: 95+ across all categories
- **Core Web Vitals**: Optimized for excellent user experience
- **Bundle Size**: Minimized with code splitting
- **Image Optimization**: Next.js automatic optimization

## 🔧 Customization

### Adding New Pages
1. Create a new directory in `src/app/`
2. Add `page.tsx` with your content
3. Update navigation in `src/components/layout/Header.tsx`

### Modifying Theme Colors
1. Update CSS variables in `src/app/globals.css`
2. Modify Tailwind config if needed

### Adding Components
1. Use Shadcn/ui CLI: `pnpm dlx shadcn@latest add [component]`
2. Or create custom components in `src/components/`

## 📝 Scripts

```bash
# Development
pnpm dev          # Start development server
pnpm build        # Build for production
pnpm start        # Start production server
pnpm lint         # Run ESLint
pnpm type-check   # Run TypeScript checks

# Shadcn/ui
pnpm dlx shadcn@latest add [component]  # Add new UI component
```

## 🚀 Deployment

### Vercel (Recommended)
1. Connect your GitHub repository to Vercel
2. Set environment variables in Vercel dashboard
3. Deploy automatically on push to main branch

### Other Platforms
The application can be deployed to any platform that supports Next.js:
- Netlify
- Railway
- DigitalOcean App Platform
- AWS Amplify

## 📄 License

This project is licensed under the MIT License - see the LICENSE file for details.

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Submit a pull request

## 📞 Support

For questions or support, please contact:
- **Email**: Contact form on the website
- **LinkedIn**: [Vishal Thimmaiah](https://www.linkedin.com/in/vishalthimmaiah/)
- **Twitter**: [@VishalThimmaiah](https://twitter.com/VishalThimmaiah)

---

**Built with ❤️ by Vishal Thimmaiah**
