import { PRODUCT_LOADING, PRODUCT_LOADING_FAIL, PRODUCT_LOADING_SUCCESS } from "../types/ProductTypes"

const initialState = {
    loading:false,  
    err:[],
    products:[]
}

const ProductReducer = (state=initialState,action)=>{
    switch(action.type){
        case PRODUCT_LOADING:
        case PRODUCT_LOADING_SUCCESS:
        case PRODUCT_LOADING_FAIL:
            return{
                    ...state,
                    loading:action.loading,
                    products:action.products,
                    err:action.err
            }
        default:
            return state;
    }

}
export default ProductReducer