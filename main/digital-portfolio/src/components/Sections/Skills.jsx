import { motion } from "framer-motion";
import { FiCode, FiHeart, FiTrendingUp } from "react-icons/fi";
import { portfolioData } from "../../data/portfolioData";

const Skills = () => {
  const { skills } = portfolioData;

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
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
    <section id="skills" className="section-container bg-gray-50">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={containerVariants}
        >
          {/* Header */}
          <motion.div variants={itemVariants} className="text-center mb-16">
            <h2 className="section-heading text-gradient">Advanced Skills</h2>
            <p className="section-subheading">
              Technical Expertise, Soft Skills & Creative Competencies
            </p>
          </motion.div>

          {/* Technical Skills */}
          <motion.div variants={itemVariants} className="mb-16">
            <div className="card">
              <div className="flex items-center gap-3 mb-8">
                <div className="w-12 h-12 rounded-full bg-gradient-to-r from-primary-500 to-secondary-500 flex items-center justify-center">
                  <FiCode className="text-white text-xl" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900">
                  Technical Skills
                </h3>
              </div>

              <div className="space-y-10">
                {skills.technical.map((category, idx) => (
                  <div key={idx}>
                    <h4 className="text-xl font-bold text-gray-900 mb-4">
                      {category.category}
                    </h4>
                    <div className="space-y-4">
                      {category.skills.map((skill, skillIdx) => (
                        <div key={skillIdx}>
                          <div className="flex items-center justify-between mb-2">
                            <span className="text-gray-800 font-semibold">
                              {skill.name}
                            </span>
                            <span className="text-gray-600 text-sm">
                              {skill.years}+ years | {skill.level}%
                            </span>
                          </div>
                          <div className="relative h-3 bg-gray-200 rounded-full overflow-hidden">
                            <motion.div
                              initial={{ width: 0 }}
                              whileInView={{ width: `${skill.level}%` }}
                              transition={{ duration: 1, delay: idx * 0.1 }}
                              className="absolute top-0 left-0 h-full bg-gradient-to-r from-primary-600 to-secondary-600 rounded-full"
                            />
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Soft Skills */}
          <motion.div variants={itemVariants} className="mb-16">
            <div className="card">
              <div className="flex items-center gap-3 mb-8">
                <div className="w-12 h-12 rounded-full bg-gradient-to-r from-primary-500 to-secondary-500 flex items-center justify-center">
                  <FiHeart className="text-white text-xl" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900">
                  Soft Skills
                </h3>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                {skills.soft.map((skill, idx) => (
                  <div
                    key={idx}
                    className="bg-gradient-to-br from-primary-50 to-white rounded-lg p-6 border border-primary-100"
                  >
                    <h4 className="text-xl font-bold text-gray-900 mb-2">
                      {skill.skill}
                    </h4>
                    <p className="text-gray-700 mb-3">{skill.description}</p>
                    <div className="bg-white rounded-lg p-3 border-l-4 border-primary-500">
                      <p className="text-sm text-gray-600">
                        <span className="font-semibold text-primary-700">
                          Evidence:{" "}
                        </span>
                        {skill.evidence}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Creative Competencies */}
          <motion.div variants={itemVariants}>
            <div className="card">
              <div className="flex items-center gap-3 mb-8">
                <div className="w-12 h-12 rounded-full bg-gradient-to-r from-primary-500 to-secondary-500 flex items-center justify-center">
                  <FiTrendingUp className="text-white text-xl" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900">
                  Creative Competencies
                </h3>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                {skills.creative.map((skill, idx) => (
                  <div
                    key={idx}
                    className="bg-gradient-to-br from-secondary-50 to-white rounded-lg p-6 border border-secondary-100"
                  >
                    <h4 className="text-xl font-bold text-gray-900 mb-2">
                      {skill.skill}
                    </h4>
                    <p className="text-gray-700 mb-3">{skill.description}</p>
                    <div className="bg-white rounded-lg p-3 border-l-4 border-secondary-500">
                      <p className="text-sm text-gray-600">
                        <span className="font-semibold text-secondary-700">
                          Artifacts:{" "}
                        </span>
                        {skill.artifacts}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;
