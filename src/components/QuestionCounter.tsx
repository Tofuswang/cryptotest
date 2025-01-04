import React from 'react';

interface QuestionCounterProps {
  current: number;
  total: number;
}

export const QuestionCounter: React.FC<QuestionCounterProps> = ({ current, total }) => {
  return (
    <div className="text-center mb-4 text-gray-600">
      （{current}/{total}）
    </div>
  );
};