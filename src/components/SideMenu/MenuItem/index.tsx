import { Page } from 'components/Main/types';
import React from 'react';
import { useLocation } from 'react-router-dom';
// @ts-expect-error
import { HashLink } from 'react-router-hash-link';
import './index.css';

export interface MenuItemProps {
  page: Page;
  text: string;
}

export const MenuItem: React.FC<MenuItemProps> = ({ page, text }) => {
  const location = useLocation();
  const isActivePage = location.hash.replace('#', '') === page;

  return (
    <HashLink smooth className={`menuItem ${isActivePage ? 'active' : ''}`} to={`#${page}`}>
      {text}
    </HashLink>
  );
};
