// Dhakshith Bavan S - Instantaneous Frontend Dataset
export const dhakshithProfileData = {
  name: "Dhakshith Bavan S",
  headline: "AI/ML Developer | Computer Vision Enthusiast | B.Tech CSE (AI) Student",
  summary: "B.Tech Computer Science (AI) student with hands-on experience in data handling, computer vision, and AI-based projects, backed by an internship in Data Science, AI and Machine Learning. Eager to build practical solutions and grow through collaborative, applied learning.",
  email: "dhakshithbavan1004@gmail.com",
  phone: "+91 9025069558",
  location: "Krishnagiri, Tamil Nadu, India",
  availability: "Open for AI/ML Internships & Placement Opportunities",
  websiteTitle: "Dhakshith Bavan S – Personal Portfolio",

  socials: {
    github: "", // Placeholder - user will provide actual link
    linkedin: "", // Placeholder - user will provide actual link
    email: "mailto:dhakshithbavan1004@gmail.com",
    phone: "tel:+919025069558"
  },

  education: [
    {
      degree: "B.Tech Computer Science (Artificial Intelligence)",
      institution: "Karunya Institute of Technology and Sciences",
      location: "Coimbatore, Tamil Nadu",
      duration: "2024–2028",
      score: "CGPA: 6.5",
      isCurrent: true,
      highlights: [
        "Specializing in Artificial Intelligence, Computer Vision, and Applied Machine Learning.",
        "Developing hands-on vision projects utilizing YOLOv11, MediaPipe, and edge IoT devices."
      ]
    },
    {
      degree: "Class XII (Higher Secondary)",
      institution: "Sri Vijay Vidyalaya Matric Hr. Sec. School",
      location: "Krishnagiri, Tamil Nadu",
      duration: "2024",
      score: "Percentage: 72.83%",
      isCurrent: false,
      highlights: [
        "Strong foundation in Mathematics, Physics, Chemistry, and Computer Science."
      ]
    }
  ],

  internship: {
    position: "Data Science, AI & ML Intern",
    company: "iGeeks Technologies",
    location: "Bangalore, India",
    duration: "20 May 2026 – 20 June 2026",
    department: "R&D Team - Data Science, AI and Machine Learning",
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
        { name: "Python Programming", category: "Programming" },
        { name: "C Programming", category: "Programming" },
        { name: "Networking Basics", category: "Infrastructure" },
        { name: "Introduction to Cybersecurity", category: "Security" }
      ]
    },
    {
      organization: "Infosys",
      certifications: [
        { name: "Ethics and Project Management", category: "Professional" },
        { name: "Java Programming Fundamentals", category: "Programming" }
      ]
    },
    {
      organization: "IBM",
      certifications: [
        { name: "Artificial Intelligence Fundamentals", category: "Artificial Intelligence" }
      ]
    },
    {
      organization: "SkillForge",
      certifications: [
        { name: "Artificial Intelligence with Python", category: "Machine Learning" }
      ]
    }
  ],

  languages: [
    { name: "Telugu", level: "Native", proficiencyPill: "Native" },
    { name: "Tamil", level: "Professional Proficiency", proficiencyPill: "Professional" },
    { name: "English", level: "C1 Proficient", proficiencyPill: "C1 Proficient" }
  ]
};

export const dhakshithProjectsData = [
  {
    _id: "proj_1",
    title: "Context-Aware Workspace Organizer: Optimizing Object Placement Based on User Workflow",
    category: "AI & Computer Vision",
    technologies: ["YOLOv11", "MediaPipe", "Streamlit", "Python", "Computer Vision"],
    summary: "Vision-based system that detects objects (books, laptops, stationery) using YOLOv11 and tracks hand-object interactions with MediaPipe to record usage frequency and dwell time for workspace layout optimization.",
    description: "Built an intelligent workspace optimization system powered by YOLOv11 and MediaPipe. The system detects desktop objects such as books, laptops, and stationery items, tracks user hand movements and interactions in real-time, records interaction dwell times and frequency, and calculates workflow ergonomics. Based on co-usage patterns and physical reach distances, it generates layout suggestions rendered via a live Streamlit dashboard.",
    features: [
      "Object detection and recognition for books, laptops, stationery, and desktop assets",
      "Hand-object interaction tracking utilizing MediaPipe joint landmarks",
      "Usage frequency analysis and interaction dwell time monitoring",
      "Workflow-aware layout optimization algorithm",
      "Recommendations based on co-usage patterns and reach distance",
      "Real-time Streamlit interface for live visualization"
    ],
    isExperimental: false,
    disclaimer: "",
    githubUrl: "",
    liveUrl: "",
    image: "https://images.unsplash.com/photo-1518770660439-4636190af475?w=800&auto=format&fit=crop&q=80",
    order: 1
  },
  {
    _id: "proj_2",
    title: "HemoNail Detector – AI-Based Non-Invasive Hemoglobin Estimation",
    category: "AI & Computer Vision",
    technologies: ["Computer Vision", "Feature Extraction", "Ensemble Machine Learning", "Python"],
    summary: "Non-invasive hemoglobin screening proof-of-concept utilizing smartphone photography of fingernail beds and skin color features with ensemble machine learning models.",
    description: "Developed a non-invasive hemoglobin estimation prototype using smartphone images of fingernail beds and skin. The algorithm isolates Region of Interest (ROI) contours, performs multi-color-space feature extraction (RGB, HSV, LAB), and runs statistical color attributes through ensemble machine learning models to generate preliminary estimates.",
    features: [
      "Smartphone image-based nailbed and skin feature analysis",
      "Computer vision ROI isolation and color feature extraction",
      "Ensemble machine learning models for estimation",
      "Real-time analysis concept pipeline",
      "Low-cost preliminary healthcare screening research exploration"
    ],
    isExperimental: true,
    disclaimer: "Academic Research Prototype: This project is strictly an experimental academic screening concept and is not a clinically validated or certified medical diagnostic tool.",
    githubUrl: "",
    liveUrl: "",
    image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=800&auto=format&fit=crop&q=80",
    order: 2
  },
  {
    _id: "proj_3",
    title: "GestureSpeak – Smart Gloves: Sign Language Detection",
    category: "IoT & Embedded Systems",
    technologies: ["Arduino", "Bluetooth", "Python", "Android Studio", "Sensors"],
    summary: "IoT-based wearable smart sensory glove system translating physical sign language gestures into synthesized speech via Bluetooth and an Android mobile application.",
    description: "Built an assistive smart glove hardware system to translate sign language gestures into spoken audio. Custom sensory gloves read flex sensors and motion states through an Arduino board, transmit gesture data wirelessly over Bluetooth, and communicate with an Android application and Python companion to convert recognized signs into real-time speech.",
    features: [
      "Sign language gesture detection using smart sensory gloves",
      "Hardware interfacing and micro-controller calibration with Arduino",
      "Wireless low-latency Bluetooth serial communication",
      "Dedicated Android application integration",
      "Automated Text-to-Speech (TTS) audio synthesis"
    ],
    isExperimental: false,
    disclaimer: "",
    githubUrl: "",
    liveUrl: "",
    image: "https://images.unsplash.com/photo-1555664424-778a1e5e1b48?w=800&auto=format&fit=crop&q=80",
    order: 3
  }
];
