import React from 'react';
import { Youtube } from 'lucide-react';

export const PlaylistInfo: React.FC = () => {
  return (
    <div className="mt-8 bg-gray-50 rounded-xl p-6">
      <h3 className="text-lg font-semibold mb-4">推薦學習資源</h3>
      
      <div className="bg-white rounded-lg shadow-md overflow-hidden">
        <div className="relative aspect-video">
          <img 
            src="https://img.youtube.com/vi/PPzu35fNiiI/maxresdefault.jpg"
            alt="區塊鏈投資教學"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black bg-opacity-10 flex items-center justify-center group-hover:bg-opacity-20 transition-opacity">
            <Youtube className="w-12 h-12 text-white opacity-80" />
          </div>
        </div>
        
        <div className="p-4">
          <h4 className="font-medium text-lg mb-2">區塊鏈投資教學系列</h4>
          <p className="text-gray-600 text-sm mb-4">
            這個播放清單將幫助您：
          </p>
          <ul className="text-sm text-gray-600 space-y-2">
            <li>• 了解區塊鏈基礎知識</li>
            <li>• 學習如何識別詐騙網站</li>
            <li>• 掌握安全投資原則</li>
            <li>• 認識主流交易所</li>
            <li>• 建立正確的投資心態</li>
          </ul>
          
          <a 
            href="https://www.youtube.com/watch?v=PPzu35fNiiI&list=PL-05BIe2QCYTusHWhyia-7p2PWizet_IM"
            target="_blank"
            rel="noopener noreferrer"
            className="mt-4 inline-flex items-center text-blue-600 hover:text-blue-700"
          >
            <Youtube className="w-4 h-4 mr-1" />
            觀看完整播放清單
          </a>
        </div>
      </div>
    </div>
  );
};