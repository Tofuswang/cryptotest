import React from 'react';
import { Youtube } from 'lucide-react';

export const VideoSection: React.FC = () => {
  return (
    <div className="mt-12">
      <div className="bg-white rounded-lg shadow-md overflow-hidden">
        <div className="relative aspect-video">
          <img 
            src="https://i.ytimg.com/vi/RWOQfJI7Nls/maxresdefault.jpg"
            alt="g0v 零時政府簡介"
            className="w-full h-full object-cover"
          />
          <a 
            href="https://www.youtube.com/watch?v=RWOQfJI7Nls&list=PLdwQWxpS513DmTnHDIt3SAv2CFEiHz8j8"
            target="_blank"
            rel="noopener noreferrer"
            className="absolute inset-0 bg-black bg-opacity-10 flex items-center justify-center hover:bg-opacity-20 transition-opacity"
          >
            <Youtube className="w-16 h-16 text-white opacity-80" />
          </a>
        </div>
        
        <div className="p-4">
          <h3 className="font-medium text-lg mb-2">關於 g0v 零時政府</h3>
          <div className="text-gray-600 space-y-2">
            <p>g0v 零時政府是一個推動資訊透明化的社群，致力於開發公民參與社會的資訊平台與工具。</p>
            <p>這個影片是坑主 Tofus 在第零次黑魔法防禦松（簡稱 #dada 松）中的階段成果報告分享。</p>
          </div>
        </div>
      </div>
    </div>
  );
};