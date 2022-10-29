import { AboutPage } from 'components/Main/AboutPage';
import { EducationPage } from 'components/Main/EducationPage';
import { ExperiencePage } from 'components/Main/ExperiencePage';
import { PersonalityPage } from 'components/Main/PersonalityPage';
import { SkillPage } from 'components/Main/SkillPage';
import { Page } from 'components/Main/types';
import React from 'react';

export const MainRoute: React.FC = () => {
  return (
    <div>
      <AboutPage id={Page.ABOUT} />
      <ExperiencePage id={Page.EXPERIENCE} />
      <EducationPage id={Page.EDUCATION} />
      <SkillPage id={Page.SKILL} />
      <PersonalityPage id={Page.PERSONALITY} />
    </div>
  );
};
