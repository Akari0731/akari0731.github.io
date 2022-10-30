import React from 'react';

export const EducationPage: React.FC = () => {
  return (
    <>
      <h2 className="mt-0">Education</h2>
      <div className="resume-item mb-3">
        <div>
          <h3 className="mt-0 mb-0">University of Tokyo Institute of Technology</h3>
          <div className="subheading mb-0">Master of Engineering</div>
          <div className="mb-1">School of Life Science and Technology - Bioinformatics</div>
          <p>
            Thesis; Analyzed DNA sequence data and metabolome data from human gut microbiota with
            Python and R using statistical methods.
          </p>
        </div>
        <div className="resume-date">
          <span className="text-primary">April 2016 - March 2018</span>
        </div>
      </div>
      <div className="resume-item mb-3">
        <div>
          <h3 className="mt-0 mb-0">University of Tokyo Institute of Technology</h3>
          <div className="subheading mb-0">Bachelor of Engineering</div>
          <div className="mb-1">School of Life Science and Technology - Biotechnology</div>
          <p>
            Thesis; Conducted experiments to combine amino acids on mineral surfaces and modeled the
            reaction computationally.
          </p>
        </div>
        <div className="resume-date">
          <span className="text-primary">April 2012 - March 2016</span>
        </div>
      </div>
    </>
  );
};
