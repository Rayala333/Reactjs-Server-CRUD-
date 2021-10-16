import { DELETE_PRODUCT_FAIL, DELETE_PRODUCT_SUCCES } from "../types/DeleteProductTypes"

const initialState ={
    error:"",
    result:"",
}

export const deleteProductReducer =(state=initialState,action)=>{
            switch(action.type){
                case DELETE_PRODUCT_SUCCES:
                case DELETE_PRODUCT_FAIL:
                    return{
                        ...state,
                        error:action.error,
                        result:action.result
                    }

                default:
                    return state
            }
}