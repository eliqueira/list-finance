import './App.css';
import {Container, Form, Button, Row, Col} from 'react-bootstrap'
import {useState,useEffect} from 'react'



function App() {
  const[titulo,setTitulo] = useState("");
  const[prazo,setPrazo] = useState("");
  const [imagem, setImagem] = useState(null);
  const [urlImagem, setUrlImagem] = useState("");


  useEffect(() => {
    if (!imagem) return;
    const url = URL.createObjectURL(imagem);
    setUrlImagem(url);
  }, [imagem]);

  function tratarSubmit(event){
    event.preventDefault();
    console.log({titulo,prazo,imagem});
  } 

  return (
    <Container className='text'>
      <h1>Lista Financeira</h1>
      <Form onSubmit={tratarSubmit}>
        <Row className='gy-2'>
          <Col xs={12} md={6} lg={9}>
            <Form.Group as={Row} controlId='titulo'>
            <Col xs={12} lg={2}>
              <Form.Label>Título</Form.Label>
            </Col>
            <Col xs={12} lg={10}>
              <Form.Control 
              type='text'
              onChange={(event) => setTitulo(event.target.value)}
              value={titulo}/>
            </Col>
            </Form.Group>          
          </Col>
          <Col xs={12} md={6} lg={4}>
            <Form.Group  as={Row} controlId='prazo'>
            <Col xs={12} lg={3}>
              <Form.Label>Prazo</Form.Label>
            </Col>
            <Col xs={12} lg={9}>
              <Form.Control 
                type='date'
                onChange={(event) => setPrazo(event.target.value)}
                value={prazo}
                />
              </Col>
            </Form.Group>          
          </Col>
          <Col xs={12}>
            <Form.Group as={Row} controlId='imagem'>
              <Col xs={12}>
                <Form.Label>Imagem de Capa</Form.Label>
              </Col>
              <Col xs={12}>
                <Form.Control
                  type='file'
                  onChange={(event) => setImagem(event.target.files[0])} 
                />
              </Col>
              <Col xs={12}>
                <img src={urlImagem} />
              </Col>
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

export default App
