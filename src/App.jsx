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
    const handleMouseMove = (e) => {
      for (const card of document.getElementsByClassName("card")) {
        const rect = card.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;
  
        card.style.setProperty("--mouse-x", `${x}px`);
        card.style.setProperty("--mouse-y", `${y}px`);
        // console.log('uwu');
      }
    };
  
    document.getElementById("cards").addEventListener("mousemove", handleMouseMove);
  
    return () => {
      document.getElementById("cards").removeEventListener("mousemove", handleMouseMove);
    };
  }, []);
  
  // useEffect(() => {

  //   document.getElementById("cards").onmousemove = e => {
  //     for(const card of document.getElementsByClassName("card")) {
  //       const rect = card.getBoundingClientRect(),
  //             x = e.clientX - rect.left,
  //             y = e.clientY - rect.top;
    
  //       card.style.setProperty("--mouse-x", `${x}px`);
  //       card.style.setProperty("--mouse-y", `${y}px`);
  //     };
  //   }

    
  //   // return () => {
  //   //   cleanup
  //   // };
  // }, []);

  return (
    // <III_GridCards></III_GridCards>
    <>
    <div id='cards'>
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