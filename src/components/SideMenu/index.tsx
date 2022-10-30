import { Page } from 'components/Main/types';
import React from 'react';
import './index.css';
import { MenuItem } from './MenuItem';
import profile from 'assets/profile.jpg';

export const SideMenu: React.FC = () => {
  return (
    <div className="sideMenu">
      <img className="icon" src={profile} />
      <MenuItem page={Page.ABOUT} text="ABOUT" />
      <MenuItem page={Page.EXPERIENCE} text="EXPERIENCE" />
      <MenuItem page={Page.EDUCATION} text="EDUCATION" />
      <MenuItem page={Page.SKILL} text="SKILL" />
      <MenuItem page={Page.PERSONALITY} text="PERSONALITY" />
    </div>
  );
};
