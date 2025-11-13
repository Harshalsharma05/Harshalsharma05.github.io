import { useState, useEffect } from "react";
import {
  FiHome,
  FiUser,
  FiFileText,
  FiCode,
  FiStar,
  FiUsers,
  FiGlobe,
  FiTarget,
  FiBarChart,
  FiMessageSquare,
  FiMail,
} from "react-icons/fi";
import { portfolioData } from "../../data/portfolioData";

const iconMap = {
  home: FiHome,
  user: FiUser,
  document: FiFileText,
  code: FiCode,
  star: FiStar,
  users: FiUsers,
  globe: FiGlobe,
  target: FiTarget,
  chart: FiBarChart,
  quote: FiMessageSquare,
  mail: FiMail,
};

const FloatingNav = () => {
  const [activeSection, setActiveSection] = useState("cover");
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Show floating nav after scrolling past cover section
      setIsVisible(window.scrollY > window.innerHeight * 0.5);

      // Update active section
      const sections = portfolioData.sections;
      for (let i = sections.length - 1; i >= 0; i--) {
        const section = document.getElementById(sections[i].id);
        if (section) {
          const rect = section.getBoundingClientRect();
          if (rect.top <= 100) {
            setActiveSection(sections[i].id);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      const offset = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });
    }
  };

  return (
    <div
      className={`hidden lg:block fixed right-8 top-1/2 -translate-y-1/2 z-40 transition-all duration-300 ${
        isVisible
          ? "opacity-100 translate-x-0"
          : "opacity-0 translate-x-20 pointer-events-none"
      }`}
    >
      <div className="flex flex-col space-y-2 bg-white/95 backdrop-blur-md rounded-full shadow-lg p-2">
        {portfolioData.sections.map((section) => {
          const Icon = iconMap[section.icon];
          return (
            <button
              key={section.id}
              onClick={() => scrollToSection(section.id)}
              className={`group relative p-3 rounded-full transition-all duration-200 ${
                activeSection === section.id
                  ? "bg-primary-600 text-white"
                  : "text-gray-600 hover:bg-gray-100"
              }`}
              title={section.title}
            >
              <Icon className="w-5 h-5" />

              {/* Tooltip */}
              <span className="absolute right-full mr-3 px-3 py-2 bg-gray-900 text-white text-xs rounded-lg whitespace-nowrap opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200">
                {section.title}
              </span>
            </button>
          );
        })}
      </div>
    </div>
  );
};

export default FloatingNav;
