import {useEffect, useState} from "react";
import Swal from "sweetalert2";
import {editUserById} from "../api/api";

const EditProfile = () => {

    let oldUser = JSON.parse(localStorage.getItem("users"))

    const [email, setEmail] = useState("");
    const [userName, setUserName] = useState("");
    const [fullName, setFullName] = useState("");

    const [user, setUser] = useState({})

    useEffect(() =>{
        setEmail(oldUser.email)
        setFullName(oldUser.fullName)
        setUserName(oldUser.username)
    },[])

    useEffect(async () => {
        if (oldUser !== null) {
            await setUser(() => (
                {
                    "id": oldUser.id,
                    "email": email,
                    "username": userName,
                    "password": oldUser.password,
                    "fullName": fullName,
                }))
        }
    }, [email,userName,fullName])

    const handleSubmit = async (e) => {
        e.preventDefault();

        editUserById(user, oldUser.id).then(() => localStorage.setItem("users", JSON.stringify(user)));
        Swal.fire(
            'Success',
            'Ban da cap nhap profile thanh cong!',
            'success'
        )
        setTimeout(() => {
            window.location.reload();
        }, 1000)
    }


return (
    <div>
        <div className="modal fade" id="editProfileModal" tabIndex="-1" aria-labelledby="exampleModalLabel"
             aria-hidden="true">
            <div className="modal-dialog modal-lg">
                <div className="modal-content ">
                    <div className="modal-header" style={{display: "block"}}>
                        Edit Profile
                    </div>
                    <div className="modal-body">
                        <div className="mb-3">
                            <label htmlFor="email" className="form-label">Email</label>
                            <input type="email"
                                   className="form-control"
                                   id="email"
                                   value={email}
                                   onChange={(e) => setEmail(e.target.value)}
                            />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="fullName" className="form-label">Full Name</label>
                            <input type="text"
                                   className="form-control"
                                   id="fullName"
                                   value={fullName}
                                   onChange={(e) => setFullName(e.target.value)}

                            />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="userName" className="form-label">User Name</label>
                            <input type="text"
                                   className="form-control"
                                   id="userName"
                                   onChange={(e) => setUserName(e.target.value)}
                                   value={userName}
                            />
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
export default EditProfile
