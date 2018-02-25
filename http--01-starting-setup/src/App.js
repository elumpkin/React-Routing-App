import React, { Component } from 'react';
import {BrowserRouter} from 'react-router-dom';
import Blog from './containers/Blog/Blog';

class App extends Component {
  render() {
    return (
      <BrowserRouter >
      {/* when hosting the app from a subdirectory, use basename */}
            {/* <BrowserRouter basename="/my-app"> */}

      <div className="App">
        <Blog />
      </div>
      </BrowserRouter>
    );
  }
}

export default App;
