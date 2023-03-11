/** 2/20/27 : CDMX/México.
 * @author  @AlexisTercero55
 * @github  https://github.com/AlexisTercero55
 * @mail    alexistercero55@gmail.com
 * @license MPL-2.0
 */

import Container from 'react-bootstrap/Container';
import Wheather from './components/app/wheather';

export default function App() {
  return (
    <Container fluid={true} >
      <Wheather  ></Wheather>
    </Container>
  );
}