import {useEffect, useState} from "react";
import {getQuestionByQuiz, getUsers} from "../api/api";
import Swal from "sweetalert2";

const {Component} = require("react");

const LogIn = () => {

    const [email, setEmail] = useState();
    const [pass, setPass] = useState();
    const [user, setUser] = useState({})
    const [users, setUsers] = useState([])
    const [isLogin,setIsLogin] = useState(false)

    const loadUser = async () => await getUsers().then(user => {
        setUsers(user.data.reverse())
    })
    useEffect(async () => {
        await loadUser()
    }, [email,pass])

    const handleSubmit = (e) => {
        e.preventDefault();

        let userFind =  users.find((user) => user.email  === email && user.password === pass)

        if (userFind === undefined){
            Swal.fire({
                icon: 'error',
                title: 'Error.',
                text: 'Sai email hoac password!',
            })
        }else {
            localStorage.setItem("users", JSON.stringify(userFind));
            Swal.fire(
                'Success',
                'Ban da dang nhap thanh cong!',
                'success'
            )
            setIsLogin(true)
            setUser(userFind)
            setTimeout(() =>{
                window.location.reload();
            },1000)
        }
    }


    return (
        <div className="tab-pane fade active show" id="logIn" role="tabpanel" aria-labelledby="logIn-tab">
            <form>
                <h2 className="mb-2 text-center">LogIn Form</h2>
                <div className="mb-3">
                    <label htmlFor="exampleInputEmail1" className="form-label">Email address</label>
                    <input type="email"
                           className="form-control"
                           id="exampleInputEmail1"
                           aria-describedby="emailHelp"
                           onChange={(e) => setEmail(e.target.value)}/>
                </div>
                <div className="mb-3">
                    <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
                    <input type="password"
                           className="form-control"
                           id="exampleInputPassword1"
                           onChange={(e) => setPass(e.target.value)}/>
                </div>
                <button onClick={handleSubmit} style={{background: "#aa49de", color: "white"}} type="submit"
                        className="btn">Submit
                </button>
            </form>
        </div>
    );
}
export default LogIn
