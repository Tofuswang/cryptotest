import React from 'react';
import { ArrowLeft, Github, FileText } from 'lucide-react';
import { Link } from 'react-router-dom';
import { ContributorsList } from '../components/ContributorsList';
import { DiscussionSection } from '../components/DiscussionSection';
import { VideoSection } from '../components/VideoSection';

export const AboutPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-4xl mx-auto px-4 py-12 sm:px-6 lg:px-8">
        <div className="mb-8">
          <Link to="/" className="inline-flex items-center text-gray-500 hover:text-gray-900">
            <ArrowLeft className="w-5 h-5 mr-2" />
            返回首頁
          </Link>
        </div>
        
        <div className="bg-white rounded-xl shadow-lg p-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-6">關於本專案</h1>
          
          <div className="prose max-w-none">
            <p className="text-gray-600 mb-6">
              這是一個開源的加密貨幣投資教育專案，目的是幫助大家了解加密貨幣投資的基本知識和風險。
              我們希望透過簡單的測驗和實用的資源，讓更多人能夠安全、理性地參與加密貨幣投資。
            </p>

            <div className="flex flex-wrap gap-4 mb-8">
              <a
                href="https://github.com/Tofuswang/cryptotest"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center px-4 py-2 bg-gray-800 text-white rounded-lg hover:bg-gray-700 transition-colors"
              >
                <Github className="w-5 h-5 mr-2" />
                查看 GitHub 專案
              </a>

              <a
                href="https://g0v.hackmd.io/q4KPlzxGS1elgiie973V7g?both"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors"
              >
                <FileText className="w-5 h-5 mr-2" />
                查看共筆文件
              </a>
            </div>

            <VideoSection />

            <h2 className="text-xl font-semibold mt-8 mb-4">專案特色</h2>
            <ul className="list-disc pl-6 mb-6 text-gray-600">
              <li>完全開源，歡迎社群貢獻</li>
              <li>以 CC-BY 4.0 授權分享</li>
              <li>持續更新的學習資源</li>
              <li>由社群共同維護的知識庫</li>
            </ul>

            <h2 className="text-xl font-semibold mt-8 mb-4">參與貢獻</h2>
            <p className="text-gray-600 mb-4">
              我們歡迎各種形式的貢獻，包括但不限於：
            </p>
            <ul className="list-disc pl-6 mb-6 text-gray-600">
              <li>提供新的測驗題目</li>
              <li>改善現有內容</li>
              <li>分享學習資源</li>
              <li>回報問題或建議</li>
            </ul>

            <ContributorsList />
            <DiscussionSection />
          </div>
        </div>
      </div>
    </div>
  );
};