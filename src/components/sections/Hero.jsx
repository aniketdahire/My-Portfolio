import { useRef, useState, useEffect } from "react";
import { motion } from "framer-motion";
import { useTypewriter } from "react-simple-typewriter";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import AnimatedText, {
  GlitchText,
  ShimmerText,
  FloatingText,
} from "../Animation.Text";

/* --- Interactive parallax blobs --- */
function ParallaxBlobs() {
  const [offset, setOffset] = useState({ x: 0, y: 0 });
  const sectionRef = useRef();

  useEffect(() => {
    function handle(e) {
      const rect = sectionRef.current.getBoundingClientRect();
      let x, y;
      if (e.touches) {
        x = e.touches[0].clientX - rect.left;
        y = e.touches[0].clientY - rect.top;
      } else {
        x = e.clientX - rect.left;
        y = e.clientY - rect.top;
      }
      setOffset({
        x: (x / rect.width - 0.5) * 2, // Range -1..1
        y: (y / rect.height - 0.5) * 2,
      });
    }
    function reset() {
      setOffset({ x: 0, y: 0 });
    }
    const node = sectionRef.current;
    node.addEventListener("mousemove", handle);
    node.addEventListener("mouseleave", reset);
    node.addEventListener("touchmove", handle, { passive: false });
    node.addEventListener("touchend", reset);
    return () => {
      node.removeEventListener("mousemove", handle);
      node.removeEventListener("mouseleave", reset);
      node.removeEventListener("touchmove", handle);
      node.removeEventListener("touchend", reset);
    };
  }, []);

  return (
    <div
      ref={sectionRef}
      className="absolute inset-0 w-full h-full -z-10 pointer-events-none select-none"
    >
      <motion.div
        className="absolute w-[370px] h-[370px] bg-pink-500 opacity-20 blur-3xl rounded-full"
        style={{
          left: "6vw",
          top: "7vh",
          x: offset.x * 65,
          y: offset.y * 44,
        }}
        animate={{
          scale: [1, 1.13, 1],
          borderRadius: [
            "44% 56% 60% 40% / 49% 42% 58% 51%",
            "61% 39% 59% 41% / 61% 51% 49% 39%",
            "44% 56% 60% 40% / 49% 42% 58% 51%",
          ],
        }}
        transition={{ repeat: Infinity, duration: 13.5, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute w-[290px] h-[290px] bg-cyan-400 opacity-18 blur-2xl rounded-full"
        style={{
          right: "6vw",
          top: "12vh",
          x: offset.x * 53,
          y: offset.y * 61,
        }}
        animate={{
          scale: [1, 1.07, 1],
          borderRadius: [
            "43% 57% 60% 40% / 53% 49% 51% 47%",
            "56% 44% 45% 55% / 62% 51% 49% 38%",
            "43% 57% 60% 40% / 53% 49% 51% 47%",
          ],
        }}
        transition={{
          repeat: Infinity,
          duration: 12.6,
          ease: "easeInOut",
          delay: 1.7,
        }}
      />
      <motion.div
        className="absolute w-[460px] h-[240px] bg-indigo-400 opacity-16 blur-2xl rounded-full"
        style={{
          left: "49vw",
          top: "62vh",
          translateX: "-50%",
          x: offset.x * 22,
          y: offset.y * -18,
        }}
        animate={{
          scale: [1.08, 1, 1],
          borderRadius: [
            "59% 41% 62% 38% / 62% 51% 49% 38%",
            "46% 54% 58% 42% / 45% 47% 53% 55%",
            "59% 41% 62% 38% / 62% 51% 49% 38%",
          ],
        }}
        transition={{
          repeat: Infinity,
          duration: 16,
          ease: "easeInOut",
          delay: 2.5,
        }}
      />
    </div>
  );
}

/* --- Enhanced neon-glow typewriter --- */
function NeonTypewriterBig() {
  const [text, { typing }] = useTypewriter({
    words: [
      "Full-Stack Developer",
      "Java Developer",
      "Creative Technologist",
      "Problem Solver",
      "React Enthusiast",
      "Digital Dreamer",
    ],
    loop: true,
    delaySpeed: 1200,
    typeSpeed: 86,
    deleteSpeed: 38,
  });
  return (
    <span className="relative inline-block text-3xl md:text-5xl font-black tracking-tight px-2 text-blue-600 whitespace-nowrap">
      <span
        className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent"
        style={{ letterSpacing: "0.02em" }}
      >
        {text}
      </span>
      <span
        className={
          "ml-3 text-purple-600 font-extrabold align-middle" +
          (typing ? " animate-pulse" : "")
        }
        aria-hidden="true"
        style={{ fontSize: "1.1em" }}
      >
        |
      </span>
      <style>{`
        @keyframes glitch {
          0%, 100% { opacity: 1; filter: none; }
          16% { opacity: 0.6; filter: blur(1.5px) hue-rotate(-10deg);}
          26% { opacity: 1; filter: none;}
          38% { opacity: 0.7; filter: blur(1px) brightness(1.21);}
          59% { opacity: 1; filter: none;}
        }
        .animate-glitch {
          animation: glitch 1.13s steps(4, end) infinite;
        }
      `}</style>
    </span>
  );
}

export default function Hero() {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden bg-gradient-to-br from-blue-50 to-indigo-100"
    >
      <ParallaxBlobs />

      <div className="relative z-30 flex flex-col items-center text-center w-full px-4 sm:px-6 lg:px-8">
        <motion.h1
          className="text-5xl md:text-7xl font-extrabold tracking-tight text-gray-900 mb-1"
          initial={{ opacity: 0, y: 38 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ type: "spring", stiffness: 110 }}
        >
          Hi, I’m{" "}
          <span
            className="focus:ring-4 ring-pink-400 rounded px-2 outline-none"
            tabIndex={0}
          >
            Aniket Dahire
          </span>
        </motion.h1>
        <motion.div
          className="mt-1 mb-6"
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.24, duration: 0.94 }}
        >
          <NeonTypewriterBig />
        </motion.div>
        <motion.h2
          className="text-base sm:text-lg md:text-xl lg:text-2xl text-gray-700 font-medium mb-7 px-4"
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.41, duration: 1.02 }}
        >
          Turning{" "}
          <AnimatedText className="text-blue-600 font-bold">ideas</AnimatedText>{" "}
          into{" "}
          <AnimatedText className="text-purple-600 font-bold">
            impactful
          </AnimatedText>{" "}
          <AnimatedText className="text-indigo-600 font-bold">
            experiences
          </AnimatedText>
        </motion.h2>
        <motion.a
          href="#projects"
          className="btn-modern text-lg px-8 py-3 font-semibold rounded-full focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 transition"
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.71, duration: 0.7 }}
          whileHover={{ scale: 1.05 }}
        >
          <span className="relative z-10">See My Work</span>
        </motion.a>
      </div>

      <motion.div
        className="flex gap-7 mt-16 z-30"
        initial={{ opacity: 0, y: 8 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.12, type: "spring", stiffness: 62, damping: 22 }}
      >
        <motion.a
          href="https://github.com/aniketdahire"
          target="_blank"
          rel="noopener noreferrer"
          tabIndex={0}
          whileHover={{ y: -4, scale: 1.1 }}
          aria-label="GitHub"
        >
          <FaGithub className="text-4xl md:text-4xl text-gray-700 hover:text-blue-600 transition-colors" />
        </motion.a>
        <motion.a
          href="https://linkedin.com/in/aniket-dahire"
          target="_blank"
          rel="noopener noreferrer"
          tabIndex={0}
          whileHover={{ y: -4, scale: 1.1 }}
          aria-label="LinkedIn"
        >
          <FaLinkedin className="text-4xl md:text-4xl text-gray-700 hover:text-blue-600 transition-colors" />
        </motion.a>
      </motion.div>
    </section>
  );
}
