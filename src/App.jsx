/** 2/20/27 : CDMX/México.
 * @author  @AlexisTercero55
 * @github  https://github.com/AlexisTercero55
 * @mail    alexistercero55@gmail.com
 * @license MPL-2.0
 */

import Container from 'react-bootstrap/Container';
import Wheather from './components/app/wheather';
// import { useState, useEffect } from 'react';
// import './App.css';
// import CardWithCanvas from './components/CardwithCanvas';
// import './css/Grids.css';
// import III_GridCards from './components/GridCards_Bootstrap';

export default function App() {

  
  return (
    <Container fluid={true} >
      <Wheather  ></Wheather>
    </Container>
  );
}