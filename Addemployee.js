import { useFormik } from "formik";
import { useContext, useRef } from "react";
import { Button, Container, Form } from "react-bootstrap";
import DataContext from "./DataContext";
import { useDispatch } from "react-redux";
import addemployee from '../reduxdemo/EmployeeSlice';
import { useNavigate } from "react-router-dom";


// For default export:


function AddEmployee() {
    const dispatch = useDispatch();
    const dataContext = useContext(DataContext);
    const navigate = useNavigate();

    // Controlled Form
    const formik = useFormik({
        initialValues: {
            empname: '',
            salary: 0,
            imagepath: ''
        },
        onSubmit: (values) => {
            dispatch(addemployee({ name: values.empname, salary: values.salary, imagepath: values.imagepath }));
            navigate('/ReduxEmplist');
        }
    });

    // Uncontrolled Form
    const empnameRef = useRef("");
    const salaryRef = useRef(0);
    const imagepathRef = useRef("");

    const onCancel = () => {
        empnameRef.current.value = "";
        salaryRef.current.value = "";
        imagepathRef.current.value = "";
    };

    const onAddEmployeeUncontrolled = () => {
        // Validation
        if (!empnameRef.current.value) {
            alert("Employee name is required");
            return;
        }
        if (!salaryRef.current.value || salaryRef.current.value < 10000) {
            alert("Salary is required and must be greater than 10000");
            return;
        }
        if (!imagepathRef.current.value) {
            alert("Image URL is required");
            return;
        }

        // Insert Logic
        dispatch(addemployee({ 
            name: empnameRef.current.value, 
            salary: salaryRef.current.value, 
            imagepath: imagepathRef.current.value 
        }));
        navigate('/ReduxEmplist');
        
        onCancel(); // Clear the form after submission
    };

    return (
        <>
            <h1> Hi {dataContext.name}, the details of Employee</h1>
            <Container>
                {/* Controlled Form */}
                <Form onSubmit={formik.handleSubmit}>
                    <Form.Group>
                        <Form.Label>Employee Name</Form.Label>
                        <Form.Control
                            type="text"
                            placeholder="Employee Name"
                            id="empname"
                            name="empname"
                            value={formik.values.empname}
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                        />
                    </Form.Group>
                    <br/>
                    <Form.Group>
                        <Form.Label>Salary</Form.Label>
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
                    <br/>
                    <Form.Group>
                        <Form.Label>Employee ImageUrl</Form.Label>
                        <Form.Control
                            type="text"
                            placeholder="Employee ImageUrl"
                            id="imagepath"
                            name="imagepath"
                            value={formik.values.imagepath}
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                        />
                    </Form.Group>
                    <br/>
                    <Button variant="primary" type="submit">Add New Employee</Button>
                    &nbsp;&nbsp;
                    <Button variant="danger" onClick={onCancel}>Cancel</Button>
                </Form>
                <br/>

                <h2>Or Use Uncontrolled Form</h2>
                {/* Uncontrolled Form */}
                <Form>
                    <Form.Group>
                        <Form.Label>Employee Name</Form.Label>
                        <Form.Control
                            type="text"
                            placeholder="Employee Name"
                            ref={empnameRef}
                        />
                    </Form.Group>
                    <br/>
                    <Form.Group>
                        <Form.Label>Salary</Form.Label>
                        <Form.Control
                            type="number"
                            placeholder="Employee Salary"
                            ref={salaryRef}
                        />
                    </Form.Group>
                    <br/>
                    <Form.Group>
                        <Form.Label>Employee ImageUrl</Form.Label>
                        <Form.Control
                            type="text"
                            placeholder="Employee ImageUrl"
                            ref={imagepathRef}
                        />
                    </Form.Group>
                    <br/>
                    <Button variant="primary" onClick={onAddEmployeeUncontrolled}>Add New Employee</Button>
                    &nbsp;&nbsp;
                    <Button variant="danger" onClick={onCancel}>Cancel</Button>
                </Form>
            </Container>
        </>
    );
}

export default AddEmployee;
