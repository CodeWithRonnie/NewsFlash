import Header from './components/Header';
/*import { useState } from 'react';*/
import './App.css';

function App() {
  return (
    <div className="app">
      <header className="app-header">
        <h1>NewsFlash</h1>
        <p className="tagline">Your daily dose of news</p>
      </header>
      <main className="app-main">
        <h2>Welcome to NewsFlash</h2>
        <p>Loading the latest headlines...</p>
      </main>
    </div>
  );
}

export default App;