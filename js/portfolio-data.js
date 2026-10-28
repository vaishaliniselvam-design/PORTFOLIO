/**
 * PORTFOLIO DATA CONFIGURATION
 * Real resume data for Vaishalini S (Class of 2027)
 * Editable configuration for quick updates
 */

const PORTFOLIO_DATA = {
  personal: {
    fullName: "Vaishalini S",
    shortName: "Vaishalini",
    tagline: "Software Development Engineer Intern Candidate | Python | FastAPI | Machine Learning",
    targetRoles: "Software Developer | Graduate Engineer Trainee (IT) | Entry-Level Software Engineer",
    batch: "Class of 2027",
    college: "Sethu Institute of Technology",
    degree: "B.E. Electronics and Communication Engineering",
    cgpa: "8.4 / 10",
    graduationYears: "2023 – 2027",
    email: "vaishaliniselvam@gmail.com",
    phone: "+91 8667699021",
    linkedin: "https://linkedin.com/in/vaishalini-s-71910127a",
    github: "https://github.com/vaishaliniselvam-design",
    codechef: "https://www.codechef.com/users/savvy_rats_86",
    resumePath: "assets/resume.pdf"
  },

  projects: [
    {
      id: "formforge",
      title: "FormForge — Dynamic Workflow Forms",
      category: "Backend & Full-Stack",
      tag: "backend",
      internship: "Infosys Springboard Virtual Internship 7.0 (Batch 4)",
      period: "Sep 2026 – Nov 2026",
      tech: ["Python", "FastAPI", "SQLAlchemy", "PostgreSQL", "Alembic", "Docker", "Swagger/OpenAPI", "HTML", "CSS", "JavaScript", "Git", "GitHub"],
      description: "Architected an extensible dynamic workflow form generation and response management platform during the Infosys Springboard Python Virtual Internship.",
      highlights: [
        "Engineered form creation, publishing, conditional field visibility, file uploads, and response management.",
        "Implemented rule-based field display (e.g. Body Temperature shown when Primary Symptom is fever), schema versioning, and response analytics.",
        "Built REST APIs with FastAPI, SQLAlchemy, PostgreSQL, and Alembic migrations; enabled CSV/JSON export and monitored APIs via Swagger/OpenAPI.",
        "Validated system functionality through dashboard checks and 200 OK API responses; Triage Intake test form recorded 2 of 2 completed responses.",
        "Containerized application with Docker and managed source control via Git/GitHub."
      ],
      metrics: [
        { label: "API Monitoring", value: "Swagger / OpenAPI" },
        { label: "Database", value: "PostgreSQL + Alembic" }
      ],
      githubUrl: "https://github.com/Springboard-Internship-2026",
      demoUrl: "" // Pending live deployment URL
    },
    {
      id: "churn-guard",
      title: "Churn Guard — Customer Churn Prediction Using ML",
      category: "Machine Learning & AI",
      tag: "data",
      internship: "QSkill Data Science Virtual Internship",
      period: "Aug 2026 – Sep 2026",
      tech: ["Python", "Pandas", "NumPy", "Matplotlib", "Seaborn", "Scikit-learn", "imbalanced-learn", "SMOTE"],
      description: "Developed an end-to-end telecom customer churn classification pipeline designed to proactively detect high-risk subscriber departures.",
      highlights: [
        "Analyzed telecom customer data to identify churn patterns and key customer features.",
        "Performed data preprocessing, EDA, feature engineering, feature selection, and SMOTE-based class balancing.",
        "Trained and tuned Logistic Regression and Random Forest models; evaluated with accuracy, precision, recall, F1-score, and ROC-AUC.",
        "Achieved 76% accuracy with tuned Random Forest, and 84.6% ROC-AUC with 78.7% recall using tuned Logistic Regression.",
        "Identified TotalCharges, tenure, AvgMonthlySpend, MonthlyCharges, and Contract_Two year as the top five Random Forest features."
      ],
      metrics: [
        { label: "Random Forest Accuracy", value: "76%" },
        { label: "Logistic Regression ROC-AUC", value: "84.6%" }
      ],
      githubUrl: "https://github.com/vaishaliniselvam-design/churn-guard-prediction",
      demoUrl: "" // Pending live deployment URL
    },
    {
      id: "retail-sales",
      title: "Retail Sales Data Analysis & Business Insights",
      category: "Data Analytics & BI",
      tag: "data",
      internship: "QSkill Data Science Virtual Internship",
      period: "Aug 2026 – Sep 2026",
      tech: ["Python", "Pandas", "NumPy", "Matplotlib", "Seaborn", "Google Colab", "EDA"],
      description: "Conducted statistical exploratory data analysis across retail enterprise transactions to uncover purchasing trends, product profitability, and revenue distribution.",
      highlights: [
        "Analyzed 9,800 retail sales records totaling 2,261,536.78 sales in the dataset currency across 793 customers and 1,849 products.",
        "Performed data cleaning, exploratory data analysis (EDA), and monthly/yearly seasonal sales analysis.",
        "Identified Technology as the highest-revenue category, West as the leading sales region, and November as the strongest sales month.",
        "Generated data-driven insights to support business reporting and sales performance analysis."
      ],
      metrics: [
        { label: "Records Analyzed", value: "9,800" },
        { label: "Total Dataset Sales", value: "2,261,536.78" }
      ],
      githubUrl: "https://github.com/vaishaliniselvam-design/retail-sales-data-analysis",
      demoUrl: "" // Pending live deployment URL
    },
    {
      id: "timecast",
      title: "TimeCast — Sales Forecasting Using Time Series Analysis",
      category: "Time Series & Predictive Modeling",
      tag: "data",
      internship: "QSkill Data Science Virtual Internship",
      period: "Aug 2026 – Sep 2026",
      tech: ["Python", "Pandas", "NumPy", "Matplotlib", "Seaborn", "Scikit-learn", "Statsmodels", "Time Series Analysis"],
      description: "Constructed a time-series forecasting framework to project upcoming sales velocities using historic seasonality, windowed statistics, and lag transformations.",
      highlights: [
        "Analyzed historical retail sales data to identify trends, seasonality, and sales patterns.",
        "Engineered time-based, lag, and rolling-average features; benchmarked Linear Regression against Random Forest Regressor.",
        "Evaluated forecasting performance using MAE, RMSE, and MAPE; Random Forest achieved an MAE of 1,766.98 and Linear Regression achieved an RMSE of 2,508.66.",
        "Generated a 30-day future sales forecast to explore projected retail demand trends."
      ],
      metrics: [
        { label: "Random Forest MAE", value: "1,766.98" },
        { label: "Linear Regression RMSE", value: "2,508.66" }
      ],
      githubUrl: "https://github.com/vaishaliniselvam-design/timecast-sales-forecasting",
      demoUrl: "" // Pending live deployment URL
    }
  ],

  certifications: [
    {
      title: "Industry 4.0",
      issuer: "NPTEL (Ministry of Education, Govt. of India)",
      grade: "Elite + Silver",
      description: "Industrial IoT, Cyber-Physical Systems (CPS), smart manufacturing, and digital twin concepts.",
      verifyUrl: ""
    },
    {
      title: "Internet of Things (IoT)",
      issuer: "NPTEL (Ministry of Education, Govt. of India)",
      grade: "Elite + Silver",
      description: "Microcontroller architecture, sensor interfacing, IoT communication protocols (MQTT, CoAP), and edge integrations.",
      verifyUrl: ""
    },
    {
      title: "Cloud Computing",
      issuer: "NPTEL (Ministry of Education, Govt. of India)",
      grade: "Elite",
      description: "Cloud virtualization, IaaS/PaaS/SaaS architectures, resource provisioning, distributed storage, and cloud security.",
      verifyUrl: ""
    },
    {
      title: "Python Programming",
      issuer: "Infosys Springboard",
      grade: "Certified",
      description: "Core Python fundamentals, Object-Oriented Programming (OOP), data structures, and algorithm design.",
      verifyUrl: ""
    },
    {
      title: "Data Science Virtual Internship",
      issuer: "QSkill (SR India)",
      grade: "ID: qsds2608099",
      description: "31-day intensive internship covering end-to-end data science, exploratory data analysis, and predictive modeling.",
      verifyUrl: ""
    },
    {
      title: "Generative AI",
      issuer: "Skill Nation",
      grade: "Certified",
      description: "Generative AI concepts, prompt engineering, and modern AI workflows.",
      verifyUrl: ""
    },
    {
      title: "DataPlus Overview & Soft Skills",
      issuer: "TCS iON",
      grade: "Certified",
      description: "Data analysis methodologies, corporate soft skills, and professional communication.",
      verifyUrl: ""
    },
    {
      title: "AI Women Empower Her",
      issuer: "Empower Her Program",
      grade: "8-Week Program",
      description: "8-week immersive training in artificial intelligence, practical machine learning, and career development.",
      verifyUrl: ""
    }
  ],

  achievements: [
    {
      title: "First Prize — DuoCare Paper Presentation",
      organization: "KLN College",
      badge: "1st Prize",
      description: "Awarded First Prize for presenting technical paper DuoCare, demonstrating research synthesis and answering rigorous technical inquiries."
    },
    {
      title: "Second Prize — Aquaculture Paper Presentation",
      organization: "KLN College",
      badge: "2nd Prize",
      description: "Awarded Second Prize for presenting research on technology-driven aquaculture automation and monitoring systems."
    },
    {
      title: "First Prize — Data Decode",
      organization: "Technical Symposium",
      badge: "1st Prize",
      description: "Secured First Prize in technical data analysis, pattern recognition, and problem-solving competition."
    },
    {
      title: "Second Prize — Promot Craft",
      organization: "Symposium",
      badge: "2nd Prize",
      description: "Recognized for creative product pitching, technical design presentation, and marketing ideation."
    },
    {
      title: "Sethu Shining Star Award 2K25",
      organization: "Sethu Institute of Technology",
      badge: "Excellence Award",
      description: "Honored with the prestigious Sethu Shining Star Award 2K25 in recognition of outstanding academic, leadership, and technical excellence."
    },
    {
      title: "Infosys Springboard 100 Quiz Champion",
      organization: "Infosys Springboard",
      badge: "Champion",
      description: "Recognized as a 100 Quiz Champion on Infosys Springboard for technical proficiency and algorithmic acumen."
    },
    {
      title: "CodeChef Problem Solver Gold Badge",
      organization: "CodeChef",
      badge: "Gold Badge",
      description: "Earned CodeChef Problem Solver Gold Badge. CodeChef Skill Test scores: Networking 80%, Operating Systems 80%, C Programming 75%."
    }
  ],

  leadership: [
    {
      role: "Secretary, Toastmasters Club",
      organization: "Toastmasters International",
      tenures: "2 Tenures",
      highlights: [
        "Elected and served for two consecutive tenures on the Executive Committee as Club Secretary.",
        "Collaborated with club members to organize meetings and support communication skills development.",
        "Managed official meeting records, executive minutes, and structured member correspondence across multiple terms.",
        "Cultivated executive communication, active listening, public speaking, and team leadership skills."
      ]
    }
  ],

  internships: [
    {
      role: "Python Virtual Intern — FormForge",
      company: "Infosys Springboard Virtual Internship 7.0, Batch 4",
      period: "Sep 2026 – Nov 2026",
      tech: "Python, FastAPI, SQLAlchemy, PostgreSQL, Alembic, Docker, Swagger, Git",
      summary: "Completed internship by building FormForge, a dynamic workflow form system with versioned schemas, conditional visibility, and CSV/JSON export."
    },
    {
      role: "Data Science Virtual Intern",
      company: "QSkill (SR India)",
      period: "Aug 2026 – Sep 2026",
      tech: "Python, Pandas, NumPy, Scikit-learn, SMOTE, EDA, Regression, Random Forest",
      summary: "Delivered 3 end-to-end projects (TimeCast sales forecasting, Churn Guard prediction, Retail Sales analysis). Received Letter of Recommendation for strong analytical skills. Certificate ID: qsds2608099."
    },
    {
      role: "Embedded Systems Intern",
      company: "CodeBind Technologies, Chennai",
      period: "18 May 2026 – 1 Jun 2026",
      tech: "Arduino IDE, IR Sensors, Microcontrollers, Embedded C",
      summary: "Inplant training and internship. Designed and implemented a Car Parking System using Arduino IDE with IR sensor. Recognized as highly self-motivated and hardworking."
    },
    {
      role: "IoT and Robotics Intern",
      company: "Zetspire Technologies (e-Yantra eLSI)",
      period: "6 Nov 2023 – 10 Nov 2023",
      tech: "IoT, Robotics, Connected Devices, e-Yantra",
      summary: "Completed project-based robotics and IoT training conducted through the e-Yantra Lab Setup Initiative (eLSI) at Sethu Institute of Technology."
    }
  ]
};

// Export for module systems or attach to window
if (typeof window !== "undefined") {
  window.PORTFOLIO_DATA = PORTFOLIO_DATA;
}
