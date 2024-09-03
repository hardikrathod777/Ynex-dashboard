import './Singlepro.css';
import pro_img_1 from '../../assets/15-DSmclY0L.png'
function Singlepro() {
    return (
        <>
            <div className='main_div_pro_d'>
                <div className='inner_div'>
                    <div className='pro_imgs'>
                        <div className='pro_img_byp'>
                            <img src={pro_img_1} />
                        </div>
                        <div className='btn-div'>
                            <button>
                                View All Products
                            </button>
                        </div>
                    </div>
                    <div className='pro_det'>
                        <div>
                            <p className='product_full_name'>Orange Watch Series 4 (GPS + Cellular, 44mm) - Colored Aluminium Case with Multiple Featured Sports Band - Regular</p>
                        </div>
                        <div>
                            
                        </div>
                    </div>
                    <div className='pro_cart_other'>

                    </div>
                </div>
            </div>
        </>
    )
}

export default Singlepro