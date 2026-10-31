// Dhakshith Bavan S - Resume & Portfolio Dataset
const dhakshithProfile = {
  name: "Dhakshith Bavan S",
  headline: "AI/ML Developer | Computer Vision Enthusiast | B.Tech CSE (AI) Student",
  summary: "B.Tech Computer Science (AI) student with hands-on experience in data handling, computer vision, and AI-based projects, backed by an internship in Data Science, AI and Machine Learning. Eager to build practical solutions and grow through collaborative, applied learning.",
  email: "dhakshithbavan1004@gmail.com",
  phone: "+91 9025069558",
  location: "Krishnagiri, Tamil Nadu, India",
  availability: "Available for Internship & Full-Time Placement Opportunities",
  websiteTitle: "Dhakshith Bavan S – Personal Portfolio",

  // Socials (Actual provided or clean placeholders)
  socials: {
    github: "", // User will provide their actual link
    linkedin: "", // User will provide their actual link
    email: "mailto:dhakshithbavan1004@gmail.com",
    phone: "tel:+919025069558"
  },

  education: [
    {
      degree: "B.Tech Computer Science (Artificial Intelligence)",
      institution: "Karunya Institute of Technology and Sciences",
      location: "Coimbatore, Tamil Nadu",
      duration: "2024–2028",
      cgpa: "6.5",
      isCurrent: true,
      highlights: [
        "Specializing in Artificial Intelligence, Computer Vision, and Applied Machine Learning.",
        "Active student researcher working on hands-on vision systems and IoT hardware prototypes."
      ]
    },
    {
      degree: "Class XII (Higher Secondary Certificate)",
      institution: "Sri Vijay Vidyalaya Matric Hr. Sec. School",
      location: "Krishnagiri, Tamil Nadu",
      duration: "2024",
      percentage: "72.83%",
      isCurrent: false,
      highlights: [
        "Focused on Mathematics, Physics, Chemistry, and Computer Science foundation."
      ]
    }
  ],

  internship: {
    position: "Data Science, AI & ML Intern",
    company: "iGeeks Technologies",
    location: "Bangalore, India",
    duration: "20 May 2026 – 20 June 2026",
    responsibilities: [
      "Contributed to the R&D team's Data Science, AI and Machine Learning initiatives as part of a project team.",
      "Applied Python programming to real project tasks and strengthened core Data Science and Machine Learning fundamentals.",
      "Collaborated with team members and HR to complete assigned work on schedule."
    ],
    technologies: ["Python", "Data Science", "Machine Learning", "Data Handling", "Git"]
  },

  skillsCategories: [
    {
      category: "Programming Languages",
      skills: ["Python", "Java", "C"]
    },
    {
      category: "AI, Machine Learning & Computer Vision",
      skills: [
        "Computer Vision",
        "YOLOv11",
        "MediaPipe",
        "Object Detection",
        "Hand Tracking",
        "Feature Extraction",
        "Ensemble Machine Learning Models"
      ]
    },
    {
      category: "Tools & Platforms",
      skills: ["Git", "GitHub", "Arduino", "Android Studio", "IoT and Bluetooth"]
    },
    {
      category: "Core Fundamentals",
      skills: ["Networking Basics", "Cybersecurity Basics"]
    },
    {
      category: "Professional Soft Skills",
      skills: ["Teamwork", "Communication", "Coordination", "Problem-Solving"]
    }
  ],

  certificationsByOrg: [
    {
      organization: "Cisco",
      certifications: [
        "Python Programming",
        "C Programming",
        "Networking Basics",
        "Introduction to Cybersecurity"
      ]
    },
    {
      organization: "Infosys",
      certifications: [
        "Ethics and Project Management",
        "Java Programming Fundamentals"
      ]
    },
    {
      organization: "IBM",
      certifications: [
        "Artificial Intelligence Fundamentals"
      ]
    },
    {
      organization: "SkillForge",
      certifications: [
        "Artificial Intelligence with Python"
      ]
    }
  ],

  languages: [
    { name: "Telugu", proficiency: "Native", code: "TE" },
    { name: "Tamil", proficiency: "Professional Proficiency", code: "TA" },
    { name: "English", proficiency: "C1 Proficient", code: "EN" }
  ]
};

const dhakshithProjects = [
  {
    _id: "661201010101010101010101",
    title: "Context-Aware Workspace Organizer: Optimizing Object Placement Based on User Workflow",
    category: "AI & Computer Vision",
    technologies: ["YOLOv11", "MediaPipe", "Streamlit", "Python", "Computer Vision"],
    summary: "Vision-based system that detects objects (books, laptops, stationery) using YOLOv11 and tracks hand-object interactions with MediaPipe to record dwell time and analyze usage frequency for workflow optimization.",
    description: "Built an intelligent workspace optimization system powered by state-of-the-art vision models. The pipeline captures desktop video streams, runs YOLOv11 for multi-class object detection, tracks hand joints using MediaPipe, and logs precise interaction timestamps. By analyzing co-usage matrices and ergonomic reach zones, it generates dynamic recommendations to reorganize desk layouts for maximum ergonomic and workflow efficiency.",
    features: [
      "Object detection and recognition for books, laptops, stationery, and workspace items",
      "Hand-object interaction tracking via MediaPipe joint coordinates",
      "Usage frequency analysis and interaction dwell time monitoring",
      "Workflow-aware layout optimization engine",
      "Actionable placement recommendations based on co-usage patterns and reach distance",
      "Real-time interactive Streamlit web dashboard"
    ],
    isExperimental: false,
    disclaimer: "",
    githubUrl: "", // Actual link placeholder
    liveUrl: "",   // Actual link placeholder
    image: "https://images.unsplash.com/photo-1518770660439-4636190af475?w=800&auto=format&fit=crop&q=80",
    order: 1
  },
  {
    _id: "661201010101010101010102",
    title: "HemoNail Detector – AI-Based Non-Invasive Hemoglobin Estimation",
    category: "AI & Computer Vision",
    technologies: ["Computer Vision", "Feature Extraction", "Ensemble Machine Learning", "Python"],
    summary: "Non-invasive hemoglobin screening proof-of-concept analyzing fingernail bed and skin coloration using computer vision and ensemble machine learning models.",
    description: "Developed an experimental non-invasive hemoglobin estimation methodology using smartphone camera imagery of nail beds and palmar skin. The system isolates the Region of Interest (ROI) from nail photographs, applies color space transformation (RGB, HSV, LAB) and texture feature extraction, and feeds statistical descriptors into trained ensemble machine learning regressors.",
    features: [
      "Smartphone image-based non-invasive nailbed analysis",
      "Advanced computer vision ROI isolation and color feature extraction",
      "Ensemble machine learning regression models for estimation",
      "Instant real-time analysis pipeline concept",
      "Low-cost preliminary healthcare screening research exploration"
    ],
    isExperimental: true,
    disclaimer: "Academic Research Prototype: This project is strictly an experimental academic screening concept and is not a clinically validated or certified medical diagnostic tool.",
    githubUrl: "", // Actual link placeholder
    liveUrl: "",   // Actual link placeholder
    image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=800&auto=format&fit=crop&q=80",
    order: 2
  },
  {
    _id: "661201010101010101010103",
    title: "GestureSpeak – Smart Gloves: Sign Language Detection",
    category: "IoT & Embedded Systems",
    technologies: ["Arduino", "Bluetooth", "Python", "Android Studio", "Sensors"],
    summary: "IoT-enabled smart wearable glove system translating physical sign language gestures into synthesized speech via Bluetooth and an Android mobile application.",
    description: "Engineered an assistive hardware-software ecosystem to bridge communication barriers for non-verbal individuals. Custom-instrumented sensory gloves read finger flex angles and inertial hand orientations through an Arduino microcontroller. Gesture patterns are wirelessly transmitted via Bluetooth to an Android application and companion Python engine that maps signatures to linguistic phrases with real-time text-to-speech audio playback.",
    features: [
      "Accurate sign language gesture detection using smart sensory gloves",
      "Arduino hardware interfacing and sensor calibration",
      "Low-latency wireless Bluetooth serial communication",
      "Dedicated Android application integration",
      "Automated real-time Text-to-Speech (TTS) audio synthesis"
    ],
    isExperimental: false,
    disclaimer: "",
    githubUrl: "", // Actual link placeholder
    liveUrl: "",   // Actual link placeholder
    image: "https://images.unsplash.com/photo-1555664424-778a1e5e1b48?w=800&auto=format&fit=crop&q=80",
    order: 3
  }
];

module.exports = {
  dhakshithProfile,
  dhakshithProjects
};

