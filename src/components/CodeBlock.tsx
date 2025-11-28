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
        margin: '16px 0',
        width: '100%',
        maxWidth: '100%',
        boxSizing: 'border-box'
      }}>
        <div style={{ 
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          padding: '8px 12px',
          backgroundColor: 'black',
          borderBottom: '1px solid rgba(255, 255, 255, 0.1)',
          flexWrap: 'wrap',
          gap: '8px',
          minHeight: '44px'
        }}>
          <span style={{ 
            fontSize: '12px',
            color: 'white',
            textTransform: 'uppercase',
            fontWeight: '500',
            fontFamily: 'monospace',
            flexShrink: 0
          }}>
            {language}
          </span>
          <div style={{ 
            display: 'flex', 
            alignItems: 'center', 
            gap: '6px',
            flexWrap: 'wrap',
            justifyContent: 'flex-end',
            flex: '1',
            minWidth: '0'
          }}>
            {showQuantzenButton && (
              <button
                onClick={onQuantzenClick}
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '4px',
                  padding: '6px 8px',
                  fontSize: '10px',
                  background: 'linear-gradient(to right, #6366f1, #8b5cf6)',
                  color: 'white',
                  border: 'none',
                  borderRadius: '4px',
                  cursor: 'pointer',
                  transition: 'all 0.2s',
                  fontWeight: '500',
                  whiteSpace: 'nowrap',
                  minWidth: 'fit-content'
                }}
              >
                Quantzen Quantum Proof
              </button>
            )}
            <button
              onClick={handleCopy}
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '4px',
                padding: '8px 10px',
                fontSize: '11px',
                backgroundColor: 'rgba(255, 255, 255, 0.1)',
                color: 'white',
                border: '1px solid rgba(255, 255, 255, 0.2)',
                borderRadius: '4px',
                cursor: 'pointer',
                transition: 'all 0.2s',
                fontWeight: '500',
                minWidth: '60px',
                justifyContent: 'center'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.backgroundColor = 'rgba(255, 255, 255, 0.2)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.backgroundColor = 'rgba(255, 255, 255, 0.1)';
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
          padding: '12px',
          overflowX: 'auto',
          backgroundColor: 'black',
          fontSize: 'clamp(12px, 2.5vw, 14px)',
          lineHeight: '1.4'
        }}>
          <pre style={{ 
            fontSize: 'inherit',
            lineHeight: 'inherit',
            color: '#ffffff',
            margin: '0',
            fontFamily: 'monospace',
            fontWeight: '600',
            wordWrap: 'break-word',
            whiteSpace: 'pre-wrap',
            overflowWrap: 'break-word'
          }}>
            <code id={id} style={{ 
              color: '#ffffff',
              fontFamily: 'monospace',
              fontWeight: '600',
              textShadow: '0 0 1px rgba(255, 255, 255, 0.5)',
              wordBreak: 'break-word'
            }}>
              {code}
            </code>
          </pre>
        </div>
      </div>
    </div>
  );
}