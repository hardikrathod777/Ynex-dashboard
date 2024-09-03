// src/services/reducers/cartReducer.js

import { 
    ADD_TO_CART, 
    ADD_TO_CART_SUCCESS, 
    ADD_TO_CART_FAILURE, 
    FETCH_CART_REQUEST, 
    FETCH_CART_SUCCESS, 
    FETCH_CART_FAILURE,
    REMOVE_FROM_CART,
    REMOVE_FROM_CART_SUCCESS,
    REMOVE_FROM_CART_FAILURE 
} from '../actions/cartActions';

const initialState = {
    cart: [],
    isLoading: false,
    error: null,
};

const cartReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_TO_CART:
            return {
                ...state,
                isLoading: true,
                error: null,
            };
        case ADD_TO_CART_SUCCESS:
            return {
                ...state,
                isLoading: false,
                cart: [...state.cart, action.payload],
            };
        case ADD_TO_CART_FAILURE:
            return {
                ...state,
                isLoading: false,
                error: action.payload,
            };
        case FETCH_CART_REQUEST:
            return {
                ...state,
                isLoading: true,
                error: null,
            };
        case FETCH_CART_SUCCESS:
            return {
                ...state,
                cart: action.payload.map(item => ({
                    ...item,
                    quantity: item.quantity || 1  // Default quantity to 1 if not provided
                })),
                isLoading: false,
            };
        case FETCH_CART_FAILURE:
            return {
                ...state,
                isLoading: false,
                error: action.payload,
            };
        case REMOVE_FROM_CART:
            return {
                ...state,
                isLoading: true,
                error: null,
            };
        case REMOVE_FROM_CART_FAILURE:
            return {
                ...state,
                isLoading: false,
                error: action.payload,
            };
        case REMOVE_FROM_CART_SUCCESS:
            return {
                ...state,
                isLoading: false,
                cart: state.cart.filter(item => item.id !== action.payload),
            };
        default:
            return state;
    }
};

export default cartReducer;
