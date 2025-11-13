import { motion } from "framer-motion";
import {
  FiCode,
  FiTarget,
  FiTrendingUp,
  FiZap,
  FiAlertCircle,
  FiCheckCircle,
  FiExternalLink,
  FiGithub,
} from "react-icons/fi";
import { portfolioData } from "../../data/portfolioData";

const Projects = () => {
  const { projects } = portfolioData;

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
    <section id="projects" className="section-container bg-white">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={containerVariants}
        >
          {/* Header */}
          <motion.div variants={itemVariants} className="text-center mb-12">
            <h2 className="section-heading text-gradient">
              Interdisciplinary Projects
            </h2>
            <p className="section-subheading">
              Solving Real-World Problems Through Technology
            </p>
          </motion.div>

          {/* Projects */}
          <div className="space-y-12">
            {projects.map((project, index) => (
              <motion.div
                key={project.id}
                variants={itemVariants}
                className="card"
              >
                {/* Project Header */}
                <div className="mb-5">
                  <div className="flex flex-wrap items-start justify-between gap-4 mb-3">
                    <div className="flex-1">
                      <h3 className="text-2xl font-bold text-gray-900 mb-2">
                        {project.title}
                      </h3>
                      <p className="text-base text-primary-700 font-semibold">
                        {project.category}
                      </p>
                    </div>
                    <div className="flex gap-2">
                      {project.links?.github && (
                        <a
                          href={`https://${project.links.github}`}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center gap-2 px-3 py-2 bg-gray-900 text-white rounded-lg hover:bg-gray-800 transition-colors text-sm"
                        >
                          <FiGithub />
                          GitHub
                        </a>
                      )}
                      {(project.links?.demo || project.links?.live) && (
                        <a
                          href={`https://${
                            project.links.demo || project.links.live
                          }`}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center gap-2 px-3 py-2 bg-gradient-to-r from-primary-600 to-secondary-600 text-white rounded-lg hover:shadow-lg transition-shadow text-sm"
                        >
                          <FiExternalLink />
                          Live Demo
                        </a>
                      )}
                    </div>
                  </div>

                  <div className="flex flex-wrap gap-2 mb-3">
                    {project.tags.map((tag, idx) => (
                      <span
                        key={idx}
                        className="px-2.5 py-0.5 bg-primary-100 text-primary-700 rounded-full text-xs font-medium"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  <p className="text-gray-700 leading-relaxed text-base">
                    {project.overview}
                  </p>
                </div>

                {/* Objectives */}
                <div className="mb-5 bg-blue-50 rounded-lg p-4">
                  <div className="flex items-center gap-2 mb-3">
                    <FiTarget className="text-blue-600 text-xl" />
                    <h4 className="text-lg font-bold text-gray-900">
                      Objectives
                    </h4>
                  </div>
                  <ul className="space-y-2">
                    {project.objectives.map((objective, idx) => (
                      <li
                        key={idx}
                        className="text-gray-700 flex items-start gap-2"
                      >
                        <FiCheckCircle className="text-blue-600 mt-1 flex-shrink-0" />
                        <span>{objective}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Methodologies */}
                <div className="mb-5 bg-purple-50 rounded-lg p-4">
                  <div className="flex items-center gap-2 mb-3">
                    <FiCode className="text-purple-600 text-xl" />
                    <h4 className="text-lg font-bold text-gray-900">
                      Methodologies & Implementation
                    </h4>
                  </div>
                  <ul className="space-y-2">
                    {project.methodologies.map((method, idx) => (
                      <li
                        key={idx}
                        className="text-gray-700 flex items-start gap-2"
                      >
                        <span className="text-purple-600 mt-1">•</span>
                        <span>{method}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Outcomes */}
                <div className="mb-5 bg-green-50 rounded-lg p-4">
                  <div className="flex items-center gap-2 mb-3">
                    <FiTrendingUp className="text-green-600 text-xl" />
                    <h4 className="text-lg font-bold text-gray-900">
                      Outcomes & Impact
                    </h4>
                  </div>
                  <ul className="space-y-2">
                    {project.outcomes.map((outcome, idx) => (
                      <li
                        key={idx}
                        className="text-gray-700 flex items-start gap-2"
                      >
                        <FiCheckCircle className="text-green-600 mt-1 flex-shrink-0" />
                        <span>{outcome}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Innovations */}
                {project.innovations && (
                  <div className="mb-5 bg-yellow-50 rounded-lg p-4">
                    <div className="flex items-center gap-2 mb-3">
                      <FiZap className="text-yellow-600 text-xl" />
                      <h4 className="text-lg font-bold text-gray-900">
                        Key Innovations
                      </h4>
                    </div>
                    <ul className="space-y-2">
                      {project.innovations.map((innovation, idx) => (
                        <li
                          key={idx}
                          className="text-gray-700 flex items-start gap-2"
                        >
                          <span className="text-yellow-600 mt-1">💡</span>
                          <span>{innovation}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}

                {/* Challenges & Solutions */}
                <div className="bg-gradient-to-br from-orange-50 to-red-50 rounded-lg p-4">
                  <div className="flex items-center gap-2 mb-3">
                    <FiAlertCircle className="text-orange-600 text-xl" />
                    <h4 className="text-lg font-bold text-gray-900">
                      Challenges & Solutions
                    </h4>
                  </div>
                  <div className="space-y-3">
                    {project.challenges.map((item, idx) => (
                      <div
                        key={idx}
                        className="bg-white rounded-lg p-3 shadow-sm"
                      >
                        <p className="text-gray-900 font-semibold mb-2">
                          <span className="text-orange-600">Challenge: </span>
                          {item.challenge}
                        </p>
                        <p className="text-gray-700">
                          <span className="text-green-600 font-semibold">
                            Solution:{" "}
                          </span>
                          {item.solution}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;
