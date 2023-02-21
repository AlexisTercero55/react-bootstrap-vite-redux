/** 2/20/23 : CDMX/México.
 * @author  @AlexisTercero55
 * @github  https://github.com/AlexisTercero55
 * @mail    alexistercero55@gmail.com
 * @license MPL-2.0
 */
import { useState, useEffect } from 'react';
import './App.css';
import CardWithCanvas from './components/CardwithCanvas';
import './css/Grids.css';
// import III_GridCards from './components/GridCards_Bootstrap';

export default function App() {

  useEffect(() => {
    const handleMouseMove = (e) => 
    {
      for (const card of document.getElementsByClassName("card")) 
      {
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

  return (
    // <III_GridCards></III_GridCards> //Bootstrap version
    //CSS version
    <>
    <div id='cards'>
      {[...Array(6)].map((_, index) => (
        <CardWithCanvas key={index}>

        </CardWithCanvas>
        /* <div className="card" key={index}>
          <div className="card-border"></div>
          <div className="card-content">

          </div>
        </div> */
      ))}
    </div>
    </>
  );
}

/* <div id='cards'>
      <div className="card">
      <div className="card-border"></div>
        <div className="card-content"></div>
      </div>
      <div className="card">
      <div className="card-border"></div>
        <div className="card-content"></div>
      </div>
      <div className="card">
      <div className="card-border"></div>
        <div className="card-content"></div>
      </div>
      <div className="card">
      <div className="card-border"></div>
        <div className="card-content"></div>
      </div>
      <div className="card">
      <div className="card-border"></div>
        <div className="card-content"></div>
      </div>
      <div className="card">
      <div className="card-border"></div>
        <div className="card-content"></div>
      </div>
    </div> */