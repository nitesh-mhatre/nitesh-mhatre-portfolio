# Nitesh Mhatre | Portfolio & Resume

A modern, interactive portfolio and resume website built with **React**, **TypeScript**, and **Tailwind CSS**. Features a clean, professional design with dark/light theme support and PDF download capability.

[![Resume](https://img.shields.io/badge/Resume-Portfolio-blue?style=for-the-badge&logo=googlechrome&logoColor=white)](https://nitesh-mhatre-resume.web.app/)


## Features

- **Dark/Light Theme Toggle** - Seamless theme switching with localStorage persistence
- **PDF Resume Download** - Download resume as professional PDF with single click
- **Responsive Design** - Mobile-friendly layout built with Tailwind CSS
- **Smooth Animations** - Elegant animations powered by Motion library
- **Professional Layout** - Clean, modern portfolio showcasing experience, skills, and education
- **Accessible** - Built with accessibility best practices

---

## Tech Stack

**Frontend:**
- React 19
- TypeScript
- Tailwind CSS 4
- Vite 6
- Motion (animations)
- Lucide React (icons)

**PDF Export:**
- html2canvas
- jsPDF

**Development:**
- Node.js
- TypeScript
- Express (dev server)

---

## Getting Started

### Prerequisites
- Node.js (v16 or higher)
- npm 

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/nitesh-mhatre/nitesh-mhatre-portfolio.git
   cd nitesh-mhatre-portfolio
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start development server**
   ```bash
   npm run dev
   ```
   
   The app will be available at `http://localhost:3000`

### Build for Production

```bash
npm run build
```

This generates optimized production files in the `dist/` directory.

### Preview Production Build

```bash
npm preview
```

---

## 📋 Available Scripts

| Command | Description |
|---------|-------------|
| `npm run dev` | Start development server on port 3000 |
| `npm run build` | Build for production |
| `npm run preview` | Preview production build locally |
| `npm run clean` | Remove dist directory |
| `npm run lint` | Run TypeScript type checking |

---

## 📁 Project Structure

```
src/
├── App.tsx                 # Main app component
├── main.tsx               # React entry point
├── index.css              # Global styles
├── constants.ts           # Resume data and constants
├── components/
│   ├── Header.tsx         # Portfolio header/intro section
│   ├── Experience.tsx     # Work experience section
│   ├── Skills.tsx         # Skills showcase
│   ├── SectionTitle.tsx   # Reusable section title component
│   ├── ThemeToggle.tsx    # Dark/light theme switch
│   ├── DownloadButton.tsx # PDF download button
│   └── SidebarAccent.tsx  # Decorative sidebar element
├── vite.config.ts         # Vite configuration
├── tsconfig.json          # TypeScript configuration
└── package.json           # Dependencies and scripts
```
---

## 📜 License

This project is personal portfolio of Nitesh Mhatre. All rights reserved.

---

## 🙏 Acknowledgments

Built with ❤️ using modern web technologies. Special thanks to the React, Vite, and Tailwind CSS communities.
# nitesh-mhatre-portfolio
