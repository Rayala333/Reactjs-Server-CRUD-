import React, { useEffect } from "react";
import {useDispatch} from 'react-redux';
import { useSelector } from "react-redux";
import getProducts from "../actions/ProductAction";
import EditeProduct from "./EditeProduct";

import {BrowserRouter as Router, Route,NavLink} from 'react-router-dom';
import AddProduct from './AddProduct'
import { deleteProduct } from "../actions/DeleteProductAction";

function Product(){
        const result = useSelector(state=>state);
        const { loading,products,err} = result.get;

        console.log(result.get);
        console.log(result.remove)

        const dispatch = useDispatch();

        useEffect(()=>{
                dispatch(getProducts());
        },[dispatch])


        const editRecord = (p_id)=>{
                console.log(p_id)
        }
        const deleteRecord = (id)=>{
               dispatch(deleteProduct(id))
               console.log(id)
        }

       

        return(
            <React.Fragment>
                        {/* <h1>{JSON.stringify(result)}</h1> */}
                      <Router>  
                              <NavLink to='/addProduct' activeStyle={{color:"red"}} exact={true} strict className="btn btn-success bg-primary m-3 text-light">AddProduct</NavLink>
                        <article className="row m-1  bg-secondary">
                                <articl className="col-md-6 mt-2 ">
                                        <table class="table table-success table-striped text-light">
                                                <tr className="text-center">
                                                        {/* <th>M_ID</th> */}
                                                        <th>P_ID</th>
                                                        <th>P_NAME</th>
                                                        <th>P_COST</th>
                                                        <th>EDITE</th>
                                                        <th>DELETE</th>
                                                </tr>
                                                {
                                                        products.map((element,index)=>(
                                                                <tr key={index} className="text-center">
                                                                        {/* <td>{element._id}</td> */}
                                                                        <td>{element.p_id}</td>
                                                                        <td>{element.p_name}</td>
                                                                        <td>{element.p_cost}</td>
                                                                        {/* <td><button onClick={()=>editRecord(element.p_id)}>Edit</button></td> */}

                                                                        <td><NavLink to="editeProduct" exact={true} strict className="btn btn-success bg-primary">Edite</NavLink></td>
                                                                        <td><button onClick={()=>deleteRecord(element.p_id)} className="btn btn-success bg-danger">Delete</button></td>
                                                                        
                                                                </tr>
                                                                
                                                        ))
                                                }

                                        </table>
                                </articl>
                                <articl className="col-md-6">
                                      <Route path='/addProduct' component={AddProduct} exact={true} strict></Route>
                                      <Route path='/editeProduct' component={EditeProduct} exact={true} strict></Route>
                                </articl>

                                 </article>
                         </Router>  
                         
            </React.Fragment>
        )
}
export default Product