
# SBP-EC Website

Official digital presence for the Sanford Burnham Prebys Entrepreneurship Club.

## 🚀 Quick Start (Local)

1. **Clone the project**
2. **Install dependencies**:
   ```bash
   npm install
   ```
3. **Run development server**:
   ```bash
   npm run dev
   ```

## 🌐 Deployment Guide

### Option 1: GitHub Pages (Recommended for GitHub hosting)

1. **Create a GitHub Repository** and push your code.
2. **Go to Settings > Pages**.
3. Under **Build and deployment**, set **Source** to **GitHub Actions**.
4. Create a file at `.github/workflows/deploy.yml` (GitHub often suggests a "Static HTML" or "Vite" template—choose the Vite one).
5. **Environment Variable**: To use the AI Advisor, you need a Google Gemini API Key.
   - Go to **Settings > Secrets and variables > Actions**.
   - Add a New Repository Secret: `VITE_GEMINI_API_KEY`.

### Option 2: Vercel or Netlify (Easiest)

1. Connect your GitHub account to [Vercel](https://vercel.com) or [Netlify](https://netlify.com).
2. Select this repository.
3. In **Environment Variables**, add `VITE_GEMINI_API_KEY` with your API key.
4. Click **Deploy**.

## 🛠 Tech Stack

- **React 19**: Modern UI library.
- **Tailwind CSS**: For styling.
- **Vite**: Ultra-fast build tool.
- **Google Gemini API**: Powers the AI Bio-Innovator Lab.
- **TypeScript**: For robust, type-safe code.

---
© 2024 Sanford Burnham Prebys Entrepreneurship Club
