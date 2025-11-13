// Portfolio Data - Harshal Sharma
export const portfolioData = {
  // Personal Information
  personal: {
    name: "Harshal Sharma",
    tagline: "Full-Stack Developer | Problem Solver | Lifelong Learner",
    location: "Surat, Gujarat",
    phone: "+91-9377554408",
    email: "harshal2005.js@gmail.com",
    linkedin: "linkedin.com/in/harshal-sharma",
    github: "github.com/Harshalsharma05",
    institution: "Pandit Deendayal Energy University",
    program: "Bachelor of Technology in Computer Engineering",
    submissionDate: "November 2025",
    photo: "/profile.jpg", // Add your photo to public folder
  },

  // Table of Contents
  sections: [
    { id: "cover", title: "Cover Page", icon: "home" },
    {
      id: "introduction",
      title: "Introduction & Learning Philosophy",
      icon: "user",
    },
    { id: "resume", title: "Resume/CV", icon: "document" },
    { id: "projects", title: "Interdisciplinary Projects", icon: "code" },
    { id: "skills", title: "Advanced Skills", icon: "star" },
    { id: "leadership", title: "Leadership & Collaboration", icon: "users" },
    { id: "global", title: "Global Awareness & Ethics", icon: "globe" },
    { id: "future", title: "Future Aspirations", icon: "target" },
    { id: "conclusion", title: "Conclusion & SWOT", icon: "chart" },
    { id: "testimonials", title: "Testimonials", icon: "quote" },
    { id: "contact", title: "Contact", icon: "mail" },
  ],

  // Introduction & Learning Philosophy
  introduction: {
    journey: `My journey in computer engineering began with a simple curiosity about how technology shapes our world. 
    Over the past years at PDEU, I've evolved from a curious beginner to a passionate developer who believes in 
    learning by building. Every project, every line of code, and every challenge has been a stepping stone in my 
    continuous learning journey.`,

    philosophy: `I believe in the philosophy of "Learn, Build, Share." Learning is not just about acquiring knowledge 
    but applying it to solve real-world problems. Building projects that make a difference, whether it's helping 
    underprivileged girls through my NGO work or creating platforms that solve everyday problems, drives my passion. 
    Sharing knowledge with the community completes the cycle, as teaching others reinforces my own understanding.`,

    coreValues: [
      {
        title: "Continuous Learning",
        description:
          "Technology evolves rapidly, and so must we. I dedicate time daily to learn new technologies and improve existing skills.",
      },
      {
        title: "Problem-First Approach",
        description:
          "I focus on understanding the problem deeply before jumping to solutions, ensuring that my work addresses real needs.",
      },
      {
        title: "Quality Over Quantity",
        description:
          "Whether it's code, projects, or learning, I prioritize depth and quality over superficial breadth.",
      },
      {
        title: "Community & Collaboration",
        description:
          "The best solutions emerge from diverse perspectives. I actively seek collaboration and value teamwork.",
      },
    ],
  },

  // Education
  education: {
    degree: "Bachelor of Technology in Computer Engineering",
    institution: "Pandit Deendayal Energy University",
    duration: "2023 - 2027",
    cgpa: "9.52",
    relevantCourses: [
      "Data Structures & Algorithms",
      "Database Management Systems",
      "Web Development",
      "Machine Learning",
      "Software Engineering",
    ],
  },

  // Work Experience
  workExperience: [
    {
      role: "Backend Development Intern",
      organization: "Tata Consultancy Services (TCS)",
      location: "Gandhinagar, Gujarat",
      duration: "May 2024 - Jul 2024",
      type: "Technical",
      responsibilities: [
        "Developed and maintained RESTful APIs using Node.js and Express.js for enterprise-level applications serving 10,000+ concurrent users",
        "Optimized database queries in PostgreSQL, reducing API response time by 35% through indexing and query optimization",
        "Implemented JWT-based authentication and role-based access control (RBAC) for secure user management across multiple microservices",
        "Collaborated with cross-functional teams in Agile sprints, participating in daily standups, code reviews, and sprint planning sessions",
        "Wrote comprehensive unit and integration tests achieving 85% code coverage using Jest and Supertest",
      ],
      impact:
        "Contributed to production deployment of 3 critical API endpoints handling 50,000+ daily requests with 99.9% uptime",
    },
  ],

  // Projects (Interdisciplinary)
  projects: [
    {
      id: 1,
      title: "QuickCourt: Sports Court Booking Platform",
      category: "Full-Stack Web Development",
      tags: ["Node.js", "Express", "PostgreSQL", "Razorpay API"],
      timeline: "Aug 2025",
      overview: `A comprehensive court booking platform designed to simplify sports facility reservations. 
      Selected as a Finalist at the Odoo Hackathon 2025 (Top 350 out of 19,000 teams nationwide).`,

      objectives: [
        "Streamline the court booking process for sports facilities",
        "Integrate secure payment processing",
        "Provide scalable backend architecture",
        "Ensure smooth user experience",
      ],

      methodologies: [
        "RESTful API design with Express.js",
        "PostgreSQL database design with proper normalization",
        "JWT-based authentication and authorization",
        "Payment gateway integration with Razorpay",
        "Database hosting on Railway for reliability",
      ],

      outcomes: [
        "Successfully advanced to National Finale (Top 350/19,000 teams)",
        "Built modular and scalable backend architecture",
        "Implemented secure payment processing",
        "Demonstrated effective team leadership",
      ],

      innovations: [
        "Real-time availability checking",
        "Automated booking confirmation system",
        "Role-based access control for admins and users",
      ],

      challenges: [
        {
          challenge: "Handling concurrent bookings",
          solution:
            "Implemented database transactions and locking mechanisms to prevent double bookings",
        },
        {
          challenge: "Payment integration complexity",
          solution:
            "Created abstraction layer for payment processing, making it easy to switch providers",
        },
        {
          challenge: "Team coordination under tight deadlines",
          solution:
            "Established clear communication channels and daily standups to track progress",
        },
      ],

      links: {
        github: "github.com/Harshalsharma05/quickcourt",
        demo: "drive.google.com/file/d/1jQiotSKq7pxTIpLseHckpKXTzvnYI3RB/view?usp=sharing",
      },

      images: ["/projects/quickcourt-1.jpg", "/projects/quickcourt-2.jpg"],
    },
    {
      id: 2,
      title: "TatvamAI - DhvaniShilp Crowdsourcing Platform",
      category: "Backend Development & Cloud Integration",
      tags: ["Node.js", "Express", "MongoDB", "AWS S3"],
      timeline: "2024",
      overview: `A multilingual crowdsourcing platform designed to collect and grade user-recorded voice data 
      for AI training purposes. Currently in production serving real users.`,

      objectives: [
        "Build scalable backend for voice data collection",
        "Implement secure audio storage solution",
        "Create comprehensive user management system",
        "Enable contribution tracking and incentive distribution",
      ],

      methodologies: [
        "Microservices architecture with Express.js",
        "MongoDB for flexible data storage",
        "AWS S3 for scalable audio file storage",
        "JWT authentication with role-based access control",
        "RESTful API design principles",
      ],

      outcomes: [
        "Successfully deployed to production",
        "Handling multiple concurrent users",
        "Secure audio storage with AWS S3",
        "Comprehensive admin dashboard for data management",
      ],

      innovations: [
        "Automated quality grading system for audio contributions",
        "Real-time contribution tracking",
        "Incentive calculation based on contribution quality",
      ],

      challenges: [
        {
          challenge: "Large audio file uploads",
          solution:
            "Implemented chunked uploads and compression before storage",
        },
        {
          challenge: "Cost optimization for cloud storage",
          solution:
            "Used S3 lifecycle policies to move older files to cheaper storage tiers",
        },
        {
          challenge: "Managing multilingual content",
          solution:
            "Designed flexible schema to handle multiple languages and dialects",
        },
      ],

      links: {
        live: "tatvamai.in",
        github: "github.com/Harshalsharma05/dhvanishilp",
      },

      images: ["/projects/dhvanishilp-1.jpg", "/projects/dhvanishilp-2.jpg"],
    },
    {
      id: 3,
      title: "Movie Recommendation System",
      category: "Machine Learning & NLP",
      tags: ["Python", "NLP", "Streamlit", "Scikit-learn"],
      timeline: "2024",
      overview: `A content-based movie recommendation system leveraging natural language processing 
      to suggest movies based on user preferences and movie metadata.`,

      objectives: [
        "Build accurate content-based recommendation engine",
        "Process and clean large movie datasets",
        "Create user-friendly interface",
        "Deploy for public access",
      ],

      methodologies: [
        "CountVectorizer for text feature extraction",
        "Cosine similarity for recommendation calculation",
        "Text preprocessing (stemming, stopword removal)",
        "Streamlit for interactive UI",
        "Deployment on Render",
      ],

      outcomes: [
        "Accurate movie recommendations based on content similarity",
        "Interactive web interface for easy exploration",
        "Successfully deployed and accessible online",
        "Processed 5000+ movie entries",
      ],

      innovations: [
        "Combined multiple metadata fields for better recommendations",
        "Optimized similarity calculation for performance",
        "Clean and intuitive user interface",
      ],

      challenges: [
        {
          challenge: "High computational cost for similarity calculations",
          solution:
            "Implemented caching and pre-computation of similarity matrices",
        },
        {
          challenge: "Data quality issues in dataset",
          solution: "Built comprehensive data cleaning pipeline",
        },
        {
          challenge: "Deployment resource constraints",
          solution:
            "Optimized model size and implemented efficient loading mechanisms",
        },
      ],

      links: {
        github: "github.com/Harshalsharma05/movie-recommender",
        live: "movie-rec-harshal.streamlit.app",
      },

      images: ["/projects/movie-rec-1.jpg", "/projects/movie-rec-2.jpg"],
    },
  ],

  // Advanced Skills
  skills: {
    technical: [
      {
        category: "Programming Languages",
        skills: [
          { name: "JavaScript", level: 90, years: 2 },
          { name: "Python", level: 85, years: 2 },
          { name: "C++", level: 80, years: 2 },
          { name: "Java", level: 75, years: 1.5 },
          { name: "SQL", level: 85, years: 1.5 },
        ],
      },
      {
        category: "Web Development",
        skills: [
          { name: "React.js", level: 88, years: 1.5 },
          { name: "Node.js", level: 90, years: 2 },
          { name: "Express.js", level: 92, years: 2 },
          { name: "Next.js", level: 80, years: 1 },
          { name: "TailwindCSS", level: 85, years: 1.5 },
        ],
      },
      {
        category: "Databases",
        skills: [
          { name: "MongoDB", level: 88, years: 1.5 },
          { name: "PostgreSQL", level: 85, years: 1 },
          { name: "MySQL", level: 80, years: 1 },
        ],
      },
    ],

    soft: [
      {
        skill: "Team Leadership",
        description:
          "Led 4-member team to National Hackathon Finale, managing tasks and deadlines effectively",
        evidence: "QuickCourt Hackathon Success",
      },
      {
        skill: "Communication",
        description:
          "Conducted workshops and mentoring sessions for underprivileged girls, presented technical solutions",
        evidence: "NGO Internship, Hackathon Presentations",
      },
      {
        skill: "Problem Solving",
        description:
          "Consistently identify and resolve complex technical challenges across multiple projects",
        evidence: "Project implementations with documented solutions",
      },
      {
        skill: "Time Management",
        description:
          "Balanced academics (9.52 CGPA), projects, and extracurricular activities effectively",
        evidence: "Multiple concurrent project completions",
      },
    ],

    creative: [
      {
        skill: "Design Thinking",
        description:
          "Applied user-centric design principles in building intuitive interfaces",
        artifacts: "UI/UX designs for QuickCourt and DhvaniShilp",
      },
      {
        skill: "System Architecture",
        description:
          "Designed scalable backend architectures for production applications",
        artifacts: "Architecture diagrams and documentation",
      },
    ],
  },

  // Leadership & Collaboration
  leadership: [
    {
      title: "Team Lead - BaawreBaadal, Odoo Hackathon 2025",
      duration: "Aug 2025",
      type: "Leadership",
      role: "Team Lead & Backend Developer",
      teamSize: 4,
      responsibilities: [
        "Coordinated 4-member team throughout the hackathon",
        "Distributed tasks based on team members' strengths",
        "Managed timelines and deliverables",
        "Led technical decision-making",
        "Prepared and delivered final presentation",
      ],
      teamDynamics: `Our team comprised members with diverse skills - frontend, backend, design, and business analysis. 
      I ensured effective communication through daily check-ins and maintained a collaborative environment where everyone's 
      ideas were valued.`,

      conflictResolution: `When we faced disagreement on technical stack choices, I organized a quick discussion where 
      each member presented their perspective. We evaluated options based on project requirements and team expertise, 
      ultimately reaching consensus on the most practical solution.`,

      achievements: [
        "Advanced to Top 350 teams (out of 19,000) in National Finale",
        "Delivered fully functional backend within tight 48-hour deadline",
        "Successfully integrated all components for seamless demo",
      ],
    },
    {
      title: "EM-Logs Core Committee Member",
      organization: "Encode, PDEU",
      duration: "Aug 2024 - Apr 2025",
      type: "Collaboration",
      role: "Event Organizer & Coordinator",
      responsibilities: [
        "Organized technical workshops and events",
        "Coordinated annual university-level tech fest",
        "Managed event promotion and participant engagement",
        "Collaborated with faculty and sponsors",
      ],
      teamDynamics: `Worked with a 15-member core committee, each handling different aspects of event management. 
      Regular meetings and clear communication channels ensured smooth coordination.`,

      achievements: [
        "Successfully organized 10+ technical events",
        "Increased participant engagement by 40%",
        "Managed tech fest with 500+ participants",
      ],
    },
  ],

  // Global Awareness & Ethics
  globalAwareness: {
    caseStudies: [
      {
        title: "Scalability and Performance Ethics in Enterprise Systems",
        context: `During my internship at Tata Consultancy Services (TCS), I was responsible for developing and 
        optimizing backend APIs that served over 10,000 concurrent users. This experience highlighted the ethical 
        responsibility developers have when building systems at scale.`,

        ethicalConsiderations: [
          "Ensuring system reliability and uptime for users who depend on the service",
          "Optimizing performance to reduce server costs and environmental impact",
          "Writing clean, maintainable code for future developers and team collaboration",
          "Implementing secure authentication to protect user data and privacy",
          "Balancing feature delivery speed with code quality and testing standards",
        ],

        personalReflection: `Working on production systems with real users taught me that every optimization 
        matters—not just for business metrics, but for user experience and environmental sustainability. 
        Reducing API response time by 35% meant faster experiences for thousands of users and reduced server 
        load. Achieving 85% test coverage wasn't just about meeting standards; it was about ensuring reliability 
        for people who depend on the system daily.`,

        impact:
          "Committed to writing efficient, secure, and maintainable code that considers both immediate performance and long-term sustainability",
      },
      {
        title: "Data Privacy in Crowdsourcing Platforms",
        context: `While building DhvaniShilp, handling users' voice data required careful consideration of 
        privacy and data protection.`,

        ethicalConsiderations: [
          "User consent for data collection and usage",
          "Secure storage and transmission of personal data",
          "Transparency in how data will be used for AI training",
          "Right to data deletion and privacy",
        ],

        personalReflection: `I implemented robust security measures and clear privacy policies. This taught me 
        that as developers, we're custodians of user trust, not just data.`,

        impact:
          "Always prioritize user privacy and data security in technical implementations",
      },
    ],

    globalPerspective: `In our interconnected world, every technology decision has ripple effects. Whether it's 
    choosing sustainable cloud solutions, ensuring accessibility, or considering diverse user bases, I strive to 
    think beyond immediate technical requirements to broader societal implications.`,
  },

  // Future Aspirations
  futureAspirations: {
    shortTerm: [
      {
        goal: "Secure Full-Stack Development Internship",
        timeline: "2025-2026",
        strategy:
          "Continue building portfolio projects, contribute to open source, network with professionals",
        skills: "Master Next.js, TypeScript, Docker, Kubernetes",
      },
      {
        goal: "Advanced ML/AI Certifications",
        timeline: "2025",
        strategy:
          "Complete Deep Learning Specialization, build AI-powered projects",
        skills: "TensorFlow, PyTorch, Advanced NLP",
      },
    ],

    longTerm: [
      {
        goal: "Lead Engineering Teams",
        timeline: "5-7 years",
        description:
          "Aspire to lead engineering teams in building impactful products",
        preparation:
          "Developing leadership skills, studying system design, learning business aspects",
      },
      {
        goal: "Contribute to Tech for Good",
        timeline: "Ongoing",
        description:
          "Use technology to solve social problems, particularly in education and accessibility",
        preparation:
          "Volunteering with NGOs, building socially relevant projects",
      },
      {
        goal: "Continuous Learning & Teaching",
        timeline: "Lifelong",
        description:
          "Never stop learning new technologies while sharing knowledge with the community",
        preparation:
          "Writing technical blogs, mentoring juniors, contributing to open source",
      },
    ],

    areasOfInterest: [
      "Full-Stack Web Development",
      "Cloud Architecture & Scalability",
      "Machine Learning & AI",
      "DevOps & CI/CD",
      "Tech for Social Impact",
    ],
  },

  // Conclusion & Self-Assessment
  conclusion: {
    keyAchievements: [
      "Maintained 9.52 CGPA while building multiple production-grade projects",
      "Advanced to National Hackathon Finale (Top 350/19,000)",
      "Built and deployed 3+ full-stack applications",
      "Completed Stanford ML Specialization",
      "Led teams and organized major technical events",
    ],

    lessonsLearned: [
      "Technical excellence must be coupled with soft skills for true impact",
      "Failure and challenges are the best teachers",
      "Collaboration amplifies individual capabilities",
      "Continuous learning is non-negotiable in tech",
      "Building for users, not just for technology",
    ],

    areasForGrowth: [
      "Deepen expertise in system design and architecture",
      "Gain more experience in large-scale production systems",
      "Improve DevOps and infrastructure skills",
      "Enhance technical communication through blogging",
      "Expand network in the tech community",
    ],

    swot: {
      strengths: [
        "Strong technical foundation across full-stack development",
        "Proven ability to deliver complete projects",
        "Leadership and team collaboration skills",
        "Academic excellence (9.52 CGPA)",
        "Quick learner and adaptable",
      ],

      weaknesses: [
        "Limited industry internship experience",
        "Need more exposure to large-scale systems",
        "Can improve DevOps and infrastructure knowledge",
        "Frontend design skills need enhancement",
      ],

      opportunities: [
        "Growing demand for full-stack developers",
        "Emerging AI/ML opportunities",
        "Open source contribution for visibility",
        "Tech community engagement and networking",
        "Upcoming internship season",
      ],

      threats: [
        "Highly competitive job market",
        "Rapidly evolving technology landscape",
        "Need to continuously update skills",
        "Balancing academics with skill development",
      ],
    },
  },

  // Certifications
  certifications: [
    {
      title: "Machine Learning Specialization",
      issuer: "DeepLearning.AI & Stanford University",
      platform: "Coursera",
      date: "2024",
      skills: ["Machine Learning", "Python", "TensorFlow", "Neural Networks"],
    },
    {
      title: "Data Science and ML Training",
      issuer: "AcmeGrade PVT LTD",
      date: "2024",
      skills: ["Data Science", "Machine Learning", "Python"],
    },
  ],

  // Testimonials
  testimonials: [
    {
      name: "Rajesh Iyer",
      role: "Senior Backend Engineer",
      organization: "Tata Consultancy Services",
      quote:
        "Harshal demonstrated exceptional technical aptitude during his internship. His work on API optimization reduced response times by 35%, and his code quality was consistently production-ready. He's a natural problem-solver with strong collaboration skills.",
      image: "/testimonials/tcs-mentor.jpg",
    },
    {
      name: "Arjun Patel",
      role: "Hackathon Teammate",
      organization: "BaawreBaadal, Odoo Hackathon 2025",
      quote:
        "Harshal's calm leadership and technical expertise were incredible during the Odoo Hackathon. He built our entire backend in 48 hours while keeping the team focused, which is exactly why we made it to the Top 350 out of 19,000 teams.",
      image: "/testimonials/teammate.jpg",
    },
    {
      name: "Ravi Kumar",
      role: "Core Committee Member",
      organization: "Encode, PDEU",
      quote:
        "Harshal was instrumental in scaling our tech events from small workshops to a 500+ participant fest. His unique ability to see both technical details and the bigger picture drove our 40% engagement increase.",
      image: "/testimonials/encode-member.jpg",
    },
  ],

  // Social Links
  social: {
    linkedin: "https://www.linkedin.com/in/harshal-sharma-98851b2ab/",
    github: "https://github.com/Harshalsharma05",
    email: "mailto:harshal2005.js@gmail.com",
  },
};
