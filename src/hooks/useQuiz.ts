import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { questions } from '../data/questions';
import { QuizState } from '../types';

const initialQuizState: QuizState = {
  currentQuestion: 0,
  answers: Array(questions.length).fill([]),
  isComplete: false,
  showFeedback: false,
};

export function useQuiz() {
  const [quizState, setQuizState] = useState<QuizState>(initialQuizState);
  const navigate = useNavigate();

  const handleStart = () => {
    setQuizState(initialQuizState);
  };

  const isCurrentAnswerCorrect = () => {
    const question = questions[quizState.currentQuestion];
    const userAnswers = quizState.answers[quizState.currentQuestion];
    
    if (question.type === 'single') {
      return userAnswers[0] === question.correctAnswers[0];
    } else {
      return userAnswers.length === question.correctAnswers.length &&
        userAnswers.every(answer => question.correctAnswers.includes(answer));
    }
  };

  const handleAnswerSelect = (answerIndex: number) => {
    const currentAnswers = [...quizState.answers];
    const question = questions[quizState.currentQuestion];

    if (question.type === 'single') {
      currentAnswers[quizState.currentQuestion] = [answerIndex];
    } else {
      const currentQuestionAnswers = currentAnswers[quizState.currentQuestion];
      const answerExists = currentQuestionAnswers.includes(answerIndex);
      
      currentAnswers[quizState.currentQuestion] = answerExists
        ? currentQuestionAnswers.filter(a => a !== answerIndex)
        : [...currentQuestionAnswers, answerIndex];
    }

    setQuizState({ 
      ...quizState, 
      answers: currentAnswers,
      showFeedback: false 
    });
  };

  const handleNext = () => {
    setQuizState({ ...quizState, showFeedback: true });
    
    setTimeout(() => {
      if (quizState.currentQuestion < questions.length - 1) {
        setQuizState({
          ...quizState,
          currentQuestion: quizState.currentQuestion + 1,
          showFeedback: false,
        });
      } else {
        navigate('/results', { state: { answers: quizState.answers } });
      }
    }, 1000);
  };

  return {
    quizState,
    handleStart,
    handleAnswerSelect,
    handleNext,
    isCurrentAnswerCorrect,
  };
}