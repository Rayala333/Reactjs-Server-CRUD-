import React,{useRef} from 'react';
import{useSelector,useDispatch} from "react-redux";
import {UpdateProduct} from "../actions/UpdateProductAction"

const EditeProduct = () => {
    const result = useSelector(state=>state)
    console.log(result);
    const dispatch = useDispatch()

    const p_id = useRef();
    const p_cost = useRef();

    const update = ()=>{
        // console.log(p_id.current.value);
        // console.log(p_cost.current.value);  
        dispatch(UpdateProduct(p_id.current.value,p_cost.current.value))  
    }
    return (
        <React.Fragment>
            <div className='Editeproduct text-light'>
            <h1>Edite_Product </h1>
            <hr></hr>
            <label>P_ID</label>
            <input type="number" ref={p_id}/><br></br>
            <label>P_COST</label>
            <input type="number" ref={p_cost}/><br></br>

            <button onClick={update} className="bg-info font-weight-bold">UPDATE</button>
            </div>
        </React.Fragment>
    )
}

export default EditeProduct
