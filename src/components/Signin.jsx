import React, { useState } from "react";
import Button from '@material-ui/core/Button';
import { useForm } from "react-hook-form";
import IconButton from '@material-ui/core/IconButton';
import "./css/login.css"

function Signin() {
    const [val, setVal] = useState("");
    const [pass, setPas] = useState("");
    const [showMessage, setmessage] = useState(false);
    const [clickDown, setClickDown] = useState(false);
    const { handleSubmit, register } = useForm();

    function setClick() {
        setClickDown(false);
    }
    const onSubmit = values => {
        console.log(values);
        if (clickDown === true) {
            setmessage(true);
        }
        else {
            setmessage(false);
        }
        setPas("");
    };

    return (

        <div>
            <div className="col-sm-12 shadow rounded pt-3">
                <div className="text-center"><img alt="" src="https://placehold.it/80x80" className="rounded-circle border p-1" /></div>
                <form onSubmit={handleSubmit(onSubmit)} id="singninFrom">
                    <div className="form-group">
                        <label className="font-weight-bold">Username <span className="text-danger">*</span></label>
                        <input type="text" name="username" id="username" className="form-control" placeholder="Enter your username" ref={register} required />
                    </div>
                    <div className="form-group">
                        <label className="font-weight-bold">Password <span className="text-danger">*</span></label>
                        <input type="password" name="password" value={pass} onChange={(vals) => setPas(vals.target.value)} id="password" className="form-control" placeholder="***********" ref={register} required />
                    </div>
                    <div className="form-group">
                        <div className="row">
                            <div className="col text-right"> <a className="sign" href="javascript:;" data-toggle="modal" data-target="#forgotPass">Forgot Password?</a> </div>
                        </div>
                    </div>
                    <div className="form-group">
                        <Button variant="outlined" type="submit" name="submit" value="Sign In" className="btn btn-block" onClick={setClick}>Sign In Safely</Button>
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


            <div className="modal fade" id="forgotPass" tabIndex="-1" role="dialog" aria-hidden="true">
                <div className="modal-dialog" role="document">
                    <form onSubmit={handleSubmit(onSubmit)} id="forgotpassForm">
                        <div className="modal-content">
                            <div className="modal-header">
                                <h5 className="modal-title">Forgot Password</h5>
                                <button type="button" className="close" data-dismiss="modal" aria-label="Close"> <span aria-hidden="true">&times;</span> </button>
                            </div>
                            <div className="modal-body">
                                <div className="form-group">
                                    <label>Email <span className="text-danger">*</span></label>
                                    <input type="email" ref={register} value={val} onChange={(vals) => { setVal(vals.target.value); }} name="forgotemail" id="forgotemail" className="form-control" placeholder="Enter your valid email..." required />
                                </div>
                                <div className="form-group">
                                    {showMessage && <span className="text-danger">Please check your mail box!</span>}
                                </div>
                            </div>
                            <div className="modal-footer">
                                <button type="submit" name="forgotPass" className="btn btn-primary" onClick={() => setClickDown(true)}><i className="fa fa-envelope"></i> Send Request</button>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default Signin;