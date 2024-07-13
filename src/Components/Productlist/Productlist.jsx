import './Productlist.css'
import Table from 'react-bootstrap/Table';
import pro_1_img from '../../assets/1-DAsA0uct (1).png'
import { MdOutlineEdit } from "react-icons/md";
import { RiDeleteBinLine } from "react-icons/ri";
import { getproAsync,deleteproAsync } from '../../services/actions/proAction';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

function Productlist() {
    const dispatch = useDispatch();
    const { products, isLoading, error } = useSelector(state => state.productReducer); // Assuming products are stored in productReducer

    useEffect(() => {
        dispatch(getproAsync()); // Dispatch action to fetch products
    }, [dispatch]);
    const handleDelete = (productId) => {
        dispatch(deleteproAsync(productId));
    };
    const navigate = useNavigate();

    if (isLoading) {
        return <div>Loading...</div>;
    }
    
    if (error) {
        return <div>Error: {error}</div>;
    }

    const handleEdit = (id) => {
        navigate(`/editproduct/${id}`);
    };
    return (
        <>
            <div className='add-product-main'>
                <div className='addpro-form-title'>
                    <h3>Products List</h3>
                </div>
                <div className='pro-div-box'>
                    <Table bordered>
                    <thead>
                        <tr>
                            <th style={{width:'327.83px'}}>Product</th>
                            <th style={{width:'98.61px'}}>Category</th>
                            <th style={{width:'78.53px'}}>Price</th>
                            <th style={{width:'71.22px'}}>Stock</th>
                            <th style={{width:'117.79px'}}>Gender</th>
                            <th style={{width:'170.75px'}}>Seller</th>
                            <th style={{width:'196.33px'}}>Published</th>
                            <th style={{width:'146.15px'}}>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                    {products.map((product) => (
                        <tr key={product.id}>
                            <td className=''>
                                <div className='d-flex'>
                                    <div className='pro_img_1'>
                                        <img src={pro_1_img} />
                                    </div>
                                    <div className='pro_name'>
                                        <p>{product.pro_name}</p>
                                    </div>
                                </div>
                            </td>
                            <td>
                                <div className='pro_cat'>
                                    <p>{product.category}</p>
                                </div>
                            </td>
                            <td>
                                <div className='pro_price'>
                                    <p>${product.actual_pr}</p>
                                </div>
                            </td>
                            <td>
                                <div className='pro_stock'>
                                    <p>{product.pro_status}</p>
                                </div>
                            </td>
                            <td>
                                <div className='pro_gender'>
                                    <p>{product.gender}</p>
                                </div>
                            </td>
                            <td>
                                <div className='pro_saller'>
                                    <p>{product.pro_brand}</p>
                                </div>
                            </td>
                            <td>
                                <div className='pro_date'>
                                    <p>24,Nov 2022 - 04:42</p>
                                </div>
                            </td>
                            <td>
                                <div className='d-flex action_btn'>
                                    <butoon className='edit_btn' onClick={() => handleEdit(product.id)}>
                                        <MdOutlineEdit/>
                                    </butoon>
                                    <butoon className='delete_btn' onClick={() => handleDelete(product.id)}>
                                        <RiDeleteBinLine/>
                                    </butoon>
                                </div>
                            </td>
                        </tr>
                    ))}
                    </tbody>
                    </Table>
                </div>
            </div>
        </>
    )
}

export default Productlist