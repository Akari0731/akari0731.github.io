import './App.css';
import React from 'react';
import { SideMenu } from 'components/SideMenu';
import { MainRoute } from 'routes/MainRoute';

function App(): JSX.Element {
  return (
    <div className="container">
      <SideMenu />
      <MainRoute />
    </div>
  );
}

export default App;
