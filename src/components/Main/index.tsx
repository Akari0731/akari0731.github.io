import { AboutPage } from 'components/Main/AboutPage';
import { EducationPage } from 'components/Main/EducationPage';
import { ExperiencePage } from 'components/Main/ExperiencePage';
import { PageWrapper } from 'components/Main/PageWrapper';
import { PersonalityPage } from 'components/Main/PersonalityPage';
import { SkillPage } from 'components/Main/SkillPage';
import { Page } from 'components/Main/types';
import React from 'react';

export const Pages: React.FC = () => {
  return (
    <div>
      <PageWrapper id={Page.ABOUT}>
        <AboutPage />
      </PageWrapper>
      <PageWrapper id={Page.EXPERIENCE}>
        <ExperiencePage />
      </PageWrapper>
      <PageWrapper id={Page.EDUCATION}>
        <EducationPage />
      </PageWrapper>
      <PageWrapper id={Page.SKILL}>
        <SkillPage />
      </PageWrapper>
      <PageWrapper id={Page.PERSONALITY}>
        <PersonalityPage />
      </PageWrapper>
    </div>
  );
};
