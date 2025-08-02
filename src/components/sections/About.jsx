// sections/About.jsx
import { motion } from "framer-motion";

export default function About() {
  return (
    <section id="about" className="py-12 sm:py-16 bg-gray-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.h2
          className="text-3xl sm:text-4xl font-bold text-center mb-8 sm:mb-12 text-gray-900 px-4"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          👤 About Me
        </motion.h2>

        <div className="grid lg:grid-cols-2 gap-8 lg:gap-15 items-center">
          {/* Image Section */}
          <motion.div
            className="relative"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div className="relative">
              {/* Professional Headshot */}
              <div className="w-full h-120 bg-gradient-to-br from-blue-100 to-purple-100 rounded-2xl overflow-hidden shadow-lg relative group">
                <img
                  src="/profile-image.jpg"
                  alt="Aniket Dahire - Professional Headshot"
                  className="w-full h-full object-cover object-center transition-transform duration-300 group-hover:scale-105"
                  onError={(e) => {
                    // Fallback if image doesn't load
                    e.target.style.display = "none";
                    e.target.nextSibling.style.display = "flex";
                  }}
                />
                <div
                  className="w-full h-full bg-gradient-to-br from-blue-100 to-purple-100 flex items-center justify-center absolute inset-0"
                  style={{ display: "none" }}
                >
                  <div className="text-6xl text-blue-600 opacity-60">📸</div>
                  <p className="absolute bottom-4 text-sm text-gray-500">
                    Add your image here
                  </p>
                </div>
              </div>

              {/* Decorative elements */}
              <div className="absolute -top-4 -right-6 w-24 h-24 bg-blue-500 rounded-full opacity-20"></div>
              <div className="absolute -bottom-4 -left-4 w-16 h-16 bg-purple-500 rounded-full opacity-20"></div>
            </div>
          </motion.div>

          {/* Content Section */}
          <motion.div
            className="space-y-6"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                Passionate Full-Stack Developer
              </h3>
              <p className="text-lg text-gray-700 leading-relaxed">
                Motivated Computer Engineering graduate passionate about web
                development, real-time applications, and creative software
                engineering. I thrive on solving real-world problems and enjoy
                working with modern tech to deliver scalable, impactful
                solutions.
              </p>
            </div>

            {/* Key Highlights */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="card-modern p-4">
                <div className="flex items-center gap-3 mb-2">
                  <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center">
                    <span className="text-blue-600 text-sm">🚀</span>
                  </div>
                  <h4 className="font-semibold text-gray-900">Experience</h4>
                </div>
                <p className="text-sm text-gray-600">
                  Developed responsive web interfaces, managed secure databases,
                  and built real-time applications in Agile teams.
                </p>
              </div>

              <div className="card-modern p-4">
                <div className="flex items-center gap-3 mb-2">
                  <div className="w-8 h-8 bg-purple-100 rounded-full flex items-center justify-center">
                    <span className="text-purple-600 text-sm">🔍</span>
                  </div>
                  <h4 className="font-semibold text-gray-900">Strengths</h4>
                </div>
                <p className="text-sm text-gray-600">
                  Strong problem-solving mindset, keen collaborator with
                  cross-functional teams, and dedicated to high-quality
                  delivery.
                </p>
              </div>

              <div className="card-modern p-4">
                <div className="flex items-center gap-3 mb-2">
                  <div className="w-8 h-8 bg-indigo-100 rounded-full flex items-center justify-center">
                    <span className="text-indigo-600 text-sm">☁️</span>
                  </div>
                  <h4 className="font-semibold text-gray-900">Cloud & AI</h4>
                </div>
                <p className="text-sm text-gray-600">
                  Cloud knowledge in AWS & Azure; leverage AI tools like ChatGPT
                  and Gemini for productivity.
                </p>
              </div>

              <div className="card-modern p-4">
                <div className="flex items-center gap-3 mb-2">
                  <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center">
                    <span className="text-green-600 text-sm">🤝</span>
                  </div>
                  <h4 className="font-semibold text-gray-900">Community</h4>
                </div>
                <p className="text-sm text-gray-600">
                  Active NSS volunteer, leading tech and social initiatives to
                  make a positive impact.
                </p>
              </div>
            </div>

            {/* Quote */}
            <motion.div
              className="card-modern p-6 mt-6"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.8 }}
            >
              <p className="text-gray-600 italic text-center">
                "I value teamwork, creativity, and am always eager to learn,
                innovate, and contribute to ambitious tech projects!"
              </p>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
