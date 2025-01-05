import React from 'react';
import { Users, Youtube, Github } from 'lucide-react';

interface Contributor {
  name: string;
  role: string;
  githubUrl: string;
  youtubeUrl?: string;
}

const contributors: Contributor[] = [
  {
    name: "Tofus",
    role: "專案發起人（坑主）",
    githubUrl: "https://github.com/Tofuswang"
  },
  {
    name: "K66",
    role: "Youtube 內容貢獻者",
    githubUrl: "https://github.com/k66inthesky",
    youtubeUrl: "https://www.youtube.com/playlist?list=PL-05BIe2QCYTusHWhyia-7p2PWizet_IM"
  },
  {
    name: "Asuka",
    role: "資安背景、測驗題貢獻者",
    githubUrl: "https://github.com/y2mk1ng"
  }
];

export const ContributorsList: React.FC = () => {
  return (
    <div className="mt-12">
      <div className="flex items-center gap-2 mb-6">
        <Users className="w-6 h-6 text-blue-600" />
        <h2 className="text-xl font-semibold">貢獻者列表</h2>
      </div>
      
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {contributors.map((contributor, index) => (
          <div 
            key={index}
            className="p-4 bg-gray-50 rounded-lg"
          >
            <div className="flex items-center gap-2 mb-1">
              <h3 className="font-medium text-gray-900">{contributor.name}</h3>
              <a 
                href={contributor.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-600 hover:text-gray-900"
              >
                <Github className="w-4 h-4" />
              </a>
            </div>
            <div className="text-sm text-gray-600">
              {contributor.youtubeUrl ? (
                <a 
                  href={contributor.youtubeUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1 text-blue-600 hover:text-blue-800"
                >
                  {contributor.role}
                  <Youtube className="w-4 h-4" />
                </a>
              ) : (
                contributor.role
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};