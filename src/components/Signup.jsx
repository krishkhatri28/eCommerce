import React, { useState } from "react";
import Button from '@material-ui/core/Button';
import { useForm } from "react-hook-form";
import IconButton from '@material-ui/core/IconButton';
import "./css/login.css"

function Signup() {
    const { handleSubmit, register } = useForm();

    const onSubmit = values => {
        console.log(values);
    };

    return (
        <div>
            <div className="col-sm-12 shadow rounded pt-2">
                <div className="text-center"><img src="https://placehold.it/80x80" className="rounded-circle border p-1" /></div>
                <form onSubmit={handleSubmit(onSubmit)} id="singnupFrom">
                    <div className="form-group">
                        <label className="font-weight-bold">Email <span className="text-danger">*</span></label>
                        <input ref={register} type="email" name="signupemail" id="signupemail" className="form-control" placeholder="Enter valid email" required />
                    </div>
                    <div className="form-group">
                        <label className="font-weight-bold">Username <span className="text-danger">*</span></label>
                        <input ref={register} type="text" name="signupusername" id="signupusername" className="form-control" placeholder="Choose your username" required />
                    </div>
                    <div className="form-group">
                        <label className="font-weight-bold">Phone <span className="text-danger">*</span></label>
                        <input ref={register} type="text" name="signupphone" id="signupphone" className="form-control" placeholder="XXX-XXX-XXXX" />
                    </div>

                    <div className="form-group">
                        <label className="font-weight-bold">Password <span className="text-danger">* </span></label>
                        <label> (Alteast 6 characters)</label>
                        <input ref={register} type="password" name="signuppassword" id="signuppassword" className="form-control" placeholder="***********" pattern="^\S{6,}$" required />
                    </div>

                    <div className="form-group">
                        <label><input type="checkbox" name="signupcondition" id="signupcondition" required /> I agree with the <a className="sign" href="javascript:;">Terms &amp; Conditions</a> for Registration.</label>
                    </div>
                    <div className="form-group">
                        <Button variant="outlined" type="submit" name="submit" value="Sign In" className="btn btn-block">Sign Up</Button>
                    </div>
                    <div className="text-center form-group">
                        <IconButton className="mb-3 social">
                            <i className="fab fa-facebook-f"></i>
                        </IconButton>
                        <IconButton className="mb-3 social">
                            <i className="fab fa-google"></i>
                        </IconButton>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default Signup;