export enum Page {
  ABOUT = 'about',
  EXPERIENCE = 'experience',
  EDUCATION = 'education',
  SKILL = 'skill',
  PERSONALITY = 'personality'
}

export interface PageProps {
  id: Page;
  children: JSX.Element;
}
