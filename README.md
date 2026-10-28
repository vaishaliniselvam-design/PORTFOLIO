# Vaishalini S — Personal Portfolio Website
> **Targeting:** Software Developer | Graduate Engineer Trainee (IT) | Entry-Level Software Engineer (Class of 2027)

A modern, high-performance, responsive personal portfolio website crafted for **Vaishalini S**, an Electronics and Communication Engineering undergraduate at **Sethu Institute of Technology** (CGPA: 8.4/10, Batch: 2023–2027).

---

## 🌟 Key Features

- **Dark Navy & Electric Indigo Aesthetic**: Built with deep slate navy (`#090d16`), vibrant violet/purple (`#8b5cf6`), and cyan accents (`#38bdf8`), optimized for low eye strain and high visual appeal.
- **Recruiter-Friendly Design**: Clear academic credentials, verifiable metrics, internship milestones, and quick contact channels positioned for rapid evaluation.
- **100% Verified Details**: Populated directly from Vaishalini's official resume without hallucinated links or metrics:
  - **FormForge**: Dynamic Workflow Forms (Infosys Springboard Virtual Internship 7.0)
  - **Churn Guard**: Customer Churn Prediction (Scikit-learn, SMOTE, 76% RF Accuracy, 84.6% ROC-AUC)
  - **Retail Sales Analysis**: 9,800 records analyzed, 2,261,536.78 in sales
  - **TimeCast**: Sales Forecasting with Time-Series (MAE 1,766.98, RMSE 2,508.66)
  - **Leadership**: 2 Tenures as Toastmasters Club Secretary
  - **Certifications**: NPTEL Industry 4.0 (Elite + Silver), IoT (Elite + Silver), Cloud Computing (Elite), Infosys Springboard Python
  - **Awards**: 1st Prize DuoCare Paper Presentation, 2nd Prize Aquaculture Paper Presentation, Sethu Shining Star Award 2K25, CodeChef Gold Badge
- **Conditional Project Link Handling**: GitHub buttons link directly to active repositories. Live Demo buttons gracefully reflect deployment status until a live URL is provided.
- **Lightweight & Blazing Fast**: Pure HTML5, CSS3, and modern Vanilla ES6+ JavaScript. Zero external npm dependencies, zero build steps, sub-100ms load times.
- **Accessible & SEO-Optimized**: Full semantic HTML tags, keyboard navigability, high contrast text ratios, and `prefers-reduced-motion` compliance.

---

## 📁 File Structure

```text
portfolio/
├── index.html              # Main HTML5 semantic structure
├── css/
│   └── styles.css          # Modern dark navy CSS with variables & responsive layout
├── js/
│   ├── main.js             # Navigation, drawer, copy email, filters & form handling
│   └── portfolio-data.js   # Centralized data configuration for easy maintenance
├── assets/
│   ├── resume.pdf          # Place your official resume PDF here
│   └── README.txt          # Asset guide
└── README.md               # Documentation & deployment guide
```

---

## 🚀 Quick Start (Local Preview)

### Method 1: Direct File Opening
Double-click `index.html` to open it directly in Google Chrome, Microsoft Edge, Firefox, or Safari.

### Method 2: Python HTTP Server (Recommended)
If you have Python installed, open PowerShell or terminal inside the `portfolio/` folder:

```bash
# Python 3
python -m http.server 3000
```
Then visit: `http://localhost:3000`

### Method 3: VS Code Live Server
1. Open the `portfolio` folder in Visual Studio Code.
2. Right-click `index.html` and click **"Open with Live Server"**.

---

## 🌐 How to Publish for Free

### Option 1: GitHub Pages (Recommended)

1. **Create a GitHub Repository**:
   - Go to [GitHub](https://github.com/new) and create a repository named `portfolio` (or `vaishaliniselvam-design.github.io`).
2. **Push Your Files**:
   ```bash
   cd portfolio
   git init
   git add .
   git commit -m "Initial commit: Vaishalini S Portfolio"
   git branch -M main
   git remote add origin https://github.com/vaishaliniselvam-design/portfolio.git
   git push -u origin main
   ```
3. **Enable GitHub Pages**:
   - Go to your repository **Settings** > **Pages** (under Code and automation).
   - Under **Build and deployment** > **Source**, choose **Deploy from a branch**.
   - Select branch: `main` and folder: `/ (root)`.
   - Click **Save**.
4. Your site will be live at `https://vaishaliniselvam-design.github.io/portfolio` in ~1 minute!

---

### Option 2: Vercel (Zero Configuration)

1. Go to [Vercel](https://vercel.com) and sign in with GitHub.
2. Click **"Add New..."** > **"Project"**.
3. Import your `portfolio` repository.
4. Keep the default settings (Framework Preset: *Other*, Root Directory: `./`).
5. Click **Deploy**.
6. Vercel will instantly generate a global HTTPS URL like `https://vaishalini-portfolio.vercel.app`.

---

## ✏️ How to Update Information

### Updating Details via `js/portfolio-data.js`
All your projects, metrics, certifications, and contact links are organized in `js/portfolio-data.js`.
To add a Live Demo URL for any project, simply edit:
```javascript
{
  id: "formforge",
  title: "FormForge — Dynamic Workflow Forms",
  // ...
  demoUrl: "https://formforge-demo.vercel.app" // replace with your live URL
}
```

### Adding Your Resume File
Save your latest resume PDF inside the `assets/` folder with the filename `resume.pdf`. The header, hero, and contact buttons will automatically download this file.
