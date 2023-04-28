import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import './menubar.css';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
// import faCircle1 from '@fortawesome/free-solid-svg-icons'
export function Menu(){

    return(
        
        <>
        <div className="container board">
            <div className="row"> 

                <div className="col-lg-4 boderr p-3">
                    
                    <span className="round">1</span>
                    <span>Find The Best Deal</span>
                    
                </div>
                <div className="col-lg-4">
                    
                        <span>Find The Best Deal</span>
                    
                </div>
                <div className="col-lg-4">
                    
                        <span>Find The Best Deal</span>
                    
                </div>
            </div>

        </div>
        
        </>
    );
}