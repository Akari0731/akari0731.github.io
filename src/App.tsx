import './App.css';
import React from 'react';
import { SideMenu } from 'components/SideMenu';
import { IntroPage } from 'components/Main/IntroPage';

function App(): JSX.Element {
  return (
    <div className="container">
      <SideMenu />
      <IntroPage />
    </div>
  );
}

export default App;
