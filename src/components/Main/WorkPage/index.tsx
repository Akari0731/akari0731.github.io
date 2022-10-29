import React from 'react';
import { PageProps } from '../types';
import './index.css';

export const WorkPage: React.FC<PageProps> = ({ id }) => {
  return (
    <div className="page" id={id}>
      <div className="header">Metry</div>
      <div className="detail">
        Full stack developer with 3+ years of experience who loves building web applications.
      </div>
    </div>
  );
};
