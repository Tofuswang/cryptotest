import React from 'react';
import { Bitcoin, ArrowRight, Youtube, Search } from 'lucide-react';
import { Link } from 'react-router-dom';

export const LandingPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white">
      <div className="max-w-4xl mx-auto px-4 py-16 sm:px-6 lg:px-8">
        <div className="text-center">
          <Bitcoin className="w-20 h-20 text-orange-500 mx-auto mb-6" />
          <h1 className="text-4xl font-bold text-gray-900 mb-4 sm:text-5xl">
            蛤？你說你要投資加密貨幣？
          </h1>
          <p className="text-xl text-gray-600 mb-8">
            在投資加密貨幣之前，作為你的好朋朋，先幫我填一下這份測驗
          </p>
          <Link
            to="/quiz"
            className="inline-flex items-center px-6 py-3 text-lg font-medium text-white bg-blue-600 rounded-lg hover:bg-blue-700 transition-colors"
          >
            開始測驗
            <ArrowRight className="ml-2 w-5 h-5" />
          </Link>
        </div>

        <div className="space-y-8 mt-16">
          <div className="bg-white rounded-2xl shadow-xl p-8">
            <div className="group">
              <a 
                href="https://www.youtube.com/playlist?list=PL-05BIe2QCYTusHWhyia-7p2PWizet_IM"
                target="_blank"
                rel="noopener noreferrer"
                className="block"
              >
                <div className="relative aspect-video rounded-lg overflow-hidden mb-4">
                  <img 
                    src="https://img.youtube.com/vi/PPzu35fNiiI/maxresdefault.jpg"
                    alt="投資新挑戰：從股票到加密幣"
                    className="w-full h-full object-cover transition-transform group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-black bg-opacity-10 flex items-center justify-center group-hover:bg-opacity-20 transition-opacity">
                    <Youtube className="w-16 h-16 text-white opacity-80" />
                  </div>
                </div>
                <h3 className="font-medium text-lg text-gray-900 mb-2">投資新挑戰：從股票到加密幣</h3>
                <p className="text-gray-600">為了讓自己比較不容易上當受騙，來看看網友 KK6 作為一名和你我一樣的韭菜，是如何看待加密貨幣投資的</p>
              </a>
            </div>
          </div>

          <div className="bg-white rounded-2xl shadow-xl p-8">
            <a 
              href="https://cofacts.tw/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-start space-x-4 p-4 rounded-lg border border-gray-200 hover:border-blue-300 transition-colors"
            >
              <Search className="w-8 h-8 text-yellow-500 flex-shrink-0 mt-1" />
              <div>
                <h3 className="font-medium text-lg text-gray-900 mb-2">不確定網上的消息是真的或假的？歡迎到 Cofact 真的假的逛逛！</h3>
                <p className="text-gray-600">透過群眾協作以及聊天機器人來做事實查核的可疑訊息查證平台，讓每一個不確定真假的訊息，都能透過群眾的共同努力，被好好檢視跟查核討論。</p>
              </div>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}