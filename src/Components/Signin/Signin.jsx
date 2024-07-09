import './Signin.css'
import { FcGoogle } from "react-icons/fc";
import clouser_1 from '../../assets/2-NX07u2tZ.png';
import clouser_2 from '../../assets/3-D4NlMYxD.png';
import form_logo from '../../assets/download (2).png'
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
function Signin() {
    return (
        <>
            <div className='col-xxl-12 d-flex signup-main'>
                <div className='signup-form d-flex justify-content-center align-items-center'>
                    <div className='form-signin'>
                        <div>
                            <img src={form_logo}/>
                            <p className='logo-signup'>Sign Up</p>
                            <p className='welcome-s'>Hello Harry !</p>
                            <div>
                                <button className='google-btn'>
                                    <FcGoogle className='google-logo'/> <span>Sign In With Google</span>
                                </button>
                            </div>
                            <div className='form-layout'>
                                <Form noValidate>
                                <Row className="mb-3">
                                    <Form.Group as={Col} controlId="validationCustom01">
                                    <Form.Label className='text-default'>First name</Form.Label>
                                    <Form.Control
                                        required
                                        type="text"
                                        placeholder="First name"
                                    />
                                    </Form.Group>
                                    
                                </Row>
                                <Row className="">
                                    <Form.Group className="mb-3" controlId="formGroupPassword">
                                        <Form.Label className='text-default'>Password</Form.Label>
                                        <Form.Control type="password" placeholder="Password" />
                                    </Form.Group>
                                </Row>
                                <Form.Group as={Row} className="mb-3" controlId="formHorizontalCheck">
                                    <Col>
                                    <Form.Check label="Remember me" />
                                    </Col>
                                </Form.Group>
                                <Button type="submit" className='signup-btn'>Sign In</Button>
                                </Form>
                            </div>
                            <div className='sign-in-page'>
                                <p>Dont have an account? <a href='/signup'>Sign Up</a></p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='template-signup d-flex'>
                    <div className='clouser-div-style'>
                    <div id="carouselExampleSlidesOnly" className="carousel slide" data-bs-ride="carousel">
                        <div className="carousel-inner">
                            <div className="carousel-item active">
                                <img src={clouser_1}/>
                                <h3 className='signup-h'>Sign In</h3>
                                <p className='signup-p'>
                                    Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.
                                </p>
                            </div>
                            <div className="carousel-item">
                                <img src={clouser_2}/>
                                <h3 className='signup-h'>Sign In</h3>
                                <p className='signup-p'>
                                    Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.
                                </p>
                            </div>
                            <div className="carousel-item">
                                <img src={clouser_1}/>
                                <h3 className='signup-h'>Sign In</h3>
                                <p className='signup-p'>
                                    Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.
                                </p>
                            </div>
                        </div>
                    </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Signin