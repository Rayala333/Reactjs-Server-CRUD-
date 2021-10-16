import axios from 'axios'; 
import { Add_PRODUCT, ADD_PRODUCT_FAIL,ADD_PRODUCT_SUCCES } from '../types/AddProductType';

const addProduct = (record)=>{
        return async (dispatch)=>{
            dispatch({ type:Add_PRODUCT, loading:false , result:[], err:"" });
            try{

                const {data} = await axios.post("http://localhost:8080/postbrand",record);

                console.log(data)

                dispatch({ type:ADD_PRODUCT_SUCCES, 
                            loading:true, 
                            result:data.insert, 
                            err:""});

            }catch(err){
                dispatch({ type:ADD_PRODUCT_FAIL , loading:true, result:[], err:err.message})
            }

        }
}
export default addProduct;