import React from 'react';
import { Question } from '../types';

interface QuizQuestionProps {
  question: Question;
  selectedAnswers: number[];
  onAnswerSelect: (index: number) => void;
}

export const QuizQuestion: React.FC<QuizQuestionProps> = ({
  question,
  selectedAnswers,
  onAnswerSelect,
}) => {
  return (
    <div className="space-y-4">
      <h2 className="text-xl font-semibold mb-4">{question.text}</h2>
      <div className="space-y-2">
        {question.options.map((option, index) => (
          <label
            key={index}
            className="flex items-center space-x-3 p-3 rounded-lg border cursor-pointer hover:bg-gray-50 transition-colors"
          >
            <input
              type={question.type === 'multiple' ? 'checkbox' : 'radio'}
              name={`question-${question.id}`}
              checked={selectedAnswers.includes(index)}
              onChange={() => onAnswerSelect(index)}
              className="h-4 w-4 text-blue-600"
            />
            <span className="text-gray-700">{option}</span>
          </label>
        ))}
      </div>
    </div>
  );
};