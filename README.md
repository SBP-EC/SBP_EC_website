
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

This repository is configured to deploy automatically via **GitHub Actions**.

1. **Push your code** to the `main` branch.
2. **Add your API Key**:
   - Go to your GitHub Repo > **Settings** > **Secrets and variables** > **Actions**.
   - Create a **New repository secret**.
   - Name: `VITE_GEMINI_API_KEY`
   - Value: (Your Google Gemini API Key).
3. **Enable Pages**:
   - Go to **Settings** > **Pages**.
   - Under **Build and deployment** > **Source**, select **GitHub Actions**.

The site will now build and update every time you push code!

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
