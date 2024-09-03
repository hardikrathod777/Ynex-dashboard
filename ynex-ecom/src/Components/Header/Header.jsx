import './Header.css'
import logo_e from '../../assets/download (3).png'
import { Form } from 'react-bootstrap'
import { BsCart3 } from "react-icons/bs";
// import { Navigate } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';

function Header() {
    const navigate = useNavigate();
    // function cartnav(){
    //     navigate('/cart')
    // }
    function cartnav(){
        navigate('/cart');
    }
    return (
        <>
            <header>
                <div className='col-xxl-12 d-flex align-items-center'>
                    <div>
                        <img src={logo_e} className='img-logo-e'/>
                    </div>
                    <div className='ul-padding'>
                        <ul className='d-flex align-items-center justify-content-end'>
                            <li><a href='#'>Men</a></li>
                            <li><a href='#'>Women</a></li>
                            <li><a href='#'>Kids</a></li>
                            <li><a href='#'>Today Deal</a></li>
                            <li><a href='#'>Electronics</a></li>
                            <li><a href='#'>Fashion</a></li>
                            <li><a href='/'>All Products</a></li>
                        </ul>
                    </div>
                    <div className='d-flex' style={{marginLeft:'110px'}}>
                        <Form.Control type="text" placeholder="search" />
                        <button className='s-btn'>Search</button>
                        <button className='cart-btn' onClick={cartnav}><BsCart3 className='cart-h'/></button>
                    </div>
                </div>
            </header>
        </>
    )
}

export default Header