import React from 'react'
import { Container, Row, Col } from 'react-bootstrap' //new: import React-bootstrap
function Header() {
  return (
    <div>
      <Container>
        <Row>
          <Col className='text-center py-3'>Copyright &copy; PY2205</Col>
          
        </Row>
      </Container>
    </div>
  )
}

export default Header