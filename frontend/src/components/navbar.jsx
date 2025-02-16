import React, { useState } from 'react';
import logo from '../assets/bleap-logo-nobg.png';

const Navbar = () => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <nav
      style={styles.navbar}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div style={styles.logoContainer}>
        <img
          src={logo}
          alt="Logo"
          style={{
            ...styles.logo,
            transition: 'transform 0.4s ease, filter 0.4s ease',
            filter: isHovered
              ? 'drop-shadow(0 0 10px rgba(24, 126, 198, 0.8))'
              : 'none',
            transform: isHovered ? 'scale(1.2)' : 'scale(1)',
          }}
        />
      </div>
      <div
        style={{
          ...styles.buttonContainer,
          opacity: isHovered ? 1 : 0,
          transition: 'opacity 0.5s ease',
        }}
      >
        <button
          style={styles.button}
          onMouseEnter={(e) => (e.target.style.backgroundColor = '#008080')}
          onMouseLeave={(e) => (e.target.style.backgroundColor = 'transparent')}
        >
          {' '}
          Tech{' '}
        </button>
        <button
          style={styles.button}
          onMouseEnter={(e) => (e.target.style.backgroundColor = '#008080')}
          onMouseLeave={(e) => (e.target.style.backgroundColor = 'transparent')}
        >
          Food
        </button>
        <button
          style={styles.button}
          onMouseEnter={(e) => (e.target.style.backgroundColor = '#008080')}
          onMouseLeave={(e) => (e.target.style.backgroundColor = 'transparent')}
        >
          RealEstate
        </button>
        <button
          style={styles.button}
          onMouseEnter={(e) => (e.target.style.backgroundColor = '#008080')}
          onMouseLeave={(e) => (e.target.style.backgroundColor = 'transparent')}
        >
          Commodity
        </button>
        <button
          style={styles.button}
          onMouseEnter={(e) => (e.target.style.backgroundColor = '#008080')}
          onMouseLeave={(e) => (e.target.style.backgroundColor = 'transparent')}
        >
          Index
        </button>
      </div>
    </nav>
  );
};

const styles = {
  navbar: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: '0.5rem 2rem',
    backgroundColor: '#63A1BA',
    color: '#fff',
    position: 'fixed',
    top: 0,
    left: 0,
    right: 0,
    zIndex: 1000,
    boxShadow: '0 2px 5px rgba(0, 0, 0, 0.2)',
  },
  logoContainer: {
    display: 'flex',
    alignItems: 'center',
    position: 'relative',
  },
  logo: {
    height: '45px', // Adjust the size of your logo
    width: 'auto',
    transition: 'filter 0.3s ease',
  },
  buttonContainer: {
    display: 'flex',
    gap: '2rem', 
    alignItems: 'center',
    opacity: 0, 
    transition: 'opacity 1s ease', 
  },
  button: {
    backgroundColor: 'transparent',
    border: 'none',
    color: '#fff',
    fontSize: '1rem',
    cursor: 'pointer',
    padding: '0.5rem 1rem',
    borderRadius: '5px',
    transition: 'background-color 0.3s ease',
  },
  buttonHover: {
    backgroundColor: '#3F606E',
  },
};

export default Navbar;

