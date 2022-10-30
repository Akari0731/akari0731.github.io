import React from 'react';
import { PageProps } from '../types';
import './index.css';

export const PageWrapper: React.FC<PageProps> = ({ id, children }) => {
  return (
    <div className="page" id={id}>
      {children}
    </div>
  );
};
