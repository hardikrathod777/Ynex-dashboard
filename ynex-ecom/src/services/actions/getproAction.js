import { collection, doc, getDoc, getDocs } from "firebase/firestore";
import { db } from "../../firebaseConfig";


export const getProductsRequest = () => {
    return {
        type: "GET_PRO_R"
    }
};

export const getProductsSuccess = (products) => {
    return{
        type: "GET_PRO_S",
        payload: products,
    }
};

export const getProductsFailure = (error) => {
    return{
        type: "GET_PRODUCTS_FAILURE",
        payload: error,
    }
};

export const getProductByIdRequest = () => {
    return{
    type: "GET_PRODUCT_BY_ID_R",
    }
};

export const getProductByIdSuccess = (product) => {
    return{
        type: "GET_PRODUCT_BY_ID_S",
        payload: product,
    }
};

export const getProductByIdFailure = (error) =>{
    return{
        type: "GET_PRODUCT_BY_ID_F",
        payload: error,
    }
};
export const getproAsync = () => async (dispatch) => {
    dispatch(getProductsRequest());
    try {
    const querySnapshot = await getDocs(collection(db, 'products'));
    const products = querySnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
    dispatch(getProductsSuccess(products));
} catch (error) {
    dispatch(getProductsFailure(error.message));
}
};
export const getProductById = (id) => async (dispatch) => {
    dispatch(getProductByIdRequest());
    try {
    const docRef = doc(db, 'products', id);
    const docSnap = await getDoc(docRef);
    if (docSnap.exists()) {
    dispatch(getProductByIdSuccess({ id: docSnap.id, ...docSnap.data() }));
    } else {
    throw new Error('Product not found');
    }
} catch (error) {
    dispatch(getProductByIdFailure(error.message));
}
};