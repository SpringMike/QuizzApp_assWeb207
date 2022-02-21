import SignUp from "./SignUp";
import LogIn from "./LogIn";
import {useEffect, useState} from "react";
import {editUserById, getUsers} from "../api/api";
import Swal from "sweetalert2";

const ChangePass = () => {

    const [oldPass, setOldPass] = useState();
    const [newPass, setNewPass] = useState();
    const [users, setUsers] = useState([])
    const [user, setUser] = useState({})

    let oldUser = JSON.parse(localStorage.getItem("users"))

    const loadUser = async () => await getUsers().then(user => {
        setUsers(user.data.reverse())
    })
    useEffect(async () => {
        await loadUser()
        if (oldUser !== null){
            await setUser(() => (
                {
                    "id": oldUser.id,
                    "email": oldUser.email,
                    "username": oldUser.username,
                    "password": newPass,
                    "fullName": oldUser.fullName,
                }))
        }
    }, [oldPass, newPass])


    const handleSubmit = async (e) => {
        e.preventDefault();

        if (oldUser.password !== oldPass) {
            await Swal.fire({
                icon: 'error',
                title: 'Error.',
                text: 'Sai! Moi ban nhap lai',
            })
        } else {

            console.log(newPass)
            console.log(user)
            editUserById(user, oldUser.id).then(() => localStorage.setItem("users", JSON.stringify(user)));

            await Swal.fire(
                'Success',
                'Ban da doi mat khau thanh cong!',
                'success'
            )
            setTimeout(() =>{
                window.location.reload();
            },1000)
        }
    }

    return (
        <div>
            <div className="modal fade" id="changePassModal" tabIndex="-1" aria-labelledby="exampleModalLabel"
                 aria-hidden="true">
                <div className="modal-dialog modal-lg">
                    <div className="modal-content ">
                        <div className="modal-header" style={{display: "block"}}>
                            Change Password
                        </div>
                        <div className="modal-body">
                            <div className="mb-3">
                                <label htmlFor="oldPass" className="form-label">Old password</label>
                                <input type="password"
                                       className="form-control"
                                       id="oldPass"
                                       onChange={(e) => setOldPass(e.target.value)}/>
                            </div>
                            <div className="mb-3">
                                <label htmlFor="newPass" className="form-label">New password</label>
                                <input type="password"
                                       className="form-control"
                                       id="newPass"
                                       onChange={(e) => setNewPass(e.target.value)}/>
                            </div>
                            <button onClick={handleSubmit} style={{background: "#aa49de", color: "white"}} type="submit"
                                    className="btn">Submit
                            </button>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    )
}
export default ChangePass
