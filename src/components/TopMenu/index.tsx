import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useState } from 'react';
import './index.css';
import { solid } from '@fortawesome/fontawesome-svg-core/import.macro';
import { DropdownMenu } from './DropdownMenu';

export const TopMenu: React.FC = () => {
  const [openDropdown, setOpenDropdown] = useState<boolean>(false);
  const toggleMenu = (): void => setOpenDropdown(!openDropdown);

  return (
    <>
      <div className="topMenu">
        <div className="name">Akari Nishii</div>
        <button className="menu" onClick={toggleMenu}>
          <FontAwesomeIcon icon={solid('bars')} className="menuIcon" />
        </button>
      </div>
      <DropdownMenu open={openDropdown} onClick={toggleMenu} />
    </>
  );
};
