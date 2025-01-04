import React from 'react';
import { Link } from 'react-router-dom';
import { Bitcoin, Info } from 'lucide-react';

export const Navbar: React.FC = () => {
  return (
    <nav className="bg-white shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <Link to="/" className="flex items-center space-x-3">
            <Bitcoin className="h-8 w-8 text-orange-500" />
            <span className="font-semibold text-xl text-gray-900">
              加密投資親友懶人包
            </span>
          </Link>
          
          <Link
            to="/about"
            className="inline-flex items-center px-4 py-2 rounded-lg text-gray-600 hover:text-gray-900 hover:bg-gray-100 transition-colors"
          >
            <Info className="w-5 h-5 mr-2" />
            關於專案
          </Link>
        </div>
      </div>
    </nav>
  );
}