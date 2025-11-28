import { useState } from 'react';
import { Copy, Check } from 'lucide-react';

interface CodeBlockProps {
  id: string;
  language: string;
  code: string;
  filename?: string;
}

export function CodeBlock({ id, language, code, filename }: CodeBlockProps) {
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(code);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      console.error('Failed to copy code:', err);
    }
  };

  return (
    <div className="my-6 relative group">
      {filename && (
        <div className="bg-dark-surface border border-white/10 border-b-0 rounded-t-lg px-4 py-2 text-sm text-dark-text-secondary font-mono">
          {filename}
        </div>
      )}
      <div className="bg-dark-surface border border-white/10 rounded-lg overflow-hidden">
        <div className="flex items-center justify-between bg-dark-bg/50 border-b border-white/10 px-4 py-2">
          <span className="text-xs text-dark-text-secondary uppercase font-medium">
            {language}
          </span>
          <button
            onClick={handleCopy}
            className="flex items-center gap-2 px-3 py-1.5 text-xs text-dark-text-secondary hover:text-primary-accent bg-dark-bg/50 hover:bg-primary-accent/10 rounded transition-all duration-200"
          >
            {copied ? (
              <>
                <Check className="w-3 h-3" />
                Copied!
              </>
            ) : (
              <>
                <Copy className="w-3 h-3" />
                Copy
              </>
            )}
          </button>
        </div>
        <div className="p-4 overflow-x-auto">
          <pre className="text-sm text-dark-text leading-relaxed">
            <code id={id} className={`language-${language}`}>
              {code}
            </code>
          </pre>
        </div>
      </div>
    </div>
  );
}