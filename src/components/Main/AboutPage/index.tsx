import React from 'react';
import { PageProps } from '../types';
import './index.css';

export const AboutPage: React.FC<PageProps> = ({ id }) => {
  return (
    <div className="page" id={id}>
      <div className="header">Akari Nishii</div>
      <div className="detail">
        Full stack developer with 3+ years of experience who loves building web applications.
      </div>
    </div>
  );
};
