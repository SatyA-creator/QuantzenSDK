import { Moon, Sun, Menu, Twitter, Linkedin, Search } from 'lucide-react';
import { useState } from 'react';
import * as React from 'react';

interface HeaderProps {
  darkMode: boolean;
  toggleTheme: () => void;
  toggleSidebar: () => void;
  toggleMobileMenu: () => void;
  sidebarCollapsed: boolean;
  setActiveSection: (section: string) => void;
}

export default function Header({
  darkMode,
  toggleTheme,
  toggleSidebar,
  toggleMobileMenu,
  sidebarCollapsed,
  setActiveSection,
}: HeaderProps) {
  const [searchQuery, setSearchQuery] = useState('');
  const [isSearchFocused, setIsSearchFocused] = useState(false);
  const [searchResults, setSearchResults] = useState<{id: string, title: string, snippet: string}[]>([]);
  const [showResults, setShowResults] = useState(false);

  // Define searchable sections
  const searchableSections = [
    { id: 'introduction', title: 'Introduction', keywords: ['quantzen', 'sdk', 'getting started', 'quantum', 'crypto', 'blockchain'] },
    { id: 'installation', title: 'Installation', keywords: ['install', 'npm', 'setup', 'package'] },
    { id: 'quick-start', title: 'Quick Start', keywords: ['quick', 'start', 'begin', 'tutorial', 'guide'] },
    { id: 'wallet-overview', title: 'Wallet Overview', keywords: ['wallet', 'provider', 'overview', 'integration'] },
    { id: 'wallet-integration', title: 'Wallet Integration', keywords: ['wallet', 'integrate', 'connection', 'provider'] },
    { id: 'wallet-features', title: 'Wallet Features', keywords: ['wallet', 'features', 'functionality', 'capabilities'] },
    { id: 'wallet-examples', title: 'Wallet Examples', keywords: ['wallet', 'examples', 'code', 'samples'] },
    { id: 'dapp-overview', title: 'dApp Overview', keywords: ['dapp', 'application', 'developer', 'overview'] },
    { id: 'dapp-integration', title: 'dApp Integration', keywords: ['dapp', 'integrate', 'developer', 'options'] },
    { id: 'dapp-verification', title: 'dApp Verification', keywords: ['dapp', 'verify', 'validation', 'tools'] },
    { id: 'how-it-works', title: 'How It Works', keywords: ['technical', 'architecture', 'mechanism', 'process'] },
    { id: 'dual-signatures', title: 'Dual Signatures', keywords: ['dual', 'signature', 'security', 'crypto'] },
    { id: 'key-management', title: 'Key Management', keywords: ['key', 'management', 'storage', 'security'] },
    { id: 'security', title: 'Security Architecture', keywords: ['security', 'architecture', 'protection', 'safety'] },
    { id: 'core-methods', title: 'Core Methods', keywords: ['api', 'methods', 'functions', 'core'] },
    { id: 'wallet-adapters', title: 'Wallet Adapters', keywords: ['adapter', 'interface', 'wallet', 'api'] },
    { id: 'storage-options', title: 'Storage Options', keywords: ['storage', 'data', 'persistence', 'options'] },
    { id: 'configuration', title: 'Configuration', keywords: ['config', 'setup', 'options', 'settings'] },
    { id: 'example-metamask', title: 'MetaMask Example', keywords: ['metamask', 'example', 'sample', 'code'] },
    { id: 'example-phantom', title: 'Phantom Example', keywords: ['phantom', 'example', 'sample', 'code'] },
    { id: 'example-custom', title: 'Custom Wallet Example', keywords: ['custom', 'wallet', 'example', 'sample'] },
    { id: 'faq', title: 'FAQ', keywords: ['faq', 'questions', 'answers', 'help'] },
    { id: 'troubleshooting', title: 'Troubleshooting', keywords: ['troubleshoot', 'debug', 'issues', 'problems'] },
    { id: 'additional-resources', title: 'Additional Resources', keywords: ['resources', 'links', 'additional', 'extra'] }
  ];

  const performSearch = (query: string) => {
    if (!query.trim()) {
      setSearchResults([]);
      setShowResults(false);
      return;
    }

    const results = searchableSections
      .filter(section => {
        const searchTerm = query.toLowerCase();
        return section.title.toLowerCase().includes(searchTerm) ||
               section.keywords.some(keyword => keyword.includes(searchTerm)) ||
               section.id.toLowerCase().includes(searchTerm);
      })
      .slice(0, 8) // Limit to 8 results
      .map(section => ({
        id: section.id,
        title: section.title,
        snippet: `Navigate to ${section.title} section`
      }));

    setSearchResults(results);
    setShowResults(results.length > 0);
  };

  React.useEffect(() => {
    performSearch(searchQuery);
  }, [searchQuery]);

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchQuery.trim() && searchResults.length > 0) {
      // Navigate to the first result
      setActiveSection(searchResults[0].id);
      setSearchQuery('');
      setShowResults(false);
    }
  };

  const handleResultClick = (sectionId: string) => {
    setActiveSection(sectionId);
    setSearchQuery('');
    setShowResults(false);
  };

  // Keyboard shortcut for search
  React.useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key === 'k') {
        e.preventDefault();
        const searchInput = document.querySelector('input[type="text"]') as HTMLInputElement;
        searchInput?.focus();
      }
    };

    document.addEventListener('keydown', handleKeyDown);
    return () => document.removeEventListener('keydown', handleKeyDown);
  }, []);
  return (
    <header className="fixed top-0 left-0 right-0 h-14 sm:h-16 border-b border-gray-200 dark:border-dark-border bg-white/95 dark:bg-dark-bg/95 backdrop-blur-md z-40 shadow-sm">
      <div className="h-full flex items-center justify-between px-3 sm:px-4 lg:px-6">
        <div className="flex items-center gap-2 sm:gap-4">
          <button
            onClick={toggleMobileMenu}
            className="lg:hidden p-1.5 sm:p-2 rounded-lg hover:bg-light-hover dark:hover:bg-dark-hover transition-colors text-light-text-primary dark:text-dark-text-primary"
            aria-label="Toggle mobile menu"
          >
            <Menu size={18} className="sm:w-5 sm:h-5" />
          </button>

          <button
            onClick={toggleSidebar}
            className="hidden lg:block p-2 rounded-lg hover:bg-light-hover dark:hover:bg-dark-hover transition-colors text-light-text-primary dark:text-dark-text-primary"
            aria-label="Toggle sidebar"
          >
            <Menu size={20} />
          </button>

          <div className="flex items-center gap-2 sm:gap-3">
            <div className="w-6 h-6 sm:w-8 sm:h-8 rounded-lg flex items-center justify-center">
              <img 
                src="/favicon.png" 
                alt="Quantzen Logo" 
                className="w-full h-full object-contain"
              />
            </div>
            <div>
              <h1 className="text-sm sm:text-lg font-bold text-light-text-primary dark:text-dark-text-primary">
                QuantZen™ Docs
              </h1>
              <p className="text-xs text-light-text-secondary dark:text-dark-text-secondary hidden md:block">
                Developer Guide
              </p>
            </div>
          </div>
        </div>

        <div className="flex items-center gap-1 sm:gap-2">
          <form onSubmit={handleSearch} className="hidden sm:flex items-center relative">
            <div className={`flex items-center gap-2 bg-white dark:bg-dark-surface border rounded-lg px-2 sm:px-3 py-1.5 sm:py-2 w-48 sm:w-64 transition-all ring-1 ring-gray-50 dark:ring-transparent ${
              isSearchFocused 
                ? 'border-blue-300 dark:border-primary-accent shadow-lg shadow-blue-100/50 dark:shadow-primary-accent/10' 
                : 'border-gray-200 dark:border-dark-border'
            }`}>
              <Search size={14} className="sm:w-4 sm:h-4 text-gray-400 dark:text-dark-text-secondary" />
              <input
                type="text"
                placeholder="Search..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                onFocus={() => {
                  setIsSearchFocused(true);
                  if (searchQuery.trim()) setShowResults(true);
                }}
                onBlur={() => {
                  setIsSearchFocused(false);
                  // Delay hiding results to allow clicking
                  setTimeout(() => setShowResults(false), 150);
                }}
                className="flex-1 bg-transparent outline-none text-xs sm:text-sm text-light-text-primary dark:text-dark-text-primary placeholder-light-text-secondary dark:placeholder-dark-text-secondary"
              />
              <kbd className="hidden lg:block px-1.5 py-0.5 text-xs bg-light-hover dark:bg-dark-hover text-light-text-secondary dark:text-dark-text-secondary border dark:border-dark-border border-light-border rounded">
                ⌘K
              </kbd>
            </div>
            {showResults && searchResults.length > 0 && (
              <div className="absolute top-full left-0 right-0 mt-2 bg-light-surface dark:bg-dark-surface border dark:border-dark-border border-light-border rounded-lg shadow-lg max-h-64 overflow-y-auto z-50">
                {searchResults.map((result) => (
                  <button
                    key={result.id}
                    className="w-full text-left px-4 py-2 hover:bg-light-hover dark:hover:bg-dark-hover transition-colors border-b dark:border-dark-border border-light-border last:border-b-0"
                    onMouseDown={(e) => e.preventDefault()} // Prevent blur event
                    onClick={() => handleResultClick(result.id)}
                  >
                    <div className="font-medium text-light-text-primary dark:text-dark-text-primary text-sm">
                      {result.title}
                    </div>
                    <div className="text-xs text-light-text-secondary dark:text-dark-text-secondary">
                      {result.snippet}
                    </div>
                  </button>
                ))}
              </div>
            )}
          </form>

          {/* Mobile search button */}
          <button className="sm:hidden p-1.5 rounded-lg hover:bg-light-hover dark:hover:bg-dark-hover transition-colors text-light-text-primary dark:text-dark-text-primary">
            <Search size={16} />
          </button>

          <a
            href="https://x.com/quant_zen"
            target="_blank"
            rel="noopener noreferrer"
            className="p-1.5 sm:p-2 rounded-lg hover:bg-light-hover dark:hover:bg-dark-hover transition-colors text-light-text-primary dark:text-dark-text-primary"
            aria-label="Twitter profile"
          >
            <Twitter size={16} className="sm:w-[18px] sm:h-[18px]" />
          </a>

          <a
            href="https://www.linkedin.com/company/quantzen%E2%84%A2/"
            target="_blank"
            rel="noopener noreferrer"
            className="p-1.5 sm:p-2 rounded-lg hover:bg-light-hover dark:hover:bg-dark-hover transition-colors text-light-text-primary dark:text-dark-text-primary"
            aria-label="LinkedIn profile"
          >
            <Linkedin size={16} className="sm:w-[18px] sm:h-[18px]" />
          </a>

          <button
            onClick={toggleTheme}
            className="p-1.5 sm:p-2 rounded-lg hover:bg-light-hover dark:hover:bg-dark-hover transition-colors text-light-text-primary dark:text-dark-text-primary"
            aria-label="Toggle theme"
          >
            {darkMode ? <Sun size={16} className="sm:w-[18px] sm:h-[18px]" /> : <Moon size={16} className="sm:w-[18px] sm:h-[18px]" />}
          </button>

          <a
            href="https://www.quantzen.live"
            target="_blank"
            rel="noopener noreferrer"
            className="hidden md:inline-flex items-center gap-2 px-3 lg:px-4 py-1.5 lg:py-2 bg-primary-accent hover:bg-primary-accent/90 text-white rounded-lg transition-colors font-medium text-sm"
          >
            Explore QuantZen™
          </a>
        </div>
      </div>
    </header>
  );
}
