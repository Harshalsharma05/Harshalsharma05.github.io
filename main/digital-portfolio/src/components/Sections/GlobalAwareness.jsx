import { motion } from "framer-motion";
import { FiGlobe, FiShield, FiHeart, FiBookOpen } from "react-icons/fi";
import { portfolioData } from "../../data/portfolioData";

const GlobalAwareness = () => {
  const { globalAwareness } = portfolioData;

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
    },
  };

  return (
    <section id="global" className="section-container bg-gray-50">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={containerVariants}
        >
          {/* Header */}
          <motion.div variants={itemVariants} className="text-center mb-16">
            <h2 className="section-heading text-gradient">
              Global Awareness & Ethics
            </h2>
            <p className="section-subheading">
              Technology with Responsibility, Impact with Integrity
            </p>
          </motion.div>

          {/* Case Studies */}
          <div className="space-y-12 mb-12">
            {globalAwareness.caseStudies.map((caseStudy, index) => (
              <motion.div key={index} variants={itemVariants} className="card">
                {/* Title */}
                <div className="mb-6">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-12 h-12 rounded-full bg-gradient-to-r from-primary-500 to-secondary-500 flex items-center justify-center">
                      <FiBookOpen className="text-white text-xl" />
                    </div>
                    <h3 className="text-2xl font-bold text-gray-900">
                      Case Study {index + 1}: {caseStudy.title}
                    </h3>
                  </div>
                </div>

                {/* Context */}
                <div className="mb-6 bg-blue-50 rounded-lg p-6">
                  <div className="flex items-center gap-2 mb-3">
                    <FiGlobe className="text-blue-600 text-xl" />
                    <h4 className="text-lg font-bold text-gray-900">Context</h4>
                  </div>
                  <p className="text-gray-700 leading-relaxed">
                    {caseStudy.context}
                  </p>
                </div>

                {/* Ethical Considerations */}
                <div className="mb-6 bg-purple-50 rounded-lg p-6">
                  <div className="flex items-center gap-2 mb-4">
                    <FiShield className="text-purple-600 text-xl" />
                    <h4 className="text-lg font-bold text-gray-900">
                      Ethical Considerations
                    </h4>
                  </div>
                  <ul className="space-y-3">
                    {caseStudy.ethicalConsiderations.map(
                      (consideration, idx) => (
                        <li
                          key={idx}
                          className="text-gray-700 flex items-start gap-2"
                        >
                          <span className="text-purple-600 mt-1">•</span>
                          <span>{consideration}</span>
                        </li>
                      )
                    )}
                  </ul>
                </div>

                {/* Personal Reflection */}
                <div className="mb-6 bg-yellow-50 rounded-lg p-6">
                  <div className="flex items-center gap-2 mb-3">
                    <FiHeart className="text-yellow-600 text-xl" />
                    <h4 className="text-lg font-bold text-gray-900">
                      Personal Reflection
                    </h4>
                  </div>
                  <p className="text-gray-700 leading-relaxed italic">
                    "{caseStudy.personalReflection}"
                  </p>
                </div>

                {/* Impact */}
                <div className="bg-gradient-to-br from-green-50 to-emerald-50 rounded-lg p-6">
                  <h4 className="text-lg font-bold text-gray-900 mb-2">
                    Impact on My Approach
                  </h4>
                  <p className="text-gray-700 leading-relaxed font-medium">
                    {caseStudy.impact}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Global Perspective */}
          <motion.div variants={itemVariants}>
            <div className="card bg-gradient-to-br from-primary-50 via-secondary-50 to-purple-50">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-14 h-14 rounded-full bg-gradient-to-r from-primary-600 to-secondary-600 flex items-center justify-center">
                  <FiGlobe className="text-white text-2xl" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900">
                  My Global Perspective
                </h3>
              </div>
              <p className="text-gray-800 leading-relaxed text-lg">
                {globalAwareness.globalPerspective}
              </p>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default GlobalAwareness;
