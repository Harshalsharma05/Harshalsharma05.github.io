import { motion } from "framer-motion";
import { FiCode, FiHeart, FiTrendingUp } from "react-icons/fi";
import {
  SiJavascript,
  SiPython,
  SiCplusplus,
  SiMysql,
  SiReact,
  SiNodedotjs,
  SiExpress,
  SiNextdotjs,
  SiTailwindcss,
  SiMongodb,
  SiPostgresql,
  SiAmazonwebservices,
  SiDocker,
  SiKubernetes,
  SiRender,
  SiApachekafka,
} from "react-icons/si";
import { portfolioData } from "../../data/portfolioData";

const Skills = () => {
  const { skills } = portfolioData;

  // Icon mapping for technical skills
  const skillIcons = {
    JavaScript: SiJavascript,
    Python: SiPython,
    "C++": SiCplusplus,
    SQL: SiMysql,
    "React.js": SiReact,
    "Node.js": SiNodedotjs,
    "Express.js": SiExpress,
    "Next.js": SiNextdotjs,
    TailwindCSS: SiTailwindcss,
    MongoDB: SiMongodb,
    PostgreSQL: SiPostgresql,
    MySQL: SiMysql,
    AWS: SiAmazonwebservices,
    Docker: SiDocker,
    Kubernetes: SiKubernetes,
    Render: SiRender,
    Kafka: SiApachekafka,
  };

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

              <div className="space-y-8">
                {skills.technical.map((category, idx) => (
                  <div key={idx}>
                    <h4 className="text-xl font-bold text-gray-900 mb-4">
                      {category.category}
                    </h4>
                    <div className="flex flex-wrap gap-3">
                      {category.skills.map((skill, skillIdx) => {
                        const SkillIcon = skillIcons[skill.name];
                        return (
                          <motion.div
                            key={skillIdx}
                            initial={{ scale: 0.9, opacity: 0 }}
                            whileInView={{ scale: 1, opacity: 1 }}
                            transition={{
                              duration: 0.3,
                              delay: skillIdx * 0.05,
                            }}
                            whileHover={{ scale: 1.05 }}
                            className="flex items-center gap-2 px-4 py-3 rounded-lg border-2 border-gray-300 bg-white cursor-pointer transition-all duration-300 hover:bg-gray-900 hover:border-gray-900 group"
                          >
                            {SkillIcon && (
                              <SkillIcon className="w-5 h-5 text-gray-700 group-hover:text-white transition-colors duration-300" />
                            )}
                            <span className="font-semibold text-gray-800 group-hover:text-white transition-colors duration-300">
                              {skill.name}
                            </span>
                          </motion.div>
                        );
                      })}
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
