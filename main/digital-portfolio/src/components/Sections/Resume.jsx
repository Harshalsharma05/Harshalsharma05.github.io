import { motion } from "framer-motion";
import {
  FiAward,
  FiBriefcase,
  FiBook,
  FiCalendar,
  FiMapPin,
} from "react-icons/fi";
import { portfolioData } from "../../data/portfolioData";

const Resume = () => {
  const { education, workExperience, certifications } = portfolioData;

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
    <section id="resume" className="section-container bg-gray-50">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={containerVariants}
        >
          {/* Header */}
          <motion.div variants={itemVariants} className="text-center mb-16">
            <h2 className="section-heading text-gradient">Resume/CV</h2>
            <p className="section-subheading">
              Education, Experience & Achievements
            </p>
          </motion.div>

          {/* Education */}
          <motion.div variants={itemVariants} className="mb-12">
            <div className="card">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 rounded-full bg-gradient-to-r from-primary-500 to-secondary-500 flex items-center justify-center">
                  <FiBook className="text-white text-xl" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900">Education</h3>
              </div>

              <div className="bg-gradient-to-br from-primary-50 to-secondary-50 rounded-lg p-6">
                <h4 className="text-2xl font-bold text-gray-900 mb-2">
                  {education.degree}
                </h4>
                <p className="text-xl text-primary-700 font-semibold mb-3">
                  {education.institution}
                </p>

                <div className="flex flex-wrap gap-4 mb-4">
                  <div className="flex items-center gap-2 text-gray-700">
                    <FiCalendar className="text-primary-600" />
                    <span>{education.duration}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="px-4 py-1 bg-gradient-to-r from-primary-600 to-secondary-600 text-white rounded-full font-bold">
                      CGPA: {education.cgpa}/10
                    </div>
                  </div>
                </div>

                <div className="mt-6">
                  <h5 className="font-semibold text-gray-900 mb-3">
                    Relevant Coursework:
                  </h5>
                  <div className="flex flex-wrap gap-2">
                    {education.relevantCourses.map((course, index) => (
                      <span
                        key={index}
                        className="px-4 py-2 bg-white rounded-lg text-gray-700 text-sm font-medium shadow-sm"
                      >
                        {course}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Work Experience */}
          <motion.div variants={itemVariants} className="mb-12">
            <div className="card">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 rounded-full bg-gradient-to-r from-primary-500 to-secondary-500 flex items-center justify-center">
                  <FiBriefcase className="text-white text-xl" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900">
                  Work Experience
                </h3>
              </div>

              <div className="space-y-6">
                {workExperience.map((work, index) => (
                  <div
                    key={index}
                    className="bg-white border-l-4 border-primary-500 pl-6 py-4"
                  >
                    <div className="flex flex-wrap items-start justify-between mb-3">
                      <div>
                        <h4 className="text-xl font-bold text-gray-900">
                          {work.role}
                        </h4>
                        <p className="text-lg text-primary-700 font-semibold">
                          {work.organization}
                        </p>
                      </div>
                      <div className="flex flex-col items-end gap-2">
                        <span className="px-3 py-1 bg-primary-100 text-primary-700 rounded-full text-sm font-medium">
                          {work.type}
                        </span>
                      </div>
                    </div>

                    <div className="flex flex-wrap gap-4 mb-4 text-gray-600">
                      <div className="flex items-center gap-2">
                        <FiCalendar className="text-primary-600" />
                        <span>{work.duration}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <FiMapPin className="text-primary-600" />
                        <span>{work.location}</span>
                      </div>
                    </div>

                    <div className="mb-4">
                      <h5 className="font-semibold text-gray-900 mb-2">
                        Key Responsibilities:
                      </h5>
                      <ul className="space-y-2">
                        {work.responsibilities.map((resp, idx) => (
                          <li
                            key={idx}
                            className="text-gray-700 flex items-start gap-2"
                          >
                            <span className="text-primary-600 mt-1">•</span>
                            <span>{resp}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {work.impact && (
                      <div className="bg-gradient-to-r from-primary-50 to-secondary-50 rounded-lg p-4">
                        <p className="text-gray-800 font-medium">
                          <span className="text-primary-700 font-bold">
                            Impact:{" "}
                          </span>
                          {work.impact}
                        </p>
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Certifications */}
          <motion.div variants={itemVariants}>
            <div className="card">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 rounded-full bg-gradient-to-r from-primary-500 to-secondary-500 flex items-center justify-center">
                  <FiAward className="text-white text-xl" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900">
                  Certifications
                </h3>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                {certifications.map((cert, index) => (
                  <div
                    key={index}
                    className="bg-gradient-to-br from-primary-50 to-white rounded-lg p-6 border border-primary-100 hover:shadow-lg transition-shadow"
                  >
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-primary-600 to-secondary-600 flex items-center justify-center flex-shrink-0">
                        <FiBook className="text-white text-xl" />
                      </div>
                      <div className="flex-1">
                        <h4 className="text-lg font-bold text-gray-900 mb-1">
                          {cert.title}
                        </h4>
                        <p className="text-primary-700 font-semibold mb-2">
                          {cert.issuer}
                        </p>
                        {cert.platform && (
                          <p className="text-sm text-gray-600 mb-3">
                            via {cert.platform}
                          </p>
                        )}
                        <div className="flex flex-wrap gap-2">
                          {cert.skills.slice(0, 3).map((skill, idx) => (
                            <span
                              key={idx}
                              className="px-2 py-1 bg-white rounded text-xs font-medium text-gray-700"
                            >
                              {skill}
                            </span>
                          ))}
                        </div>
                      </div>
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

export default Resume;
