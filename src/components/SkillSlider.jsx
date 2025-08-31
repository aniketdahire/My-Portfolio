import { useState, useRef, useEffect } from "react";
import { motion } from "framer-motion";
import {
  FaReact,
  FaNodeJs,
  FaJava,
  FaDatabase,
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaGit,
  FaCloud,
} from "react-icons/fa";
import {
  SiMongodb,
  SiExpress,
  SiTailwindcss,
  SiNextdotjs,
  SiTypescript,
  SiVercel,
  SiRedhat,
  SiAnsible,
  SiAmazon,
} from "react-icons/si";

const SkillSlider = () => {
  const [isPaused, setIsPaused] = useState(false);
  const containerRef = useRef(null);
  const animationRef = useRef(null);
  const [scrollPosition, setScrollPosition] = useState(0);
  const [skillWidth, setSkillWidth] = useState(120);

  const skills = [
    { name: "React", icon: FaReact, color: "#61DAFB" },
    { name: "Node.js", icon: FaNodeJs, color: "#339933" },
    { name: "JavaScript", icon: FaJs, color: "#F7DF1E" },
    { name: "TypeScript", icon: SiTypescript, color: "#3178C6" },
    { name: "Next.js", icon: SiNextdotjs, color: "#000000" },
    { name: "Express.js", icon: SiExpress, color: "#000000" },
    { name: "MongoDB", icon: SiMongodb, color: "#47A248" },
    { name: "Tailwind CSS", icon: SiTailwindcss, color: "#06B6D4" },
    { name: "HTML5", icon: FaHtml5, color: "#E34F26" },
    { name: "CSS3", icon: FaCss3Alt, color: "#1572B6" },
    { name: "Java", icon: FaJava, color: "#ED8B00" },
    { name: "AWS", icon: SiAmazon, color: "#FF9900" },
    { name: "Azure", icon: FaCloud, color: "#0078D4" },
    { name: "RedHat", icon: SiRedhat, color: "#EE0000" },
    { name: "Ansible", icon: SiAnsible, color: "#EE0000" },
    { name: "Git", icon: FaGit, color: "#F05032" },
    { name: "Vercel", icon: SiVercel, color: "#000000" },
    { name: "SQL", icon: FaDatabase, color: "#336791" },
  ];

  // Responsive skill width calculation
  useEffect(() => {
    const updateSkillWidth = () => {
      if (window.innerWidth < 640) {
        setSkillWidth(100); // Mobile
      } else if (window.innerWidth < 1024) {
        setSkillWidth(110); // Tablet
      } else {
        setSkillWidth(120); // Desktop
      }
    };

    updateSkillWidth();
    window.addEventListener("resize", updateSkillWidth);
    return () => window.removeEventListener("resize", updateSkillWidth);
  }, []);

  // Calculate total width for seamless loop
  const totalWidth = skills.length * skillWidth;

  const startAnimation = () => {
    if (animationRef.current) return;

    const animate = () => {
      if (!isPaused) {
        setScrollPosition((prev) => {
          const newPos = prev - 0.8; // Slower, smoother movement
          // Reset position for seamless loop
          if (newPos <= -totalWidth) {
            return 0;
          }
          return newPos;
        });
      }
      animationRef.current = requestAnimationFrame(animate);
    };

    animationRef.current = requestAnimationFrame(animate);
  };

  const stopAnimation = () => {
    if (animationRef.current) {
      cancelAnimationFrame(animationRef.current);
      animationRef.current = null;
    }
  };

  useEffect(() => {
    startAnimation();
    return () => stopAnimation();
  }, [isPaused, totalWidth]);

  return (
    <div className="skill-slider py-4 sm:py-6 lg:py-8 overflow-hidden">
      <div
        ref={containerRef}
        className="flex gap-3 sm:gap-4 lg:gap-8"
        style={{
          transform: `translateX(${scrollPosition}px)`,
          transition: isPaused ? "none" : "transform 0.05s linear",
        }}
      >
        {/* First set of skills */}
        {skills.map((skill, index) => (
          <motion.div
            key={`first-${index}`}
            className="skill-slide flex flex-col items-center gap-2 p-2 sm:p-3 lg:p-4 bg-white rounded-lg shadow-md min-w-[80px] sm:min-w-[100px] lg:min-w-[120px] hover:shadow-lg transition-all duration-300"
            whileHover={{
              scale: 1.05,
              y: -5,
              transition: { duration: 0.2, ease: "easeOut" },
            }}
            onHoverStart={() => setIsPaused(true)}
            onHoverEnd={() => setIsPaused(false)}
          >
            <skill.icon
              className="text-xl sm:text-2xl lg:text-3xl"
              style={{ color: skill.color }}
            />
            <span className="text-xs sm:text-sm font-medium text-gray-700 text-center leading-tight">
              {skill.name}
            </span>
          </motion.div>
        ))}

        {/* Duplicate set for seamless loop */}
        {skills.map((skill, index) => (
          <motion.div
            key={`second-${index}`}
            className="skill-slide flex flex-col items-center gap-2 p-2 sm:p-3 lg:p-4 bg-white rounded-lg shadow-md min-w-[80px] sm:min-w-[100px] lg:min-w-[120px] hover:shadow-lg transition-all duration-300"
            whileHover={{
              scale: 1.05,
              y: -5,
              transition: { duration: 0.2, ease: "easeOut" },
            }}
            onHoverStart={() => setIsPaused(true)}
            onHoverEnd={() => setIsPaused(false)}
          >
            <skill.icon
              className="text-xl sm:text-2xl lg:text-3xl"
              style={{ color: skill.color }}
            />
            <span className="text-xs sm:text-sm font-medium text-gray-700 text-center leading-tight">
              {skill.name}
            </span>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default SkillSlider;
