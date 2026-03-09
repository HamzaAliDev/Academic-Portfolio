export const projects = [
  {
    isApp: false,
    title: "Face Recognition",
    description:
      "Face Recognition System is an end-to-end <strong>machine learning and computer vision</strong> application designed for real-time user identification. The system follows a microservice architecture, where a <strong>FastAPI-based ML service</strong> uses deep learning (FaceNet via DeepFace) to generate facial embeddings and perform accurate recognition.\n\n A <strong>Node.js/Express backend</strong> manages user registration, database storage, and real-time recognition through WebSockets, seamlessly communicating with the ML service. The <strong>Next.js frontend</strong> provides a responsive, camera-enabled interface for face registration and live recognition using face-api.js.\n\n This project demonstrates practical deployment of computer vision models integrated with scalable APIs and modern web technologies.",
    href: "/projects/face-recognition",
    slug: "face-recognition",
    image: "/projects/face-recognize.svg",
    // liveUrl: "https://store-it-flame.vercel.app/",
    githubUrl: "https://github.com/HamzaAliDev/Face-Recognized-ML-Service",
    technologies: [
      { name: "Next.js 15", icon: "/tools/nextjs.webp" },
      { name: "NumPy", icon: "/tools/numpy.png" },
      { name: "FastAPI", icon: "/tools/fastapi.png" },
      { name: "MongoDB", icon: "/tools/mongodb.png" },
      { name: "WebSockets", icon: "/tools/websockets.png" },
    ],
    features: [
      "Upload images for face recognition",
      "Real-time face identification using ML algorithms",
      "Persistent data storage for recognized faces using MongoDB",
      "User-friendly dashboard displaying recognition history and statistics"
    ],
  },
  {
    isApp: false,
    title: "Face Privacy",
    description:
      "Blur Face Privacy Tool is a privacy-focused web application that automatically detects and obscures faces in images and videos to protect personal identity. The system uses advanced machine learning-based face detection in the backend and provides adjustable blur intensity for precise privacy control.\n\n A <strong>Next.js frontend</strong> offers an intuitive interface with drag-and-drop uploads, real-time comparison between original and processed media, and support for both image (JPG, PNG) and video (MP4, WebM) formats. Users can instantly apply face blurring and download results while remaining responsive on desktop and mobile.\n\n This project demonstrates the integration of AI-driven visual processing with modern UI design to deliver a seamless, privacy-enhancing experience.",
    href: "/projects/face-privacy",
    slug: "face-privacy",
    image: "/projects/face-privacy.svg",
    // liveUrl: "https://astra-chatbot-peach.vercel.app/",
    githubUrl: "https://github.com/HamzaAliDev/Blur-Face-Backend",
    technologies: [
      { name: "Next.js 15", icon: "/tools/nextjs.webp" },
      { name: "NumPy", icon: "/tools/numpy.png" },
      { name: "OpenCV", icon: "/tools/opencv.png" },
      { name: "Tailwind CSS", icon: "/tools/tailwind.png" },
      { name: "FastAPI", icon: "/tools/fastapi.png" },
    ],
    features: [
      "Automatically detects and obscures faces in images and videos",
      "Adjustable blur intensity for precise privacy control",
      "User-friendly drag-and-drop interface",
      "Real-time comparison between original and processed media",
      "Supports image (JPG, PNG) and video (MP4, WebM) formats",
    ],
  },
  {
    isApp: false,
    title: "Eye-Blink Detector",
    description:
      "Real-Time Eye-Blink Anti-Spoof Detection System is a biometric liveness verification project built using advanced <strong>computer vision</strong> techniques. The <strong>FastAPI backend</strong> leverages Mediapipe Face Mesh and the Eye Aspect Ratio (EAR) algorithm to detect eye blinks and determine whether a face is live or spoofed through both REST APIs and WebSocket-based real-time streaming.\n\n A blink state machine tracks recent blink patterns for reliable liveness detection. The <strong>Next.js frontend</strong> provides a responsive, camera-enabled interface that streams video frames to the backend and visualizes blink status, confidence, and counts in real time.\n\n This project demonstrates practical anti-spoofing, biometric security, and real-time AI system deployment.",
    href: "/projects/eye-blink",
    slug: "eye-blink",
    image: "/projects/eye-blink.svg",
    // liveUrl: "https://store-billing.web.app/",
    githubUrl: "https://github.com/HamzaAliDev/Eye-Blink-Detection-Backend",
    technologies: [
      { name: "Nextjs", icon: "/tools/nextjs.webp" },
      { name: "Numpy", icon: "/tools/numpy.png" },
      { name: "OpenCV", icon: "/tools/opencv.png" },
      { name: "FastAPI", icon: "/tools/fastapi.png" },
    ],
    features: [
      "Real-time eye-blink detection using computer vision",
      "Liveness verification to prevent spoofing attacks",
      "REST API and WebSocket support for flexible integration",
      "Responsive frontend with live video streaming",
      "Blink state machine for reliable detection",
    ],
  },
  {
    isApp: false,
    title: "LogoAi",
    description:
      "LogoAi is an innovative <strong>AI-powered logo generation</strong> platform built with Next.js, designed to help users create unique and professional logos effortlessly. Utilizing the Gemini API for prompt enhancement and Pollinations AI API for generating high-quality logo designs, LogoAi delivers creative branding solutions tailored to user needs.\n\nThe app features a seamless user experience with <strong>server-side rendering</strong> for fast performance and smooth interactions. With MongoDB as the database and Cloudinary for efficient image storage and delivery, users can easily generate, save, and manage their logos in a secure environment.\n\nLogoAi empowers businesses and individuals to quickly craft visually appealing logos without design expertise, making branding accessible to everyone.",
    href: "/projects/logoai",
    slug: "logoai",
    image: "/projects/logoai1.svg",
    liveUrl: "https://logo-generator-tau.vercel.app/", // add your live URL if available
    githubUrl: "https://github.com/HamzaAliDev/Logo-Generator", // add your repo URL if available
    technologies: [
      { name: "Next.js", icon: "/tools/nextjs.webp" },
      { name: "Gemini API", icon: "/tools/gemini.svg" },
      { name: "Pollinations AI", icon: "/tools/pollinations.webp" }, // add your custom icon or leave empty
      { name: "MongoDB", icon: "/tools/mongodb.png" },
      { name: "Cloudinary", icon: "/tools/cloudinary.png" },
    ],
    features: [
      "AI-powered logo generation",
      "Prompt enhancement with Gemini API",
      "High-quality designs via Pollinations AI API",
      "Server-side rendering with Next.js for fast performance",
      "Secure storage and management using MongoDB and Cloudinary",
    ],
  },
  {
    isApp: false,
    title: "Chat PDFs",
    description:
      "Chat with PDFs is an intelligent <strong>document assistant</strong> built with Next.js, designed to help users <strong>upload</strong> and <strong>interact</strong> with their PDF files through natural language queries. By leveraging the <strong>Gemini models</strong> and <strong>Langchain</strong> embeddings, the app enables accurate <strong>contextual responses</strong> drawn directly from uploaded documents.\n\nThe platform uses <strong>Supabase</strong> as a vector database to store and query embeddings, ensuring efficient retrieval and scalability. With <strong>Inngest</strong> managing background jobs such as file parsing and embedding generation, the application remains fast, responsive, and reliable even when handling large files.\n\nHosted on Vercel, the app offers seamless file uploads, intelligent query answering, and a clean, responsive interface, making it an essential productivity tool for students, researchers, and professionals working with PDF documents.",
    href: "/projects/chat-with-pdfs",
    slug: "chat-with-pdfs",
    image: "/projects/pdfchat1.svg", 
    liveUrl: "https://pdfchat-free.vercel.app/", // replace with actual live URL
    githubUrl: "https://github.com/HamzaAliDev/Chat-With-PDF", // replace with actual repo URL
    technologies: [
      { name: "Next.js 15", icon: "/tools/nextjs.webp" },
      { name: "Supabase", icon: "/tools/supabase.png" },
      { name: "Clerk", icon: "/tools/clerk.png" },
      { name: "Gemini", icon: "/tools/gemini.svg" },
      { name: "Langchain", icon: "/tools/langchain.png" }, // add custom icon if available
    ],
    features: [
      "Upload PDFs and query them using natural language",
      "Embeddings storage and retrieval using Supabase",
      "AI-powered contextual answers with Gemini and Langchain",
      "Background jobs for parsing and embeddings with Inngest",
      "Clean, responsive UI hosted on Vercel",
    ],
  },
  {
    isApp: false,
    title: "FoodHub",
    description:
      "FoodHub is a streamlined <strong>food ordering</strong> application designed to simplify the process of ordering from a single local restaurant. It offers a clean, intuitive, and <strong>user-friendly</strong> interface that ensures a seamless experience for customers, whether they’re using a mobile device or a desktop.\n\nBuilt with efficiency in mind, the app incorporates a variety of practical features such as an <strong>admin dashboard</strong> for restaurant management, a detailed <strong>order history</strong> for users to track past purchases, and a real-time order status checker.\n\nThe responsive design adapts effortlessly to different screen sizes, making it accessible and convenient for all users. Foodman aims to bridge the gap between local eateries and their customers by providing a reliable and straightforward platform for <strong>food ordering</strong>.",
    href: "/projects/foodhub",
    slug: "foodhub",
    image: "/projects/foodhub1.svg",
    liveUrl: " https://foodhub-hotel.web.app",
    githubUrl:
      "https://github.com/HamzaAliDev/SMIT-MAD-REACT-Assignment03.git",
    technologies: [
      { name: "React (Vite)", icon: "/tools/react.png" },
      { name: "Firebase", icon: "/tools/firebase.png" },
      { name: "Vanilla CSS", icon: "/tools/css.png" },
      { name: "JavaScript", icon: "/tools/js.png" },
    ],
    features: [
      "User-friendly food ordering interface",
      "Dashboard for restaurant owner",
      "Responsive design for mobile and desktop",
      "Order history",
      "Check order status",
    ],
  },
  {
    isApp: false,
    title: "Chatty",
    description:
      "Chatty is a modern chat application built with <strong>Next.js</strong> and <strong>TypeScript</strong>, showcasing responsive UI and real-time capabilities. Designed with a clean and scalable structure, it integrates modern frontend patterns and optimized performance for interactive messaging experiences.\n\n The app leverages React&apos;s component architecture and efficient state management to deliver seamless navigation and dynamic content rendering. Styled with Tailwind CSS, Chatty emphasizes a polished, user-centric design suitable for messaging interfaces.\n\n This project demonstrates practical skills in frontend engineering, responsive layout implementation, and building extensible client-side applications ready to be enhanced with backend or real-time communication features.",
    href: "/projects/chatty",
    slug: "chatty",
    image: "/projects/chat1.svg",
    liveUrl: "",
    // githubUrlFrontened:
      // "https://github.com/abdulrehman-codecrafter/ChatApp-Frontened.git",
    githubUrl:
      "https://github.com/HamzaAliDev/chatty",
    technologies: [
      { name: "Next.js", icon: "/tools/nextjs.webp" },
      { name: "Websockets", icon: "/tools/websockets.png" },
      { name: "Monoodb", icon: "/tools/mongodb.png" },
      { name: "Cloudinary", icon: "/tools/cloudinary.png" },
      { name: "Clerk", icon: "/tools/clerk.png" },
    ],
    features: [
      "User authentication with Clerk",
      "Real-time messaging using WebSockets",
      "Responsive design for mobile and desktop",
      "Cloud-based image storage with Cloudinary",
      "Scalable architecture with Next.js and TypeScript",
    ],
  },
  {
    isApp: false,
    title: "Cozera Store",
    description:
      "Cozera-store is a responsive <strong>e-commerce </strong> web application built with modern frontend technologies and intuitive user experience in mind. Developed using React and Create React App, it implements core e-commerce features such as product browsing, cart management, and smooth navigation in a <strong>scalable architecture</strong>.\n\n The application is designed to deliver fast load times, clean UI, and seamless interaction across devices. It showcases practical skills in frontend development, <strong>state management</strong>, and building production-ready web interfaces that can be extended with backend services and APIs for complete shopping workflows.\n\n Cozera-store highlights a strong understanding of modern web development patterns and responsive user-centric design.",
    href: "/projects/cozera-store",
    slug: "cozera-store",
    image: "/projects/cozera1.svg",
    liveUrl:
      "https://cozera.netlify.app/",
    githubUrl: "https://github.com/HamzaAliDev/Cozera-store",
    technologies: [
      { name: "React JS", icon: "/tools/react.png" },
      { name: "Node JS", icon: "/tools/nodejs.png" },
      { name: "MongoDB", icon: "/tools/mongodb.png" },
      { name: "Cloudinary", icon: "/tools/cloudinary.png" },
      { name: "Zustand", icon: "/tools/zustand.png" },
    ],
    features: [
      "Responsive design for mobile and desktop",
      "Intuitive product browsing and cart management",
      "Fast load times and smooth navigation",
      "Scalable architecture for future backend integration",
      "Clean and user-centric UI",
    ],
  },
  {
    isApp: false,
    title: "Dot Travel",
    description:
      "Travel-Dot is a responsive <strong>React-based</strong> travel website application that provides users with an engaging platform to explore destinations and travel information. Built with Create React App, it demonstrates practical frontend engineering using modern JavaScript, <strong>component-based structure</strong>, and responsive design principles.\n\n The project lays the foundation for integrating travel content, user interaction, and dynamic UI features that can be extended with APIs and backend services for full travel workflow support. Travel-Dot highlights skills in building scalable, user-friendly web interfaces with clean architecture and modern tooling, suitable for expanding into complete travel discovery or booking experiences.",
    href: "/projects/dot-travel",
    slug: "dot-travel",
    image: "/projects/travel1.svg",
    liveUrl: "https://dot-tourist-app.web.app/",
    githubUrl: "https://github.com/HamzaAliDev/Travel-Dot.git",
    technologies: [
      { name: "React Js", icon: "/tools/react.png" },
      { name: "Firebase", icon: "/tools/firebase.png" },
      { name: "SCSS", icon: "/tools/sass.png" },
      { name: "Ant Design", icon: "/tools/antd.png" },
      { name: "JavaScript", icon: "/tools/js.png" },
    ],
    features: [
      "Destination discovery with user-generated content",
      "Authentication and user management",
      "Trip planning tools with itinerary management",
      "Location-based services for nearby attractions",
      "Dashboard for managing user profiles and trips",
    ],
  },
  {
    isApp: false,
    title: "Weather App",
    description:
      "Weather App is a straightforward web application that delivers <strong>real-time weather updates</strong> for any location, powered by the OpenWeather API. Designed with simplicity in mind, it features a <strong>user-friendly</strong> interface that provides essential weather information, including current conditions and <strong>weather alerts</strong>.\n\nBuilt using HTML, CSS, and JavaScript, the app ensures a responsive design that performs well on both web and mobile devices.\n\nWhether users need to plan their day or stay informed about changing weather patterns, Weather App offers a reliable and accessible solution with a focus on usability and performance.",
    href: "/projects/weather-app",
    slug: "weather-app",
    image: "/projects/weather1.svg",
    liveUrl: "https://hamza-weather.netlify.app/",
    githubUrl: "https://github.com/HamzaAliDev/Weather-App",
    technologies: [
      { name: "HTML", icon: "/tools/html.png" },
      { name: "CSS", icon: "/tools/css.png" },
      { name: "OpenWeather API", icon: "/tools/openweather.webp" },
      { name: "JavaScript", icon: "/tools/js.png" },
    ],
    features: [
      "Real-time weather updates",
      "Weather alerts",
      "Responsive design for web and mobile devices",
    ],
  },
  {
    isApp: false,
    title: "Br Architects",
    description:
      "Br Architects is a static website built using Bootstrap to showcase a <strong>clean</strong>, <strong>modern</strong>, and responsive design tailored for an architectural firm. The site features a professional layout with key sections such as <strong>Home</strong>, About, <strong>Services</strong>, and Contact, making it easy for visitors to explore the firm’s offerings.\n\nOptimized for both mobile and desktop devices, it leverages HTML, CSS, and JavaScript to deliver a fast and visually appealing experience.\n\nWith Bootstrap’s framework and subtle animations, Br Architects provides a polished and performance-driven platform that highlights the importance of responsive web design in a competitive digital landscape.",
    href: "/projects/br-achitects",
    slug: "br-architects",
    image: "/projects/br-architect.svg",
    liveUrl: "https://imperfect--coal.surge.sh/",
    githubUrl:
      "https://github.com/HamzaAliDev/SMIT-MAD-CSS-Assignment04",
    technologies: [
      { name: "HTML", icon: "/tools/html.png" },
      { name: "CSS", icon: "/tools/css.png" },
      { name: "Bootstrap", icon: "/tools/bootstrap.webp" },
      { name: "JavaScript", icon: "/tools/js.png" },
    ],
    features: [
      "Responsive design for mobile and desktop",
      "Clean and modern interface",
      "Home, About, Services, and Contact sections",
      "Optimized for performance",
    ],
  },
];

export const highPriorityTechStacks = [
  {
    name: "Next.js",
    colorIcon: "/assets/icons/nextjs2.svg",
  },

  {
    name: "Node.js",
    colorIcon: "/assets/icons/nodejs.svg",
  },
  {
    name: "MongoDB",
    colorIcon: "/assets/icons/mongodb.svg",
  },
  {
    name: "MySQL",
    colorIcon: "/assets/icons/mysql.svg",
  },
  {
    name: "Web Sockets",
    colorIcon: "/assets/icons/sockets.svg",
  },

  {
    name: "Redis",
    colorIcon: "/assets/icons/redis.svg",
  },
  {
    name: "JavaScript",
    colorIcon: "/assets/icons/js.svg",
  },
];

export const lowPriorityTechStacks = [
  {
    name: "HTML5",
    colorIcon: "/assets/icons/html5.svg",
  },
  {
    name: "CSS3",
    colorIcon: "/assets/icons/css3.svg",
  },
  {
    name: "Bootstrap",
    colorIcon: "/assets/icons/bootstrap4.svg",
  },
  {
    name: "Tailwind",
    colorIcon: "/assets/icons/tailwindcss.svg",
  },
  {
    name: "SASS",
    colorIcon: "/assets/icons/sass.svg",
  },

  {
    name: "Firebase",
    colorIcon: "/assets/icons/firebase.svg",
  },
  {
    name: "React",
    colorIcon: "/assets/icons/reactjs.svg",
  },
  {
    name: "Vite",
    colorIcon: "/assets/icons/vitejs.svg",
  },
];

export const responsibilitiesAtAivex = [
  "Development of Scalable Frontend Applications using Next.js, ensuring responsiveness and optimization.",
  "Integration of APIs and Backend Logic for seamless communication between frontend and backend services.",
  "Database Management and Data Handling with effective CRUD operations.",
  "Code Optimization and Troubleshooting to maintain high performance and efficiency.",
];

export const responsibilitiesAsFreelancer = [
  "Built responsive and interactive web applications using React.js, Next.js, Firebase, and Node.js.",
  "Collaborated with clients to understand requirements and deliver high-quality solutions.",
  "Delivered clean, maintainable, and scalable code for production-ready projects.",
  "Worked on UI/UX improvements to enhance user experience and engagement.",
];
