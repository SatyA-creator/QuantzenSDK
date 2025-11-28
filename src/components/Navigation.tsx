import { ChevronLeft, ChevronRight } from 'lucide-react';

interface NavigationProps {
  previousPage?: {
    title: string;
    id: string;
  };
  nextPage?: {
    title: string;
    id: string;
  };
  onNavigate: (sectionId: string) => void;
}

export default function Navigation({ previousPage, nextPage, onNavigate }: NavigationProps) {
  return (
    <div className="flex flex-col sm:flex-row justify-between items-stretch sm:items-center mt-12 sm:mt-16 pt-6 sm:pt-8 border-t border-gray-200 dark:border-dark-border gap-3 sm:gap-0">
      <div className="flex-1">
        {previousPage && (
          <button
            onClick={() => onNavigate(previousPage.id)}
            className="group flex items-center gap-2 sm:gap-3 p-3 sm:p-4 rounded-lg sm:rounded-xl border border-gray-200 dark:border-dark-border hover:border-blue-300 dark:hover:border-primary-accent/50 transition-all hover:shadow-md hover:shadow-blue-100 dark:hover:shadow-primary-accent/10 bg-white dark:bg-transparent w-full sm:w-auto"
          >
            <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-lg bg-gray-50 dark:bg-dark-surface border border-gray-200 dark:border-dark-border flex items-center justify-center group-hover:bg-blue-50 dark:group-hover:bg-primary-accent/10 transition-colors flex-shrink-0">
              <ChevronLeft size={16} className="sm:w-[18px] sm:h-[18px] text-gray-500 dark:text-dark-text-secondary group-hover:text-blue-600 dark:group-hover:text-primary-accent" />
            </div>
            <div className="text-left min-w-0 flex-1">
              <div className="text-xs text-gray-500 dark:text-dark-text-secondary mb-1">Previous</div>
              <div className="text-sm sm:text-base font-medium text-gray-900 dark:text-dark-text-primary group-hover:text-blue-600 dark:group-hover:text-primary-accent transition-colors truncate">{previousPage.title}</div>
            </div>
          </button>
        )}
      </div>
      
      <div className="flex-1 flex justify-end">
        {nextPage && (
          <button
            onClick={() => onNavigate(nextPage.id)}
            className="group flex items-center gap-2 sm:gap-3 p-3 sm:p-4 rounded-lg sm:rounded-xl border border-gray-200 dark:border-dark-border hover:border-blue-300 dark:hover:border-primary-accent/50 transition-all hover:shadow-md hover:shadow-blue-100 dark:hover:shadow-primary-accent/10 bg-white dark:bg-transparent w-full sm:w-auto"
          >
            <div className="text-left sm:text-right min-w-0 flex-1">
              <div className="text-xs text-gray-500 dark:text-dark-text-secondary mb-1">Next</div>
              <div className="text-sm sm:text-base font-medium text-gray-900 dark:text-dark-text-primary group-hover:text-blue-600 dark:group-hover:text-primary-accent transition-colors truncate">{nextPage.title}</div>
            </div>
            <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-lg bg-gray-50 dark:bg-dark-surface border border-gray-200 dark:border-dark-border flex items-center justify-center group-hover:bg-blue-50 dark:group-hover:bg-primary-accent/10 transition-colors flex-shrink-0">
              <ChevronRight size={16} className="sm:w-[18px] sm:h-[18px] text-gray-500 dark:text-dark-text-secondary group-hover:text-blue-600 dark:group-hover:text-primary-accent" />
            </div>
          </button>
        )}
      </div>
    </div>
  );
}