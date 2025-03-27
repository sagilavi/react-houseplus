// import useState from wordpress/element
//import { useState } from '@wordpress/element';
import React, { useState, useEffect } from 'react';



function App() {
  const [isOpen, setIsOpen] = useState(false);

  // an update function
  function toggleButton() {
    setIsOpen(!isOpen);
  }

  return (
    <>
      <button onClick={toggleButton}>you are a good person</button>
      {isOpen && <p>World</p>}
    </>
  );
}

export default App;
//asd