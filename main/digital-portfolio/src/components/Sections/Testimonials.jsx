import { motion } from "framer-motion";
import { FiMessageSquare } from "react-icons/fi";
import { portfolioData } from "../../data/portfolioData";

const Testimonials = () => {
  const { testimonials } = portfolioData;

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
    <section id="testimonials" className="section-container bg-white">
      <div className="max-w-5xl mx-auto">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={containerVariants}
        >
          {/* Header */}
          <motion.div variants={itemVariants} className="text-center mb-16">
            <h2 className="section-heading text-gradient">Testimonials</h2>
            <p className="section-subheading">
              Words of Appreciation & Recommendations
            </p>
          </motion.div>

          {/* Testimonials */}
          <div className="space-y-6">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                className="card relative"
              >
                {/* Quote Icon */}
                <div className="absolute top-6 left-6 text-6xl text-primary-200 opacity-50">
                  <FiMessageSquare />
                </div>

                {/* Content */}
                <div className="relative pt-12">
                  <p className="text-gray-700 italic mb-6 text-base leading-relaxed">
                    "{testimonial.quote}"
                  </p>

                  {/* Author Info */}
                  <div className="flex items-center gap-4 pt-6 border-t border-gray-200">
                    <div className="w-16 h-16 rounded-full bg-gradient-to-r from-primary-400 to-secondary-400 flex items-center justify-center text-white text-2xl font-bold flex-shrink-0">
                      {testimonial.name
                        .split(" ")
                        .map((n) => n[0])
                        .join("")}
                    </div>
                    <div>
                      <h4 className="font-bold text-gray-900 text-lg">
                        {testimonial.name}
                      </h4>
                      <p className="text-primary-700 font-semibold">
                        {testimonial.role}
                      </p>
                      <p className="text-gray-600 text-sm">
                        {testimonial.organization}
                      </p>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Call to Action */}
          <motion.div variants={itemVariants} className="mt-12 text-center">
            <div className="card bg-gradient-to-br from-gray-50 to-white inline-block">
              <p className="text-gray-700 mb-4">
                Have we worked together? I'd love to hear from you!
              </p>
              <a
                href="mailto:harshal2005.js@gmail.com?subject=Testimonial for Your Portfolio"
                className="btn-primary inline-flex items-center gap-2"
              >
                Share Your Testimonial
              </a>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Testimonials;
