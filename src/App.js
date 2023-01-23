import React, { useState, useEffect, Fragment } from 'react';
import Container from 'react-bootstrap/Container';
import Accordion from 'react-bootstrap/Accordion';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import datos from './datos.json';

//como importar una variable json desde otro archivo en el proyecto
function App() {
 /* var [datos, setDatos] = useState([]);

  useEffect(() => {
    fetch('https://angel-burgos.github.io/WebLinks/datos.json')
//    fetch('github.io/WebLinks/datos.json')
      .then(response => response.json())
      .then(data => setDatos(data));
    }, []);
*/

  return (
   // <p>{JSON.stringify(datos)}</p>
    <Container fluid className='App'>
      <Header/>
      <Accordion>        
          {datos.map(it => 
            <Accordion.Item eventKey={it.grupo}>
              <Accordion.Header flush className='Grupo'>{it.grupo}</Accordion.Header>
                <Accordion.Body>
                  <ListaGrupo items={it.items}/>
                </Accordion.Body>
              </Accordion.Item>)
          }
      </Accordion>
    </Container>
    )
}

function Header() {
  return(
    <Container fluid className='Head'>
      <a>AEA Maintenance - Web Links</a>
    </Container>        
  );
}

function ListaGrupo(props) {
  return (
      <div>
         {props.items.map((it) => 
              <Row className='Item'>              
                <Col><a href={it.link}>{it.text}</a> </Col>
              </Row>
           )}
    </div>
  );
}


 export default App;

// Como se ha configurado para publicar en GitHub
//
// https://blog.logrocket.com/deploying-react-apps-github-pages/#:~:text=The%20simplicity%20of%20deploying%20a,own%20custom%20domain%20or%20subdomain.
//
// npm run deploy  para subrir una nueva version de la aplicación
//
// el archivo datos.json puede cambiarse directamente en la web de GitHub
// (cuidado) al subir una nueva versiond e la app porque podríamos macahcarlo
