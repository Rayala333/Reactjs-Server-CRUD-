import {UPDATE_PRODUCT_SUCCESS,UPDATE_PRODUCT_FAIL} from "../types/UpdateProduct";

const initialState={
    success:false
}
export const UpdateProductReducer =(state=initialState,action)=>{
    switch(action.type){
        case UPDATE_PRODUCT_SUCCESS:
            return {
                ...state,
                success : true
            }
        case UPDATE_PRODUCT_FAIL:
                return {
                    ...state,
                    success : false
                }
        default:
            return state;
        
    }

}