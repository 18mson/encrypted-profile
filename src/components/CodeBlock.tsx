'use client';

import { useState } from 'react';
import { Copy, Check } from 'lucide-react';

type CodeBlockProps = {
  code: string | null;
};

const CodeBlock: React.FC<CodeBlockProps> = ({ code }) => {
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    if (!code) {
      console.warn('No code to copy');
      return;
    }

    try {
      await navigator.clipboard.writeText(code);
      setCopied(true);
      setTimeout(() => setCopied(false), 2500);
    } catch (err) {
      console.error('Copy failed', err);
    }
  };

  return (
    <div className="relative bg-gray-700 rounded p-4 text-xs font-mono break-all">
      <pre className="break-all whitespace-pre-wrap">{code}</pre>
      <button
        onClick={handleCopy}
        className="absolute top-2 right-2 text-gray-100 px-2 py-1 text-xs rounded transition cursor-pointer"
      >
        {copied ? <Check size={16} /> : <Copy size={16} />}
      </button>
    </div>
  );
};

export default CodeBlock;
