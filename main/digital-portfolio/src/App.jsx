import Navbar from "./components/Navigation/Navbar";
import FloatingNav from "./components/Navigation/FloatingNav";
import CoverPage from "./components/Sections/CoverPage";
import Introduction from "./components/Sections/Introduction";
import Resume from "./components/Sections/Resume";
import Projects from "./components/Sections/Projects";
import Skills from "./components/Sections/Skills";
import Leadership from "./components/Sections/Leadership";
import GlobalAwareness from "./components/Sections/GlobalAwareness";
import FutureAspirations from "./components/Sections/FutureAspirations";
import Conclusion from "./components/Sections/Conclusion";
import Testimonials from "./components/Sections/Testimonials";
import Contact from "./components/Sections/Contact";

function App() {
  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <Navbar />
      <FloatingNav />

      {/* Main Content */}
      <main>
        <CoverPage />
        <Introduction />
        <Resume />
        <Projects />
        <Skills />
        <Leadership />
        <GlobalAwareness />
        <FutureAspirations />
        <Conclusion />
        <Testimonials />
        <Contact />
      </main>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-gray-400">
            © 2025 Harshal Sharma. Built with React & TailwindCSS
          </p>
        </div>
      </footer>
    </div>
  );
}

export default App;
