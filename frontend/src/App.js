import React from 'react';
import Messages from './components/Messages';
import './App.css';

function App() {
  return (
    <div className="container-fluid">
      <nav>
        <div className="nav-wrapper center-align">
          <a href="/" className="brand-logo">Messages</a>
        </div>
      </nav>
      <div className="row">
        <Messages />
      </div>
    </div>
  );
}

export default App;
