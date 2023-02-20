/** 2/17/23 : CDMX/México.
 * @author  @AlexisTercero55
 * @github  https://github.com/AlexisTercero55
 * @mail    alexistercero55@gmail.com
 * @license MPL-2.0
 */
import { useState, useEffect } from 'react';
// import reactLogo from './assets/react.svg'
import './App.css';
import './css/Grids.css';
// import III_GridCards from './components/GridCards_Bootstrap';

export default function App() {

  useEffect(() => {

    const handleOnMouseMove = e =>
    {
      // console.log(e);
      const { currentTarget : target } = e;
      const rect = target.getBoundingClientRect(),
                   x = e.clientX - rect.left,
                   y = e.clientY - rect.top;
      // console.log(rect);

      target.style.setProperty("--mouse-x",`${x}px`);
      target.style.setProperty("--mouse-y",`${y}px`);
    }
    
    for (const card of document.querySelectorAll(".card")) 
    {
      card.onmousemove = e => handleOnMouseMove(e);
      
    }
    
    // return () => {
    //   cleanup
    // };
  }, []);

  return (
    // <III_GridCards></III_GridCards>
    <>
    <div className='cards'>
      <div className="card"></div>
      <div className="card"></div>
      <div className="card"></div>
      <div className="card"></div>
      <div className="card"></div>
      <div className="card"></div>
    </div>
    </>
  );
}