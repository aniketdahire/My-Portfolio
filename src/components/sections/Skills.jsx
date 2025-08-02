// sections/Skills.jsx
import { motion } from "framer-motion";
import SkillSlider from "../SkillSlider";

export default function Skills() {
  return (
    <section className="py-12 sm:py-16 bg-white" id="skills">
      <motion.h2
        className="text-3xl sm:text-4xl font-bold text-center mb-8 sm:mb-10 text-gray-900 px-4"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        💡 My Skills
      </motion.h2>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <SkillSlider />
        </motion.div>

        <motion.div
          className="mt-12 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          {/* <p className="text-gray-600 max-w-2xl mx-auto">
            Hover over the skills to pause the animation and explore my technical expertise. 
            Each skill represents my proficiency in modern web development technologies.
          </p> */}
        </motion.div>
      </div>
    </section>
  );
}
