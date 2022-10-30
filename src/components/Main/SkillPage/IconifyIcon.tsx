import React from 'react';

interface IconifyIconProps {
  iconName: string;
}
export const IconifyIcon: React.FC<IconifyIconProps> = ({ iconName }) => {
  return <span className="iconify" data-icon={iconName}></span>;
};
