import React from 'react';
import { ArrowLeft } from 'lucide-react';
import { Link } from 'react-router-dom';

export const PrivacyPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-3xl mx-auto px-4 py-12 sm:px-6 lg:px-8">
        <div className="mb-8">
          <Link to="/" className="inline-flex items-center text-gray-500 hover:text-gray-900">
            <ArrowLeft className="w-5 h-5 mr-2" />
            返回首頁
          </Link>
        </div>
        
        <div className="bg-white rounded-xl shadow-lg p-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-6">隱私權政策</h1>
          
          <div className="prose max-w-none">
            <h2 className="text-xl font-semibold mt-6 mb-4">1. 資料收集</h2>
            <p className="text-gray-600 mb-4">
              我們只收集測驗答案和完成時間等匿名數據，不收集任何可識別個人身份的信息。
            </p>

            <h2 className="text-xl font-semibold mt-6 mb-4">2. 資料使用</h2>
            <p className="text-gray-600 mb-4">
              收集的數據將用於：
            </p>
            <ul className="list-disc pl-6 mb-4 text-gray-600">
              <li>改進測驗內容和用戶體驗</li>
              <li>進行匿名統計分析</li>
              <li>生成綜合報告和研究成果</li>
            </ul>

            <h2 className="text-xl font-semibold mt-6 mb-4">3. 資料保護</h2>
            <p className="text-gray-600 mb-4">
              我們採取適當的技術措施保護所收集的數據，防止未經授權的訪問、使用或洩露。
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};