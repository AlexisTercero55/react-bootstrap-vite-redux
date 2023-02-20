/** 2/17/23 : CDMX/México.
 * @author  @AlexisTercero55
 * @github  https://github.com/AlexisTercero55
 * @mail    alexistercero55@gmail.com
 * @license MPL-2.0
 */

import { useState } from 'react'
import reactLogo from '../assets/react.svg'
import '../App.css';
import { Button } from 'react-bootstrap';
import Counter from '../components/Counter';



export default function App() {

  return (
    <div className="App">
      <div id='logos'>{/* //TODO : write Logos component */}
        <a href="https://vitejs.dev" target="_blank">
          <img src="./vite.svg" className="logo" alt="Vite logo" />
        </a>
        <a href="https://reactjs.org" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
        <a href="https://redux.js.org/" target="_blank">
          <img src="./redux.svg" className="logo" alt="Redux logo" />
        </a>
        <a href="https://getbootstrap.com/" target="_blank">
          <img src="./Bootstrap.svg" className="logo" alt="Boostrap logo" />
        </a>
      </div>
      <h1>Vite + React + Redux + Bootstrap </h1>
      <h2>Alexis Tercero</h2>
      <div className="card_c">
        <Counter/>
        <p>
          <br></br>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on any logo to learn more
      </p>
      {/* some demos */}
      <Button variant="primary">Primary</Button>{' '}
      <Button variant="secondary">Secondary</Button>{' '}
      <Button variant="success">Success</Button>{' '}
      <Button variant="warning">Warning</Button>{' '}
      <Button variant="danger">Danger</Button>{' '}
      <Button variant="info">Info</Button>{' '}
      <Button variant="light">Light</Button>{' '}
      <Button variant="dark">Dark</Button> <Button variant="link">Link</Button>	
    </div>
  );
}