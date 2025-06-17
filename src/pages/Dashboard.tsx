import React from 'react';
import { ArrowDownTrayIcon, ClipboardIcon } from '@heroicons/react/24/outline';

const code = `curl "https://generativelanguage.googleapis.com/v1beta/models/gemini-2.0-flash:generateContent?key=GEMINI_API_KEY" \
  -H 'Content-Type: application/json' \
  -X POST \
  -d '{\n    "contents": [\n      {\n        "parts": [\n          {\n            "text": "Explain how AI works in a few words"\n          }\n        ]\n      }\n    ]\n  }'\n`;

const fakeData = [
  { projectNumber: '123456789', projectName: 'Gemini Demo', apiKey: 'AIzaSyA...123', created: '2024-06-16', plan: 'Free' },
  { projectNumber: '987654321', projectName: 'AI Studio Test', apiKey: 'AIzaSyB...456', created: '2024-06-15', plan: 'Pro' },
  { projectNumber: '555666777', projectName: 'Sample Project', apiKey: 'AIzaSyC...789', created: '2024-06-10', plan: 'Free' },
];

const Dashboard = () => {
  const handleCopy = () => {
    navigator.clipboard.writeText(code);
  };

  const handleDownload = () => {
    const blob = new Blob([code], { type: 'text/plain' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'quickstart.sh';
    a.click();
    URL.revokeObjectURL(url);
  };

  return (
    <div className="w-full max-w-7xl mx-auto mt-24">
      <div className="flex justify-between items-center mb-8 mt-2">
        <div>
          <h1 className="text-3xl font-bold text-white mb-1">API Keys</h1>
          <p className="text-gray-400 text-base">Quickly test the Gemini API</p>
        </div>
        <button className="px-5 py-2 bg-[#AECBFA] text-gray-900 rounded-full font-medium text-sm transition-colors shadow-sm hover:bg-[#c3e3fd]">+ Create API key</button>
      </div>

      <div className="mb-8">
        <a href="#" className="text-blue-400 text-sm hover:underline">API quickstart guide</a>
        <div className="relative mt-3">
          <pre className="overflow-x-auto bg-[#23232a] border border-[#23232a] text-blue-200 rounded-xl px-6 py-4 font-mono text-sm shadow-inner whitespace-pre-wrap break-words scrollbar-hide">
{code}
          </pre>
          <div className="absolute left-4 bottom-2 flex items-center gap-2 bg-[#23232a] rounded-lg px-1 py-0.5">
            <button
              onClick={handleDownload}
              className="p-1 rounded hover:bg-[#35363a] text-gray-400 hover:text-white transition-colors"
              title="Download"
            >
              <ArrowDownTrayIcon className="w-5 h-5" />
            </button>
            <button
              onClick={handleCopy}
              className="p-1 rounded hover:bg-[#35363a] text-gray-400 hover:text-white transition-colors"
              title="Copy"
            >
              <ClipboardIcon className="w-5 h-5" />
            </button>
          </div>
        </div>
        <div className="text-xs text-gray-500 mt-2">Use code <span className="text-yellow-400 font-semibold">with caution</span>.</div>
      </div>

      <div className="bg-[#23232a] border border-[#23232a] rounded-2xl overflow-hidden shadow-lg">
        <div className="grid grid-cols-5 text-xs text-gray-400 bg-[#23232a] px-6 py-2 border-b border-[#23232a]">
          <div>Project number</div>
          <div>Project name</div>
          <div>API key</div>
          <div>Created</div>
          <div>Plan</div>
        </div>
        {fakeData.map((row, idx) => (
          <div key={idx} className="grid grid-cols-5 text-sm text-gray-200 px-6 py-3 border-b border-[#23232a] last:border-b-0">
            <div className="truncate" title={row.projectNumber}>{row.projectNumber}</div>
            <div className="truncate" title={row.projectName}>{row.projectName}</div>
            <div className="truncate" title={row.apiKey}>{row.apiKey}</div>
            <div className="truncate" title={row.created}>{row.created}</div>
            <div className="truncate" title={row.plan}>{row.plan}</div>
          </div>
        ))}
      </div>

      <div className="text-xs text-gray-500 mt-6">
        Remember to use API keys securely. Don&apos;t share or embed them in public code. Use of Gemini API from a billing-enabled project is subject to <a href="#" className="text-blue-400 hover:underline">pay-as-you-go pricing</a>.
      </div>
    </div>
  );
};

export default Dashboard; 