import React from 'react';
import { Page } from 'routes/MainRoute';
import './index.css';
import { MenuItem } from './MenuItem';

export const SideMenu: React.FC = () => {
  return (
    <div className="sideMenu">
      <div className="icon"></div>
      <MenuItem page={Page.INTRO} text="Intro" />
      <MenuItem page={Page.WORK} text="Work" />
    </div>
  );
};
