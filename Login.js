import { useFormik } from "formik";
import { useContext } from "react";
import { Button, Container, Form } from "react-bootstrap";
import DataContext from "./DataContext";
import { useNavigate } from "react-router-dom";
import axios from "axios";

function Login() {
  const dataContext = useContext(DataContext);
  const navigate = useNavigate();

  const formik = useFormik({
    initialValues: {
      username: '',
      password: ''
    },
    onSubmit: async (values, { resetForm }) => {
      try {
        const response = await axios.get("http://localhost:3001/users");
        const userData = response.data;

        // Debugging: Log the data received and the input values
        console.log("Fetched users:", userData);
        console.log("Input values:", values);

        const existingUser = userData.find(
          user => user.username === values.username && user.password === values.password
        );

        console.log("Existing User:", existingUser);

        if (existingUser) {
          dataContext.setIsUserLoggedIn(true);
          navigate('/Home');
        } else {
          alert("Invalid Credentials");
          resetForm();
        }
      } catch (err) {
        console.error("Login error:", err);
        alert("An error occurred while trying to log in. Please try again later.");
      }
    }
  });

  const onCancelClick = () => {
    navigate("/Home");
  };

  return (
    <>
      <h2>Login Form</h2>
      <Container>
        <Form onSubmit={formik.handleSubmit}>
          <Form.Group className="mb-3">
            <Form.Control
              type="email"
              id="username"
              name="username"
              placeholder="Username/Email"
              value={formik.values.username}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              isInvalid={!!formik.errors.username && formik.touched.username}
            />
            <Form.Control.Feedback type="invalid">
              {formik.errors.username}
            </Form.Control.Feedback>
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Control
              type="password"
              id="password"
              name="password"
              placeholder="Password"
              value={formik.values.password}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              isInvalid={!!formik.errors.password && formik.touched.password}
            />
            <Form.Control.Feedback type="invalid">
              {formik.errors.password}
            </Form.Control.Feedback>
          </Form.Group>
          <Button type="submit" className="btn-success">Login</Button>
          &nbsp;&nbsp;
          <Button className="btn-danger" onClick={onCancelClick}>Cancel</Button>
        </Form>
      </Container>
    </>
  );
}

export default Login;
