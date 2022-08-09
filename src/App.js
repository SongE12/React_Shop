import { Button, Navbar, Container, Nav } from "react-bootstrap";
import "./App.css";

function App() {
  return (
    <div className="App">
      <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand href="#home">SE_Shop</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#made">Cart</Nav.Link>
            <Nav.Link href="#new">NEW</Nav.Link>
            <Nav.Link href="#best50">BEST50</Nav.Link>
            <Nav.Link href="#made">MADE</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
      <Button variant="primary">Primary</Button>
    </div>
  );
}

export default App;
