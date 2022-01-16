import SignUp from "./SignUp";
import LogIn from "./LogIn";

const {Component} = require("react");

class Modal_SignUp_SignIn extends Component {
    render() {
        return (
            <div>
                <div className="modal fade" id="exampleModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                    <div className="modal-dialog modal-lg">
                        <div className="modal-content ">
                            <div className="modal-header" style={{display: "block"}}>
                                <ul className="nav nav-tabs" id="myTab" role="tablist">
                                    <li className="nav-item" role="presentation">
                                        <button className="nav-link active" id="logIn-tab" data-bs-toggle="tab"
                                                data-bs-target="#logIn" type="button"
                                                role="tab" aria-controls="logIn" aria-selected="true">Log-in
                                        </button>
                                    </li>
                                    <li className="nav-item" role="presentation">
                                        <button className="nav-link" id="signUp-tab" data-bs-toggle="tab"
                                                data-bs-target="#signUp" type="button"
                                                role="tab" aria-controls="signUp" aria-selected="false">Sign-up
                                        </button>
                                    </li>
                                </ul>
                            </div>
                            <div className="modal-body">
                                <div className="tab-content" id="myTabContent">
                                    <SignUp/>
                                    <LogIn/>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Modal_SignUp_SignIn
