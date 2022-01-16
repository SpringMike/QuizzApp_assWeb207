const {Component} = require("react");

class LogIn extends Component {
    render() {
        return (
            <div className="tab-pane fade active show" id="logIn" role="tabpanel" aria-labelledby="logIn-tab">
                <form>
                    <h2 className="mb-2 text-center">LogIn Form</h2>
                    <div className="mb-3">
                        <label htmlFor="exampleInputEmail1" className="form-label">Email address</label>
                        <input type="email" className="form-control" id="exampleInputEmail1"
                               aria-describedby="emailHelp"/>

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
export default LogIn
