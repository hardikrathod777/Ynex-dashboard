import './Cart.css'
import Table from 'react-bootstrap/Table';
// import tabproimg from '../../assets/1-DAsA0uct.png';
import { useEffect, useState } from 'react';
import { FaRegHeart } from "react-icons/fa";
import { RiDeleteBin5Line } from "react-icons/ri";
import { useDispatch, useSelector } from 'react-redux';
import { fetchCartItems } from '../../services/actions/cartActions';
import { removeFromCart } from '../../services/actions/cartActions';

function Cart() {

    const dispatch =useDispatch();
    const {cart, isLoading} = useSelector(state => state.cartReducer);

    console.log("hr",isLoading);

    useEffect(() => {
        dispatch(fetchCartItems());
    }, [dispatch]);

    useEffect(() =>{
        console.log("HEllo");
        
    })
    const handleRemoveItem = (id) => {
        // Implement functionality to remove item from Firestore and update state
        dispatch(removeFromCart(id));
    };

    const [count, setCount] = useState();
    const pricePerItem = 229;
    const handleDecrement = () => {
        if (count > 1) {
        setCount(count - 1);
        }
    };
    const handleIncrement = () => {
        setCount(count + 1);
    };
    const totalPrice = pricePerItem * count;
    return (
        <>
            <div className="cart-box">
                <div className='cart-box-div'>
                    <div className='cart-box-h'>
                        <p>Cart Items</p>
                    </div>
                    <div className='pro_table_div'>
                    <Table bordered>
                    <thead>
                        <tr>
                            <th className='t_pro_name'>Product Name</th>
                            <th className='t_pro_p'>Price</th>
                            <th className='t_pro_q'>Quantity</th>
                            <th className='t_pro_t'>Total</th>
                            <th className='t_pro_a'>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                    {
                    cart.length > 0  ? (
                        cart.map(item =>(
                        <tr key={item.id}>
                            <td>
                                <div className='d-flex'>
                                    <div className='tab_pro_img'>
                                        <img src={item.pro_img}/>
                                    </div>
                                    <div className='pro-t-info'>
                                        <p className='t-pro-name'>{item.pro_name}</p>
                                        <p className='t-pro-size'>Size:<span className='t-pro-st'>{item.pro_size}</span></p>
                                        <p className='t-pro-c'>Color:<span className='t-pro-ct'>{item.pro_color}</span></p>
                                    </div>
                                </div>
                            </td>
                            <td>
                                <div className='pro-t-p'>
                                    <p>${item.actual_pr}</p>
                                </div>
                            </td>
                            <td>
                                <div className='d-flex justify-content-center'>
                                    <div className='counter-container'>
                                        <button className="counter-btn" onClick={() => handleDecrement(item.id)}>-</button>
                                        <span className="counter-number">{item.quantity || 1}</span>
                                        <button className="counter-btn" onClick={() => handleIncrement(item.id)}>+</button>
                                    </div>
                                </div>
                            </td>
                            <td>
                                <div className='pro-t-p'>
                                    <p>${item.actual_pr * item.quantity}</p>
                                </div>
                            </td>
                            <td>
                                <div className='action-div'>
                                    <button className='action-btn'><FaRegHeart className='a_btn_icon'/></button>
                                    <button className='delete-btn' onClick={() => handleRemoveItem(item.id)}><RiDeleteBin5Line className='d_btn_icon'/></button>
                                </div>
                            </td>
                        </tr>
                    ))
                    ) : (
                        <tr>
                            <td colSpan="5">No items in cart</td>
                        </tr>
                    )
                    }
                        {/* <tr>
                            <td>
                                <div className='d-flex'>
                                    <div className='tab_pro_img'>
                                        <img src={tabproimg}/>
                                    </div>
                                    <div className='pro-t-info'>
                                        <p className='t-pro-name'>Dapzem & Co</p>
                                        <p className='t-pro-size'>Size:<span className='t-pro-st'>Large</span></p>
                                        <p className='t-pro-c'>Color:<span className='t-pro-ct'>Gray</span></p>
                                    </div>
                                </div>
                            </td>
                            <td>
                                <div className='pro-t-p'>
                                    <p>$333</p>
                                </div>
                            </td>
                            <td>
                                <div className='d-flex justify-content-center'>
                                    <div className='counter-container'>
                                        <button className="counter-btn" onClick={handleDecrement}>-</button>
                                        <span className="counter-number">{count}</span>
                                        <button className="counter-btn" onClick={handleIncrement}>+</button>
                                    </div>
                                </div>
                            </td>
                            <td>
                                <div className='pro-t-p'>
                                    <p>${totalPrice}</p>
                                </div>
                            </td>
                            <td>
                                <div className='action-div'>
                                    <button className='action-btn'><FaRegHeart className='a_btn_icon'/></button>
                                    <button className='delete-btn'><RiDeleteBin5Line className='d_btn_icon'/></button>
                                </div>
                            </td>
                        </tr> */}
                    </tbody>
                    </Table>
                    </div>
                </div>
                <div className='cart-box-price'>
                    <div className='cart_box_sale'>
                        <div className='sale-main-div'>
                            <p className='s_end_p'>Sale Ends in<span>18 Hours : 32 Minutes</span></p>
                        </div>
                    </div>
                    <div className='delivery-div'>
                        <div>
                            <p className='d_p'>Delivery :</p>
                            <div className='f_border d-flex'>
                                <div className='free_d'>Free Delivery</div><div className='ex_d'>Express Delivery</div>
                            </div>
                            <p className='pro_time'>Delivered by 24,Nov 2022</p>
                        </div>
                    </div>
                    <div className='sub_total'>
                        <div className='S_total d-flex justify-content-between'>
                            <div className='S-T'>Sub Total</div>
                            <div className='S-t-p'>$1,299</div>
                        </div>
                        <div className='S_total d-flex justify-content-between'>
                            <div className='S-T'>Discount</div>
                            <div className='d-t-p'>10% - $129</div>
                        </div>
                        <div className='S_total d-flex justify-content-between'>
                            <div className='S-T'>Delivery Charges</div>
                            <div className='D_C'>- $49</div>
                        </div>
                        <div className='S_total d-flex justify-content-between'>
                            <div className='S-T'>Service Tax (18%)</div>
                            <div className='S-t-p'>- $169</div>
                        </div>
                        <div className='S_total d-flex justify-content-between'>
                            <div className='S-T'>Total :</div>
                            <div className='Total_p'>$1,387</div>
                        </div>
                    </div>
                    <div style={{padding:'16px'}}>
                        <div>
                            <button className='Pro-chek'>Proceed To Checkout</button>
                            <button className='Cont-shop'>Continue Shopping</button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Cart