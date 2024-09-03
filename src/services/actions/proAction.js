import { collection, addDoc } from "firebase/firestore";
import { db } from "../../firebaseConfig";
import { getDocs ,deleteDoc,doc,updateDoc,getDoc } from 'firebase/firestore';
import { ref, uploadBytesResumable, getDownloadURL } from 'firebase/storage';
import { storage } from '../../firebaseConfig';


export const addpro = (data) => {

    return {
        type: "ADDPRO",
        payload: data
    }

}

export const singlepro = (single) => {

    return {
        type: "SINGLEPRO",
        payload: single
    }
}


export const updateDone = () => {
    return {
        type: "UPDATEDONE"
    }
}

export const deletepro = (id) => {

    return {
        type: "DELETEPRO",
        payload: id
    }
}

const loading = () => {
    return {
        type: "LOADING"
    }

}

export const navigateDone = () => {

    return {
        type: "DONENAVIGATE"
    }

}

export const deleteProductRequest = () => {
    return{
        type: "DELETE_PRO_R",
    }
};

export const deleteProductSuccess = (productId) => {
    return{
        type: "DELETE_PRO_S",
        payload: productId,
    }
};

export const deleteProductFailure = (error) => {
    return{
        type: "DELETE_PRO_F",
        payload: error,
    }
};


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
export const updateProductRequest = () => {
    return{
        type: "UPDATE_PRO_R",
    }
};

export const updateProductSuccess = (product) => {
    return{
        type: "UPDATE_PRO_S",
        payload: product,
    }
};

export const updateProductFailure = (error) => {
    return{
        type: "UPDATE_PRO_F",
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

export const addproAsync = (obj) => {

    return async dispatch => {

        dispatch(loading());

        

        try {
            const docRef = await addDoc(collection(db, "products"), obj);
            console.log("Document written with ID: ", docRef.id, docRef);
            dispatch({type:"ADD-S"})
        } catch (e) {
            console.error("Error adding document: ", e);
        }
    }
}

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

export const deleteproAsync = (productId) => async (dispatch) => {
    dispatch(deleteProductRequest());
    try {
    await deleteDoc(doc(db, 'products', productId));
    dispatch(deleteProductSuccess(productId));
} catch (error) {
    dispatch(deleteProductFailure(error.message));
}
};

export const updateProAsync = (id, updatedData) => async (dispatch) => {
    dispatch(updateProductRequest());
    try {
    const docRef = doc(db, 'products', id);
    await updateDoc(docRef, updatedData);
    dispatch(updateProductSuccess({ id, ...updatedData }));
} catch (error) {
    dispatch(updateProductFailure(error.message));
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

export const uploadFileToStorage = async (file) => {
    const storageRef = ref(storage, `pro_img/${file.name}`);
    const uploadTask = uploadBytesResumable(storageRef, file);

    try {
        // Upload file
        await uploadTask;

        // Get download URL
        const downloadURL = await getDownloadURL(storageRef);
        console.log('File uploaded successfully. Download URL:', downloadURL);

        return downloadURL;

    } catch (error) {
        console.error('Error uploading file to storage:', error);
        throw error;
    }
};