import { useState } from 'react';
import * as React from 'react';
import {
  Rocket,
  Wallet,
  Code,
  Cpu,
  BookOpen,
  FileCode,
  HelpCircle,
  ChevronRight,
} from 'lucide-react';

interface SidebarProps {
  collapsed: boolean;
  mobileOpen: boolean;
  activeSection: string;
  setActiveSection: (section: string) => void;
  closeMobileMenu: () => void;
}

interface MenuItem {
  id: string;
  label: string;
  icon: React.ElementType;
  children?: { id: string; label: string }[];
}

const menuItems: MenuItem[] = [
  {
    id: 'getting-started',
    label: 'Getting Started',
    icon: Rocket,
    children: [
      { id: 'introduction', label: 'Introduction' },
      { id: 'installation', label: 'Installation' },
      { id: 'quick-start', label: 'Quick Start' },
    ],
  },
  {
    id: 'wallet-providers',
    label: 'For Wallet Providers',
    icon: Wallet,
    children: [
      { id: 'wallet-overview', label: 'Overview' },
      { id: 'wallet-integration', label: 'Integration Guide' },
      { id: 'wallet-features', label: 'Available Features' },
      { id: 'wallet-examples', label: 'Code Examples' },
    ],
  },
  {
    id: 'dapp-developers',
    label: 'For dApp Developers',
    icon: Code,
    children: [
      { id: 'dapp-overview', label: 'Overview' },
      { id: 'dapp-integration', label: 'Integration Options' },
      { id: 'dapp-verification', label: 'Verification Tools' },
    ],
  },
  {
    id: 'technical',
    label: 'Technical',
    icon: Cpu,
    children: [
      { id: 'how-it-works', label: 'How It Works' },
      { id: 'dual-signatures', label: 'Dual Signatures' },
      { id: 'key-management', label: 'Key Management' },
      { id: 'security', label: 'Security Architecture' },
    ],
  },
  {
    id: 'api-reference',
    label: 'API Reference',
    icon: BookOpen,
    children: [
      { id: 'core-methods', label: 'Core Methods' },
      { id: 'wallet-adapters', label: 'Wallet Adapters' },
      { id: 'storage-options', label: 'Storage Options' },
      { id: 'configuration', label: 'Configuration' },
    ],
  },
  {
    id: 'examples',
    label: 'Examples',
    icon: FileCode,
    children: [
      { id: 'example-metamask', label: 'MetaMask' },
      { id: 'example-phantom', label: 'Phantom' },
      { id: 'example-custom', label: 'Custom Wallet' },
    ],
  },
  {
    id: 'resources',
    label: 'Resources',
    icon: HelpCircle,
    children: [
      { id: 'faq', label: 'FAQ' },
      { id: 'troubleshooting', label: 'Troubleshooting' },
      { id: 'additional-resources', label: 'Additional Resources' },
    ],
  },
];

export default function Sidebar({
  collapsed,
  mobileOpen,
  activeSection,
  setActiveSection,
  closeMobileMenu,
}: SidebarProps) {
  const [expandedMenus, setExpandedMenus] = useState<string[]>(['getting-started']);

  // Auto-expand menu when activeSection changes
  React.useEffect(() => {
    const currentMenu = menuItems.find(item => 
      item.children?.some(child => child.id === activeSection)
    );
    
    if (currentMenu && !expandedMenus.includes(currentMenu.id)) {
      setExpandedMenus(prev => [...prev, currentMenu.id]);
    }
  }, [activeSection, expandedMenus]);

  const toggleMenu = (menuId: string) => {
    setExpandedMenus((prev) =>
      prev.includes(menuId) ? prev.filter((id) => id !== menuId) : [...prev, menuId]
    );
  };

  const handleItemClick = (sectionId: string) => {
    setActiveSection(sectionId);
    closeMobileMenu();
  };

  return (
    <aside
      className={`fixed top-14 sm:top-16 left-0 bottom-0 border-r dark:border-dark-border border-light-border bg-light-surface dark:bg-dark-surface z-40 transition-all duration-300 ${
        collapsed ? 'w-12 sm:w-16' : 'w-64 sm:w-72'
      } ${
        mobileOpen ? 'translate-x-0' : '-translate-x-full'
      } lg:translate-x-0 overflow-y-auto scrollbar-thin scrollbar-thumb-primary-accent/20 scrollbar-track-transparent`}
    >
      <nav className="p-2 sm:p-3 space-y-0.5 sm:space-y-1">
        {menuItems.map((item) => {
          const Icon = item.icon;
          const isExpanded = expandedMenus.includes(item.id);
          const hasActiveChild = item.children?.some((child) => child.id === activeSection);

          return (
            <div key={item.id}>
              <button
                onClick={() => {
                  // Special handling for different parent menu types
                  if (item.id === 'api-reference') {
                    // API Reference has its own landing page
                    handleItemClick(item.id);
                  } else if (item.children && item.children.length > 0) {
                    // For other parent menus, navigate to first child
                    handleItemClick(item.children[0].id);
                  } else {
                    // For menus without children, navigate to the section
                    handleItemClick(item.id);
                  }
                  
                  // Always toggle menu if it has children
                  if (item.children && item.children.length > 0) {
                    toggleMenu(item.id);
                  }
                }}
                className={`w-full flex items-center gap-2 sm:gap-3 px-2 sm:px-3 py-1.5 sm:py-2 rounded-lg transition-all text-xs sm:text-sm font-medium cursor-pointer ${
                  hasActiveChild || activeSection === item.id
                    ? 'bg-light-hover dark:bg-dark-hover text-primary-accent'
                    : 'text-light-text-primary dark:text-dark-text-primary hover:bg-light-hover dark:hover:bg-dark-hover hover:text-primary-accent'
                } ${collapsed ? 'justify-center' : ''} ${
                  item.children && item.children.length > 0 ? 'cursor-pointer' : 'cursor-pointer'
                }`}
                title={collapsed ? item.label : undefined}
                type="button"
              >
                <Icon size={16} className="sm:w-[18px] sm:h-[18px] flex-shrink-0" />
                {!collapsed && (
                  <>
                    <span className="flex-1 text-left truncate">{item.label}</span>
                    {item.children && item.children.length > 0 && (
                      <ChevronRight
                        size={12}
                        className={`sm:w-[14px] sm:h-[14px] transition-transform ${isExpanded ? 'rotate-90' : ''}`}
                      />
                    )}
                  </>
                )}
              </button>

              {!collapsed && item.children && item.children.length > 0 && isExpanded && (
                <div className="mt-0.5 sm:mt-1 space-y-0.5">
                  {item.children.map((child) => (
                    <button
                      key={child.id}
                      onClick={(e) => {
                        e.stopPropagation();
                        handleItemClick(child.id);
                      }}
                      className={`w-full text-left pl-7 sm:pl-9 pr-2 sm:pr-3 py-1 sm:py-1.5 rounded-lg text-xs sm:text-sm transition-all cursor-pointer ${
                        activeSection === child.id
                          ? 'bg-primary-accent/10 text-primary-accent font-medium border-r-2 border-primary-accent'
                          : 'text-light-text-secondary dark:text-dark-text-secondary hover:text-light-text-primary dark:hover:text-dark-text-primary hover:bg-light-hover dark:hover:bg-dark-hover'
                      }`}
                    >
                      <span className="truncate">{child.label}</span>
                    </button>
                  ))}
                </div>
              )}
            </div>
          );
        })}
      </nav>
    </aside>
  );
}
