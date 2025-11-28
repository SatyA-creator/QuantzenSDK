import { ChevronRight, Home } from 'lucide-react';

interface BreadcrumbItem {
  label: string;
  href?: string;
  isActive?: boolean;
}

interface BreadcrumbProps {
  items: BreadcrumbItem[];
}

export default function Breadcrumb({ items }: BreadcrumbProps) {
  return (
    <nav className="flex items-center space-x-1 text-xs sm:text-sm bg-white/80 dark:bg-dark-surface/50 backdrop-blur-sm px-3 sm:px-4 py-2 sm:py-3 rounded-lg border border-gray-200 dark:border-dark-border shadow-sm ring-1 ring-gray-100 dark:ring-transparent overflow-x-auto" aria-label="Breadcrumb">
      <Home size={14} className="sm:w-4 sm:h-4 text-blue-600 dark:text-primary-accent mr-1 sm:mr-2 flex-shrink-0" />
      <ol className="flex items-center space-x-1 whitespace-nowrap">
        {items.map((item, index) => (
          <li key={index} className="flex items-center">
            {index > 0 && (
              <ChevronRight 
                size={12} 
                className="sm:w-[14px] sm:h-[14px] mx-1 sm:mx-2 text-light-text-secondary dark:text-dark-text-secondary flex-shrink-0" 
              />
            )}
            {item.isActive ? (
              <span className="text-light-text-primary dark:text-dark-text-primary font-medium truncate">
                {item.label}
              </span>
            ) : item.href ? (
              <a
                href={item.href}
                className="text-light-text-secondary dark:text-dark-text-secondary hover:text-primary-accent transition-colors truncate"
              >
                {item.label}
              </a>
            ) : (
              <span className="text-light-text-secondary dark:text-dark-text-secondary truncate">
                {item.label}
              </span>
            )}
          </li>
        ))}
      </ol>
    </nav>
  );
}