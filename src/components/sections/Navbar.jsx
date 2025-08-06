import React, { useState } from "react";
import { FiMenu, FiX, FiDownload } from "react-icons/fi";
import { Link, Events, scrollSpy } from "react-scroll";
import { motion, AnimatePresence } from "framer-motion";

const NAV_ITEMS = [
  { label: "Home", to: "hero" },
  { label: "About", to: "about" },
  { label: "Skills", to: "skills" },
  { label: "Projects", to: "projects" },
  { label: "Contact", to: "contact" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState(NAV_ITEMS[0].to);

  React.useEffect(() => {
    scrollSpy.update();
    Events.scrollEvent.register("activate", (to) => setActive(to));

    // Optimize scroll performance
    const handleScroll = () => {
      // Throttle scroll events for better performance
      if (!window.scrollTimeout) {
        window.scrollTimeout = setTimeout(() => {
          window.scrollTimeout = null;
        }, 100);
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => {
      Events.scrollEvent.remove("activate");
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const handleNavLinkClick = (item) => {
    setOpen(false);
    setActive(item.to);

    // Prevent multiple rapid clicks
    if (window.isScrolling) return;
    window.isScrolling = true;

    // Optimized scroll behavior with better performance
    const element = document.getElementById(item.to);
    if (element) {
      const navbarHeight = 80; // Reduced for better accuracy
      const elementRect = element.getBoundingClientRect();
      const elementPosition =
        window.pageYOffset + elementRect.top - navbarHeight;

      // Use requestAnimationFrame for smoother scrolling
      requestAnimationFrame(() => {
        window.scrollTo({
          top: elementPosition,
          behavior: "smooth",
        });
      });

      // Reset scroll lock after animation (reduced time)
      setTimeout(() => {
        window.isScrolling = false;
      }, 500);
    } else {
      window.isScrolling = false;
    }
  };

  const handleResumeDownload = () => {
    const link = document.createElement("a");
    link.href = "/resume.pdf";
    link.download = "Aniket_Dahire_Resume.pdf";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <header className="sticky top-0 z-50 navbar-glass shadow-xl">
      <nav className="relative max-w-7xl mx-auto px-6 md:px-8 flex items-center h-20">
        {/* Logo - left */}
        <motion.a
          href="/"
          className="flex items-center gap-3 text-xl md:text-2xl font-black tracking-tight text-gray-900 hover:text-blue-600 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-blue-300 rounded-xl absolute left-6 md:relative md:left-0 select-none group"
          style={{ minWidth: "180px", letterSpacing: "0.02em" }}
          whileHover={{ scale: 1.02, y: -1 }}
          whileTap={{ scale: 0.98 }}
          transition={{ duration: 0.3, ease: "easeOut" }}
        >
          <span className="sr-only">Go to homepage</span>
          <div className="relative">
            {/* <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-600 bg-clip-text text-transparent">
              AniketDahire
            </span> */}
            <img src="/logo.png" alt="" width={"120px"} />
            <motion.div
              className="absolute -bottom-1 left-0 w-full h-1 bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-600 rounded-full"
              initial={{ scaleX: 0 }}
              whileHover={{ scaleX: 1 }}
              transition={{ duration: 0.4, ease: "easeOut" }}
            />
          </div>
        </motion.a>

        {/* Centered Desktop Nav */}
        <ul className="hidden md:flex gap-2 mx-auto text-base font-semibold relative">
          {NAV_ITEMS.map((item) => (
            <li key={item.to} className="relative group">
              <Link
                to={item.to}
                spy
                smooth
                offset={-80}
                duration={400}
                delay={0}
                onSetActive={() => setActive(item.to)}
                onClick={() => handleNavLinkClick(item)}
                className={`
                  px-6 py-3 rounded-xl select-none 
                  focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 
                  transition-all duration-300 cursor-pointer relative overflow-hidden
                  ${
                    active === item.to
                      ? "text-white font-bold bg-gradient-to-r from-blue-600 to-purple-600 shadow-lg"
                      : "text-gray-700 hover:text-blue-600 hover:bg-gray-50/80"
                  }
                `}
                aria-label={`Go to ${item.label}`}
                tabIndex={0}
              >
                <span className="relative z-20">{item.label}</span>

                {/* Active state glow */}
                {active === item.to && (
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-r from-blue-600 to-purple-600 rounded-xl z-10"
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.4, ease: "easeOut" }}
                  />
                )}

                {/* Hover effect */}
                {active !== item.to && (
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-r from-blue-50 to-purple-50 rounded-xl z-5"
                    initial={{ opacity: 0, scale: 0.98 }}
                    whileHover={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.3, ease: "easeOut" }}
                  />
                )}
              </Link>
            </li>
          ))}
        </ul>

        {/* Resume Download Button - Desktop */}
        <motion.button
          onClick={handleResumeDownload}
          className="hidden md:flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold rounded-xl hover:from-blue-700 hover:to-purple-700 transition-all duration-300 shadow-lg hover:shadow-xl focus:outline-none focus:ring-2 focus:ring-blue-300"
          whileHover={{ scale: 1.05, y: -2 }}
          whileTap={{ scale: 0.95 }}
          transition={{ duration: 0.3, ease: "easeOut" }}
        >
          <FiDownload className="text-lg" />
          Resume
        </motion.button>

        {/* Hamburger - right on mobile */}
        <motion.button
          className="md:hidden p-3 rounded-xl focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 ml-auto text-gray-700 hover:bg-gray-100/80 transition-all duration-300"
          aria-label={open ? "Close navigation menu" : "Open navigation menu"}
          aria-controls="mobile-menu"
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
          whileHover={{ scale: 1.05, rotate: 5 }}
          whileTap={{ scale: 0.95 }}
          transition={{ duration: 0.3, ease: "easeOut" }}
        >
          <AnimatePresence mode="wait">
            {open ? (
              <motion.div
                key="close"
                initial={{ rotate: -90, opacity: 0 }}
                animate={{ rotate: 0, opacity: 1 }}
                exit={{ rotate: 90, opacity: 0 }}
                transition={{ duration: 0.4, ease: "easeOut" }}
              >
                <FiX size={26} />
              </motion.div>
            ) : (
              <motion.div
                key="menu"
                initial={{ rotate: 90, opacity: 0 }}
                animate={{ rotate: 0, opacity: 1 }}
                exit={{ rotate: -90, opacity: 0 }}
                transition={{ duration: 0.4, ease: "easeOut" }}
              >
                <FiMenu size={26} />
              </motion.div>
            )}
          </AnimatePresence>
        </motion.button>
      </nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {open && (
          <motion.div
            id="mobile-menu"
            className="md:hidden mobile-menu text-gray-900 absolute top-20 inset-x-0 shadow-2xl border-b border-white/20 overflow-hidden"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.5, ease: "easeOut" }}
            role="menu"
          >
            <motion.ul
              className="py-6 px-6 flex flex-col gap-3"
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1, duration: 0.5, ease: "easeOut" }}
            >
              {NAV_ITEMS.map((item, index) => (
                <motion.li
                  key={item.to}
                  initial={{ opacity: 0, x: -30 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{
                    delay: 0.1 + index * 0.1,
                    duration: 0.5,
                    ease: "easeOut",
                  }}
                >
                  <Link
                    to={item.to}
                    spy
                    smooth
                    offset={-80}
                    duration={600}
                    delay={0}
                    onSetActive={() => setActive(item.to)}
                    onClick={() => handleNavLinkClick(item)}
                    className={`
                      block px-6 py-4 rounded-xl transition-all duration-300
                      focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500
                      ${
                        active === item.to
                          ? "text-white font-bold bg-gradient-to-r from-blue-600 to-purple-600 shadow-lg"
                          : "text-gray-700 hover:text-blue-600 hover:bg-gray-50/80"
                      }
                    `}
                    aria-label={`Go to ${item.label}`}
                    role="menuitem"
                    tabIndex={0}
                  >
                    {item.label}
                  </Link>
                </motion.li>
              ))}

              {/* Resume Download Button - Mobile */}
              <motion.li
                initial={{ opacity: 0, x: -30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{
                  delay: 0.1 + NAV_ITEMS.length * 0.1,
                  duration: 0.5,
                  ease: "easeOut",
                }}
              >
                <motion.button
                  onClick={handleResumeDownload}
                  className="w-full flex items-center justify-center gap-2 px-6 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold rounded-xl hover:from-blue-700 hover:to-purple-700 transition-all duration-300 shadow-lg"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <FiDownload className="text-lg" />
                  Download Resume
                </motion.button>
              </motion.li>
            </motion.ul>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
