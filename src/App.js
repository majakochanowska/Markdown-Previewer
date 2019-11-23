import React from 'react';
import './App.css';
import Editor from './components/Editor';

class App extends React.Component {
  render() {
    return (
      <main>
        <h1 className="heading">Markdown Preview</h1>
        <h2 className="heading">Edit Markdown</h2>
        <Editor />
      </main>
    )
  }
}

export default App;
