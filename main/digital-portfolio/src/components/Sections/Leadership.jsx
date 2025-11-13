import { motion } from "framer-motion";
import { FiUsers, FiAward, FiTarget, FiTrendingUp } from "react-icons/fi";
import { portfolioData } from "../../data/portfolioData";

const Leadership = () => {
  const { leadership } = portfolioData;

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
    <section id="leadership" className="section-container bg-white">
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
              Leadership & Collaboration
            </h2>
            <p className="section-subheading">
              Leading Teams, Building Together, Achieving More
            </p>
          </motion.div>

          {/* Leadership Experiences */}
          <div className="space-y-12">
            {leadership.map((experience, index) => (
              <motion.div key={index} variants={itemVariants} className="card">
                {/* Header */}
                <div className="mb-6">
                  <div className="flex items-start justify-between gap-4 mb-4">
                    <div className="flex-1">
                      <h3 className="text-2xl font-bold text-gray-900 mb-2">
                        {experience.title}
                      </h3>
                      {experience.organization && (
                        <p className="text-lg text-primary-700 font-semibold">
                          {experience.organization}
                        </p>
                      )}
                    </div>
                    <div className="flex flex-col items-end gap-2">
                      <span className="px-4 py-1 bg-gradient-to-r from-primary-600 to-secondary-600 text-white rounded-full text-sm font-medium">
                        {experience.type}
                      </span>
                      <span className="text-gray-600 text-sm">
                        {experience.duration}
                      </span>
                    </div>
                  </div>

                  <div className="flex items-center gap-6 text-gray-700">
                    <div className="flex items-center gap-2">
                      <FiUsers className="text-primary-600" />
                      <span className="font-semibold">{experience.role}</span>
                    </div>
                    {experience.teamSize && (
                      <div className="flex items-center gap-2">
                        <span className="font-semibold">
                          Team Size: {experience.teamSize}
                        </span>
                      </div>
                    )}
                  </div>
                </div>

                {/* Responsibilities */}
                <div className="mb-6 bg-blue-50 rounded-lg p-6">
                  <div className="flex items-center gap-3 mb-4">
                    <FiTarget className="text-blue-600 text-xl" />
                    <h4 className="text-lg font-bold text-gray-900">
                      Key Responsibilities
                    </h4>
                  </div>
                  <ul className="space-y-2">
                    {experience.responsibilities.map((resp, idx) => (
                      <li
                        key={idx}
                        className="text-gray-700 flex items-start gap-2"
                      >
                        <span className="text-blue-600 mt-1">•</span>
                        <span>{resp}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Team Dynamics */}
                {experience.teamDynamics && (
                  <div className="mb-6 bg-purple-50 rounded-lg p-6">
                    <div className="flex items-center gap-3 mb-3">
                      <FiUsers className="text-purple-600 text-xl" />
                      <h4 className="text-lg font-bold text-gray-900">
                        Team Dynamics
                      </h4>
                    </div>
                    <p className="text-gray-700 leading-relaxed">
                      {experience.teamDynamics}
                    </p>
                  </div>
                )}

                {/* Conflict Resolution */}
                {experience.conflictResolution && (
                  <div className="mb-6 bg-yellow-50 rounded-lg p-6">
                    <div className="flex items-center gap-3 mb-3">
                      <FiTarget className="text-yellow-600 text-xl" />
                      <h4 className="text-lg font-bold text-gray-900">
                        Conflict Resolution Example
                      </h4>
                    </div>
                    <p className="text-gray-700 leading-relaxed">
                      {experience.conflictResolution}
                    </p>
                  </div>
                )}

                {/* Achievements */}
                <div className="bg-gradient-to-br from-green-50 to-emerald-50 rounded-lg p-6">
                  <div className="flex items-center gap-3 mb-4">
                    <FiAward className="text-green-600 text-xl" />
                    <h4 className="text-lg font-bold text-gray-900">
                      Key Achievements
                    </h4>
                  </div>
                  <ul className="space-y-2">
                    {experience.achievements.map((achievement, idx) => (
                      <li
                        key={idx}
                        className="text-gray-700 flex items-start gap-2"
                      >
                        <FiTrendingUp className="text-green-600 mt-1 flex-shrink-0" />
                        <span>{achievement}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Leadership;
