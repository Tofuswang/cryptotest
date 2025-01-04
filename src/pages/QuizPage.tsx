import React from 'react';
import { questions } from '../data/questions';
import { ProgressBar } from '../components/ProgressBar';
import { QuestionCounter } from '../components/QuestionCounter';
import { QuizQuestion } from '../components/QuizQuestion';
import { Welcome } from '../components/Welcome';
import { useQuiz } from '../hooks/useQuiz';

export const QuizPage: React.FC = () => {
  const { quizState, handleAnswerSelect, handleNext, isCurrentAnswerCorrect } = useQuiz();

  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-2xl mx-auto">
        {quizState.currentQuestion === 0 && <Welcome />}

        <div className="bg-white rounded-xl shadow-lg p-8">
          <QuestionCounter 
            current={quizState.currentQuestion + 1} 
            total={questions.length} 
          />
          
          <ProgressBar
            current={quizState.currentQuestion + 1}
            total={questions.length}
            showFeedback={quizState.showFeedback}
            isCorrect={isCurrentAnswerCorrect()}
          />

          <QuizQuestion
            question={questions[quizState.currentQuestion]}
            selectedAnswers={quizState.answers[quizState.currentQuestion]}
            onAnswerSelect={handleAnswerSelect}
          />

          <div className="mt-8 flex justify-end">
            <button
              onClick={handleNext}
              disabled={quizState.answers[quizState.currentQuestion].length === 0}
              className="px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
            >
              {quizState.currentQuestion === questions.length - 1 ? '完成' : '下一題'}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};