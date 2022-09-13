import React from 'react';
import Sidebar from './ui-element/sidebar';
import Main from './ui-element/main';
import Navigation from './ui-element/navigation';
import { BrowserRouter, Route } from 'react-router-dom';
import MobileSidebar from './ui-sub-elements/mobile-sidebar';

const App = () => {
  return (
    <div className="app">        
      <Navigation/>
      <BrowserRouter>
        <div className="mb">
          <MobileSidebar/>
        </div>
      <div className="body">
        <section className="left">
              <Sidebar />
        </section>
        <section className="right">
          <Main />
        </section>
        <div className="mb">
          <Sidebar />
        </div>
      </div>
      </BrowserRouter>
    </div>
  )
}

export default App;