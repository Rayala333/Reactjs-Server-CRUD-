import axios from "axios"
import { DELETE_PRODUCT_FAIL, DELETE_PRODUCT_SUCCES } from "../types/DeleteProductTypes";

export const deleteProduct = (id)=>{
    return async (dispatch)=>{
        try{
            const {data} =  await axios.delete("http://localhost:8080/deletebrand",{data :{"p_id":id}} )
            dispatch({type:DELETE_PRODUCT_SUCCES,
                        error:"",
                        // result:"success"or,
                        result:data
                    })
        }catch(err){
            dispatch({
                        type:DELETE_PRODUCT_FAIL,
                        error:err.message,
                        result:"Fail"
            })
        }

    }
}