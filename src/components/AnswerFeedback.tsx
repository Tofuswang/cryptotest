import React from 'react';
import { Check, X } from 'lucide-react';

interface AnswerFeedbackProps {
  isCorrect: boolean;
  show: boolean;
}

export const AnswerFeedback: React.FC<AnswerFeedbackProps> = ({ isCorrect, show }) => {
  if (!show) return null;

  return (
    <div className={`flex items-center justify-center mt-4 ${isCorrect ? 'text-green-500' : 'text-red-500'}`}>
      {isCorrect ? (
        <Check className="w-6 h-6" />
      ) : (
        <X className="w-6 h-6" />
      )}
    </div>
  );
};