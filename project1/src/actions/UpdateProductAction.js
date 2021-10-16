import axios from "axios";
import {UPDATE_PRODUCT_SUCCESS,UPDATE_PRODUCT_FAIL} from "../types/UpdateProduct";

export const UpdateProduct = (p_id,p_cost)=>{
    return async (dispatch)=>{
        try{
            const {data} =  await axios.put("http://localhost:8080/updatabrand",{"p_id":p_id,"p_cost":p_cost} )
            dispatch({
                        type:UPDATE_PRODUCT_SUCCESS,
                        error:"",
                        result:data
                    })
        }catch(err){
            dispatch({
                        type:UPDATE_PRODUCT_FAIL,
                        error:err.message,
                        result:""
            })
        }

    }

}