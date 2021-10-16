import { Add_PRODUCT, ADD_PRODUCT_FAIL, ADD_PRODUCT_SUCCES } from "../types/AddProductType"

const initialState = {
    // loading:"",
    result : "",
    // err:""
}
export const AddProductReducer = (state=initialState,action)=>{
        switch(action.type){
            case Add_PRODUCT:
            case ADD_PRODUCT_SUCCES:
            case ADD_PRODUCT_FAIL:
                return{
                    ...state,
                    loading:action.loading,
                    result:action.result,
                    err:action.err
                }     
            default:
                return state;
            }
}
export default AddProductReducer;