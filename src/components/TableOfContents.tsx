import { useEffect, useState } from 'react';

interface TocItem {
  id: string;
  text: string;
  level: number;
}

interface TableOfContentsProps {
  activeSection: string;
}

export default function TableOfContents({ activeSection }: TableOfContentsProps) {
  const [headings, setHeadings] = useState<TocItem[]>([]);
  const [activeHeading, setActiveHeading] = useState<string>('');

  useEffect(() => {
    const updateHeadings = () => {
      const elements = document.querySelectorAll('h2[id], h3[id]');
      const items: TocItem[] = Array.from(elements).map((el) => ({
        id: el.id,
        text: el.textContent || '',
        level: parseInt(el.tagName.charAt(1)),
      }));
      setHeadings(items);
    };

    updateHeadings();
    const observer = new MutationObserver(updateHeadings);
    observer.observe(document.body, { childList: true, subtree: true });

    return () => observer.disconnect();
  }, [activeSection]);

  useEffect(() => {
    const handleScroll = () => {
      const headingElements = headings.map((h) => ({
        id: h.id,
        element: document.getElementById(h.id),
      }));

      for (let i = headingElements.length - 1; i >= 0; i--) {
        const { id, element } = headingElements[i];
        if (element) {
          const rect = element.getBoundingClientRect();
          if (rect.top <= 150) {
            setActiveHeading(id);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, [headings]);

  if (headings.length === 0) {
    return (
      <aside className="hidden xl:block w-56 2xl:w-64 sticky top-20 sm:top-24 h-fit ml-6 py-3 sm:py-4">
        <div className="text-xs font-semibold uppercase tracking-wider text-light-text-secondary dark:text-dark-text-secondary mb-3 sm:mb-4 px-3 sm:px-4">
          On This Page
        </div>
        <nav className="space-y-0.5 sm:space-y-1">
          <div className="text-xs sm:text-sm text-light-text-secondary dark:text-dark-text-secondary py-1 sm:py-1.5 px-3 sm:px-4">
            No sections found
          </div>
        </nav>
      </aside>
    );
  }

  return (
    <aside className="hidden xl:block w-56 2xl:w-64 sticky top-20 sm:top-24 h-fit ml-6 py-3 sm:py-4">
      <div className="text-xs font-semibold uppercase tracking-wider text-light-text-secondary dark:text-dark-text-secondary mb-3 sm:mb-4 px-3 sm:px-4">
        On This Page
      </div>
      <nav className="space-y-0.5 sm:space-y-1">
        {headings.map((heading) => (
          <a
            key={heading.id}
            href={`#${heading.id}`}
            className={`block text-xs sm:text-sm transition-colors py-1 sm:py-1.5 px-3 sm:px-4 rounded-lg border-l-2 ${
              activeHeading === heading.id
                ? 'border-primary-accent bg-primary-accent/5 text-primary-accent font-medium'
                : 'border-transparent text-light-text-secondary dark:text-dark-text-secondary hover:text-light-text-primary dark:hover:text-dark-text-primary hover:bg-light-hover dark:hover:bg-dark-hover'
            } ${heading.level === 3 ? 'pl-6 sm:pl-8' : ''}`}
            onClick={(e) => {
              e.preventDefault();
              document.getElementById(heading.id)?.scrollIntoView({ behavior: 'smooth' });
            }}
          >
            <span className="line-clamp-2">{heading.text}</span>
          </a>
        ))}
      </nav>
    </aside>
  );
}
