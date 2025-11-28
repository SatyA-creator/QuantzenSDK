import { useState } from 'react';
import { Copy, Check } from 'lucide-react';

interface CodeBlockProps {
  id: string;
  language: string;
  code: string;
  filename?: string;
  showQuantzenButton?: boolean;
  onQuantzenClick?: () => void;
}

export function CodeBlock({ id, language, code, filename, showQuantzenButton, onQuantzenClick }: CodeBlockProps) {
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
      {/* Force dark theme styling for code blocks */}
      <div style={{ 
        backgroundColor: 'black', 
        border: '1px solid rgba(255, 255, 255, 0.1)', 
        borderRadius: '8px',
        overflow: 'hidden',
        margin: '24px 0'
      }}>
        <div style={{ 
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          padding: '8px 16px',
          backgroundColor: 'black',
          borderBottom: '1px solid rgba(255, 255, 255, 0.1)'
        }}>
          <span style={{ 
            fontSize: '12px',
            color: 'white',
            textTransform: 'uppercase',
            fontWeight: '500',
            fontFamily: 'monospace'
          }}>
            {language}
          </span>
          <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
            {showQuantzenButton && (
              <button
                onClick={onQuantzenClick}
                className="flex items-center gap-2 px-3 py-1.5 text-xs text-white bg-gradient-to-r from-primary-accent to-secondary-accent hover:from-primary-accent/80 hover:to-secondary-accent/80 rounded transition-all duration-200 font-medium"
              >
                Quantzen Quantum Proof
              </button>
            )}
            <button
              onClick={handleCopy}
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '8px',
                padding: '6px 12px',
                fontSize: '12px',
                backgroundColor: 'black',
                color: 'white',
                border: 'none',
                borderRadius: '4px',
                cursor: 'pointer',
                transition: 'all 0.2s'
              }}
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
        </div>
        <div style={{ 
          padding: '16px',
          overflowX: 'auto',
          backgroundColor: 'black'
        }}>
          <pre style={{ 
            fontSize: '14px',
            lineHeight: '1.5',
            color: '#ffffff',
            margin: '0',
            fontFamily: 'monospace',
            fontWeight: '600'
          }}>
            <code id={id} style={{ 
              color: '#ffffff',
              fontFamily: 'monospace',
              fontWeight: '600',
              textShadow: '0 0 1px rgba(255, 255, 255, 0.5)'
            }}>
              {code}
            </code>
          </pre>
        </div>
      </div>
    </div>
  );
}