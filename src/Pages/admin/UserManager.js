import CreateQuiz from "./CreateQuiz";
import {useEffect, useState} from "react";
import {editUserById, getUsers} from "../../api/api";
import Swal from "sweetalert2";

const UserManager = () => {

    let [users, setUsers] = useState([]);
    const [passwordShow, setPasswordShow] = useState(false);
    const [passwordShow2, setPasswordShow2] = useState(false);

    useEffect(async () => {
        await getUsers().then((user) => setUsers(user.data.reverse()))
    }, [users])

    const setRoleToAdmin = async (id) => {
        const currentUser = JSON.parse(localStorage.getItem("users"))
        const user = {
            ...currentUser,
            'role': 1
        }
        await editUserById(user, id).then(() => {
            Swal.fire(
                'Thành công',
                'Set role admin thành công!',
                'success'
            )
        })
        localStorage.clear()
        localStorage.setItem("users",JSON.stringify(user))
        setTimeout(() =>{
            window.location.reload()
        },1000)
    }
    const setRoleToUser = async (id) => {
        const currentUser = JSON.parse(localStorage.getItem("users"))
        const user = {
            ...currentUser,
            'role': 0
        }

        await editUserById(user, id).then(() => {
            Swal.fire(
                'Thành công',
                'Set role user thành công!',
                'success'
            )
        })
        localStorage.clear()
        localStorage.setItem("users",JSON.stringify(user))

        setTimeout(() =>{
            window.location.reload()
        },1000)
    }

    const togglePassword = (id) => {
        setPasswordShow(!passwordShow);
        users.map((user, i) => {
            if (user.id === id) {
                setPasswordShow2(!passwordShow2)
            }
        })
    };
    return (
        <div className='p-3'>
            <h2>Quản lý users</h2>
            <CreateQuiz/>

            <table className="table table-bordered">
                <thead>
                <tr>
                    <th scope="col">UserName</th>
                    <th scope="col">Email</th>
                    <th scope="col">FullName</th>
                    <th scope="col">Password</th>
                    <th scope="col">Role</th>
                    <th scope="col">Action</th>

                </tr>
                </thead>
                <tbody>
                {
                    users.map((user, i) => (
                        <tr key={i}>
                            <td>{user.username}</td>
                            <td>{user.email}</td>
                            <td>{user.fullName}</td>
                            <td>
                                {

                                    passwordShow && passwordShow2 ? (
                                        <div>
                                            <input style={{border: "0"}} type="text" value={user.password} disabled/>
                                            <i style={{cursor: "pointer"}} className='fa fa-eye'
                                               onClick={() => togglePassword(user.id)}/>
                                        </div>
                                    ) : (
                                        <div>
                                            <input style={{border: "0"}} type="password" value={user.password}
                                                   disabled/>
                                            <i style={{cursor: "pointer"}} className='fa fa-eye-slash'
                                               onClick={() => togglePassword(user.id)}/>
                                        </div>
                                    )
                                }
                            </td>
                            {
                                user.role === 1 ? (
                                    <td>Admin</td>
                                ) : (
                                    <td>User</td>
                                )
                            }
                            <td>
                                {
                                    user.role === 1 ? (
                                        <button onClick={() => setRoleToUser(user.id)} className="btn btn-primary">Set
                                            role to User</button>
                                    ) : (
                                        <button onClick={() => setRoleToAdmin(user.id)} className="btn btn-warning">Set
                                            role to Admin</button>
                                    )
                                }
                            </td>
                        </tr>
                    ))
                }
                </tbody>
            </table>
        </div>
    )
}
export default UserManager
