import { motion } from "framer-motion";
import { FiMail, FiGithub, FiLinkedin, FiChevronDown } from "react-icons/fi";
import { portfolioData } from "../../data/portfolioData";

const CoverPage = () => {
  const { personal } = portfolioData;

  const scrollToNext = () => {
    const element = document.getElementById("introduction");
    if (element) {
      const offset = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });
    }
  };

  return (
    <section
      id="cover"
      className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-50 via-white to-blue-50 overflow-hidden"
    >
      {/* Animated Background Shapes */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          className="absolute top-20 left-10 w-72 h-72 bg-primary-200/30 rounded-full blur-3xl"
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.5, 0.3],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
        <motion.div
          className="absolute bottom-20 right-10 w-96 h-96 bg-secondary-200/30 rounded-full blur-3xl"
          animate={{
            scale: [1.2, 1, 1.2],
            opacity: [0.3, 0.5, 0.3],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center pt-20">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="space-y-5"
        >
          {/* Profile Image */
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="flex justify-center"
          >
            <div className="relative">
              <div className="w-32 h-32 sm:w-36 sm:h-36 rounded-full bg-gradient-to-br from-primary-400 to-secondary-400 p-1">
                <div className="w-full h-full rounded-full bg-white flex items-center justify-center overflow-hidden">
                  <img
                    src="/me2.jpg"
                    alt={personal.name}
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
              <motion.div
                className="absolute -bottom-2 -right-2 bg-primary-600 text-white px-3 py-1 rounded-full text-xs font-semibold shadow-lg"
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ delay: 0.6, type: "spring" }}
              >
                9.52 CGPA
              </motion.div>
            </div>
          </motion.div>
        }
          {/* Name and Title */}
          <div>
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.6 }}
              className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-3"
            >
              {personal.name}
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.6 }}
              className="text-base sm:text-lg text-gray-500 italic mb-4 max-w-2xl mx-auto"
            >
              "Building solutions that matter, one line of code at a time."
            </motion.p>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.6 }}
              className="text-sm sm:text-base text-gray-700 leading-relaxed max-w-2xl mx-auto"
            >
              I'm Harshal Sharma, a computer science student passionate about
              full-stack engineering, AI systems, and competitive programming. I
              explore technology through curiosity-driven learning and hands-on
              creation.
            </motion.p>
          </div>

          {/* Academic Info */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.6 }}
            className="max-w-2xl mx-auto space-y-1"
          >
            <p className="text-base sm:text-lg text-gray-700 font-medium">
              {personal.program}
            </p>
            <p className="text-sm sm:text-base text-gray-600">
              {personal.institution}
            </p>
            <p className="text-xs sm:text-sm text-gray-500">
              {personal.location} • {personal.submissionDate}
            </p>
          </motion.div>

          {/* Social Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7, duration: 0.6 }}
            className="flex items-center justify-center space-x-3"
          >
            <a
              href={portfolioData.social.email}
              className="p-2.5 bg-white rounded-full shadow-md hover:shadow-lg hover:bg-primary-600 hover:text-white text-gray-700 transition-all duration-300"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FiMail className="w-5 h-5" />
            </a>
            <a
              href={portfolioData.social.github}
              className="p-2.5 bg-white rounded-full shadow-md hover:shadow-lg hover:bg-gray-900 hover:text-white text-gray-700 transition-all duration-300"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FiGithub className="w-5 h-5" />
            </a>
            <a
              href={portfolioData.social.linkedin}
              className="p-2.5 bg-white rounded-full shadow-md hover:shadow-lg hover:bg-blue-600 hover:text-white text-gray-700 transition-all duration-300"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FiLinkedin className="w-5 h-5" />
            </a>
          </motion.div>

          {/* CTA Button */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8, duration: 0.6 }}
          >
            <button
              onClick={scrollToNext}
              className="btn-primary inline-flex items-center space-x-2 group"
            >
              <span>Explore Portfolio</span>
              <FiChevronDown className="w-5 h-5 group-hover:translate-y-1 transition-transform" />
            </button>
          </motion.div>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 1 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 1.5, repeat: Infinity }}
          className="flex flex-col items-center text-gray-400"
        >
          <span className="text-xs mb-1">Scroll to explore</span>
          <FiChevronDown className="w-5 h-5" />
        </motion.div>
      </motion.div>
    </section>
  );
};

export default CoverPage;
