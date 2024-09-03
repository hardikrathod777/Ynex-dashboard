const inialState = {
    products: [],
    product: null,
    isLoading: false,
    isSubmit: false,
    isSingle: false,
    isErr: true
}

const productReducer = (state = inialState, action) => {

    switch (action.type) {

        case "ADD-S":
            return{
                ...state,
                isSubmit:true
            } 
        case "DONENAVIGATE":
            return{
                ...state,
                isSubmit:false
            }

        case "LOADING":
            return{
                ...state,
                isLoading:true
            }

        case "ADDPRO":
            // eslint-disable-next-line no-case-declarations
            let add = [...state.products, action.payload];
            // localStorage.setItem("myStudents", JSON.stringify(add));
            return {
                ...state,
                isSubmit: true,
                products: add,
                isLoading: false
            }

        case "GETPRO":
            return {
                ...state,
                isLoading: false,
                products: action.payload,
                isSubmit: false,
                isSingle: false,
                product: null
            };

        case "UPDATEDONE":
            return {
                ...state,
                isSingle: false,
                isSubmit: true
            }

        case "DALATEPRO":
            // eslint-disable-next-line no-case-declarations
            let myDatas = state.students;
            // eslint-disable-next-line no-case-declarations
            let newData = myDatas.filter((data) => {
                return data.id != action.payload
            })

            localStorage.setItem('myStudents', JSON.stringify(newData));
            return {
                ...state,
                students: newData
            }

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

        case "DELETE_PRO_R":
            return {
                ...state,
                isLoading: true,
                error: null,
            };

        case "DELETE_PRO_S":
            return{
                ...state,
                isLoading: false,
                products: state.products.filter(product => product.id !== action.payload),
            }

        case "DELETE_PRO_F":
            return{
                ...state,
                isLoading: false,
                error: action.payload,
            }

        case "UPDATE_PRO_R":
            return{
                ...state,
                isLoading: true,
                error: null,
            }

        case "UPDATE_PRO_S":
            return{
                ...state,
                isLoading: false,
                products: state.products.map(product =>
                product.id === action.payload.id ? action.payload : product
                ),
            }

        case "UPDATE_PRO_F":
            return{
                ...state,
                isLoading: false,
                error: action.payload,
            }

        case "GET_PRODUCT_BY_ID_R":
            return{
                ...state,
                isLoading: true,
            }    

        case "GET_PRODUCT_BY_ID_S":
            return{
                ...state,
                isLoading: false,
                product: action.payload,
                error: null,
            }
        
        case "GET_PRODUCT_BY_ID_F":
            return{
                ...state,
                isLoading: false,
                error: action.payload,
            }
        
        default:
            return state;
    }
}

export default productReducer;