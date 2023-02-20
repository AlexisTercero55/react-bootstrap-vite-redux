/** 2/19/23 : CDMX/México.
 * @author  @AlexisTercero55
 * @github  https://github.com/AlexisTercero55
 * @mail    alexistercero55@gmail.com
 * @license MPL-2.0
 */
import III_Card from './card';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';



export default function III_GridCards() {

  return (
    <Container style={{border:'red solid 2px',
                       minWidth: '80vw',
                       minHeight: '80vh'
    }}>
      <Row>
        <Col ><III_Card></III_Card></Col>
        <Col ><III_Card></III_Card></Col>
        <Col ><III_Card></III_Card></Col>
      </Row>
      <Row>
        <Col><III_Card></III_Card></Col>
        <Col><III_Card></III_Card></Col>
        <Col><III_Card></III_Card></Col>
      </Row>
    </Container>
  );
}