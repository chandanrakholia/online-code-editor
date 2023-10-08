import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Dropdown from 'react-bootstrap/Dropdown';

import NoteContext from "../context/NoteContext";
import { useContext } from "react";
import "../style.css"
function NavScrollExample() {
  const { setSubmit, language,selectedLanguage, setSelectedLanguage } = useContext(NoteContext);

  const handleSubmit = () => {
    setSubmit(true);
  };
  const handleLanguageSelect = (selectedLanguage) => {
    console.log(selectedLanguage);
    setSelectedLanguage({
      languageId: selectedLanguage.id,
      languageName: selectedLanguage.name,
      languageEditor: selectedLanguage.editorLanguage
    });
  };
  return (
    <Navbar expand="lg" className="bg-body-tertiary">
      <Container fluid>
        <Navbar.Brand href="#">CR EDITOR</Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: "100px" }}
            navbarScroll
          >
            <Nav.Link href="#action1">Home</Nav.Link>
            {/* <Nav.Link href="#action2">Link</Nav.Link> */}
            <Dropdown>
      <Dropdown.Toggle variant="primary" id="dropdown-basic">
      {selectedLanguage.languageName}
      </Dropdown.Toggle>

      <Dropdown.Menu>
      {language.map((lang) => (
                <Dropdown.Item
                  key={lang.id}
                  onClick={() => handleLanguageSelect(lang)}
                >
                  {lang.name}
                  </Dropdown.Item>
              ))}
      </Dropdown.Menu>
    </Dropdown>
            {/* <Nav.Link href="#" disabled>
              Link
            </Nav.Link> */}
          </Nav>
          <div style={{ textAlign: "center", paddingRight: "40%" }}>
            <Button variant="outline-success" onClick={handleSubmit}>
              Compile
            </Button>
          </div>
          <Form className="d-flex">
            <Button variant="outline-danger">Log out</Button>
          </Form>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavScrollExample;
