import React from 'react';
import { Result } from '../types';
import { BadgeCheck, AlertTriangle, RefreshCw, Home } from 'lucide-react';
import { Link } from 'react-router-dom';
import { PlaylistInfo } from './PlaylistInfo';

interface ResultsProps {
  result: Result;
  onRetry: () => void;
}

export const Results: React.FC<ResultsProps> = ({ result, onRetry }) => {
  const getIcon = () => {
    if (result.score >= 0.8) return <BadgeCheck className="w-16 h-16 text-green-500" />;
    return <AlertTriangle className="w-16 h-16 text-yellow-500" />;
  };

  return (
    <div className="text-center space-y-6 p-8 bg-white rounded-xl shadow-lg max-w-2xl mx-auto">
      <div className="flex justify-center">{getIcon()}</div>
      
      <h2 className="text-2xl font-bold">您的得分: {Math.round(result.score * 100)}%</h2>
      
      <p className="text-gray-600">{result.recommendation}</p>

      <PlaylistInfo />
      
      <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mt-8">
        <button
          onClick={onRetry}
          className="inline-flex items-center px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
        >
          <RefreshCw className="w-4 h-4 mr-2" />
          重新測驗
        </button>
        
        <Link
          to="/"
          className="inline-flex items-center px-4 py-2 bg-gray-100 text-gray-700 rounded-lg hover:bg-gray-200 transition-colors"
        >
          <Home className="w-4 h-4 mr-2" />
          回到首頁看更多資訊
        </Link>
      </div>
    </div>
  );
};