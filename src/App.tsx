import { useState } from 'react';
import WWSLogo from '/WWS Banner.svg';
import './App.css';

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div>
        <a href='' target='_blank' rel='noreferrer'>
          <img src={WWSLogo} className='logo' alt='Washoe Web Services logo' />
        </a>
      </div>
    </>
  );
}

export default App;
