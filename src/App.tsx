import './App.css';
import React from 'react';
import { SideMenu } from 'components/SideMenu';
import { Pages } from 'components/Main';
import { TopMenu } from 'components/TopMenu';

function App(): JSX.Element {
  return (
    <>
      <TopMenu />
      <div className="container">
        <SideMenu />
        <Pages />
      </div>
    </>
  );
}

export default App;
