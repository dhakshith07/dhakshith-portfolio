# ⚡ Dhakshith Bavan S – Personal Full-Stack Portfolio Website

A premium, modern, responsive personal developer portfolio website designed with a dark navy aesthetic, blue & purple gradient accents, subtle glassmorphism, smooth micro-animations, and complete MongoDB persistence.

- **Developer:** **Dhakshith Bavan S**
- **Professional Headline:** AI/ML Developer | Computer Vision Enthusiast | B.Tech CSE (AI) Student
- **Institution:** Karunya Institute of Technology and Sciences, Coimbatore, Tamil Nadu (2024–2028)
- **Location:** Krishnagiri, Tamil Nadu, India
- **Contact:** [dhakshithbavan1004@gmail.com](mailto:dhakshithbavan1004@gmail.com) • +91 9025069558

---

## 📑 Table of Contents
1. [Project Introduction](#1-project-introduction)
2. [Technologies Used](#2-technologies-used)
3. [Features](#3-features)
4. [Project Folder Structure](#4-project-folder-structure)
5. [Installation Instructions](#5-installation-instructions)
6. [How to Run Frontend and Backend](#6-how-to-run-frontend-and-backend)
7. [MongoDB Configuration](#7-mongodb-configuration)
8. [Deployment Instructions](#8-deployment-instructions)
9. [REST API Endpoints & Admin Operations](#9-rest-api-endpoints--admin-operations)
10. [Automated Verification Test Suite](#10-automated-verification-test-suite)

---

## 1. Project Introduction

This full-stack developer portfolio is built to showcase Dhakshith Bavan S's education, technical skills, research-oriented academic projects, industry internship experience, and professional certifications. 

The website addresses both recruiters and academic researchers by pairing an engaging dark-themed user interface with a robust, production-ready Node.js/Express backend and MongoDB Atlas / embedded database layer.

### Core Objectives:
- **Authentic Resume Representation:** Presents real educational milestones (B.Tech CSE AI at Karunya, 2024–2028, CGPA 6.5; Class XII at Sri Vijay Vidyalaya, 72.83%), skills, and certifications without fabricated percentages.
- **Dynamic Academic Projects:** Renders projects from a MongoDB database with interactive category filtering, live multi-keyword search, and architecture deep-dive modals.
- **Interactive Contact & Lead Capture:** Provides a validated contact form that saves inquiries directly into a MongoDB `contacts` collection.
- **One-Click Resume Access:** Built-in PDF download delivering `resume.pdf` on both mobile and desktop.
- **Dual-Mode Persistence:** Operates seamlessly with cloud MongoDB Atlas, local MongoDB, or automatic embedded in-memory MongoDB without requiring host daemon setup.

---

## 2. Technologies Used

### Frontend:
- **React.js 18** – Modern functional component architecture with React Hooks.
- **Vite 5** – Lightning-fast build tool and development server with Hot Module Replacement (HMR).
- **CSS3** – Pure CSS design tokens, flexbox/grid layouts, responsive media queries, glassmorphism, and hardware-accelerated animations (no heavy external CSS frameworks).
- **Custom SVG Icons** – High-performance, zero-dependency inline SVG icon library (`IconCode`, `IconDatabase`, `IconPhone`, etc.).

### Backend:
- **Node.js LTS** – JavaScript runtime environment.
- **Express.js 4** – RESTful routing, CORS management, and centralized middleware.
- **Mongoose 8** – Strict schema modeling, validation, and type casting.
- **MongoDB Memory Server** – Automated embedded MongoDB engine fallback for offline local testing.
- **PDF-Lib** – Native programmatic generation of 2-page developer resume documents.
- **Morgan & Dotenv** – HTTP request logging and environment configuration.

### Database:
- **MongoDB Atlas** – Cloud DBaaS (M0 Free Cluster support).
- **Local MongoDB** – Standard local `mongodb://127.0.0.1:27017/portfolio` or embedded engine.

### Deployment & DevOps:
- **Vercel** – Global Edge CDN for the React frontend client with SPA rewrites (`frontend/vercel.json`).
- **Render** – Cloud PaaS web service for the Express REST backend (`render.yaml`).
- **Git & GitHub** – Complete version control with secure multi-level `.gitignore` configurations.

---

## 3. Features

- **Dark Navy Aesthetic:** Premium `#080c16` canvas with glowing blue (`#38bdf8`) and indigo/purple (`#6366f1`) gradient accents.
- **Single-Page Navigation (9 Sections):**
  1. **Home / Hero (`#home`):** Dynamic typewriter role display, status pills, and prominent CTA buttons ("View Academic Projects", "Contact Me", "Download Resume").
  2. **About Me (`#about`):** Professional summary, quick facts grid, and 4 Technical Pillars.
  3. **Education (`#education`):** Academic timeline covering B.Tech (Karunya, CGPA 6.5) and Class XII (72.83%).
  4. **Technical Skills (`#skills`):** Categorized badges across Programming, AI/ML/CV, Tools, Networking/Security Fundamentals, and Soft Skills.
  5. **Internship Experience (`#internship`):** Timeline card for Data Science, AI & ML Internship at iGeeks Technologies, Bangalore (May–June 2026).
  6. **Academic Projects (`#projects`):**
     - *Context-Aware Workspace Organizer* (YOLOv11, MediaPipe, Streamlit)
     - *HemoNail Detector – AI-Based Non-Invasive Hemoglobin Estimation* (Computer Vision, Feature Extraction, Ensemble ML — with research prototype disclaimer)
     - *GestureSpeak – Smart Gloves: Sign Language Detection* (Arduino, Bluetooth, Android Studio)
  7. **Certifications (`#certifications`):** Grouped by organization (Cisco, Infosys, IBM, SkillForge).
  8. **Languages (`#languages`):** Proficiency cards (Telugu - Native, Tamil - Professional, English - C1 Proficient).
  9. **Contact (`#contact`):** Direct phone, email, and working MongoDB contact form.
- **Project Deep-Dive Modal:** Interactive architecture modal with keyboard `ESC` dismissal.
- **Active Navigation Indicator:** Sticky glassmorphic navbar with scroll-spy highlighting the currently viewed section.
- **Mobile Hamburger Drawer:** Full-screen responsive slide-out navigation on devices below `1080px`.
- **Download Resume:** Direct download of `resume.pdf` with helpful guidance modal.
- **Admin Security:** Protected project mutation endpoints requiring `x-admin-key`.

---

## 4. Project Folder Structure

```text
Personal Portfolio Website/
│
├── .gitignore                           # Root Git ignore (blocks node_modules, .env, build)
├── package.json                         # Monorepo scripts (run client, server, seed, test)
├── render.yaml                          # Render Blueprint specification for Backend API
├── README.md                            # Comprehensive project manual & audit
│
├── backend/                             # Node.js + Express + MongoDB REST API
│   ├── config/
│   │   └── db.js                        # Multi-mode MongoDB connection & auto-seeder
│   ├── controllers/
│   │   ├── contactController.js         # Contact submission & query handlers
│   │   ├── profileController.js         # Profile, education, skills & certs endpoints
│   │   └── projectController.js         # Full CRUD project controllers with admin auth
│   ├── data/
│   │   ├── dhakshithData.js             # Dhakshith Bavan S's authentic resume data
│   │   └── fallbackData.js              # Offline resilience dataset
│   ├── middleware/
│   │   └── adminAuth.js                 # Admin x-admin-key authentication middleware
│   ├── models/
│   │   ├── Contact.js                   # Mongoose schema for 'contacts' collection
│   │   └── Project.js                   # Mongoose schema for 'projects' collection
│   ├── routes/
│   │   ├── contactRoutes.js             # Routes for /api/contact
│   │   ├── profileRoutes.js             # Routes for /api/profile
│   │   └── projectRoutes.js             # Routes for /api/projects
│   ├── scripts/
│   │   └── generateResumePdf.js         # Automated PDF generator utility
│   ├── seeds/
│   │   └── seeder.js                    # Database seeder & reset utility
│   ├── test-mongodb-integration.js      # Automated 7-point integration test suite
│   ├── .env                             # Backend environment variables (ignored in Git)
│   ├── .env.example                     # Environment template for deployment
│   ├── .gitignore                       # Backend Git ignore
│   ├── package.json                     # Backend dependencies & npm scripts
│   └── server.js                        # Express server entry point & CORS configuration
│
└── frontend/                            # React 18 + Vite SPA Client
    ├── public/
    │   ├── favicon.svg                  # SVG developer icon
    │   └── resume.pdf                   # Downloadable resume document
    ├── src/
    │   ├── components/
    │   │   ├── Icons.jsx                # Zero-dependency inline SVG icon library
    │   │   ├── Navbar.jsx               # Sticky glassmorphic navbar with mobile drawer
    │   │   ├── Footer.jsx               # Footer, back-to-top button & copyright
    │   │   ├── ProjectModal.jsx         # Architecture modal dialog
    │   │   ├── ResumeModal.jsx          # Resume download & PDF guidance modal
    │   │   └── SocialPlaceholderModal.jsx # GitHub/LinkedIn URL instruction modal
    │   ├── sections/
    │   │   ├── HeroSection.jsx          # Home / Hero section
    │   │   ├── AboutSection.jsx         # About Me section
    │   │   ├── EducationSection.jsx     # Education timeline section
    │   │   ├── SkillsSection.jsx        # Technical skills section
    │   │   ├── InternshipSection.jsx    # Internship experience section
    │   │   ├── ProjectsSection.jsx      # Dynamic projects section with search/filter
    │   │   ├── CertificationsSection.jsx# Certifications grouped by provider
    │   │   ├── LanguagesSection.jsx     # Language proficiency section
    │   │   └── ContactSection.jsx       # Contact information & working form
    │   ├── services/
    │   │   ├── api.js                   # Centralized API client service
    │   │   └── initialData.js           # Instant UI rendering initial dataset
    │   ├── styles/                      # Modular CSS styling per section
    │   ├── App.jsx                      # Main React application component
    │   ├── App.css                      # App layout & ambient glow definitions
    │   ├── index.css                    # Dark theme CSS tokens & typography
    │   └── main.jsx                     # React 18 DOM mount point
    ├── .env                             # Frontend environment variables (ignored in Git)
    ├── .env.example                     # Frontend environment template
    ├── .gitignore                       # Frontend Git ignore
    ├── package.json                     # Frontend dependencies & npm scripts
    ├── vercel.json                      # Vercel SPA rewrites and PDF download headers
    └── vite.config.js                   # Vite configuration with backend proxy
```

---

## 5. Installation Instructions

### Prerequisites
- **Node.js**: v18.0.0 or higher (v20+ LTS recommended)
- **npm**: v9.0.0 or higher
- **Git**: Installed and available in PATH

### Clone or Open the Repository
```bash
git clone https://github.com/your-username/dhakshith-portfolio.git
cd "dhakshith-portfolio"
```

### Install Dependencies

#### 1. Backend Dependencies:
```bash
cd backend
npm install
cd ..
```

#### 2. Frontend Dependencies:
```bash
cd frontend
npm install
cd ..
```

---

## 6. How to Run Frontend and Backend

You can run both services independently or together using the root workspace commands.

### Method A: Running Separately

#### Start Backend (Port 5000):
```bash
cd backend
npm run dev
```
> Backend runs at: `http://localhost:5000`  
> API Health status: `http://localhost:5000/api/health`

#### Start Frontend (Port 5173):
```bash
cd frontend
npm run dev
```
> Frontend runs at: `http://localhost:5173`

---

### Method B: Running from Root Directory

From the project root folder:
```bash
# Start backend server
npm run server

# Start frontend client (in another terminal)
npm run client

# Run the automated MongoDB integration test suite
npm run test:mongo
```

---

## 7. MongoDB Configuration

The application features a **three-tier database connector** in `backend/config/db.js`:

1. **MongoDB Atlas (Cloud Production):** Uses `MONGO_URI` from `backend/.env`.
2. **Local MongoDB Instance:** Connects to `mongodb://127.0.0.1:27017/portfolio` if locally active.
3. **Embedded In-Memory Engine:** Automatically activates `MongoMemoryServer` if no external database is detected. Provides native MongoDB operations without manual database setup.

### Setting up MongoDB Atlas:
1. Register for a free account at [mongodb.com/atlas](https://www.mongodb.com/atlas).
2. Create a free **M0 Sandbox Cluster**.
3. Under **Security → Network Access**, add `0.0.0.0/0` (allow connections from anywhere or Render's IP addresses).
4. Under **Security → Database Access**, create a user (e.g. `dhakshith_admin`) and a secure password.
5. Click **Connect → Drivers → Node.js** and copy your connection string:
   ```env
   MONGO_URI=mongodb+srv://<username>:<password>@cluster0.xxxxx.mongodb.net/portfolio?retryWrites=true&w=majority
   ```
6. Paste the string into `backend/.env`.

### Seeding the Database:
To manually seed or reset Dhakshith's 3 academic projects into MongoDB:
```bash
cd backend
npm run seed
```
To remove seeded projects:
```bash
npm run seed:destroy
```

---

## 8. Deployment Instructions

### Step 1: Push Code to GitHub

Initialize git, verify `.gitignore`, and push to your GitHub account:
```bash
# Initialize repository (if not already done)
git init

# Stage all files (sensitive .env files are automatically excluded)
git add .

# Create the initial commit
git commit -m "feat: complete full-stack portfolio for Dhakshith Bavan S"

# Link to your GitHub repository
git remote add origin https://github.com/<your-github-username>/<your-repo-name>.git
git branch -M main
git push -u origin main
```

---

### Step 2: Deploy Backend to Render

1. Log in to [render.com](https://render.com).
2. Click **New +** → **Web Service**.
3. Connect your GitHub repository.
4. Configure service settings:
   - **Name:** `dhakshith-portfolio-api`
   - **Root Directory:** `backend`
   - **Runtime:** `Node`
   - **Build Command:** `npm install`
   - **Start Command:** `node server.js`
   - **Instance Type:** `Free`
5. Under **Environment Variables**, add:
   | Key | Value |
   |---|---|
   | `NODE_ENV` | `production` |
   | `PORT` | `5000` |
   | `MONGO_URI` | *Your MongoDB Atlas connection URI* |
   | `CLIENT_URL` | *Your Vercel frontend URL (or leave blank to auto-allow `*.vercel.app`)* |
   | `ADMIN_KEY` | *A secure random string (e.g. `dhakshith_admin_secret_2026`)* |
6. Click **Create Web Service**.
7. Note down your Render API URL (e.g., `https://dhakshith-portfolio-api.onrender.com`).

---

### Step 3: Deploy Frontend to Vercel

1. Log in to [vercel.com](https://vercel.com).
2. Click **Add New...** → **Project**.
3. Import your GitHub repository.
4. Configure project settings:
   - **Framework Preset:** `Vite`
   - **Root Directory:** `frontend`
   - **Build Command:** `npm run build`
   - **Output Directory:** `dist`
5. Under **Environment Variables**, add:
   | Key | Value |
   |---|---|
   | `VITE_API_URL` | `https://dhakshith-portfolio-api.onrender.com/api` |
6. Click **Deploy**.
7. Your portfolio will be live at `https://<your-project>.vercel.app` with instant SSL.

---

## 9. REST API Endpoints & Admin Operations

### Public Endpoints:
- `GET /api/health` – Server health status and database connectivity.
- `GET /api/profile` – Dhakshith's complete profile, education, skills, and languages.
- `GET /api/projects` – List of academic projects (supports query filters: `?category=...&search=...`).
- `GET /api/projects/:id` – Detailed view of a single project.
- `POST /api/contact` – Submit a contact message (validates `name`, `email`, `message` and stores in MongoDB).

### Protected Admin Endpoints (Require `x-admin-key` header):
- `POST /api/projects` – Create a new project document in MongoDB.
- `PUT /api/projects/:id` – Update an existing project document in MongoDB.
- `DELETE /api/projects/:id` – Delete a project from MongoDB.
- `GET /api/contact/messages` – Retrieve received contact inquiries.

#### Admin Request Example:
```bash
curl -X POST http://localhost:5000/api/projects \
  -H "Content-Type: application/json" \
  -H "x-admin-key: dhakshith_admin_secret_2026" \
  -d '{
    "title": "Autonomous Visual Inspection Drone",
    "category": "AI & Computer Vision",
    "technologies": ["Python", "YOLOv11", "OpenCV"],
    "summary": "Edge-AI quadcopter prototype for automated defect identification.",
    "description": "Deep learning visual inspection system deployed on an embedded computing module.",
    "features": ["Real-time defect segmentation", "Telemetry logging"]
  }'
```

---

## 10. Automated Verification Test Suite

An end-to-end integration test suite is included in `backend/test-mongodb-integration.js` to verify all 7 database and API requirements:

```bash
cd backend
npm run test:mongo
```

### Verified Criteria:
1. All 3 academic projects are stored in the MongoDB `projects` collection.
2. React frontend successfully retrieves projects via Express REST API.
3. Protected project creation (`POST /api/projects`) works for authorized admins and rejects unauthorized attempts with `401`.
4. Existing projects can be updated (`PUT /api/projects/:id`) and persist changes in MongoDB.
5. Projects can be deleted by authorized admins (`DELETE /api/projects/:id`) with immediate reflection.
6. Contact inquiries (`POST /api/contact`) validate inputs and persist to the MongoDB `contacts` collection.
7. Mongoose database errors (`CastError` for malformed IDs, `ValidationError` for missing fields, `404` for missing documents) return standardized HTTP responses.

---

## 👨‍💻 Developer Contact

- **Name:** Dhakshith Bavan S
- **Email:** [dhakshithbavan1004@gmail.com](mailto:dhakshithbavan1004@gmail.com)
- **Phone:** +91 9025069558
- **Location:** Krishnagiri, Tamil Nadu, India
- **LinkedIn / GitHub:** Configure profile URLs directly in `frontend/src/services/initialData.js` and `backend/data/dhakshithData.js`.
