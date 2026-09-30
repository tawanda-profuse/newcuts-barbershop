# NewCuts Barbershop

A modern, full-featured barbershop website built with **Next.js 16**, **React 19**, and **Tailwind CSS**. Features a responsive landing page, booking integration, service showcase, and premium brand experience.

## 🎯 Project Overview

NewCuts is a production-ready Next.js application designed for premium barbershop services. The project demonstrates modern frontend development practices including:

- **App Router** with TypeScript support
- **Responsive design** using Tailwind CSS v4
- **Component-based architecture** with reusable UI patterns
- **Framer Motion** for smooth animations
- **Date utilities** with date-fns for booking features
- **Icon library** with Lucide React

## 📋 Tech Stack

| Layer | Technology |
|-------|-----------|
| **Framework** | Next.js 16.3.6 |
| **Runtime** | React 19.2.8 |
| **Language** | TypeScript 5 |
| **Styling** | Tailwind CSS v4 |
| **Animation** | Framer Motion 13.4.3 |
| **Icons** | Lucide React 1.48.0 |
| **Date Handling** | date-fns 4.4.0 |
| **Linting** | ESLint 9 |

## 🚀 Getting Started

### Prerequisites

- **Node.js** 18+ or **bun**
- **npm**, **yarn**, **pnpm**, or **bun** package manager

### Installation

1. Clone the repository:
```bash
git clone https://github.com/tawanda-profuse/newcuts-barbershop.git
cd newcuts-barbershop
```

2. Install dependencies:
```bash
npm install
# or
yarn install
# or
pnpm install
# or
bun install
```

### Development Server

Start the local development server:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to view the application. Changes are hot-reloaded as you edit files.

### Building for Production

Create an optimized production build:

```bash
npm run build
```

Start the production server:

```bash
npm run start
```

### Linting

Run ESLint to check code quality:

```bash
npm run lint
```

## 📁 Project Structure

```
newcuts-barbershop/
├── src/
│   ├── app/              # Next.js App Router pages & layouts
│   │   ├── page.tsx      # Home page with landing content
│   │   └── layout.tsx    # Root layout wrapper
│   └── components/       # Reusable React components
│       ├── Logo.tsx
│       └── ...
├── public/               # Static assets
├── .gitignore
├── eslint.config.mjs     # ESLint configuration
├── next.config.ts        # Next.js configuration
├── postcss.config.mjs    # PostCSS configuration
├── package.json
├── tailwind.config.ts    # Tailwind CSS configuration
├── tsconfig.json         # TypeScript configuration
└── README.md
```

## 🔑 Key Features

- **Landing Page** (`src/app/page.tsx`) - Hero section with call-to-action buttons
- **Responsive Design** - Mobile-first approach with Tailwind breakpoints
- **Service Highlights** - Precision fades, straight razor finishes, walk-in friendly
- **Component Reusability** - Modular Logo and UI components
- **Brand Theming** - CSS variables for consistent color management
- **Performance Optimized** - Next.js automatic code splitting and optimization

## 📝 Available Scripts

```bash
npm run dev      # Start development server (hot-reload on :3000)
npm run build    # Build for production
npm run start    # Start production server
npm run lint     # Run ESLint checks
```

## 🌐 Deployment

### Deploy on Vercel (Recommended)

The easiest way to deploy a Next.js application is on the [Vercel Platform](https://vercel.com), created by the Next.js team.

#### Option 1: Connect Git Repository
1. Push your code to GitHub, GitLab, or Bitbucket
2. Visit [vercel.com/new](https://vercel.com/new)
3. Import your repository
4. Vercel automatically detects Next.js and configures build settings
5. Click **Deploy**

#### Option 2: Vercel CLI
```bash
npm i -g vercel
vercel
```

Follow the prompts to authenticate and deploy.

#### Environment Variables
Add environment variables in the Vercel dashboard under **Settings > Environment Variables**.

### Deploy on Other Platforms

#### **AWS Amplify**
```bash
npm install -g @aws-amplify/cli
amplify configure
amplify add hosting
amplify publish
```

#### **Netlify**
```bash
npm i -g netlify-cli
netlify deploy
```

#### **Docker**
```dockerfile
FROM node:18-alpine AS builder
WORKDIR /app
COPY package*.json ./
RUN npm ci
COPY . .
RUN npm run build

FROM node:18-alpine
WORKDIR /app
COPY --from=builder /app/public ./public
COPY --from=builder /app/.next/standalone ./
COPY --from=builder /app/.next/static ./.next/static
EXPOSE 3000
CMD ["node", "server.js"]
```

Build and run:
```bash
docker build -t newcuts-barbershop .
docker run -p 3000:3000 newcuts-barbershop
```

#### **Traditional VPS (Ubuntu/Debian)**
```bash
# On your server
curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.39.0/install.sh | bash
nvm install 18
git clone https://github.com/tawanda-profuse/newcuts-barbershop.git
cd newcuts-barbershop
npm install
npm run build
npm run start
```

Use **PM2** for process management:
```bash
npm install -g pm2
pm2 start npm --name "newcuts" -- start
pm2 save
pm2 startup
```

## 🔧 Configuration

### Next.js Configuration (`next.config.ts`)
Customize build behavior, redirects, and rewrites here.

### TypeScript (`tsconfig.json`)
Configured with strict mode and path aliases (`@/*`).

### Tailwind CSS (`tailwind.config.ts`)
Customize design tokens, colors, and responsive breakpoints.

## 📚 Learning Resources

- [Next.js Documentation](https://nextjs.org/docs)
- [React Documentation](https://react.dev)
- [Tailwind CSS Docs](https://tailwindcss.com/docs)
- [Framer Motion Guide](https://www.framer.com/motion/)
- [TypeScript Handbook](https://www.typescriptlang.org/docs/)

## 🤝 Contributing

Contributions are welcome! Please follow these steps:

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/my-feature`)
3. Commit changes (`git commit -am 'Add my feature'`)
4. Push to the branch (`git push origin feature/my-feature`)
5. Open a Pull Request

## 📄 License

This project is private. For licensing inquiries, please contact the repository owner.

## 🔗 Links

- **Repository**: [tawanda-profuse/newcuts-barbershop](https://github.com/tawanda-profuse/newcuts-barbershop)
- **Issues**: [Report a bug](https://github.com/tawanda-profuse/newcuts-barbershop/issues)
- **Next.js Repo**: [vercel/next.js](https://github.com/vercel/next.js)

---

**Last Updated**: September 2026 | Built with ❤️ using Next.js
