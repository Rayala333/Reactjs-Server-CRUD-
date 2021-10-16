
import axios from "axios";

import {PRODUCT_LOADING,PRODUCT_LOADING_SUCCESS,PRODUCT_LOADING_FAIL} from "../types/ProductTypes";

const getProducts = () => {
    return async (dispatch)=>{

        dispatch({ type:PRODUCT_LOADING,
                    err:"",
                    products:[],
                    loading:false
                });
        
        try{
            const {data} = await axios.get('http://localhost:8080/getbrand');
            dispatch({
                    type:PRODUCT_LOADING_SUCCESS,
                    err:"",
                    products:data,
                    loading:true
            });

        }catch(err){
            dispatch({ type:PRODUCT_LOADING_FAIL,
                        err:err.message,
                        products:[],
                        loading:true
                    });
        }

    }
}

export default getProducts
