import { IntroPage } from 'components/Main/IntroPage';
import { WorkPage } from 'components/Main/WorkPage';
import React from 'react';
import { Route, Routes } from 'react-router-dom';

export enum Page {
  INTRO = 'intro',
  WORK = 'work'
}

export const MainRoute: React.FC = () => {
  return (
    <Routes>
      <Route path="/" element={<IntroPage />} />
      <Route path={`/${Page.INTRO}`} element={<IntroPage />} />
      <Route path={`/${Page.WORK}`} element={<WorkPage />} />
    </Routes>
  );
};
