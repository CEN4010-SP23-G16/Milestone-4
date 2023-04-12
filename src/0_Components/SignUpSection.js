import {React, useState} from 'react';
import { Container, Row, Col, Card, Button, Form } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { signUpUser } from '../Redux/slices/userSlice';

export default function SignUpSection() {
  const [validated, setValidated] = useState(false);
  const dispatch = useDispatch();

  const handleSubmit = (event) => {
    event.preventDefault();
    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      event.stopPropagation();
      setValidated(true);
      return;
    }

    const firstName = event.target.elements.firstname.value;
    const lastName = event.target.elements.lastname.value;
    const email = event.target.elements.email.value;
    const password = event.target.elements.password.value;

    dispatch(signUpUser({firstName, lastName, email, password}));
  };

  

  return (
    <>
      <Container>
        <Row> 
          <Col md={6} className='text-center text-md-start d-flex flex-column justify-content-center'>

            <h1 className="my-5 display-3 fw-bold ls-tight px-3">
              Sign Up for<br />
              <span className="text-primary"> Notifications!</span>
            </h1>
          </Col>

          <Col md={6}>
            <Card className='my-5'>
              <Card.Body className='p-5'>
                <Form noValidate validated={validated} onSubmit={handleSubmit}>
                  <Row className="mb-3">
                    <Form.Group as={Col} lg='6' controlId="firstname">
                      <Form.Label>First name</Form.Label>
                      <Form.Control
                        required
                        type="text"
                        placeholder="First name"
                      />
                      <Form.Control.Feedback type='invalid'>Enter your First Name</Form.Control.Feedback>
                    </Form.Group>
                    <Form.Group as={Col} lg='6' controlId="lastname">
                      <Form.Label>Last name</Form.Label>
                      <Form.Control
                        required
                        type="text"
                        placeholder="Last name"
                      />
                      <Form.Control.Feedback type='invalid'>Enter your Last Name</Form.Control.Feedback>
                    </Form.Group>
                  </Row>

                  <div className="mb-3">
                    <Form.Group controlId="email">
                      <Form.Label>Email</Form.Label>
                      <Form.Control type="email" placeholder="Enter Email" required />
                      <Form.Control.Feedback type="invalid">
                        Please provide a valid email.
                      </Form.Control.Feedback>
                    </Form.Group>

                    <Form.Group controlId="password">
                      <Form.Label>Password</Form.Label>
                      <Form.Control type="text" placeholder="Password" required />
                      <Form.Control.Feedback type="invalid">
                        Please provide a valid Password.
                      </Form.Control.Feedback>
                    </Form.Group>
                  </div>
                  <Form.Group className="mb-3">
                    <Form.Check
                      required
                      label="Agree to terms and conditions"
                      feedback="You must agree before submitting."
                      feedbackType="invalid"
                    />
                  </Form.Group>
                  <Button type="submit" className='mb-2'>Submit</Button>
                  
                  <Form.Group>
                    <Form.Label>Already a member?</Form.Label>
                    <Link to='/loginpage'>Click Here!</Link>
                  </Form.Group>
                  
                </Form>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </>
  )
}
