import { useState } from "react";
import { Button, Col, Row, Form } from "react-bootstrap";
import Footer from "../Components/Footer";
import Header from "../Components/Header";
import { useNavigate } from "react-router-dom";

function LogIn() {
    const [validated, setValidated] = useState(false);
    const navigate = useNavigate();

    const handleSubmit = (event) => {
        const form = event.currentTarget;
        if(form.checkValidity() === false) {
            event.preventDefault();
            event.stopPropagation();
        }

        setValidated(true);
    }

    if(validated){
        localStorage.setItem("auth", "true");
        navigate("/admin"); 
    };

    return(
        <div className="App">
            <Header />

            <main
                className="d-flex justify-content-center align-items-center flex-grow-1"
                style={{
                backgroundImage: "url('https://picsum.photos/1920/1080?blur=2')",
                backgroundSize: "cover",
                backgroundPosition: "center",
                minHeight: "100vh",
                padding: "60px 20px",
                }}
            >
                <div
                className="p-5 rounded shadow-lg bg-dark text-light"
                style={{
                    maxWidth: "500px",
                    width: "100%",
                    opacity: "0.95",
                }}
                >
                <h2 className="text-center mb-4">Log In</h2>

                <Form noValidate validated={validated} onSubmit={handleSubmit}>
                    <Form.Group className="mb-3" controlId="ValidationCustom01">
                    <Form.Label>UserName:</Form.Label>
                    <Form.Control required type="text" placeholder="User" />
                    <Form.Control.Feedback>Looks Good!</Form.Control.Feedback>
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="ValidationCustom02">
                    <Form.Label>Password:</Form.Label>
                    <Form.Control required type="password" placeholder="Your password" />
                    <Form.Control.Feedback>Password Accepted!</Form.Control.Feedback>
                    </Form.Group>

                    <Form.Group className="mb-3">
                    <Form.Check
                        required
                        label="Agree to terms and conditions"
                        feedback="You must accept our terms to continue"
                        feedbackType="invalid"
                    />
                    </Form.Group>

                    <div className="text-center">
                    <Button variant="primary" type="submit">
                        Log In
                    </Button>
                    </div>
                </Form>
                </div>
            </main>

            <Footer />
        </div>

    );
};

export default LogIn;