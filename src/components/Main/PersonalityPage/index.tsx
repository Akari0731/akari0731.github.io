import React from 'react';
import './index.css';

export const PersonalityPage: React.FC = () => {
  return (
    <>
      <h2 className="mt-0">Personality</h2>
      <p>
        I am 29 years old and came from Japan. I speak English fluently and I am currently learning
        Swedish in SFI and planning to stay Gothenburg long.
        <br />
        <br />
        I am very social person who likes talking, playing sports and having AWs.
        <br />I play football, volleyball and softball. Currently joining one korpen team,{' '}
        <a href="https://www.rampen.co/" target="_blank" rel="noreferrer" className="text-primary">
          Rampen
        </a>{' '}
        and playing football. Going Fishing in summar and going snowboarding in winter too:)
        <br />
        <br />I really enjoy coding, and building product together with the team. It&apos;s fun to
        learn new framework/language and tools for me, and looking forward to take new challenges!
      </p>
    </>
  );
};
