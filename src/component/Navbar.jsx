import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Dropdown from "react-bootstrap/Dropdown";
import NoteContext from "../context/NoteContext";
import { useContext } from "react";
import "../style.css";
function NavScrollExample() {
  const {
    setSubmit,
    language,
    selectedLanguage,
    setSelectedLanguage,
    fontSize,
    setFontSize,
  } = useContext(NoteContext);

  const handleSubmit = () => {
    setSubmit(true);
  };
  const handleLanguageSelect = (selectedLanguage) => {
    console.log(selectedLanguage);
    setSelectedLanguage({
      languageId: selectedLanguage.id,
      languageName: selectedLanguage.name,
      languageEditor: selectedLanguage.editorLanguage,
    });
  };
  const handleFont = (font) => {
    console.log(font);
    setFontSize(font);
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
            <Dropdown style={{ marginRight: "2%" }}>
              <Dropdown.Toggle id="dropdown-basic">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="currentColor"
                  className="bi bi-gear"
                  viewBox="0 0 16 16"
                >
                  <path d="M8 4.754a3.246 3.246 0 1 0 0 6.492 3.246 3.246 0 0 0 0-6.492zM5.754 8a2.246 2.246 0 1 1 4.492 0 2.246 2.246 0 0 1-4.492 0z" />
                  <path d="M9.796 1.343c-.527-1.79-3.065-1.79-3.592 0l-.094.319a.873.873 0 0 1-1.255.52l-.292-.16c-1.64-.892-3.433.902-2.54 2.541l.159.292a.873.873 0 0 1-.52 1.255l-.319.094c-1.79.527-1.79 3.065 0 3.592l.319.094a.873.873 0 0 1 .52 1.255l-.16.292c-.892 1.64.901 3.434 2.541 2.54l.292-.159a.873.873 0 0 1 1.255.52l.094.319c.527 1.79 3.065 1.79 3.592 0l.094-.319a.873.873 0 0 1 1.255-.52l.292.16c1.64.893 3.434-.902 2.54-2.541l-.159-.292a.873.873 0 0 1 .52-1.255l.319-.094c1.79-.527 1.79-3.065 0-3.592l-.319-.094a.873.873 0 0 1-.52-1.255l.16-.292c.893-1.64-.902-3.433-2.541-2.54l-.292.159a.873.873 0 0 1-1.255-.52l-.094-.319zm-2.633.283c.246-.835 1.428-.835 1.674 0l.094.319a1.873 1.873 0 0 0 2.693 1.115l.291-.16c.764-.415 1.6.42 1.184 1.185l-.159.292a1.873 1.873 0 0 0 1.116 2.692l.318.094c.835.246.835 1.428 0 1.674l-.319.094a1.873 1.873 0 0 0-1.115 2.693l.16.291c.415.764-.42 1.6-1.185 1.184l-.291-.159a1.873 1.873 0 0 0-2.693 1.116l-.094.318c-.246.835-1.428.835-1.674 0l-.094-.319a1.873 1.873 0 0 0-2.692-1.115l-.292.16c-.764.415-1.6-.42-1.184-1.185l.159-.291A1.873 1.873 0 0 0 1.945 8.93l-.319-.094c-.835-.246-.835-1.428 0-1.674l.319-.094A1.873 1.873 0 0 0 3.06 4.377l-.16-.292c-.415-.764.42-1.6 1.185-1.184l.292.159a1.873 1.873 0 0 0 2.692-1.115l.094-.319z" />
                </svg>
              </Dropdown.Toggle>

              <Dropdown.Menu>
                <Dropdown>
                  <Dropdown.Toggle id="dropdown-basic">
                    {fontSize}px
                  </Dropdown.Toggle>
                  <Dropdown.Menu>
                    <Dropdown.Item onClick={() => handleFont(12)}>
                      12px
                    </Dropdown.Item>
                    <Dropdown.Item onClick={() => handleFont(15)}>
                      15px
                    </Dropdown.Item>
                    <Dropdown.Item onClick={() => handleFont(18)}>
                      18px
                    </Dropdown.Item>
                    <Dropdown.Item onClick={() => handleFont(21)}>
                      21px
                    </Dropdown.Item>
                  </Dropdown.Menu>
                </Dropdown>
              </Dropdown.Menu>
            </Dropdown>
            <Dropdown>
              <Dropdown.Toggle variant="primary" id="dropdown-basic">
                {selectedLanguage.languageName}
              </Dropdown.Toggle>

              <Dropdown.Menu className="languages">
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
          </Nav>
          <Form
            className="d-flex"
            style={{ marginRight: "2%" }}
          >
            <Button variant="outline-success" onClick={handleSubmit}>
              Compile
            </Button>
          </Form>
          <Form className="d-flex">
            <Button variant="outline-danger">Log out</Button>
          </Form>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavScrollExample;
