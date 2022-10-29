import React from 'react';
import { Page } from 'routes/MainRoute';
import './index.css';

export interface PageProps {
  id: Page;
}

export const IntroPage: React.FC<PageProps> = ({ id }) => {
  return (
    <div className="page" id={id}>
      <div className="header">Akari Nishii</div>
      <div className="detail">
        Full stack developer with 3+ years of experience who loves building web applications.
      </div>
    </div>
  );
};
