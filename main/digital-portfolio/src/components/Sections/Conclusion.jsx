import { motion } from "framer-motion";
import {
  FiCheckCircle,
  FiTrendingUp,
  FiAlertCircle,
  FiTarget,
} from "react-icons/fi";
import { portfolioData } from "../../data/portfolioData";

const Conclusion = () => {
  const { conclusion } = portfolioData;

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
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

  const swotColors = {
    strengths: {
      bg: "from-green-50 to-emerald-50",
      border: "border-green-500",
      icon: "text-green-600",
      heading: "text-green-700",
    },
    weaknesses: {
      bg: "from-red-50 to-orange-50",
      border: "border-red-500",
      icon: "text-red-600",
      heading: "text-red-700",
    },
    opportunities: {
      bg: "from-blue-50 to-cyan-50",
      border: "border-blue-500",
      icon: "text-blue-600",
      heading: "text-blue-700",
    },
    threats: {
      bg: "from-purple-50 to-pink-50",
      border: "border-purple-500",
      icon: "text-purple-600",
      heading: "text-purple-700",
    },
  };

  return (
    <section id="conclusion" className="section-container bg-gray-50">
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
              Conclusion & Self-Assessment
            </h2>
            <p className="section-subheading">
              Reflection, Growth & Strategic Planning
            </p>
          </motion.div>

          {/* Key Achievements */}
          <motion.div variants={itemVariants} className="mb-12">
            <div className="card">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 rounded-full bg-gradient-to-r from-primary-500 to-secondary-500 flex items-center justify-center">
                  <FiCheckCircle className="text-white text-xl" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900">
                  Key Achievements
                </h3>
              </div>
              <div className="grid md:grid-cols-2 gap-4">
                {conclusion.keyAchievements.map((achievement, index) => (
                  <div
                    key={index}
                    className="flex items-start gap-3 bg-gradient-to-r from-green-50 to-emerald-50 rounded-lg p-4"
                  >
                    <FiCheckCircle className="text-green-600 text-xl mt-1 flex-shrink-0" />
                    <p className="text-gray-800 font-medium">{achievement}</p>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Lessons Learned */}
          <motion.div variants={itemVariants} className="mb-12">
            <div className="card bg-gradient-to-br from-blue-50 to-cyan-50">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 rounded-full bg-gradient-to-r from-blue-600 to-cyan-600 flex items-center justify-center">
                  <FiTrendingUp className="text-white text-xl" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900">
                  Lessons Learned
                </h3>
              </div>
              <div className="space-y-3">
                {conclusion.lessonsLearned.map((lesson, index) => (
                  <div
                    key={index}
                    className="flex items-start gap-3 bg-white rounded-lg p-4"
                  >
                    <span className="text-blue-600 font-bold text-lg mt-1">
                      {index + 1}.
                    </span>
                    <p className="text-gray-800">{lesson}</p>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Areas for Growth */}
          <motion.div variants={itemVariants} className="mb-12">
            <div className="card">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 rounded-full bg-gradient-to-r from-orange-500 to-yellow-500 flex items-center justify-center">
                  <FiTarget className="text-white text-xl" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900">
                  Areas for Continuous Growth
                </h3>
              </div>
              <div className="grid md:grid-cols-2 gap-4">
                {conclusion.areasForGrowth.map((area, index) => (
                  <div
                    key={index}
                    className="flex items-start gap-3 bg-gradient-to-r from-orange-50 to-yellow-50 rounded-lg p-4"
                  >
                    <FiAlertCircle className="text-orange-600 text-xl mt-1 flex-shrink-0" />
                    <p className="text-gray-800 font-medium">{area}</p>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>

          {/* SWOT Analysis */}
          <motion.div variants={itemVariants}>
            <div className="card">
              <div className="text-center mb-8">
                <h3 className="text-3xl font-bold text-gray-900 mb-3">
                  SWOT Analysis
                </h3>
                <p className="text-gray-600">
                  Strategic Self-Assessment for Future Planning
                </p>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                {/* Strengths */}
                <div
                  className={`bg-gradient-to-br ${swotColors.strengths.bg} rounded-xl p-6 border-2 ${swotColors.strengths.border}`}
                >
                  <h4
                    className={`text-xl font-bold ${swotColors.strengths.heading} mb-4 flex items-center gap-2`}
                  >
                    <FiCheckCircle className={swotColors.strengths.icon} />
                    Strengths
                  </h4>
                  <ul className="space-y-2">
                    {conclusion.swot.strengths.map((item, index) => (
                      <li
                        key={index}
                        className="text-gray-800 flex items-start gap-2"
                      >
                        <span className={swotColors.strengths.icon}>✓</span>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Weaknesses */}
                <div
                  className={`bg-gradient-to-br ${swotColors.weaknesses.bg} rounded-xl p-6 border-2 ${swotColors.weaknesses.border}`}
                >
                  <h4
                    className={`text-xl font-bold ${swotColors.weaknesses.heading} mb-4 flex items-center gap-2`}
                  >
                    <FiAlertCircle className={swotColors.weaknesses.icon} />
                    Weaknesses
                  </h4>
                  <ul className="space-y-2">
                    {conclusion.swot.weaknesses.map((item, index) => (
                      <li
                        key={index}
                        className="text-gray-800 flex items-start gap-2"
                      >
                        <span className={swotColors.weaknesses.icon}>!</span>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Opportunities */}
                <div
                  className={`bg-gradient-to-br ${swotColors.opportunities.bg} rounded-xl p-6 border-2 ${swotColors.opportunities.border}`}
                >
                  <h4
                    className={`text-xl font-bold ${swotColors.opportunities.heading} mb-4 flex items-center gap-2`}
                  >
                    <FiTrendingUp className={swotColors.opportunities.icon} />
                    Opportunities
                  </h4>
                  <ul className="space-y-2">
                    {conclusion.swot.opportunities.map((item, index) => (
                      <li
                        key={index}
                        className="text-gray-800 flex items-start gap-2"
                      >
                        <span className={swotColors.opportunities.icon}>↗</span>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Threats */}
                <div
                  className={`bg-gradient-to-br ${swotColors.threats.bg} rounded-xl p-6 border-2 ${swotColors.threats.border}`}
                >
                  <h4
                    className={`text-xl font-bold ${swotColors.threats.heading} mb-4 flex items-center gap-2`}
                  >
                    <FiTarget className={swotColors.threats.icon} />
                    Threats
                  </h4>
                  <ul className="space-y-2">
                    {conclusion.swot.threats.map((item, index) => (
                      <li
                        key={index}
                        className="text-gray-800 flex items-start gap-2"
                      >
                        <span className={swotColors.threats.icon}>⚠</span>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Conclusion;
