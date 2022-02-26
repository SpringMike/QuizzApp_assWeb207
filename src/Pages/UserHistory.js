import CreateQuiz from "./admin/CreateQuiz";
import {useEffect, useState} from "react";
import {Link} from "react-router-dom";

const UserHistory = () => {

    const user = JSON.parse(localStorage.getItem("users"))


    return (
        <div>
            <div className='p-3'>
                {
                    user.quiz.length !== 0 ? (
                        <>
                        <h2>Lịch sửa làm bài</h2>
                        <table className="table table-bordered table-hover">
                            <thead>
                            <tr>
                                <th scope="col">Id</th>
                                <th scope="col">Info</th>
                                <th scope="col">Date</th>
                                <th scope="col">Score</th>
                            </tr>
                            </thead>
                            <tbody>
                            {
                                user.quiz.map((quiz, i) => (
                                    <tr key={i}>
                                        <td>{quiz.id}</td>
                                        <td>
                                            <img style={{width: "25px", height: "25px"}} src={quiz.image} alt=""/>
                                            {quiz.name}
                                        </td>
                                        <td>{quiz.time}</td>
                                        <td>{quiz.score}/{quiz.length}</td>
                                    </tr>
                                ))
                            }
                            </tbody>
                        </table>
                        </>
                    ) : (
                        <div className='mt-2 text-center'>
                            <h2 className="text-center">Bạn chưa làm quiz nào</h2>
                            <Link to="/">
                                <button className="btn" style={{background: "rgba(0, 212, 255, 1)", color: "white"}}>Trang chủ <i
                                    className="fa fa-home"/></button>
                            </Link>
                        </div>
                    )
                }
            </div>
        </div>
    )
}
export default UserHistory
