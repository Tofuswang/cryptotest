import React from 'react';
import { MessageCircle, ExternalLink } from 'lucide-react';

export const DiscussionSection: React.FC = () => {
  return (
    <div className="mt-12">
      <div className="flex items-center gap-2 mb-6">
        <MessageCircle className="w-6 h-6 text-blue-600" />
        <h2 className="text-xl font-semibold">參與討論</h2>
      </div>
      
      <div className="bg-gray-50 rounded-lg p-6">
        <p className="text-gray-600 mb-4">
          歡迎加入我們的 g0v Slack「黑魔法防禦松」頻道 #dada，一起討論加密貨幣投資教育相關議題！
        </p>
        
        <a
          href="https://join.g0v.tw/"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center px-4 py-2 bg-red-800 text-white rounded-lg hover:bg-red-900 transition-colors"
        >
          <ExternalLink className="w-4 h-4 mr-2" />
          加入 g0v Slack
        </a>
      </div>
    </div>
  );
};