import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { solid } from '@fortawesome/fontawesome-svg-core/import.macro';
import { WorkHistory } from './WorkHistory';

export const ExperiencePage: React.FC = () => {
  return (
    <>
      <h2 className="mt-0">Experience</h2>
      <WorkHistory
        role="Frontend developer"
        companyName="Metry"
        companyUrl="https://metry.io/en/"
        period="June 2022 - Present"
      >
        <p>
          - Add features and maintain an administration interface for property owners to manage
          their building&apos;s energy consumption in Angular 13 and Typescript.
          <br />
          - Improved code quality and maintainability by refactoring code including globally scoped
          css files.
          <br />
        </p>
      </WorkHistory>
      <WorkHistory
        role="Hobby project"
        companyName="Oskari's Portfolio"
        companyUrl="https://oskarifriman.com/"
        period="July 2022 - September 2022"
      >
        <p>
          - Built my friend&apos;s Portfolio site in Angular 13 and Typescript.
          <br />
          - Build it from scratch to learn Angular and Rxjs.
          <br />
          - Support designing and features together with the friend using Figma.
          <br />
        </p>
      </WorkHistory>
      <WorkHistory
        role="Frontend developer"
        companyName="Jetshop"
        companyUrl="https://www.jetshop.se/"
        period="August 2021 - May 2022"
      >
        <p>
          - Built new administration interface for e-commerce owners by implementing features using
          React with Typescript.
          <br />
          - Focused on frontend development together with product owner and UX designer.
          <br />- Led building new design system with UX designer by using Storybook.
        </p>
      </WorkHistory>
      <WorkHistory
        role="Frontend/Full stack developer"
        companyName="Minna technologies"
        companyUrl="https://minnatechnologies.com/"
        period="April 2019 - August 2021"
      >
        <>
          <p>
            - Built web application towards end users using React, Typescript and testing with
            Cypress and Storybook.
            <br />
            - Built backend functionalities including REST APIs towards banks using Scala.
            <br />
            - Helped product owners by writing SQLs towards MongoDB and make use of data analytics
            tools, Mixpanel, Google Optimize/Analytics and Metabase.
            <br />- Contributed in product discovery phase and development with discussing features
            and analyzing result.
          </p>

          <p>
            About Minna technologies:
            <br />
            Bring power to the modern consumer by giving them controls on their subscription.
            Building mobile/desktop application and API products for retail banks to browse all
            subscriptions they are subscribing to, and allow them to cancel, switch and order new
            one easily.
          </p>
        </>
      </WorkHistory>
      <WorkHistory role="Self learning" period="December 2018 - April 2019">
        <>
          <p>
            - Learned web development by myself and created web page focused on frontend skills
            including HTML, CSS, Javascript, Bootstrap4 and React.
            <br />- Used Github Pages for deployment.
          </p>
          <ul>
            <li>
              <a
                href="./background/index.html"
                target="_blank"
                rel="noreferrer"
                className="text-primary"
              >
                <FontAwesomeIcon icon={solid('palette')} /> Gradient Background Generater(DOM
                practice)
              </a>
            </li>
            <li>
              <a
                href="https://react-pages.github.io/robofriends/"
                target="_blank"
                rel="noreferrer"
                className="text-primary"
              >
                <FontAwesomeIcon icon={solid('robot')} /> Robofriends(React App)
              </a>
            </li>
          </ul>
        </>
      </WorkHistory>
      <WorkHistory
        role="Associate IT consultant"
        companyName="Future Architect.Inc"
        companyUrl="https://www.future.co.jp/en/architect/"
        period="April 2018 - September 2018"
      >
        <p>
          - Worked for a supermarket in Japan, developing functional retail systems with Java, SQL
          and HTML.
          <br />
          - Improved the system quality by testing according to system specifications and fixing
          bugs in code, database composition and system specifications.
          <br />- Created business documents to show business models and technical architecture with
          PowerPoint, Word, and Excel.
        </p>
      </WorkHistory>
    </>
  );
};
