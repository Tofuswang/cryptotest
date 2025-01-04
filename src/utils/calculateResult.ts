import { questions } from '../data/questions';
import { Result } from '../types';

export function calculateResult(answers: number[][]): Result {
  let correctCount = 0;

  questions.forEach((question, index) => {
    const userAnswers = answers[index];
    const correctAnswers = question.correctAnswers;

    if (question.type === 'single') {
      if (userAnswers[0] === correctAnswers[0]) correctCount++;
    } else {
      const isCorrect = 
        userAnswers.length === correctAnswers.length &&
        userAnswers.every(answer => correctAnswers.includes(answer));
      if (isCorrect) correctCount++;
    }
  });

  const score = correctCount / questions.length;
  let recommendation = '';

  if (score >= 0.8) {
    recommendation = "太棒了！您展現出對區塊鏈投資及其風險的深入理解。";
  } else if (score >= 0.6) {
    recommendation = "不錯的開始！建議您進一步了解區塊鏈安全性和投資策略。";
  } else {
    recommendation = "我們建議在進行投資之前,先加強區塊鏈基礎知識。";
  }

  return { score, recommendation };
}