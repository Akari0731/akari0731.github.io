import React from 'react';
import './index.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { brands } from '@fortawesome/fontawesome-svg-core/import.macro';

export const AboutPage: React.FC = () => {
  return (
    <>
      <h1 className="mb-05 mt-0">
        Akari <span className="text-primary">Nishii</span>
      </h1>
      <div className="subheading mb-3">
        Skäpplandsgatan 23 · Göteborg, Sweden · +46 79-332 90 92 ·{' '}
        <a href="mailto:nishiiakari0731@gmail.com" className="text-primary">
          nishiiakari0731@gmail.com
        </a>
      </div>
      <p className="mb-3">
        Full stack developer with 3+ years of experience who loves building web applications.
        <br />
        <br />
        Specialized in frontend development to get best user experience into shape with React and
        Typescript.
        <br />
        Also experienced and enjoyed in backend development so that everything is working in a good
        coordination.
        <br />
        Enthusiastic about code quality in a collaboration with other developers and appreciate
        working closely with a product owner and designer together to create the best product.
        <br />
        <br />
        - Quick to adapt to all changes and learn new programming languages.
        <br />
        - Easily get drawn into the problem from the curiosity and gain energy by solving it.
        <br />
        - Loving crunching stories. Helping product development by analyzing data.
        <br />
        - Enjoying life in Gothenburg.
        <br />- Holding a work permit in Sweden.
      </p>
      <div className="social-icons">
        <a href="https://www.linkedin.com/in/akarinishii/" target="_blank" rel="noreferrer">
          <FontAwesomeIcon icon={brands('linkedin-in')} />
        </a>
        <a href="https://github.com/Akari0731" target="_blank" rel="noreferrer">
          <FontAwesomeIcon icon={brands('github')} />
        </a>
        <a href="https://www.facebook.com/akari.nishii/" target="_blank" rel="noreferrer">
          <FontAwesomeIcon icon={brands('facebook-f')} />
        </a>
      </div>
    </>
  );
};
