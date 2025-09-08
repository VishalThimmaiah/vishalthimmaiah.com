# Vishal Thimmaiah - Portfolio Website

A modern, responsive portfolio website built with Next.js 15, featuring advanced animations and a sleek design.

## 🚀 Features

- **Modern Tech Stack**: Built with Next.js 15, TypeScript, and Tailwind CSS v4
- **Advanced Animations**: Aceternity UI-inspired effects including floating particles, spotlight effects, and gradient backgrounds
- **Theme Support**: Light/dark mode toggle with smooth transitions
- **Responsive Design**: Mobile-first approach optimized for all devices
- **Contact Form**: Gmail integration for contact form submissions
- **Performance Optimized**: Fast loading with optimized assets and code splitting

## 🛠️ Tech Stack

- **Framework**: Next.js 15 with App Router
- **Language**: TypeScript
- **Styling**: Tailwind CSS v4
- **UI Components**: Shadcn UI
- **Animations**: Framer Motion
- **Email**: Nodemailer with Gmail SMTP
- **Form Validation**: React Hook Form + Zod
- **Package Manager**: pnpm

## 📦 Installation

1. Clone the repository:
```bash
git clone https://github.com/VishalThimmaiah/vishalthimmaiah.com.git
cd vishalthimmaiah.com
```

2. Install dependencies:
```bash
pnpm install
```

3. Set up environment variables:
```bash
cp .env.example .env.local
```

4. Add your Gmail credentials to `.env.local`:
```env
GMAIL_USER=your-email@gmail.com
GMAIL_APP_PASSWORD=your-app-password
```

## 🚀 Development

Start the development server:
```bash
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

## 🏗️ Build

Create a production build:
```bash
pnpm build
```

Start the production server:
```bash
pnpm start
```

## 📁 Project Structure

```
├── src/
│   ├── app/                 # Next.js App Router pages
│   │   ├── about/          # About page
│   │   ├── contact/        # Contact page
│   │   ├── workspace/      # Projects page
│   │   └── api/            # API routes
│   ├── components/         # React components
│   │   ├── ui/            # Reusable UI components
│   │   └── ...            # Page-specific components
│   └── lib/               # Utility functions
├── public/                # Static assets
│   └── assets/           # Images and icons
├── docs/                 # Documentation
└── .clinerules/         # AI assistant rules
```

## 🎨 Components

### Custom UI Components
- **BackgroundGradient**: Animated gradient background effect
- **TextGenerateEffect**: Typewriter-style text animation
- **Spotlight**: SVG spotlight effect for hero sections
- **ThemeToggle**: Animated light/dark mode toggle

### Shadcn UI Components
- Button, Input, Textarea, Card components
- Fully customizable and accessible

## 📧 Contact Form

The contact form uses Gmail SMTP for sending emails. To set it up:

1. Enable 2-factor authentication on your Gmail account
2. Generate an App Password in your Google Account settings
3. Add the credentials to your `.env.local` file

## 🌐 Deployment

The site is optimized for deployment on Vercel, Netlify, or any platform supporting Next.js.

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 🤝 Contributing

Contributions, issues, and feature requests are welcome!

## 📞 Contact

- **Email**: hello@vishalthimmaiah.com
- **LinkedIn**: [Vishal Thimmaiah](https://linkedin.com/in/vishalthimmaiah)
- **Twitter**: [@vishalthimmaiah](https://twitter.com/vishalthimmaiah)

---

Built with ❤️ by Vishal Thimmaiah

---
