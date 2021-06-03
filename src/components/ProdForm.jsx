import { Button, Form, Modal } from 'react-bootstrap'

function ProdForm({show, handleClose, handleShow}) {
    return (
      <Modal show={show} onHide={handleClose}>
          <Modal.Header closeButton>
            <Modal.Title as="h5">Novo Produto</Modal.Title>
          </Modal.Header>
          <Form>
            <Modal.Body>
                <Form.Group className="mb-3" controlId="formProdName">
                    <Form.Label>Nome</Form.Label>
                    <Form.Control type="text" name="name" />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formProdImage">
                        <Form.Label>Imagem</Form.Label>
                        <Form.Control type="text" name="image" />
                    </Form.Group>
                
            </Modal.Body>
            <Modal.Footer>
                <Button variant="secondary" onClick={handleClose}>
                    Fechar
                </Button>
                <Button variant="primary" type="submit">
                    Confirmar
                </Button>
            </Modal.Footer>
          </Form>
        </Modal>
    );
  }
  
export default ProdForm