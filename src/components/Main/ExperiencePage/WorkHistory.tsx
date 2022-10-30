import React from 'react';

interface WorkHistoryProps {
  role: string;
  companyName?: string;
  companyUrl?: string;
  period: string;
  children: JSX.Element;
}

export const WorkHistory: React.FC<WorkHistoryProps> = ({
  role,
  companyName,
  companyUrl,
  period,
  children
}) => {
  return (
    <div className="mb-3">
      <div className="resume-header">
        <h3 className="mb-0 mt-0">{role}</h3>
        <div className="resume-date">
          <span className="text-primary">{period}</span>
        </div>
      </div>
      {Boolean(companyUrl) && Boolean(companyName) ? (
        <div>
          <a href={companyUrl} target="_blank" rel="noreferrer">
            <div className="subheading mb-1 text-primary">{companyName}</div>
          </a>
        </div>
      ) : null}
      {children}
    </div>
  );
};
