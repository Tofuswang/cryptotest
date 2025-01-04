import React from 'react';
import { Results } from '../components/Results';
import { useLocation, useNavigate } from 'react-router-dom';
import { calculateResult } from '../utils/calculateResult';

export const ResultsPage: React.FC = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const answers = location.state?.answers || [];

  const handleRetry = () => {
    navigate('/quiz');
  };

  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <Results result={calculateResult(answers)} onRetry={handleRetry} />
    </div>
  );
};