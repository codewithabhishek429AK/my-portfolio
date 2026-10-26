# Abhishek Rathore - Personal Portfolio Website

A modern, responsive, and recruiter-focused developer portfolio engineered for an MCA student preparing for software developer internships and placement drives.

Built with **React.js**, **Vite**, **Tailwind CSS**, and **Lucide Icons**.

---

## 🚀 Quick Start (Run Locally)

### 1. Prerequisites
Ensure you have **Node.js** (v18 or higher) installed on your system.

### 2. Install Dependencies
Open your terminal inside the project directory (`Portfolio Antigravity`) and run:
```bash
npm install
```

### 3. Start Development Server
```bash
npm run dev
```
Open your browser and navigate to:
```
http://localhost:3000
```

### 4. Build for Production
To create an optimized production build:
```bash
npm run build
```

To preview the production build locally:
```bash
npm run preview
```

---

## 📁 Project Structure

```
Portfolio Antigravity/
├── index.html                   # SEO metadata, OpenGraph tags & Google Fonts
├── package.json                 # Project dependencies and scripts
├── vite.config.js               # Vite build configuration (Port 3000)
├── tailwind.config.js           # Dark navy color palette & styling extensions
├── postcss.config.js            # PostCSS configuration with Autoprefixer
├── public/
│   ├── favicon.svg              # Custom AR monogram SVG favicon
│   ├── avatar-placeholder.svg   # High-resolution developer profile illustration
│   └── resume.pdf               # Starter PDF resume (replace with your real resume)
└── src/
    ├── main.jsx                 # React root entry point with ThemeProvider
    ├── App.jsx                  # Main page layout & section structure
    ├── index.css                # Tailwind directives & smooth scroll styling
    ├── context/
    │   └── ThemeContext.jsx     # Dark Navy / Light Mode theme state & persistence
    ├── data/
    │   └── portfolioData.js     # Single source of truth for all text, links, and content
    └── components/
        ├── Navbar.jsx           # Responsive header with scroll-spy & mobile drawer
        ├── Hero.jsx             # Hero section with 3 CTA buttons & profile placeholder
        ├── About.jsx            # Honest bio, MCA journey, and value pillars
        ├── Skills.jsx           # Categorized skill cards (Languages, Frontend, DB, Tools, AI/ML)
        ├── Projects.jsx         # Project cards with status tags, filters & repo links
        ├── Education.jsx        # Editable MCA & undergraduate education timeline
        ├── ResumeSection.jsx    # Functional resume preview & direct download card
        ├── Contact.jsx          # Validated contact form & direct email/social channels
        └── Footer.jsx           # Social links, dynamic year & back-to-top button
```

---

## ✏️ How to Customize Your Details

All portfolio content is centralized in **`src/data/portfolioData.js`**. You do not need to hunt through multiple React components to update your information!

### 1. Replace the Placeholder Resume
1. Export your official resume as a PDF named `resume.pdf`.
2. Place it in the `public/` directory (replacing the existing `public/resume.pdf`).
3. That's it! Both the **"Download Resume"** buttons in the Hero, Navbar, and Resume section will immediately download your file.

### 2. Replace the Profile Picture
1. Put your professional headshot image (e.g. `profile.png` or `profile.jpg`) into the `public/` directory.
2. In `src/data/portfolioData.js`, change:
   ```javascript
   avatarUrl: "/profile.png", // or /profile.jpg
   ```

### 3. Update Social & Contact Links
In `src/data/portfolioData.js`, update:
```javascript
socialLinks: {
  github: "https://github.com/your-username",
  linkedin: "https://linkedin.com/in/your-profile",
  email: "your.name@example.com",
}
```

### 4. Update Education or Passing Year
In `src/data/portfolioData.js`:
- Modify `period: "2024 – 2026"`
- Modify undergraduate degree, institution, or coursework.

---

## 🌐 Deployment Instructions

### Option 1: Deploy on Vercel (Recommended)
1. Push your project code to a GitHub repository:
   ```bash
   git init
   git add .
   git commit -m "Initial commit - Abhishek Rathore Portfolio"
   git branch -M main
   git remote add origin https://github.com/<your-username>/<repo-name>.git
   git push -u origin main
   ```
2. Go to [vercel.com](https://vercel.com) and log in with GitHub.
3. Click **"Add New"** > **"Project"** and import your repository.
4. Framework Preset will auto-detect as **Vite**.
5. Click **"Deploy"**. Your portfolio will be live with free SSL in under a minute!

### Option 2: Deploy on Netlify
1. Log in to [netlify.com](https://netlify.com).
2. Click **"Add new site"** > **"Import an existing project"** > **GitHub**.
3. Select your portfolio repository.
4. Set Build command to: `npm run build` and Publish directory to: `dist`.
5. Click **"Deploy site"**.
