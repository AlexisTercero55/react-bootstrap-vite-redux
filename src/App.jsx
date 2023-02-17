import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css';
import { Button } from 'react-bootstrap';

export default function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <div id='logos'>{/* //TODO : write Logos component */}
        <a href="https://vitejs.dev" target="_blank">
          <img src="./vite.svg" className="logo" alt="Vite logo" />
        </a>
        <a href="https://reactjs.org" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
        <a href="https://getbootstrap.com/" target="_blank">
          <img src="./Bootstrap.svg" className="logo" alt="Boostrap logo" />
        </a>
      </div>
      <h1>Vite + React + Bootstrap </h1>
      <h2>Alexis Tercero</h2>
      <div className="cardd">
        <Button onClick={() => setCount((count) => count + 1)}
        variant="outline-primary">
          count is {count}
        </Button>
        <p>
          <br></br>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
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
  )
}