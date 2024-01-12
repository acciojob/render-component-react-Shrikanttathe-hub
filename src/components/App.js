import React from 'react';
import '../styles/App.css';
import ReactDOM from 'react-dom';

const App = () => {
  return (
    <div>
      <h1>React Learning</h1>
      <p>I am learning React. My life is getting better.</p>
    </div>
  );
};


ReactDOM.render(<App />, document.getElementById('root'));
