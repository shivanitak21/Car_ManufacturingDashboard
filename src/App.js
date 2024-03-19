// App.js
import React from 'react';
import data from '../src/components/data.json'; // Import your JSON data
import NavBar from './components/Navbar';
import SideBar from './components/Sidebar';
import FlowDiagram from './components/FlowDiagram';

const App = () => {
  return (
    <div>
      <NavBar />
      <div style={{ display: 'flex' }}>
        <SideBar />
        <FlowDiagram data={data} />
      </div>
    </div>
  );
};

export default App;
