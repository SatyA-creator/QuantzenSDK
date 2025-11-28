import { useState, useEffect } from 'react';
import { Heart } from 'lucide-react';
import Sidebar from './components/Sidebar';
import Header from './components/Header';
import ContentArea from './components/ContentArea';
import TableOfContents from './components/TableOfContents';

function App() {
  const [sidebarCollapsed, setSidebarCollapsed] = useState(false);
  const [darkMode, setDarkMode] = useState(() => {
    const saved = localStorage.getItem('quantzen-theme');
    return saved ? saved === 'dark' : false; // Changed default from true to false for light theme
  });
  const [activeSection, setActiveSection] = useState('introduction');
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    localStorage.setItem('quantzen-theme', darkMode ? 'dark' : 'light');
    if (darkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [darkMode]);

  const toggleSidebar = () => {
    setSidebarCollapsed(!sidebarCollapsed);
  };

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  const toggleTheme = () => {
    setDarkMode(!darkMode);
  };

  return (
    <div className="min-h-screen bg-light-bg dark:bg-dark-bg text-light-text-primary dark:text-dark-text-primary transition-colors duration-200">
      <Header
        darkMode={darkMode}
        toggleTheme={toggleTheme}
        toggleSidebar={toggleSidebar}
        toggleMobileMenu={toggleMobileMenu}
        sidebarCollapsed={sidebarCollapsed}
        setActiveSection={setActiveSection}
      />

      <Sidebar
        collapsed={sidebarCollapsed}
        mobileOpen={mobileMenuOpen}
        activeSection={activeSection}
        setActiveSection={setActiveSection}
        closeMobileMenu={() => setMobileMenuOpen(false)}
      />

      <main className={`transition-all duration-300 pt-14 sm:pt-16 pb-4 ${
        sidebarCollapsed ? 'lg:ml-12 xl:ml-16' : 'lg:ml-64 xl:ml-72'
      }`}>
        <div className="flex flex-col xl:flex-row max-w-[1600px] mx-auto min-h-[calc(100vh-3.5rem)] sm:min-h-[calc(100vh-4rem)] xl:gap-6">
          <ContentArea activeSection={activeSection} setActiveSection={setActiveSection} />
          <TableOfContents activeSection={activeSection} />
        </div>
      </main>

      <footer className={`transition-all duration-300 ${
        sidebarCollapsed ? 'lg:ml-12 xl:ml-16' : 'lg:ml-64 xl:ml-72'
      } border-t border-gray-200 dark:border-dark-border bg-light-surface dark:bg-dark-surface`}>
        <div className="max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            {/* Copyright Section */}
            <div className="flex items-center gap-2 text-sm text-light-text-secondary dark:text-dark-text-secondary">
              <span>© {new Date().getFullYear()} QuantZen™. All rights reserved.</span>
            </div>

            {/* Made with love section */}
            <div className="flex items-center gap-2 text-sm text-light-text-secondary dark:text-dark-text-secondary">
              <span>Made with</span>
              <Heart size={14} className="text-red-500 fill-current animate-pulse" />
              <span>for quantum-safe future</span>
            </div>

            {/* Links Section */}
            <div className="flex items-center gap-4 text-sm">
              <a 
                href="https://www.quantzen.live" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-light-text-secondary dark:text-dark-text-secondary hover:text-primary-accent dark:hover:text-primary-accent transition-colors"
              >
                Website
              </a>
              <a 
                href="https://www.quantzen.live/privacy" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-light-text-secondary dark:text-dark-text-secondary hover:text-primary-accent dark:hover:text-primary-accent transition-colors"
              >
                Privacy
              </a>
              <a 
                href="https://www.quantzen.live/terms" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-light-text-secondary dark:text-dark-text-secondary hover:text-primary-accent dark:hover:text-primary-accent transition-colors"
              >
                Terms
              </a>
            </div>
          </div>
        </div>
      </footer>

      {mobileMenuOpen && (
        <div
          className="fixed inset-0 bg-black/30 backdrop-blur-sm z-30 lg:hidden"
          onClick={() => setMobileMenuOpen(false)}
        />
      )}
    </div>
  );
}

export default App;
