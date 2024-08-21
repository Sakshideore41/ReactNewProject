import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchEmployees } from "./EmployeeSlice";
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Container from 'react-bootstrap/Container';

function ReduxEmplist() {
    const dispatch = useDispatch();
    const { list: emplistdata, status } = useSelector((state) => state.employees);

    useEffect(() => {
        dispatch(fetchEmployees());
    }, [dispatch]);

    return (
        <Container>
            <Row xs={1} md={4} className="g-4">
                {status === 'loading' && <p>Data Loading.....</p>}
                {emplistdata.map((emprecord) => (
                    <Col key={emprecord.id}>
                        <Card className="shadow-lg p-3 mb-5 bg-body-tertiary rounded blue">
                            <Card.Img variant="top" src={emprecord.imagepath} height={100} />
                            <Card.Body>
                                <Card.Title>{emprecord.name}</Card.Title>
                                <Card.Text>{emprecord.salary}</Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                ))}
            </Row>
        </Container>
    );
}

export default ReduxEmplist;
