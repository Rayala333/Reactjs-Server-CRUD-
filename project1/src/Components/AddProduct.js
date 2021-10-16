import React,{useRef} from 'react';
import {useSelector,useDispatch} from 'react-redux';
import addProduct  from '../actions/AddProductAction';


const AddProduct = () => {

    const p_id = useRef();
    const p_name = useRef();
    const p_cost = useRef();


    const result = useSelector(state => state.post);

    console.log(result.insert);

    const dispatch = useDispatch()

    const add= ()=>{
        dispatch(addProduct({
            "p_id":p_id.current.value,
            "p_name":p_name.current.value,
            "p_cost":p_cost.current.value,
        }))
    }

    return (
        <React.Fragment>
            <div className='addproduct text-light'>
                <h1>Add_Products</h1><hr></hr>
                
            P_Id
            <input type="number" ref={p_id}/>
            <br></br>
            P_NAME
            <input type="text" ref={p_name}/>
            <br></br>
            P_COST
            <input type="number" ref={p_cost}/>
            <br></br>
            <button onClick={add} className="bg-info font-weight-bold">ADDPRODUCT</button>
            
                <br></br>
               
                
            </div>
        </React.Fragment>
    )
}

export default AddProduct
