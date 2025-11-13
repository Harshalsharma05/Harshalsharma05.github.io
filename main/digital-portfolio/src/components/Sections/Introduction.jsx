import { motion } from "framer-motion";
import { FiBookOpen, FiHeart, FiTarget, FiUsers } from "react-icons/fi";
import { portfolioData } from "../../data/portfolioData";

const Introduction = () => {
  const { introduction } = portfolioData;

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

  const valueIcons = {
    "Continuous Learning": FiBookOpen,
    "Problem-First Approach": FiTarget,
    "Quality Over Quantity": FiHeart,
    "Community & Collaboration": FiUsers,
  };

  return (
    <section id="introduction" className="section-container bg-white">
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
              Introduction & Learning Philosophy
            </h2>
            <p className="section-subheading">
              My Journey, My Values, My Approach to Learning
            </p>
          </motion.div>

          {/* Journey */}
          <motion.div variants={itemVariants} className="mb-16">
            <div className="card">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 rounded-full bg-gradient-to-r from-primary-500 to-secondary-500 flex items-center justify-center">
                  <FiBookOpen className="text-white text-xl" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900">My Journey</h3>
              </div>
              <p className="text-gray-700 leading-relaxed text-lg">
                {introduction.journey}
              </p>
            </div>
          </motion.div>

          {/* Philosophy */}
          <motion.div variants={itemVariants} className="mb-16">
            <div className="card bg-gradient-to-br from-primary-50 to-secondary-50">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 rounded-full bg-gradient-to-r from-primary-600 to-secondary-600 flex items-center justify-center">
                  <FiTarget className="text-white text-xl" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900">
                  Learning Philosophy
                </h3>
              </div>
              <p className="text-gray-700 leading-relaxed text-lg">
                {introduction.philosophy}
              </p>
            </div>
          </motion.div>

          {/* Core Values */}
          <motion.div variants={itemVariants}>
            <h3 className="text-3xl font-bold text-gray-900 mb-8 text-center">
              Core Values
            </h3>
            <div className="grid md:grid-cols-2 gap-6">
              {introduction.coreValues.map((value, index) => {
                const Icon = valueIcons[value.title];
                return (
                  <motion.div
                    key={index}
                    variants={itemVariants}
                    whileHover={{ scale: 1.02 }}
                    className="card group hover:shadow-xl"
                  >
                    <div className="flex items-start gap-4">
                      <div className="w-14 h-14 rounded-lg bg-gradient-to-br from-primary-500 to-secondary-500 flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform">
                        <Icon className="text-white text-2xl" />
                      </div>
                      <div>
                        <h4 className="text-xl font-bold text-gray-900 mb-2">
                          {value.title}
                        </h4>
                        <p className="text-gray-600 leading-relaxed">
                          {value.description}
                        </p>
                      </div>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Introduction;
