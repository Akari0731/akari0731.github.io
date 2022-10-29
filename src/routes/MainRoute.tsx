import { IntroPage } from 'components/Main/IntroPage';
import { WorkPage } from 'components/Main/WorkPage';
import React from 'react';
import { Route, Routes } from 'react-router-dom';

export const MainRoute: React.FC = () => {
  return (
    <Routes>
      <Route path="/" element={<IntroPage />} />
      <Route path="/intro" element={<IntroPage />} />
      <Route path="/work" element={<WorkPage />} />
    </Routes>
  );
};
