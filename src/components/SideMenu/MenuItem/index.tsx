import React from 'react';
import { NavLink } from 'react-router-dom';
import { Page } from 'routes/MainRoute';
import './index.css';

interface MenuItemProps {
  page: Page;
  text: string;
}

export const MenuItem: React.FC<MenuItemProps> = ({ page, text }) => {
  return (
    <NavLink
      style={({ isActive }) => {
        return {
          color: isActive ? 'white' : 'rgba(255,255,255,.5)'
        };
      }}
      className="menuItem"
      to={page}>
      {text}
    </NavLink>
  );
};
