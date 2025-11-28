import { Heart } from 'lucide-react';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-gray-200 dark:border-dark-border bg-light-surface dark:bg-dark-surface">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          {/* Copyright Section */}
          <div className="flex items-center gap-2 text-sm text-light-text-secondary dark:text-dark-text-secondary">
            <span>© {currentYear} QuantZen™. All rights reserved.</span>
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
  );
}