import './App.css';
import {Container, Form, Button, Row, Col} from 'react-bootstrap'
import {useState} from 'react'


const[titulo,setTitulo] = useState("");
const[prazo,setPrazo] = useState("");

function App() {

  function tratarSubmit(event){
    event.preventDefault();
    console.log({titulo,prazo});
  }

  return (
    <Container className='text'>
      <h1>
        Lista Financeira        
      </h1>
      <Form onSubmit={tratarSubmit}>
        <Row className='gy-2'>
          <Col xs={12} md={6} lg={9}>
            <Form.Group controlId='titulo'>
              <Form.Label>Título</Form.Label>
              < Form.Control type='text'/>
            </Form.Group>          
          </Col>
          <Col xs={12} md={6} lg={3}>
            <Form.Group controlId='prazo'>
              <Form.Label>Prazo</Form.Label>
              < Form.Control type='date'/>
            </Form.Group>          
          </Col>
          <Col xs={12}>
            <Form.Group controlId='imagem'>
              <Form.Label>Imagem de Capa</Form.Label>
              < Form.Control type='file'/>
            </Form.Group>          
          </Col> 
          <Col xs={12} className='text-center'>
            <Button variant="outline-dark" type="submit">Salvar</Button>
          </Col>
        </Row>
      </Form>
    </Container>
  );
}

export default App;
