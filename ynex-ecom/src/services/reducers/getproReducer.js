const inialState = {
    products: [ ],
    product: null,
    isLoading: false,
    isSubmit: false,
    isSingle: false,
    error: false
}

const getproReducer = (state = inialState, action) => {
    switch (action.type) {
        case "GET_PRO_R":
            return {
                ...state,
                isLoading: true,
                error: null,
            };

        case "GET_PRO_S":
            return {
                ...state,
                isLoading: false,
                products: action.payload,
                isSubmit: false,
                isSingle: false,
                product: null
            };

        case "GET_PRO_F":
            return {
                ...state,
                isLoading: false,
                error: action.payload,
                isSubmit: false,
                isSingle: false,
                product: null
            };

        default:
            return state;
    }
}

export default getproReducer;