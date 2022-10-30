import { MenuItemProps } from 'components/SideMenu/MenuItem';
import React from 'react';
import { useLocation } from 'react-router-dom';
import './index.css';
// @ts-expect-error
import { HashLink } from 'react-router-hash-link';
import { Page } from 'components/Main/types';

const DropdownItem: React.FC<MenuItemProps & { onClick: () => void }> = ({
  page,
  text,
  onClick
}) => {
  const location = useLocation();
  const isActivePage = location.hash.replace('#', '') === page;

  return (
    <HashLink
      smooth
      className={`item ${isActivePage ? 'activeItem' : ''}`}
      to={`#${page}`}
      onClick={onClick}
    >
      {text}
    </HashLink>
  );
};

interface DropdownMenuProps {
  open: boolean;
  onClick: () => void;
}

export const DropdownMenu: React.FC<DropdownMenuProps> = ({ open, onClick }) => {
  return (
    <div className={`dropdownMenu ${open ? 'open' : ''}`}>
      <DropdownItem page={Page.ABOUT} text="ABOUT" onClick={onClick} />
      <DropdownItem page={Page.EXPERIENCE} text="EXPERIENCE" onClick={onClick} />
      <DropdownItem page={Page.EDUCATION} text="EDUCATION" onClick={onClick} />
      <DropdownItem page={Page.SKILL} text="SKILL" onClick={onClick} />
      <DropdownItem page={Page.PERSONALITY} text="PERSONALITY" onClick={onClick} />
    </div>
  );
};
