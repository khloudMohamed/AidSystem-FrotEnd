import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Row from "react-bootstrap/Row";
import Button from 'react-bootstrap/Button';
import MovementComponent from './MovementComponent';
import StudentComponent from './StudentComponent';
import { MouseEventHandler, useState } from 'react';

function App() {
  const [show, setShow] = useState(false);
  const handleChange = (value:boolean) =>(e: React.MouseEvent) =>{
    setShow(value);
  }
  return (
    <div >
      <div>
        <Row className="mx-0">
          <Button variant="primary" onClick={handleChange(false)}>Registration Form</Button>
          <Button variant="secondary" className="mx-2" onClick={handleChange(true)}>Movement Form</Button>
        </Row>
        <div>
          {show ? <MovementComponent></MovementComponent> : <StudentComponent></StudentComponent>}
        </div>
      </div>
    </div>
  );
}

export default App;
