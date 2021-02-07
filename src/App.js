import "./App.css";
import { Navbar, Nav, Form, FormControl, Button } from "react-bootstrap";
import { FullName } from "./Component/Profile/FullName.js";
import { ProfilePhoto } from "./Component/Profile/ProfilePhoto.js";
import { Address } from "./Component/Profile/Address.js";

function App() {
  return (
    <div className="App">
      {/*-------------Navbar----------------*/}
      <Navbar bg="dark" variant="dark">
        <Navbar.Brand href="#home">Navbar</Navbar.Brand>
        <Nav className="mr-auto">
          <Nav.Link href="#home">Home</Nav.Link>
          <Nav.Link href="#features">Features</Nav.Link>
          <Nav.Link href="#pricing">Pricing</Nav.Link>
        </Nav>
        <Form inline>
          <FormControl type="text" placeholder="Search" className="mr-sm-2" />
          <Button variant="outline-info">Search</Button>
        </Form>
      </Navbar>
      {/* -----------My profile-------------- */}
      <ProfilePhoto />
      <FullName />
      <Address />
    </div>
  );
}

export default App;
