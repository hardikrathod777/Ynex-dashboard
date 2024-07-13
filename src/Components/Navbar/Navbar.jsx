import { useState } from 'react';
import './Navbar.css'
import { AiOutlineHome } from "react-icons/ai";
import { MdAddCircleOutline } from "react-icons/md";
import { FiEdit3 } from "react-icons/fi";
import { TbListDetails } from "react-icons/tb";
import { useNavigate } from 'react-router-dom';
// import { BiDetail } from "react-icons/bi";
// import { Navigate } from 'react-router-dom';



function Navbar() {
    const [activeId, setActiveId] = useState(null);
    let navigate = useNavigate();

    const toggleClass = (id) => {
        setActiveId(id);
    };
    
    return (
        <>
            <div className='main-navbar FM'>
                <div className='navbar-inner-div'>
                    <ul>
                        <p className='nav-p'>MAIN</p>
                        <li  className={activeId === 1 ? 'm-active nav' : 'nav'} 
                            onClick={() => {
                                toggleClass(2);
                                navigate('/');
                            }}
                            data-toggle="tab" 
                            id='1'><AiOutlineHome className='navbar-icon'/><p>Dashboard</p></li>
                        <p className='nav-p'>PAGES</p>
                        <li  className={activeId === 2 ? 'm-active nav' : 'nav'} 
                            onClick={() => {
                                toggleClass(2);
                                navigate('/addproduct');
                            }}
                            data-toggle="tab" 
                            id='2'><MdAddCircleOutline className='navbar-icon'/><p>Add Products</p></li>
                        <li  className={activeId === 3 ? 'm-active nav' : 'nav'} 
                            onClick={() => {
                                toggleClass(3);
                                navigate('/editproduct');
                            }} 
                            data-toggle="tab" 
                            id='3'><FiEdit3 className='navbar-icon'/><p>Edit Products</p></li>
                        {/* <li  className={activeId === 4 ? 'm-active nav' : 'nav'} 
                            onClick={() => toggleClass(4)} 
                            data-toggle="tab" 
                            id='4'><BiDetail className='navbar-icon'/><p>Order Details</p></li> */}
                        <li  className={activeId === 4 ? 'm-active nav' : 'nav'} 
                            onClick={() => {
                                toggleClass(4);
                                navigate('/Productlist');
                            }}  
                            data-toggle="tab" 
                            id='5'><TbListDetails className='navbar-icon'/><p>Products List</p></li>
                    </ul>
                </div>
            </div>
        </>
    )
}

export default Navbar