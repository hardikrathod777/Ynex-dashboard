import './Addproduct.css'
import { useEffect, useState } from 'react';
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
// import InputGroup from 'react-bootstrap/InputGroup';
import { useDropzone } from 'react-dropzone';
import Row from 'react-bootstrap/Row';
import { useNavigate } from 'react-router-dom';
import { Spinner } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import {addproAsync} from '../../services/actions/proAction';
import { uploadFileToStorage } from '../../services/actions/proAction';

function Addproduct() {
    const { isSubmit, isLoading } = useSelector(state => state.productReducer);
    const [validated, setValidated] = useState(false);
    const [inputText,setinputText] = useState({
        pro_name:'',
        actual_pr:'',
        dealer_pr:'',
        discount:'',
        category:'',
        gender:'',
        pro_type:'', 
        pro_wg:'',
        pro_size:'',
        pro_brand:'',
        pro_img:'',
        pro_color:'',
        pro_cost:'',
        pro_des:'',
        pro_status:'',
        pro_aval:'',

    });
    const navigate = useNavigate();
    const dispatch =useDispatch();
    const handleInput = (e) => {
        let name = e.target.name;
        let value = e.target.value;
        setinputText({...inputText, [name]:value});
    }

    const handleSubmit = async (e) => {
        e.preventDefault();

       let url =  await handleFileUpload();

       
        let obj = {
            ...inputText,
            pro_img:url[0]
        }

        

        console.log("hellpp", obj);
        dispatch(addproAsync(obj))
        setinputText({
            pro_name:'',
            actual_pr:'',
            dealer_pr:'',
            discount:'',
            category:'',
            gender:'',
            pro_type:'',
            pro_wg:'',
            pro_size:'',
            pro_brand:'',
            pro_img:'',
            pro_color:'',
            pro_cost:'',
            pro_des:'',
            pro_status:'',
            pro_aval:'',
        })

        // const form = e.currentTarget;
        // if (form.checkValidity() === false) {
        //     e.preventDefault();
        //     e.stopPropagation();
        // }
    
        setValidated(true);
    };

    
    const [files, setFiles] = useState([]);
    const { getRootProps, getInputProps } = useDropzone({
        accept: 'image/*',
        onDrop: (acceptedFiles) => setFiles(acceptedFiles),
    });

    const handleFileUpload = async () => {
        try {
            const uploadedUrls = await Promise.all(
                files.map(async (file) => {
                    const downloadUrl = await uploadFileToStorage(file); // Call Firebase storage upload function
                    return downloadUrl;
                })
            );
    
           return uploadedUrls;
    
        } catch (error) {
            console.error('Error uploading file:', error);
            // Handle error (e.g., show error message)
        }
    };
    useEffect(()=>{
        if(isSubmit) {
            navigate('/Productlist');
        }
    },[isSubmit,navigate])

    return (
        
        <>
            <div className='add-product-main'>
                <div className='addpro-form-title'>
                    <h3>Add Product</h3>
                </div>
                <div className='form-div-box'>
                <Form noValidate onSubmit={handleSubmit}>
                    <Row className="mb-3">
                        <Form.Group className="add_f_l" as={Col} md="6" controlId="validationCustom01">
                        <Form.Label>Product Name</Form.Label>
                        <Form.Control
                            required
                            type="text"
                            placeholder=" Name"
                            name='pro_name'
                            value={inputText.pro_name}
                            onChange={handleInput}
                        />
                        </Form.Group>

                        <Form.Group className="add_f_l" as={Col} md="2" controlId="validationCustom03">
                        <Form.Label>Actual Price</Form.Label>
                        <Form.Control type="text" placeholder="Actual Price" value={inputText.actual_pr}  name='actual_pr' onChange={handleInput} required />
                        </Form.Group>

                        <Form.Group className="add_f_l" as={Col} md="2" controlId="validationCustom04">
                        <Form.Label>Dealer Price</Form.Label>
                        <Form.Control type="text" placeholder="Dealer Price" value={inputText.dealer_pr}  name='dealer_pr' onChange={handleInput} required />
                        </Form.Group>

                        <Form.Group className="add_f_l" as={Col} md="2" controlId="validationCustom05">
                        <Form.Label>Discount</Form.Label>
                        <Form.Control type="text" placeholder="Discount in %" value={inputText.discount}  name='discount' onChange={handleInput} required />
                        </Form.Group>
                    </Row>
                    <Row className="mb-3">
                        <Form.Group className="add_f_l" as={Col} md="3"controlId="formGridState">
                        <Form.Label>Category</Form.Label>
                        <Form.Select defaultValue="Choose..." value={inputText.category} name='category' onChange={handleInput}>
                            <option className="option-s">Category</option>
                            <option className="option-s">Clothing</option>
                            <option className="option-s">Footwear</option>
                            <option className="option-s">Accesories</option>
                            <option className="option-s">Grooming</option>
                            <option className="option-s">Ethic & Festive</option>
                            <option className="option-s">Jewellery</option>
                            <option className="option-s">Toys & Babycare</option>
                        </Form.Select>
                        </Form.Group>

                        <Form.Group className="add_f_l" as={Col} md="3"controlId="formGridState">
                        <Form.Label>Gender</Form.Label>
                        <Form.Select defaultValue="Select" value={inputText.gender} name='gender' onChange={handleInput}>
                            <option className="option-s">Select</option>
                            <option className="option-s">All</option>
                            <option className="option-s">Male</option>
                            <option className="option-s">Female</option>
                            <option className="option-s">Others</option>
                        </Form.Select>
                        </Form.Group>

                        <Form.Group className="add_f_l" as={Col} md="3" controlId="validationCustom04">
                        <Form.Label>Product Type</Form.Label>
                        <Form.Control type="text" placeholder="Type" value={inputText.pro_type}  name='pro_type' onChange={handleInput} required />
                        </Form.Group>

                        <Form.Group className="add_f_l" as={Col} md="3" controlId="validationCustom05">
                        <Form.Label>Item Weight</Form.Label>
                        <Form.Control type="number" placeholder="Weight in gms" value={inputText.pro_wg}  name='pro_wg' onChange={handleInput} required />
                        </Form.Group>
                    </Row>
                    <Row className='mb-3' md="3">
                        <Form.Group className="add_f_l" as={Col} md="3"controlId="formGridState">
                        <Form.Label>Size</Form.Label>
                        <Form.Select defaultValue="Select" value={inputText.pro_size} name='pro_size' onChange={handleInput}>
                            <option className="option-s">Select</option>
                            <option className="option-s">Extra Small</option>
                            <option className="option-s">Small</option>
                            <option className="option-s">Medium</option>
                            <option className="option-s">Large</option>
                            <option className="option-s">Extra Large</option>
                        </Form.Select>
                        </Form.Group>

                        <Form.Group className="add_f_l" as={Col} md="3" controlId="validationCustom04">
                        <Form.Label>Brand</Form.Label>
                        <Form.Select defaultValue="Select" value={inputText.pro_brand} name='pro_brand' onChange={handleInput}>
                            <option className="option-s">Select</option>
                            <option className="option-s">Armani</option>
                            <option className="option-s">Lacoste</option>
                            <option className="option-s">Puma</option>
                            <option className="option-s">Spykar</option>
                            <option className="option-s">Mufti</option>
                            <option className="option-s">Home Town</option>
                            <option className="option-s">Arrabi</option>
                        </Form.Select>
                        </Form.Group>
                        <Form.Group className="add_f_l file-in-div" as={Col} md="6">
                            <Form.Label >Product Images:</Form.Label>
                            <div className='file-input' {...getRootProps()}>
                                <input {...getInputProps()} required/>
                                <p>Drag & drop your file here or click</p>
                                {/* Display uploaded files */}
                                {files.map((file) => (
                                    <div key={file.name}>
                                    <p>{file.name}</p>
                                    </div>
                                ))}
                            </div>
                        </Form.Group>
                    </Row>
                    <Row md="3" className='mb-3'>
                        <Form.Group className="add_f_l" as={Col} md="3"controlId="formGridState">
                        <Form.Label>Color</Form.Label>
                        <Form.Select defaultValue="Select" value={inputText.pro_color} name='pro_color' onChange={handleInput}>
                            <option className="option-s">White</option>
                            <option className="option-s">Black</option>
                            <option className="option-s">Red</option>
                            <option className="option-s">Orange</option>
                            <option className="option-s">Yellow</option>
                            <option className="option-s">Green</option>
                            <option className="option-s">Blue</option>
                            <option className="option-s">Pink</option>
                        </Form.Select>
                        </Form.Group>

                        <Form.Group className="add_f_l" as={Col} md="3" controlId="validationCustom04">
                        <Form.Label>Enter Cost</Form.Label>
                            <Form.Control type="number" placeholder="Cost" value={inputText.pro_cost} name='pro_cost' onChange={handleInput} required />
                        </Form.Group>
                    </Row>
                    <Row md="3" className='mb-3'>
                        <Form.Group className="add_f_l" as={Col} md="6" controlId="validationCustom01">
                        <Form.Label>Product Description</Form.Label>
                        <Form.Control as="textarea" aria-label="With textarea" value={inputText.pro_des} name='pro_des' onChange={handleInput} required/>
                        </Form.Group>
                    </Row>

                    <Row md='6' className='mb-3'>
                        <Form.Group className="add_f_l" as={Col} md="3"controlId="formGridState">
                            <Form.Label>Published Status</Form.Label>
                            <Form.Select defaultValue="Select" value={inputText.pro_status} name='pro_status' onChange={handleInput}>
                                <option className="option-s">Select</option>
                                <option className="option-s">Published</option>
                                <option className="option-s">Scheduled</option>
                            </Form.Select>
                            </Form.Group>
            
                        <Form.Group className="add_f_l" as={Col} md="3"controlId="formGridState">
                        <Form.Label>Availability</Form.Label>
                        <Form.Select defaultValue="Select" value={inputText.pro_aval} name='pro_aval' onChange={handleInput}>
                            <option className="option-s">Select</option>
                            <option className="option-s">In Stock</option>
                            <option className="option-s">Out Of Stock</option>
                        </Form.Select>
                        </Form.Group>
                    </Row>
                    <Button type="submit" className='Add_pro_btn'>
                        Add Product
                    </Button>
                    </Form>
                </div>
            </div>
        </>
    )
}

export default Addproduct
