import React from 'react';
import './index.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { solid } from '@fortawesome/fontawesome-svg-core/import.macro';

export const ExperiencePage: React.FC = () => {
  return (
    <>
      <h2 className="mt-0">Experience</h2>
      <div className="resume-item mb-3">
        <div>
          <h3 className="mb-0 mt-0">Frontend developer</h3>
          <a href="https://metry.io/en/" target="_blank" rel="noreferrer">
            <div className="subheading mb-1 text-primary">Metry</div>
          </a>
          <p>
            - Add features and maintain an administration interface for property owners to manage
            their building&apos;s energy consumption in Angular 13 and Typescript.
            <br />
            - Improved code quality and maintainability by refactoring code including globally
            scoped css files.
            <br />
          </p>
        </div>
        <div className="resume-date">
          <span className="text-primary">June 2022 - Present</span>
        </div>
      </div>

      <div className="resume-item mb-3">
        <div>
          <h3 className="mb-0 mt-0">Hobby project</h3>
          <a href="https://oskarifriman.com/" target="_blank" rel="noreferrer">
            <div className="subheading mb-1 text-primary">Oskari&apos;s Portfolio</div>
          </a>
          <p>
            - Built my friend&apos;s Portfolio site in Angular 13 and Typescript.
            <br />
            - Build it from scratch to learn Angular and Rxjs.
            <br />
            - Support designing and features together with the friend using Figma.
            <br />
          </p>
        </div>
        <div className="resume-date">
          <span className="text-primary">July 2022 - September 2022</span>
        </div>
      </div>

      <div className="resume-item mb-3">
        <div>
          <h3 className="mb-0 mt-0">Frontend developer</h3>
          <a href="https://www.jetshop.se/" target="_blank" rel="noreferrer">
            <div className="subheading mb-1 text-primary">Jetshop</div>
          </a>
          <p>
            - Built new administration interface for e-commerce owners by implementing features
            using React with Typescript.
            <br />
            - Focused on frontend development together with product owner and UX designer.
            <br />- Led building new design system with UX designer by using Storybook.
          </p>
        </div>
        <div className="resume-date">
          <span className="text-primary">August 2021 - May 2022</span>
        </div>
      </div>

      <div className="resume-item mb-3">
        <div>
          <h3 className="mb-0 mt-0">Frontend/Full stack developer</h3>
          <a href="https://minnatechnologies.com/" target="_blank" rel="noreferrer">
            <div className="subheading mb-1 text-primary">Minna technologies</div>
          </a>
          <p>
            - Built web application towards end users using React, Typescript and testing with
            Cypress and Storybook.
            <br />
            - Built backend functionalities including REST APIs towards banks using Scala.
            <br />
            - Helped product owners by writing SQLs towards MongoDB and make use of data analytics
            tools, Mixpanel, Google Optimize/Analytics and Metabase.
            <br />- Contributed in product discovery phase and development with discussing features
            and analyzing result.{' '}
          </p>

          <p>
            About Minna technologies:
            <br />
            Bring power to the modern consumer by giving them controls on their subscription.
            Building mobile/desktop application and API products for retail banks to browse all
            subscriptions they are subscribing to, and allow them to cancel, switch and order new
            one easily.
          </p>
        </div>
        <div className="resume-date">
          <span className="text-primary">April 2019 - August 2021</span>
        </div>
      </div>

      <div className="resume-item mb-3">
        <div>
          <h3 className="mb-0 mt-0">Self learning</h3>
          <div className="subheading mb-1 text-primary"></div>
          <p>
            - Learned web development by myself and created web page focused on frontend skills
            including HTML, CSS, Javascript, Bootstrap4 and React.
            <br />- Used Github Pages for deployment.
          </p>
          <ul>
            <li className="text-primary">
              <a href="./background/index.html" target="_blank" rel="noreferrer">
                <FontAwesomeIcon icon={solid('palette')} /> Gradient Background Generater(DOM
                practice)
              </a>
            </li>
            <li className="text-primary">
              <a href="https://react-pages.github.io/robofriends/" target="_blank" rel="noreferrer">
                <FontAwesomeIcon icon={solid('robot')} /> Robofriends(React App)
              </a>
            </li>
          </ul>
        </div>
        <div className="resume-date">
          <span className="text-primary">December 2018 - April 2019</span>
        </div>
      </div>

      <div className="resume-item mb-3">
        <div>
          <h3 className="mb-0 mt-0">Associate IT consultant</h3>
          <a href="https://www.future.co.jp/en/architect/" target="_blank" rel="noreferrer">
            <div className="subheading mb-1 text-primary">Future Architect.Inc</div>
          </a>
          <p>
            - Worked for a supermarket in Japan, developing functional retail systems with Java, SQL
            and HTML.
            <br />
            - Improved the system quality by testing according to system specifications and fixing
            bugs in code, database composition and system specifications.
            <br />- Created business documents to show business models and technical architecture
            with PowerPoint, Word, and Excel.
          </p>
        </div>
        <div className="resume-date">
          <span className="text-primary">April 2018 - September 2018</span>
        </div>
      </div>
    </>
  );
};
