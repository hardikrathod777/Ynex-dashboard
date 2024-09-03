// src/services/actions/cartActions.js

import { addDoc, collection,getDocs,deleteDoc, doc } from "firebase/firestore";
import { db } from "../../firebaseConfig";

export const ADD_TO_CART = 'ADD_TO_CART';
export const ADD_TO_CART_SUCCESS = 'ADD_TO_CART_SUCCESS';
export const ADD_TO_CART_FAILURE = 'ADD_TO_CART_FAILURE';

export const addToCart = (product) => async (dispatch) => {
    dispatch({ type: ADD_TO_CART });

    try {
        // Add product to the cart collection in Firestore
        const cartRef = collection(db, 'cart');
        await addDoc(cartRef, product);

        dispatch({ type: ADD_TO_CART_SUCCESS, payload: product });
    } catch (error) {
        dispatch({ type: ADD_TO_CART_FAILURE, payload: error.message });
    }
};
export const FETCH_CART_REQUEST = 'FETCH_CART_REQUEST';
export const FETCH_CART_SUCCESS = 'FETCH_CART_SUCCESS';
export const FETCH_CART_FAILURE = 'FETCH_CART_FAILURE';

export const fetchCartItems = () => async (dispatch) => {
    dispatch({ type: FETCH_CART_REQUEST });

    try {
        const cartRef = collection(db, 'cart');
        const querySnapshot = await getDocs(cartRef);
        const cartItems = querySnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
        dispatch({ type: FETCH_CART_SUCCESS, payload: cartItems });
    } catch (error) {
        dispatch({ type: FETCH_CART_FAILURE, payload: error.message });
    }
};

export const REMOVE_FROM_CART = 'REMOVE_FROM_CART';
export const REMOVE_FROM_CART_SUCCESS = 'REMOVE_FROM_CART_SUCCESS';
export const REMOVE_FROM_CART_FAILURE = 'REMOVE_FROM_CART_FAILURE';

export const removeFromCart = (id) => async (dispatch) => {
    dispatch({ type: REMOVE_FROM_CART });

    try {
        const itemRef = doc(db, 'cart', id);
        await deleteDoc(itemRef);

        dispatch({ type: REMOVE_FROM_CART_SUCCESS, payload: id });
    } catch (error) {
        dispatch({ type: REMOVE_FROM_CART_FAILURE, payload: error.message });
        console.error("Error removing item: ", error);
    }
};