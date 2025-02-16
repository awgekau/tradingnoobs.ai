import React from 'react';
import Navbar from './components/navbar';
import './index.css';


const App = () => {
  return (
    <div>
      <Navbar />
      <main style={styles.main}>
        <h1>Welcome to the TradingNoobs.ai Platform!</h1>
        <p>Scroll down to see the fixed Navbar in action.</p>
        <div style={styles.content}>
          {[...Array(20)].map((_, i) => (
            <p key={i}>
              This is some sample content. Scroll down to see the fixed Navbar.
            </p>
          ))}
        </div>
      </main>
    </div>
  );
};

const styles = {
  main: {
    paddingTop: '70px', // Add padding to avoid content being hidden behind the fixed Navbar
  },
  content: {
    padding: '2rem',
  },
};

export default App;

