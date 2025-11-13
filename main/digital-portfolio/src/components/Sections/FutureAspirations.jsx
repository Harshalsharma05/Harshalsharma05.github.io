import { motion } from "framer-motion";
import { FiTarget, FiTrendingUp, FiStar, FiZap } from "react-icons/fi";
import { portfolioData } from "../../data/portfolioData";

const FutureAspirations = () => {
  const { futureAspirations } = portfolioData;

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

  return (
    <section id="future" className="section-container bg-white">
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
              Future Aspirations
            </h2>
            <p className="section-subheading">
              Where I'm Headed, What I'm Building Towards
            </p>
          </motion.div>

          {/* Short-term Goals */}
          <motion.div variants={itemVariants} className="mb-12">
            <div className="card">
              <div className="flex items-center gap-3 mb-8">
                <div className="w-12 h-12 rounded-full bg-gradient-to-r from-primary-500 to-secondary-500 flex items-center justify-center">
                  <FiTarget className="text-white text-xl" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900">
                  Short-Term Goals (1-2 Years)
                </h3>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                {futureAspirations.shortTerm.map((goal, index) => (
                  <motion.div
                    key={index}
                    variants={itemVariants}
                    className="bg-gradient-to-br from-blue-50 to-white rounded-lg p-6 border border-blue-100 hover:shadow-lg transition-shadow"
                  >
                    <div className="flex items-start gap-3 mb-4">
                      <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-blue-600 to-cyan-600 flex items-center justify-center flex-shrink-0">
                        <FiZap className="text-white text-lg" />
                      </div>
                      <div>
                        <h4 className="text-xl font-bold text-gray-900 mb-2">
                          {goal.goal}
                        </h4>
                        <span className="text-sm text-blue-700 font-semibold">
                          {goal.timeline}
                        </span>
                      </div>
                    </div>

                    <div className="space-y-3">
                      <div className="bg-white rounded-lg p-4 border-l-4 border-blue-500">
                        <p className="text-sm font-semibold text-gray-900 mb-1">
                          Strategy:
                        </p>
                        <p className="text-gray-700">{goal.strategy}</p>
                      </div>

                      <div className="bg-white rounded-lg p-4 border-l-4 border-cyan-500">
                        <p className="text-sm font-semibold text-gray-900 mb-1">
                          Skills to Master:
                        </p>
                        <p className="text-gray-700">{goal.skills}</p>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Long-term Goals */}
          <motion.div variants={itemVariants} className="mb-12">
            <div className="card">
              <div className="flex items-center gap-3 mb-8">
                <div className="w-12 h-12 rounded-full bg-gradient-to-r from-purple-500 to-pink-500 flex items-center justify-center">
                  <FiTrendingUp className="text-white text-xl" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900">
                  Long-Term Vision (5-10 Years)
                </h3>
              </div>

              <div className="space-y-6">
                {futureAspirations.longTerm.map((goal, index) => (
                  <motion.div
                    key={index}
                    variants={itemVariants}
                    className="bg-gradient-to-br from-purple-50 to-pink-50 rounded-lg p-6 border border-purple-100"
                  >
                    <div className="flex items-start gap-4 mb-4">
                      <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-purple-600 to-pink-600 flex items-center justify-center flex-shrink-0">
                        <FiStar className="text-white text-xl" />
                      </div>
                      <div className="flex-1">
                        <div className="flex items-center justify-between gap-4 mb-2">
                          <h4 className="text-xl font-bold text-gray-900">
                            {goal.goal}
                          </h4>
                          <span className="text-sm text-purple-700 font-semibold px-3 py-1 bg-white rounded-full">
                            {goal.timeline}
                          </span>
                        </div>
                        <p className="text-gray-700 leading-relaxed mb-4">
                          {goal.description}
                        </p>
                        <div className="bg-white rounded-lg p-4 border-l-4 border-purple-500">
                          <p className="text-sm font-semibold text-gray-900 mb-1">
                            How I'm Preparing:
                          </p>
                          <p className="text-gray-700">{goal.preparation}</p>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Areas of Interest */}
          <motion.div variants={itemVariants}>
            <div className="card bg-gradient-to-br from-orange-50 to-yellow-50">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 rounded-full bg-gradient-to-r from-orange-500 to-yellow-500 flex items-center justify-center">
                  <FiStar className="text-white text-xl" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900">
                  Key Areas of Interest
                </h3>
              </div>
              <div className="flex flex-wrap gap-3">
                {futureAspirations.areasOfInterest.map((area, index) => (
                  <motion.span
                    key={index}
                    whileHover={{ scale: 1.05 }}
                    className="px-6 py-3 bg-white rounded-xl text-gray-800 font-semibold shadow-md hover:shadow-lg transition-shadow cursor-default"
                  >
                    {area}
                  </motion.span>
                ))}
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default FutureAspirations;
