import React from 'react';
import './index.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { brands } from '@fortawesome/fontawesome-svg-core/import.macro';
import google_optimise from '../../../assets/google_optimise.png';
import google_analytics from '../../../assets/google_analytics.png';
import { IconifyIcon } from './IconifyIcon';

export const SkillPage: React.FC = () => {
  return (
    <>
      <h2 className="mt-0">Skills</h2>
      <div className="subheading mb-3">Programming Languages &amp; Tools</div>
      <div className="dev-icons">
        <IconifyIcon iconName="logos:javascript" />
        <IconifyIcon iconName="logos:typescript-icon" />
        <IconifyIcon iconName="logos:react" />
        <IconifyIcon iconName="logos:angular-icon" />
        <FontAwesomeIcon icon={brands('html5')} color="#e34f26" />
        <FontAwesomeIcon icon={brands('css3-alt')} color="#2965f1" />
        <IconifyIcon iconName="logos:java" />
        <IconifyIcon iconName="logos:scala" />
        <IconifyIcon iconName="vscode-icons:file-type-mongo" />
        <IconifyIcon iconName="logos-postgresql" />
        <IconifyIcon iconName="logos:python" />
        <IconifyIcon iconName="logos:r-lang" />
        <IconifyIcon iconName="logos:git" />
        <IconifyIcon iconName="logos:cypress" />
        <IconifyIcon iconName="logos:storybook-icon" />
        <IconifyIcon iconName="logos-metabase" />
        <IconifyIcon iconName="logos:mixpanel" />
        <img src={google_optimise} height="48px" />
        <img src={google_analytics} height="48px" />
      </div>
      <p>Currently leaning about Svelte, Snowpack and Turborepo:)</p>
      <p>... and happy to learn more!!</p>
    </>
  );
};
