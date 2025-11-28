import { useEffect } from 'react';
import { Copy, Check } from 'lucide-react';
import { useState } from 'react';
import * as content from '../content/documentation';
import Breadcrumb from './Breadcrumb';
import Navigation from './Navigation';

interface ContentAreaProps {
  activeSection: string;
  setActiveSection: (section: string) => void;
}

// Helper function to convert kebab-case to camelCase
const toCamelCase = (str: string) => {
  return str.replace(/-([a-z])/g, (g) => g[1].toUpperCase());
};

// Navigation structure for next/previous functionality
const navigationOrder = [
  'introduction',
  'installation', 
  'quick-start',
  'wallet-overview',
  'wallet-integration',
  'wallet-features',
  'wallet-examples',
  'dapp-overview',
  'dapp-integration',
  'dapp-verification',
  'how-it-works',
  'dual-signatures',
  'key-management',
  'security',
  'api-reference',
  'core-methods',
  'wallet-adapters',
  'storage-options',
  'configuration',
  'example-metamask',
  'example-phantom',
  'example-custom',
  'faq',
  'troubleshooting',
  'additional-resources'
];

const sectionTitles: Record<string, string> = {
  'introduction': 'Getting Started',
  'installation': 'Installation',
  'quick-start': 'Quick Start',
  'wallet-overview': 'Wallet Overview',
  'wallet-integration': 'Wallet Integration',
  'wallet-features': 'Wallet Features',
  'wallet-examples': 'Wallet Examples',
  'dapp-overview': 'dApp Overview',
  'dapp-integration': 'dApp Integration',
  'dapp-verification': 'dApp Verification',
  'how-it-works': 'How It Works',
  'dual-signatures': 'Dual Signatures',
  'key-management': 'Key Management',
  'security': 'Security',
  'api-reference': 'API Reference',
  'core-methods': 'Core Methods',
  'wallet-adapters': 'Wallet Adapters',
  'storage-options': 'Storage Options',
  'configuration': 'Configuration',
  'example-metamask': 'MetaMask Example',
  'example-phantom': 'Phantom Example',
  'example-custom': 'Custom Wallet Example',
  'faq': 'FAQ',
  'troubleshooting': 'Troubleshooting',
  'additional-resources': 'Additional Resources'
};

// Helper function to get section details
const getSectionDetails = (sectionId: string) => {
  const sectionMap: Record<string, { category: string; title: string }> = {
    'introduction': { category: 'Getting Started', title: 'Introduction' },
    'installation': { category: 'Getting Started', title: 'Installation' },
    'quick-start': { category: 'Getting Started', title: 'Quick Start' },
    'wallet-overview': { category: 'Wallet Providers', title: 'Overview' },
    'wallet-integration': { category: 'Wallet Providers', title: 'Integration Guide' },
    'wallet-features': { category: 'Wallet Providers', title: 'Available Features' },
    'wallet-examples': { category: 'Wallet Providers', title: 'Code Examples' },
    'dapp-overview': { category: 'dApp Developers', title: 'Overview' },
    'dapp-integration': { category: 'dApp Developers', title: 'Integration Options' },
    'dapp-verification': { category: 'dApp Developers', title: 'Verification Tools' },
    'how-it-works': { category: 'Technical', title: 'How It Works' },
    'dual-signatures': { category: 'Technical', title: 'Dual Signatures' },
    'key-management': { category: 'Technical', title: 'Key Management' },
    'security': { category: 'Technical', title: 'Security Architecture' },
    'core-methods': { category: 'API Reference', title: 'Core Methods' },
    'wallet-adapters': { category: 'API Reference', title: 'Wallet Adapters' },
    'storage-options': { category: 'API Reference', title: 'Storage Options' },
    'configuration': { category: 'API Reference', title: 'Configuration' },
    'example-metamask': { category: 'Examples', title: 'MetaMask' },
    'example-phantom': { category: 'Examples', title: 'Phantom' },
    'example-custom': { category: 'Examples', title: 'Custom Wallet' },
    'faq': { category: 'Resources', title: 'FAQ' },
    'troubleshooting': { category: 'Resources', title: 'Troubleshooting' },
    'additional-resources': { category: 'Resources', title: 'Additional Resources' },
  };
  
  return sectionMap[sectionId] || { category: 'Documentation', title: 'Unknown' };
};

export default function ContentArea({ activeSection, setActiveSection }: ContentAreaProps) {
  const [copiedCode, setCopiedCode] = useState<string | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      const sections = document.querySelectorAll('[data-section]');
      let currentSection = activeSection;

      sections.forEach((section) => {
        const rect = section.getBoundingClientRect();
        if (rect.top <= 150 && rect.bottom >= 150) {
          currentSection = section.getAttribute('data-section') || activeSection;
        }
      });

      if (currentSection !== activeSection) {
        setActiveSection(currentSection);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [activeSection, setActiveSection]);

  const copyToClipboard = async (text: string, id: string) => {
    await navigator.clipboard.writeText(text);
    setCopiedCode(id);
    setTimeout(() => setCopiedCode(null), 2000);
  };

  const renderContent = () => {
    // Special handling for API Reference parent section
    if (activeSection === 'api-reference') {
      return (
        <div className="space-y-8">
          <div className="bg-gradient-to-r from-blue-900/20 to-purple-900/20 p-8 rounded-xl border border-gray-200 dark:border-gray-700">
            <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
              API Reference
            </h1>
            <p className="text-xl text-gray-700 dark:text-gray-300 mb-6">
              Complete reference for all Quantzen SDK APIs and methods
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-white dark:bg-gray-800 p-6 rounded-lg border border-gray-200 dark:border-gray-700 hover:shadow-lg transition-shadow">
              <div className="flex items-center mb-3">
                <div className="w-8 h-8 bg-blue-500 rounded flex items-center justify-center mr-3">
                  <span className="text-white text-sm font-bold">🔧</span>
                </div>
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white">Core Methods</h3>
              </div>
              <p className="text-gray-600 dark:text-gray-300 mb-4">
                Essential SDK methods for wallet operations and authentication
              </p>
              <button 
                onClick={() => setActiveSection('core-methods')}
                className="text-blue-600 dark:text-blue-400 font-medium hover:underline"
              >
                View Core Methods →
              </button>
            </div>
            
            <div className="bg-white dark:bg-gray-800 p-6 rounded-lg border border-gray-200 dark:border-gray-700 hover:shadow-lg transition-shadow">
              <div className="flex items-center mb-3">
                <div className="w-8 h-8 bg-green-500 rounded flex items-center justify-center mr-3">
                  <span className="text-white text-sm font-bold">🔗</span>
                </div>
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white">Wallet Adapters</h3>
              </div>
              <p className="text-gray-600 dark:text-gray-300 mb-4">
                Adapter interfaces for different wallet providers
              </p>
              <button 
                onClick={() => setActiveSection('wallet-adapters')}
                className="text-green-600 dark:text-green-400 font-medium hover:underline"
              >
                View Wallet Adapters →
              </button>
            </div>
            
            <div className="bg-white dark:bg-gray-800 p-6 rounded-lg border border-gray-200 dark:border-gray-700 hover:shadow-lg transition-shadow">
              <div className="flex items-center mb-3">
                <div className="w-8 h-8 bg-purple-500 rounded flex items-center justify-center mr-3">
                  <span className="text-white text-sm font-bold">💾</span>
                </div>
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white">Storage Options</h3>
              </div>
              <p className="text-gray-600 dark:text-gray-300 mb-4">
                Configure storage options for wallet data and preferences
              </p>
              <button 
                onClick={() => setActiveSection('storage-options')}
                className="text-purple-600 dark:text-purple-400 font-medium hover:underline"
              >
                View Storage Options →
              </button>
            </div>
            
            <div className="bg-white dark:bg-gray-800 p-6 rounded-lg border border-gray-200 dark:border-gray-700 hover:shadow-lg transition-shadow">
              <div className="flex items-center mb-3">
                <div className="w-8 h-8 bg-orange-500 rounded flex items-center justify-center mr-3">
                  <span className="text-white text-sm font-bold">⚙️</span>
                </div>
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white">Configuration</h3>
              </div>
              <p className="text-gray-600 dark:text-gray-300 mb-4">
                SDK configuration options and environment setup
              </p>
              <button 
                onClick={() => setActiveSection('configuration')}
                className="text-orange-600 dark:text-orange-400 font-medium hover:underline"
              >
                View Configuration →
              </button>
            </div>
          </div>
          
          <div className="bg-gray-50 dark:bg-gray-900 p-6 rounded-lg border border-gray-200 dark:border-gray-700">
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-3">Quick Reference</h3>
            <p className="text-gray-600 dark:text-gray-300 mb-4">
              Looking for something specific? Here are the most commonly used APIs:
            </p>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
              <code className="bg-white dark:bg-gray-800 px-3 py-2 rounded text-sm border border-gray-300 dark:border-gray-600">
                connect()
              </code>
              <code className="bg-white dark:bg-gray-800 px-3 py-2 rounded text-sm border border-gray-300 dark:border-gray-600">
                disconnect()
              </code>
              <code className="bg-white dark:bg-gray-800 px-3 py-2 rounded text-sm border border-gray-300 dark:border-gray-600">
                signTransaction()
              </code>
              <code className="bg-white dark:bg-gray-800 px-3 py-2 rounded text-sm border border-gray-300 dark:border-gray-600">
                getBalance()
              </code>
            </div>
          </div>
        </div>
      );
    }
    
    // Convert kebab-case to camelCase
    const functionName = toCamelCase(activeSection);
    const ContentComponent = content[functionName as keyof typeof content];

    if (!ContentComponent || typeof ContentComponent !== 'function') {
      return content.introduction();
    }

    return ContentComponent();
  };

  const getCurrentIndex = () => navigationOrder.indexOf(activeSection);
  const currentIndex = getCurrentIndex();
  
  const previousPage = currentIndex > 0 ? {
    id: navigationOrder[currentIndex - 1],
    title: sectionTitles[navigationOrder[currentIndex - 1]]
  } : undefined;
  
  const nextPage = currentIndex < navigationOrder.length - 1 ? {
    id: navigationOrder[currentIndex + 1],
    title: sectionTitles[navigationOrder[currentIndex + 1]]
  } : undefined;

  const sectionDetails = getSectionDetails(activeSection);
  const breadcrumbItems = [
    { label: 'Documentation', href: '#' },
    { label: sectionDetails.category },
    { label: sectionDetails.title, isActive: true }
  ];

  return (
    <div className="flex-1 px-4 sm:px-6 py-4 sm:py-6 w-full">
      {activeSection === 'introduction' && (
        <div className="mb-6 sm:mb-8 lg:mb-10">
          <div className="relative w-full h-48 sm:h-56 md:h-64 lg:h-72 overflow-hidden rounded-xl bg-gradient-to-r from-primary-accent/10 to-secondary-accent/10 border border-primary-accent/20">
            <img 
              src="/bg-6.jpg" 
              alt="Quantum Computing and Blockchain Security"
              className="w-full h-full object-cover object-center"
              style={{ objectPosition: 'center bottom' }}
            />
            {/* <div className="absolute inset-0 bg-gradient-to-r from-black/30 to-transparent flex items-center justify-start pl-6 sm:pl-8 lg:pl-12">
              <div className="text-white">
                <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold mb-2">Quantzen SDK</h2>
                 <p className="text-sm sm:text-base md:text-lg opacity-90">Quantum-Resistant Cryptography for Blockchain</p> 
              </div>
            </div> */}
          </div>
        </div>
      )}
      <div className="mb-4 sm:mb-6 lg:mb-8">
        <Breadcrumb items={breadcrumbItems} />
      </div>
      <div className="bg-white dark:bg-dark-bg rounded-lg sm:rounded-xl border border-gray-200 dark:border-dark-border shadow-sm ring-1 ring-gray-50 dark:ring-transparent">
        <div className="prose prose-light dark:prose-dark max-w-none p-4 sm:p-6 lg:p-8">
          {renderContent()}
          <Navigation 
            previousPage={previousPage}
            nextPage={nextPage}
            onNavigate={setActiveSection}
          />
        </div>
      </div>
    </div>
  );
}

export function CodeBlock({ code, language, id }: { code: string; language: string; id: string }) {
  const [copied, setCopied] = useState(false);

  const copyToClipboard = async () => {
    await navigator.clipboard.writeText(code);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="relative group my-4 sm:my-6 animate-fade-in-up">
      <div className="absolute top-2 sm:top-3 right-2 sm:right-3 z-10">
        <button
          onClick={copyToClipboard}
          className="p-1.5 sm:p-2 rounded-lg bg-light-elevated/95 dark:bg-dark-elevated/95 hover:bg-light-elevated dark:hover:bg-dark-elevated transition-all opacity-0 group-hover:opacity-100 border dark:border-dark-border border-light-border shadow-lg backdrop-blur-sm"
          aria-label="Copy code"
        >
          {copied ? (
            <Check size={12} className="sm:w-[14px] sm:h-[14px] text-accent-green animate-pulse-slow" />
          ) : (
            <Copy size={12} className="sm:w-[14px] sm:h-[14px] text-light-text-secondary dark:text-dark-text-secondary group-hover:text-primary-accent transition-colors" />
          )}
        </button>
      </div>
      <div className="rounded-lg sm:rounded-xl overflow-hidden border dark:border-dark-border border-light-border shadow-lg">
        <div className="flex items-center gap-2 bg-light-hover dark:bg-dark-hover px-3 sm:px-4 py-1.5 sm:py-2 border-b dark:border-dark-border border-light-border">
          <div className="flex gap-1 sm:gap-1.5">
            <div className="w-2 h-2 sm:w-3 sm:h-3 rounded-full bg-red-400"></div>
            <div className="w-2 h-2 sm:w-3 sm:h-3 rounded-full bg-yellow-400"></div>
            <div className="w-2 h-2 sm:w-3 sm:h-3 rounded-full bg-green-400"></div>
          </div>
          <span className="text-xs font-medium text-light-text-secondary dark:text-dark-text-secondary ml-2">
            {language}
          </span>
        </div>
        <pre className="!bg-light-surface dark:!bg-[#0d1117] p-3 sm:p-4 lg:p-6 overflow-x-auto text-xs sm:text-sm">
          <code className={`language-${language} text-light-text-primary dark:text-dark-text-primary`}>
            {code}
          </code>
        </pre>
      </div>
    </div>
  );
}
