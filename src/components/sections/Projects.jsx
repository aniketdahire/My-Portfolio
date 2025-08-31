import { motion } from "framer-motion";
import EnhancedProjectCard from "../EnhancedProjectCard";

const projects = [
  // {
  //   title: "E-Commerce Platform",
  //   description: "A full-stack e-commerce platform with payment integration, user authentication, and comprehensive admin dashboard for managing products, orders, and customers.",
  //   technologies: ["React", "Node.js", "MongoDB", "Stripe", "Express.js"],
  //   github: "https://github.com/aniketdahire/ecommerce",
  //   live: "https://ecommerce-demo.vercel.app",
  //   features: [
  //     "User authentication and authorization",
  //     "Product catalog with search and filtering",
  //     "Shopping cart and checkout process",
  //     "Payment integration with Stripe",
  //     "Admin dashboard for inventory management",
  //     "Order tracking and email notifications"
  //   ]
  // },
  // {
  //   title: "Task Management App",
  //   description: "A collaborative task management application with real-time updates, team collaboration features, and advanced project organization capabilities.",
  //   technologies: ["Next.js", "TypeScript", "Firebase", "Tailwind CSS", "Framer Motion"],
  //   github: "https://github.com/aniketdahire/task-manager",
  //   live: "https://task-manager-demo.vercel.app",
  //   features: [
  //     "Real-time task updates and notifications",
  //     "Team collaboration and role management",
  //     "Project organization with boards and lists",
  //     "Task assignment and progress tracking",
  //     "File attachments and comments",
  //     "Advanced filtering and search functionality"
  //   ]
  // },
  {
    title: "Team Tracker – Project Management Tool",
    description:
      "A full-stack project management platform built collaboratively by a team of 4, integrating real-time communication, task tracking, and productivity tools to streamline team collaboration.",
    technologies: [
      "React.js",
      "Node.js",
      "Express.js",
      "MongoDB",
      "Socket.IO",
      "WebRTC",
      "Firebase",
      "JWT",
    ],
    github: "https://github.com/VISAM2529/TeamTrackr-Landing",
    live: "https://team-trackr-landing.vercel.app/",
    image: "/ProjectImges/team-trackr.jpg",
    features: [
      "Real-time chat and video calling using Socket.IO and WebRTC",
      "Secure login with JWT authentication and role-based access control",
      "Task board with project tracking and deadlines",
      "Cloud file uploads and storage using Firebase",
      "Inbuilt browser for productivity",
      "Responsive UI using React.js and Tailwind CSS",
      "Tested successfully with 25 users across 5 teams",
    ],
    myContributions: [
      "Developed the real-time chat and video calling module using Socket.IO and WebRTC",
      "Implemented JWT-based authentication for secure login and access control",
      "Built responsive UI using React.js and Tailwind CSS",
      "Integrated Firebase for file uploads and cloud storage",
      "Collaborated on task board features including progress tracking and deadlines",
      "Tested APIs using Postman and assisted in manual QA",
    ],
  },

  {
    title: "Terminal Portfolio (CLI)",
    description:
      "A command-line portfolio built using Node.js that runs directly in the terminal with a single command. It provides an interactive CLI experience showcasing my skills and projects.",
    technologies: ["Node.js", "Inquirer.js", "Chalk", "NPX"],
    github: "https://github.com/aniketdahire/terminal-portfolio",
    live: "npx aniketdahire",
    isCLI: true,
    video: "/ProjectImges/Terminal_Portfolio.mp4",
    features: [
      "Runs using 'npx aniketdahire' in any terminal",
      "Interactive interface using Inquirer.js",
      "Stylized terminal output using Chalk",
      "Shows projects, skills, and contact options",
      "No hosting required — just install via npm aniketdahire",
    ],
  },

  // {
  //   title: "Weather Dashboard",
  //   description: "A comprehensive weather application with detailed forecasts, location-based services, and beautiful weather visualizations.",
  //   technologies: ["React", "OpenWeather API", "Chart.js", "Geolocation API"],
  //   github: "https://github.com/aniketdahire/weather-app",
  //   live: "https://weather-dashboard.vercel.app",
  //   features: [
  //     "Real-time weather data and forecasts",
  //     "Location-based weather services",
  //     "Interactive weather maps and charts",
  //     "5-day and hourly forecasts",
  //     "Weather alerts and notifications",
  //     "Responsive design for mobile devices"
  //   ]
  // },
  // {
  //   title: "Ping Me - Chat Application",
  //   description:
  //     "A real-time chat application with group messaging, file sharing, and advanced communication features.",
  //   technologies: ["React", "Socket.io", "Node.js", "MongoDB", "AWS S3"],
  //   github: "https://github.com/aniketdahire/chat-app",
  //   live: "https://chat-app-demo.vercel.app",
  //   features: [
  //     "Real-time messaging with Socket.io",
  //     "Group chat and private messaging",
  //     "File and image sharing",
  //     "Message encryption and security",
  //     "User profiles and status updates",
  //     "Message search and history",
  //   ],
  // },
  // {
  //   title: "Fitness Tracker",
  //   description: "A comprehensive fitness tracking application with workout planning, progress monitoring, and health analytics.",
  //   technologies: ["React Native", "Firebase", "Chart.js", "HealthKit API"],
  //   github: "https://github.com/aniketdahire/fitness-tracker",
  //   live: "https://fitness-tracker-demo.vercel.app",
  //   features: [
  //     "Workout planning and scheduling",
  //     "Progress tracking and analytics",
  //     "Nutrition tracking and meal planning",
  //     "Social features and challenges",
  //     "Integration with health devices",
  //     "Personalized recommendations"
  //   ]
  // },
  {
    title: "Electrical Services Website",
    description:
      "A professional website for an electrical business to showcase services, completed projects, and allow customers to get in touch, boosting the company's online presence.",
    technologies: ["Next.js", "Tailwind CSS", "EmailJS", "Framer Motion"],
    github: "https://github.com/aniketdahire/Atharwa-Electrical-website.git", // <-- Replace with actual link if available
    live: "https://atharvaelectricals.vercel.app",
    image: "/ProjectImges/atharvaelectricals.jpg",
    features: [
      "Responsive design for all devices",
      "Service listings with project gallery",
      "Animated UI with Framer Motion",
      "Contact form with real-time email notifications",
      "SEO-friendly for better Google ranking",
      "Fast performance with server-side rendering",
    ],
  },
];

export default function Projects() {
  return (
    <section className="py-12 sm:py-16 bg-gray-50" id="projects">
      <motion.h2
        className="text-3xl sm:text-4xl font-bold text-center mb-8 sm:mb-10 text-gray-900 px-4"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        🚀 My Projects
      </motion.h2>
      <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {projects.map((project, index) => (
          <motion.div
            key={project.title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1, duration: 0.6 }}
          >
            <EnhancedProjectCard project={project} />
          </motion.div>
        ))}
      </div>
    </section>
  );
}
