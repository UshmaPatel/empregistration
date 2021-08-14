import logo from './logo.svg';
import './App.css';
import Header from "./components/Header";
import{ Button, Col, Container, Row } from "reactstrap";
import "react-toastify/dist/ReactToastify.css";
import {ToastContainer, toast} from "react-toastify";
import Home from "./components/Home";
import Employee from './components/Employee';
import AddEmployee from './components/AddEmployee';
import Menus from './components/Menus';
import { BrowserRouter as Router, Switch, Route,Link} from "react-router-dom";
import AllEmployees from './components/AllEmployees';
import About from './components/About';
import Contact from './components/Contact';


function App() {
const btnHandle = () => {
  toast.error("done", {
    position : "top-center",
  });
};


 return(
  <div>
    <Router>
    <ToastContainer/>
    <Container>
      <Header/>
      <Row>
        <Col md={4}>
          <Menus/>
        </Col>
        <Col md={8}>
        <Route path="/" component={Home} exact />
        <Route path="/add-employee" component={AddEmployee} exact />
        <Route path="/view-employee" component={AllEmployees} exact />
        <Route path="/about" component={About} exact />
        <Route path="/contact" component={Contact} exact />
       
        </Col>
      </Row>
    </Container>
    </Router>
  </div>
 );


}

export default App;
