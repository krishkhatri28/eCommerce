import React, { useState } from "react";
import Button from '@material-ui/core/Button';
import Signin from './Signin';
import Signup from './Signup';
import "./css/login.css"

function Login(props) {

    return (
        <div className="card">
            <div className="container mt-4 mb-2">
                <div className="col-sm-8 col-lg-5 col-md-5 ml-auto mr-auto ha">
                    <div>
                        <ul className="shadow rounded nav nav-pills nav-fill" id="pills-tab" role="tablist">
                            <li className="nav-item"><a className="sign nav-link active" size="large" id="pills-signin-tab" data-toggle="pill" href="#pills-signin" role="tab" aria-controls="pills-signin" aria-selected="true">Sign In</a></li>
                            <li className="nav-item"> <a className="sign nav-link" size="large" id="pills-signup-tab" data-toggle="pill" href="#pills-signup" role="tab" aria-controls="pills-signup" aria-selected="false">Sign Up</a> </li>
                        </ul>
                    </div>
                    <div className="tab-content" id="pills-tabContent">
                        <div className="tab-pane fade show active" id="pills-signin" role="tabpanel" aria-labelledby="pills-signin-tab">
                            <Signin />
                        </div>


                        <div className="tab-pane fade" id="pills-signup" role="tabpanel" aria-labelledby="pills-signup-tab">
                            <Signup />
                        </div>
                    </div>
                </div>




            </div>
        </div>




    )
}

export default Login;
