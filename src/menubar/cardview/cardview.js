import React, { useState,useEffect } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import './cardview.css';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faClock} from '@fortawesome/free-solid-svg-icons'
import img from '../player.png'
export function Card(){

    const[product,setProduct]=useState([])

    useEffect(()=>{

        fetch("http://localhost:3000/data.json")
        .then(response=>response.json())
        .then(data=>setProduct(data))
        

    })

    return(
        <>
        <div className="container-fluid p-5"> 
            <div className="row justify-content-between">

            
            {product.map((value,index)=>(
                <>
                    <div className="card col-lg-4">
                        <div className="card-header ">
                            <div className="d-flex justify-content-between colorr">

                                <div className="row colorr">

                                    <h1>{value.timeing}</h1>
                                    <FontAwesomeIcon icon={faClock} />
                                </div>
                                <div className="">
                                    <p >AVAILABLE</p>
                                    <div className="d-flex justify-content-between ">

                                        <h1>4</h1>
                                        <img src={img}/>
                                    </div>
                                </div>
                            </div>
                            <div>

                            </div>

                        </div>
                    <div className="card-body d-flex justify-content-between bor">
                        <h3>{value.fees}</h3>
                        <h5 className="colorr">{value.price}$</h5>
                    </div>
                    <div className="card-body ">
                        <div className="d-flex justify-content-between">

                            <h3>{value.fees1}</h3>
                            <h6 className=""><span className="stri">{value.origanalprice}$</span><span className="strio">-{value.discountpercentage}%</span></h6>
                        </div>
                        <h5 className="float-right">{value.discountprice}</h5>
                    </div>
                    <div className="card-footer">
                       

                    </div>
                </div>
                </>
            ))
            
        }
        </div>
        </div>
           
        </>

    );
}