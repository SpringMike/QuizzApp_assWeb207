import {Component, useEffect, useState} from "react";
import {createUser} from "../api/api";
import Swal from "sweetalert2";

const SignUp = () => {

    const [email, setEmail] = useState("");
    const [pass, setPass] = useState("");
    const [userName, setUserName] = useState("");
    const [fullName, setFullName] = useState("");


    const handleSubmit = async (e) => {
        const user = {
            'email': email,
            'password': pass,
            'username': userName,
            'fullName': fullName,
            'role': 0,
            'quiz':[]
        }

        await createUser(user).then(() => {
            Swal.fire(
                'Thành công',
                'Sign-up thành công giờ bạn hãy đăng nhập!',
                'success'
            )
        })


        setTimeout(() => {
            window.location.reload()
        }, 1000)
    }


    return (
        <div className="tab-pane fade" id="signUp" role="tabpanel" aria-labelledby="signUp-tab">
            <form>
                <h2 className="mb-2 text-center">SignUp Form</h2>
                <div className="mb-3">
                    <label htmlFor="exampleInputEmailSignUP" className="form-label">Email address:</label>
                    <input type="email"
                           className="form-control"
                           id="exampleInputEmail1"
                           aria-describedby="emailHelp"
                           placeholder="yourEmail@gmail.com"
                           required
                           onChange={(e) => setEmail(e.target.value)}/>
                </div>
                <div className="mb-3">
                    <label htmlFor="exampleInputPasswordSignUP" className="form-label">Password:</label>
                    <input type="password"
                           className="form-control"
                           id="exampleInputPassword1"
                           required
                           placeholder="your password"
                           onChange={(e) => setPass(e.target.value)}/>
                </div>
                <div className="mb-3">
                    <label htmlFor="userNameSignUp" className="form-label">UserName:</label>
                    <input type="text"
                           className="form-control"
                           id="userNameSignUp"
                           required
                           placeholder="your user name"
                           onChange={(e) => setUserName(e.target.value)}/>
                </div>
                <div className="mb-3">
                    <label htmlFor="fullNameSignUp" className="form-label">FullName:</label>
                    <input type="text"
                           className="form-control"
                           id="fullNameSignUp"
                           required
                           placeholder="your full name"

                           onChange={(e) => setFullName(e.target.value)}/>
                </div>

                <button onClick={handleSubmit} style={{background: "#aa49de", color: "white"}} type="submit"
                        className="btn">Submit
                </button>
            </form>
        </div>
    );
}

export default SignUp
