import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';

Render();
function Render(){
    ReactDOM.render(
          <App />,
        document.querySelector('.root')
      );
}

export default Render;