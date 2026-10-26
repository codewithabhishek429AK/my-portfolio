export const portfolioData = {
  personal: {
    name: "Abhishek sing  Rathore",
    role: "MCA Student & Aspiring Software Developer",
    shortBio:
      "Master of Computer Applications (MCA) student at Lloyd Institute of Engineering and Technology, Greater Noida. Passionate about software development, algorithms, web technologies, and machine learning. Actively preparing for software developer internships and entry-level engineering roles.",
    location: "Greater Noida, Uttar Pradesh, India",
    statusBadge: "Available for Internships & Placement Opportunities",
    educationQuick: "MCA @ Lloyd Institute of Engineering and Technology",
    resumeUrl: "public/Abhishek_Rathore_resume #.pdf",
    avatarUrl: "public/portfolio Image.jpg",
    socialLinks: {
      github: "https://github.com/codewithabhishek429AK", // Placeholder: replace with your actual GitHub URL
      linkedin: "https://www.linkedin.com/in/abhishek-rathore-b213302b4/", // Placeholder: replace with your actual LinkedIn profile
      email: "code.with.abhishek429@gmail.com", // Placeholder: replace with your actual email
    },
  },

  about: {
    heading: "Building solid foundations in software engineering & problem solving.",
    paragraphs: [
      "I am an MCA student at Lloyd Institute of Engineering and Technology, Greater Noida, with a deep interest in software development, web engineering, and intelligent systems.",
      "My academic journey has helped me build strong fundamentals in Core Java, Python, SQL, and Data Structures & Algorithms. I love turning concepts into practical code—from designing responsive user interfaces with React and Tailwind CSS to exploring predictive machine learning models.",
      "I approach problem-solving methodically, write clean and readable code, and continuously work on hands-on projects to bridge theoretical computer science with real-world industry requirements. I am actively seeking software developer internships and full-time opportunities where I can contribute, learn, and grow alongside seasoned engineers."
    ],
    highlights: [
      { label: "Degree Program", value: "Master of Computer Applications (MCA)" },
      { label: "Institution", value: "Lloyd Institute of Engg. & Technology" },
      { label: "Location", value: "Greater Noida, India" },
      { label: "Core Focus", value: "Software Dev, Web, DSA & AI/ML" },
    ]
  },

  skillCategories: [
    {
      id: "programming",
      title: "Programming Languages",
      iconName: "Code2",
      description: "Core languages used for problem solving and application development",
      skills: [
        { name: "Python", level: "Core Language", tag: "Scripting & ML" },
        { name: "Java", level: "OOP & Fundamentals", tag: "Backend & Core" },
        { name: "JavaScript", level: "ES6+ Modern JS", tag: "Web & Logic" },
        { name: "SQL", level: "Relational Queries", tag: "Data & Storage" },
      ]
    },
    {
      id: "frontend",
      title: "Frontend Development",
      iconName: "Layout",
      description: "Creating modern, responsive, and accessible user experiences",
      skills: [
        { name: "HTML5", level: "Semantic Markup", tag: "Structure" },
        { name: "CSS3", level: "Modern Flex & Grid", tag: "Styling" },
        { name: "JavaScript", level: "DOM Manipulation & Async", tag: "Client Logic" },
        { name: "React.js", level: "Beginner / Components & Hooks", tag: "UI Library" },
        { name: "Tailwind CSS", level: "Utility-first Styling", tag: "Design System" },
      ]
    },
    {
      id: "database",
      title: "Database Management",
      iconName: "Database",
      description: "Designing schemas and managing relational data",
      skills: [
        { name: "SQL", level: "Structured Query Language", tag: "Queries" },
        { name: "MySQL", level: "Relational Database", tag: "RDBMS" },
        { name: "Database Design", level: "Normalization & ER Models", tag: "Architecture" },
      ]
    },
    {
      id: "tools",
      title: "Tools & Platforms",
      iconName: "Wrench",
      description: "Version control and modern developer workflows",
      skills: [
        { name: "Git", level: "Version Control & Branching", tag: "VCS" },
        { name: "GitHub", level: "Collaboration & Repositories", tag: "Collaboration" },
        { name: "VS Code", level: "Primary Development Environment", tag: "IDE" },
        { name: "Vite", level: "Modern Frontend Tooling", tag: "Build Tool" },
      ]
    },
    {
      id: "aiml",
      title: "AI / ML & Core Interests",
      iconName: "BrainCircuit",
      description: "Applied interests and theoretical computer science domains",
      skills: [
        { name: "Artificial Intelligence", level: "Core Concepts & Applications", tag: "Domain" },
        { name: "Machine Learning", level: "Supervised Learning & Scikit-learn", tag: "Algorithms" },
        { name: "Data Structures & Algorithms", level: "Arrays, Lists, Trees & Search/Sort", tag: "Problem Solving" },
        { name: "Web Development", level: "Full Responsive Web Systems", tag: "Engineering" },
      ]
    }
  ],

  projects: [
    {
      id: "student-prediction",
      title: "AI-Powered Student Performance & Attendance Prediction System",
      status: "Academic Project (In Development)",
      featured: true,
      category: "AI & Machine Learning",
      description:
        "An intelligent academic analytics model developed to examine student attendance records, internal assessments, and engagement metrics. Uses machine learning algorithms to predict academic performance trends and generate early interventions for at-risk students.",
      tags: ["Python", "Machine Learning", "Scikit-Learn", "Pandas", "NumPy", "Data Analytics"],
      githubUrl: "https://github.com/codewithabhishek429AK /student-performance-prediction", // Placeholder
      liveUrl: "", // In development, placeholder
      keyFeatures: [
        "Analyzes historical attendance and exam patterns",
        "Predicts semester performance risk categories",
        "Assists faculty with proactive student guidance",
        "Clean data preprocessing and evaluation pipeline"
      ]
    },
    {
      id: "portfolio-website",
      title: "Modern Personal Portfolio Website",
      status: "Completed",
      featured: true,
      category: "Frontend Development",
      description:
        "A fast, modern developer portfolio crafted with React.js, Vite, and Tailwind CSS. Built with clean component hierarchy, dark and light theme switching, accessible design, and responsive layouts tailored for internship applications.",
      tags: ["React.js", "Vite", "Tailwind CSS", "Lucide Icons", "Responsive UI"],
      githubUrl: "https://github.com/codewithabhishek429AK/portfolio-website", // Placeholder
      liveUrl: "#", // Live on current deployment
      keyFeatures: [
        "Dynamic Dark Navy & Clean Light Mode toggle",
        "Fully responsive on mobile, tablet, and widescreen monitors",
        "Integrated interactive contact form with validation",
        "Modular architecture with reusable React components"
      ]
    },
    {
      id: "expense-tracker",
      title: "Expense Tracker System",
      status: "Completed",
      featured: false,
      category: "Web Application",
      description:
        "A responsive financial tracking application that allows users to record, categorize, and inspect their day-to-day spending. Includes balance calculation, category breakdown, and persistent client-side state storage.",
      tags: ["JavaScript", "React", "LocalStorage", "Tailwind CSS", "Data Visualization"],
      githubUrl: "https://github.com/codewithabhishek429AK/expense-tracker-system", // Placeholder
      liveUrl: "https://your-expense-tracker-demo.vercel.app", // Placeholder
      keyFeatures: [
        "Add, edit, and delete income and expense items",
        "Real-time net balance and categorized expense summaries",
        "Persistent storage using browser LocalStorage",
        "Clean, intuitive mobile-friendly interface"
      ]
    },
    {
      id: "todo-app",
      title: "Interactive To-Do List Application",
      status: "Completed",
      featured: false,
      category: "Web Application",
      description:
        "A sleek task manager application built to help users organize daily goals. Features status filtering (All, Pending, Completed), priority levels, search filtering, and state preservation.",
      tags: ["JavaScript", "HTML5", "CSS3", "DOM / React", "UI/UX"],
      githubUrl: "https://github.com/codewithabhishek429AK/todo-list-app", // Placeholder
      liveUrl: "https://your-todo-demo.vercel.app", // Placeholder
      keyFeatures: [
        "Task creation, priority tagging, and completion toggling",
        "Filter tasks by status (All, Active, Completed)",
        "Persistent local storage for task continuity",
        "Smooth micro-interactions and keyboard accessibility"
      ]
    }
  ],

  education: [
    {
      degree: "Master of Computer Applications (MCA)",
      institution: "Lloyd Institute of Engineering and Technology",
      location: "Greater Noida, Uttar Pradesh, India",
      period: "2024 – 2026",
      status: "Currently Pursuing (Second Year)",
      coursework: [
        "Data Structures & Algorithms",
        "Database Management Systems (DBMS)",
        "Object-Oriented Programming (Java)",
        "Web Technologies & Frameworks",
        "Operating Systems & Computer Networks",
        "Software Engineering & Agile Principles"
      ],
      description:
        "Pursuing advanced computer application studies focused on software development methodologies, algorithms, and practical application architecture."
    },
    {
      degree: "Bachelor's Degree (Undergraduate Degree)",
      institution: "University / Jiwaji University, Gwalior",
      location: "India",
      period: "2021 – 2024",
      status: "Completed",
      coursework: [
        "Computer Fundamentals",
        "Programming in C/C++",
        "Database Concepts",
        "Mathematics for Computer Science"
      ],
      description:
        "Built the core technical foundations in mathematics, structured programming, and analytical problem solving. [Note: You can easily update this degree name and college in src/data/portfolioData.js]."
    }
  ],

  contact: {
    heading: "Let's Connect & Build Together",
    subheading:
      "I am actively seeking software developer internship opportunities and entry-level positions. Whether you have a question, an opportunity, or want to say hello, feel free to reach out!",
    email: "code.with.abhishek429AK@gmail.com", // Placeholder
    location: "Greater Noida, Uttar Pradesh, India",
    linkedin: "https://www.linkedin.com/in/abhishek-rathore-b213302b4/",
    github: "https://github.com/codewithabhishek429AK",
  }
};
