import './App.css';
import React from 'react';
import { SideMenu } from 'components/SideMenu';
import { Pages } from 'components/Main';

function App(): JSX.Element {
  return (
    <div className="container">
      <SideMenu />
      <Pages />
    </div>
  );
}

export default App;
