import React from 'react';
import { Link } from 'react-router-dom';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-50 border-t">
      <div className="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center justify-between space-y-4 sm:flex-row sm:space-y-0">
          <div className="text-sm text-gray-500 flex flex-wrap items-center gap-2">
            <span>© 2025 加密貨幣投資親友懶人包.</span>
            <span>以 <a 
              href="https://creativecommons.org/licenses/by/4.0/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-blue-600 hover:text-blue-800"
            >
              CC-BY 4.0
            </a> 形式分享.</span>
            <span>Powered by <a 
              href="https://g0v.tw" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-blue-600 hover:text-blue-800"
            >
              g0v
            </a></span>
          </div>
          <div className="flex space-x-6">
            <Link to="/terms" className="text-sm text-gray-500 hover:text-gray-900">
              使用協議
            </Link>
            <Link to="/privacy" className="text-sm text-gray-500 hover:text-gray-900">
              隱私權政策
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}