import React from 'react';
import { Brain } from 'lucide-react';

export const Welcome: React.FC = () => {
  return (
    <div className="text-center mb-12">
      <Brain className="w-16 h-16 text-blue-600 mx-auto mb-4" />
      <h1 className="text-3xl font-bold text-gray-900 mb-4">
        加密貨幣投資基本常識認知測驗
      </h1>
      <p className="text-gray-600 mb-8">
        測試您對區塊鏈投資的理解和風險意識
      </p>
    </div>
  );
};