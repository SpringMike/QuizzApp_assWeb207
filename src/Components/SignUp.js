import {Component} from "react";

class SignUp extends Component {
    render() {
        return (
            <div className="tab-pane fade" id="signUp" role="tabpanel" aria-labelledby="signUp-tab">
                <form>
                    <h2 className="mb-2 text-center">Sign Up Form</h2>
                    <div className="mb-3">
                        <label htmlFor="exampleInputName" className="form-label">Full Name</label>
                        <input type="email" className="form-control" id="exampleInputName"
                               aria-describedby="emailHelp"/>
                    </div>
                    <div className="mb-3">
                        <label htmlFor="exampleInputEmail1" className="form-label">Email address</label>
                        <input type="email" className="form-control" id="exampleInputEmail1"
                               aria-describedby="emailHelp"/>
                        <div id="emailHelp" className="form-text">Chúng tôi sẽ không bao giờ chia sẽ email của bạn cho bên thứ ba.
                        </div>
                    </div>
                    <div className="mb-3">
                        <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
                        <input type="password" className="form-control" id="exampleInputPassword1"/>
                    </div>
                    <button style={{background: "#aa49de",color:"white"}} type="submit" className="btn">Submit</button>
                </form>
            </div>
        );
    }
}

export default SignUp
