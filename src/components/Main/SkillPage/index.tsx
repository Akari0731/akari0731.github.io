import React from 'react';
import './index.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { brands } from '@fortawesome/fontawesome-svg-core/import.macro';
import google_optimise from '../../../assets/google_optimise.png';
import google_analytics from '../../../assets/google_analytics.png';

export const SkillPage: React.FC = () => {
  return (
    <>
      <h2 className="mt-0">Skills</h2>
      <div className="subheading mb-3">Programming Languages &amp; Tools</div>
      <ul className="list-inline dev-icons">
        <li className="list-inline-item">
          <span className="iconify" data-icon="logos:javascript"></span>
        </li>
        <li className="list-inline-item">
          <span className="iconify" data-icon="logos:typescript-icon"></span>
        </li>
        <li className="list-inline-item">
          <span className="iconify" data-icon="logos:react"></span>
        </li>
        <li className="list-inline-item">
          <span className="iconify" data-icon="logos:angular-icon"></span>
        </li>
        <li className="list-inline-item">
          <FontAwesomeIcon icon={brands('html5')} color="#e34f26" />
        </li>
        <li className="list-inline-item">
          <FontAwesomeIcon icon={brands('css3-alt')} color="#2965f1" />
        </li>
        <li className="list-inline-item">
          <span className="iconify" data-icon="logos:java"></span>
        </li>
        <li className="list-inline-item">
          <span className="iconify" data-icon="logos:scala"></span>
        </li>
        <li className="list-inline-item">
          <span className="iconify" data-icon="vscode-icons:file-type-mongo"></span>
        </li>
        <li className="list-inline-item">
          <span className="iconify" data-icon="logos-postgresql"></span>
        </li>
        <li className="list-inline-item">
          <span className="iconify" data-icon="logos:python"></span>
        </li>
        <li className="list-inline-item">
          <span className="iconify" data-icon="logos:r-lang"></span>
        </li>
        <li className="list-inline-item">
          <span className="iconify" data-icon="logos:git"></span>
        </li>
        <li className="list-inline-item">
          <span className="iconify" data-icon="logos:cypress"></span>
        </li>
        <li className="list-inline-item">
          <span className="iconify" data-icon="logos:storybook-icon"></span>
        </li>
        <li className="list-inline-item">
          <span className="iconify" data-icon="logos-metabase"></span>
        </li>
        <li className="list-inline-item">
          <span className="iconify" data-icon="logos:mixpanel"></span>
        </li>
        <li className="list-inline-item">
          <img src={google_optimise} height="48px" />
        </li>
        <li className="list-inline-item">
          <img src={google_analytics} height="48px" />
        </li>
      </ul>
      <p>Currently leaning about Svelte, Snowpack and Turborepo:)</p>
      <p>... and happy to learn more!!</p>
    </>
  );
};
