import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import { useEffect, useState } from 'react';
import axios from "axios";
import { useFormik } from 'formik';
import { useParams } from 'react-router-dom';

function EditEmployee() {
  // Step 1 - Read the id of employee from URL
  const { id } = useParams(); // useParams is a hook to read the query parameters in the URL

  // Step 2 - Read the current data of employee with id selected using axios.get
  const [empCurrentData, setEmpCurrentData] = useState({
    name: '',
    salary: '',
    imagepath: ''
  });

  useEffect(() => {
    axios.get(`http://localhost:3001/employees/${id}`)
      .then(resp => setEmpCurrentData(resp.data))
      .catch(error => console.error("Error fetching employee data:", error));
  }, [id]);

  // Controlled Form
  const formik = useFormik({
    enableReinitialize: true,
    initialValues: {
      name: empCurrentData.name || '',
      salary: empCurrentData.salary || '',
      imagepath: empCurrentData.imagepath || ''
    },
    onSubmit: (values) => {
      axios.put(`http://localhost:3001/employees/${id}`, {
        name: values.name,
        salary: values.salary,
        imagepath: values.imagepath
      })
        .then(resp => alert("Record updated: " + JSON.stringify(resp.data)))
        .catch(error => console.error("Error updating employee data:", error));
    }
  });

  return (
    <>
      <h2>This is Update Employee Controlled Form</h2>
      <Container>
        <Form onSubmit={formik.handleSubmit}>
          <Form.Group>
            <Form.Label>Employee Name</Form.Label>
            <Form.Control
              type="text"
              placeholder="Employee Name"
              id="name"
              name="name"
              value={formik.values.name}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
            />
          </Form.Group>
          <br />
          <Form.Group>
            <Form.Label>Employee Salary</Form.Label>
            <Form.Control
              type="number"
              placeholder="Employee Salary"
              id="salary"
              name="salary"
              value={formik.values.salary}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
            />
          </Form.Group>
          <br />
          <Form.Group>
            <Form.Label>Employee Image URL</Form.Label>
            <Form.Control
              type="text"
              placeholder="Employee Image URL"
              id="imagepath"
              name="imagepath"
              value={formik.values.imagepath}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
            />
          </Form.Group>
          <br />
          <Button type='submit'>Update Employee</Button>
        </Form>
      </Container>
    </>
  );
}

export default EditEmployee;

