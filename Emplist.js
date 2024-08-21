import axios from "axios";
import { useEffect, useState } from "react";
import { Button, Container } from "react-bootstrap";
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import { Link } from "react-router-dom";

function EmpList() {
  // Step 1 - Define state for employee list data
  const [emplistdata, setEmplistdata] = useState([]);

  // Step 2 - Fetch employee data from API when component mounts
  useEffect(() => {
    axios.get("http://localhost:3001/employees")
      .then(response => setEmplistdata(response.data))
      .catch(error => console.error("Error fetching employee data:", error));
  }, []);

  // Step 3 - Render employee list with Edit and Delete buttons
  return (
    <Container>
      <Row xs={1} md={4} className="g-4">
        {emplistdata.map((emprecord) => (
          <Col key={emprecord.id}>
            <Card className="shadow-lg p-3 mb-5 bg-body-tertiary rounded">
              <Card.Img variant="top" src={emprecord.imagepath} height={100} />
              <Card.Body>
                <Card.Title>{emprecord.name}</Card.Title>
                <Card.Text>{emprecord.salary}</Card.Text>
                <Button 
                  as={Link}
                  to={`/EditEmployee/${emprecord.id}`} 
                  className="btn-primary"
                >
                  Edit
                </Button>
                &nbsp;
                <Button 
                  as={Link}
                  to={`/DeleteEmployee/${emprecord.id}`} 
                  className="btn-danger"
                >
                  Delete
                </Button>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
}

export default EmpList;
