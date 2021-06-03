import { useEffect, useRef, useState } from 'react'
import { Button, CardDeck, Container } from 'react-bootstrap'

import Prod from './Prod'
import ProdForm from './ProdForm'
import api from '../services/api'

import  'bootstrap/dist/css/bootstrap.min.css'

function App() {
  const [prods, setProds] = useState([])
  const [show, setShow] = useState(false);
  
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  
  
  const buttonAdd = useRef(null)

  const handleClick = () => {
    setShow(true)
  }

  useEffect(()=> {
    const loadProds = async () => {
      const data = await api.readAll()
  
      setProds([ ...prods, ...data])
    }
    loadProds()
  }, [])

  return (
    <Container>
      <h1 className=" mt-5 text-center">Catálogo</h1>
      <div className="text-right">
        <Button
          variant="secondary"
          className="rounded-circle mr-4 font-weight-bold"
          onClick={handleClick}
          ref={buttonAdd}
        >
          +
        </Button>
      </div>
      <CardDeck className="my-3">
        {prods.map((prod) => (
          <Prod prod={prod} key={prod.id} />
        ))}
      </CardDeck>
      <ProdForm
        show={show}
        handleClose={handleClose}
        handleShow={handleShow}
      />
    </Container>
  );
}

export default App;
