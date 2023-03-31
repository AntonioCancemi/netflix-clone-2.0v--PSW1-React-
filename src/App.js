import Container from "react-bootstrap/Container";
import "./App.css";
import MyNav from "./components/MyNav";
import MyFooter from "./components/MyFooter";

import "bootstrap/dist/css/bootstrap.min.css";
import Home from "./components/MyHome";

function App() {
  return (
    <Container fluid className="bg-dark px-0 ">
      <MyNav></MyNav>

      <Home />
      <MyFooter></MyFooter>
    </Container>
  );
}

export default App;
