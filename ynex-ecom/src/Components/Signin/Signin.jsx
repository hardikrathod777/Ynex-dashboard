import './Signin.css'
import { FcGoogle } from "react-icons/fc";
import clouser_1 from '../../assets/2-NX07u2tZ.png';
import clouser_2 from '../../assets/3-D4NlMYxD.png';
import form_logo from '../../assets/download (3).png'
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { signInAsync } from '../../services/actions/authActions';
import { signInWithGoogle } from '../../firebaseConfig';

function Signin() {
    const [inputBox,setinputBox] = useState({
        email:'',
        password:''
    })

    const {isLogin } = useSelector(state => state.authReducer);

    const navigate =useNavigate();
    const dispatch =useDispatch();

    const handlechange =(e)=> {
        let name = e.target.name;
        let value = e.target.value;

        setinputBox({ ...inputBox, [name]: value });
    }

    const handleSubmit = async (e) => {

        e.preventDefault();
        // dispatch(signInAsync(inputBox))
        try {
            await dispatch(signInAsync(inputBox));
            history.push('/');
        } catch (error) {
            console.error('Sign in error:', error);
        }

    }

    
    const handleGoogleSignIn = async () => {
        try {
            const result = await signInWithGoogle();
            // Handle user information here
            console.log(result.user);
            navigate('/');
            } catch (error) {
            console.error('Google Sign-In error:', error);
            }
        };

    useEffect(() => {

        if (isLogin) {
            navigate('/')
        }

    }, [isLogin])

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
                                <button className='google-btn' onClick={handleGoogleSignIn}>
                                    <FcGoogle className='google-logo'/> <span>Sign In With Google</span>
                                </button>
                            </div>
                            <div className='form-layout'>
                                <Form noValidate onSubmit={handleSubmit}>
                                <Row className="mb-3">
                                    <Form.Group as={Col} controlId="validationCustom01">
                                    <Form.Label className='text-default'>E-mail</Form.Label>
                                    <Form.Control
                                        required
                                        type="email"
                                        placeholder="E-mail"
                                        onChange={handlechange} value={inputBox.email} name='email'
                                    />
                                    </Form.Group>
                                    
                                </Row>
                                <Row className="">
                                    <Form.Group className="mb-3" controlId="formGroupPassword">
                                        <Form.Label className='text-default'>Password</Form.Label>
                                        <Form.Control type="password" placeholder="Password" 
                                        onChange={handlechange} value={inputBox.password} name='password'
                                        />
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