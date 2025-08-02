import { useState } from "react";
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
  FaDocker,
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
    { name: "Docker", icon: FaDocker, color: "#2496ED" },
    { name: "Vercel", icon: SiVercel, color: "#000000" },
    { name: "SQL", icon: FaDatabase, color: "#336791" },
  ];

  return (
    <div
      className="skill-slider py-4 sm:py-8 overflow-hidden"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      <div className="flex gap-4 sm:gap-8 animate-scroll">
        {/* First set of skills */}
        {skills.map((skill, index) => (
          <motion.div
            key={`first-${index}`}
            className="skill-slide flex flex-col items-center gap-2 p-3 sm:p-4 bg-white rounded-lg shadow-md min-w-[100px] sm:min-w-[120px]"
            whileHover={{ scale: 1.05, y: -5 }}
            animate={isPaused ? { x: 0 } : { x: [0, -1000] }}
            transition={{
              duration: isPaused ? 0 : 20,
              repeat: isPaused ? 0 : Infinity,
              ease: "linear",
            }}
          >
            <skill.icon
              className="text-2xl sm:text-3xl"
              style={{ color: skill.color }}
            />
            <span className="text-xs sm:text-sm font-medium text-gray-700 text-center">
              {skill.name}
            </span>
          </motion.div>
        ))}

        {/* Duplicate set for seamless loop */}
        {skills.map((skill, index) => (
          <motion.div
            key={`second-${index}`}
            className="skill-slide flex flex-col items-center gap-2 p-3 sm:p-4 bg-white rounded-lg shadow-md min-w-[100px] sm:min-w-[120px]"
            whileHover={{ scale: 1.05, y: -5 }}
            animate={isPaused ? { x: 0 } : { x: [0, -1000] }}
            transition={{
              duration: isPaused ? 0 : 20,
              repeat: isPaused ? 0 : Infinity,
              ease: "linear",
              delay: 10,
            }}
          >
            <skill.icon
              className="text-2xl sm:text-3xl"
              style={{ color: skill.color }}
            />
            <span className="text-xs sm:text-sm font-medium text-gray-700 text-center">
              {skill.name}
            </span>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default SkillSlider;
