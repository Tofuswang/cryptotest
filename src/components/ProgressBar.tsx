import React from 'react';

interface ProgressBarProps {
  current: number;
  total: number;
  showFeedback?: boolean;
  isCorrect?: boolean;
}

export const ProgressBar: React.FC<ProgressBarProps> = ({ 
  current, 
  total, 
  showFeedback = false,
  isCorrect = false 
}) => {
  const progress = (current / total) * 100;
  
  const getBarColor = () => {
    if (!showFeedback) return 'bg-blue-600';
    return isCorrect ? 'bg-green-500' : 'bg-red-500';
  };

  return (
    <div className="w-full bg-gray-200 rounded-full h-2.5 mb-6">
      <div
        className={`${getBarColor()} h-2.5 rounded-full transition-all duration-300`}
        style={{ width: `${progress}%` }}
      />
    </div>
  );
};