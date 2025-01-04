import React from 'react';
import { ArrowLeft } from 'lucide-react';
import { Link } from 'react-router-dom';

export const TermsPage: React.FC = () => {
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
          <h1 className="text-3xl font-bold text-gray-900 mb-6">使用協議</h1>
          
          <div className="prose max-w-none">
            <h2 className="text-xl font-semibold mt-6 mb-4">1. 服務說明</h2>
            <p className="text-gray-600 mb-4">
              本網站提供區塊鏈投資知識測驗服務，旨在幫助用戶評估其對區塊鏈投資的理解程度。
            </p>

            <h2 className="text-xl font-semibold mt-6 mb-4">2. 使用規範</h2>
            <p className="text-gray-600 mb-4">
              用戶在使用本服務時，需遵守以下規範：
            </p>
            <ul className="list-disc pl-6 mb-4 text-gray-600">
              <li>不得將測驗內容用於商業用途</li>
              <li>不得散布或分享測驗答案</li>
              <li>不得進行任何可能影響測驗公平性的行為</li>
            </ul>

            <h2 className="text-xl font-semibold mt-6 mb-4">3. 免責聲明</h2>
            <p className="text-gray-600 mb-4">
              本測驗結果僅供參考，不構成任何投資建議。用戶應自行承擔投資決策的風險。
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};