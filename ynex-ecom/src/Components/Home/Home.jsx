import './Home.css';
import pro_img_1 from '../../assets/1-DAsA0uct.png';
import { BsCart3 } from "react-icons/bs";
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { getproAsync } from '../../services/actions/getproAction';
import { addToCart } from '../../services/actions/cartActions'; // Add import for new action
// import { useNavigate } from 'react-router-dom';


function Home() {
    const dispatch =useDispatch();
    const { products, isLoading, error } = useSelector(state => state.getproReducer); // Assuming products are stored in productReducer

    useEffect(() => {
        dispatch(getproAsync()); // Dispatch action to fetch products
    }, [dispatch]);

    const handleAddToCart = (product) => {
        dispatch(addToCart(product));
    };

    // const navigate = useNavigate();
    if (isLoading) {
        return <div>Loading...</div>;
    }
    
    if (error) {
        return <div>Error: {error}</div>;
    }
    return (
        <>
            <div className='orders-page'>
                <row className='order-div row-cols row'>
                    {products.map((product) => (
                        <div className='product-div' key={product.id}>
                            <div className='pro-img-card'>
                                <img src={product.pro_img} className='pro-img-style'/>
                                <div className='cart-pos-div' onClick={() => handleAddToCart(product)}>
                                    <BsCart3/>
                                </div>
                            </div>
                            <div>
                                <p className='pro_brand'>{product.pro_name}</p>
                                <p className='pro_style'>{product.pro_type}</p>
                                <p className='pro_pr'>${product.actual_pr}</p>
                                <p className='pro_offer'>Offer Price ${product.discount}</p>
                            </div>
                        </div>
                    ))}
                    <div className='product-div'></div>
                    <div className='product-div'></div>
                    <div className='product-div'></div>
                    <div className='product-div'></div>
                    <div className='product-div'></div>
                </row>
            </div>
        </>
    )
}

export default Home