
import {useEffect, useState} from "react";
import {getQuiz} from "../../api/api";
import CreateQuiz from "./CreateQuiz";
import {Link, useNavigate} from "react-router-dom";
import Swal from "sweetalert2";

const Content = () => {

    const [quizzes, setQuizzes] = useState([]);


    useEffect(async () => {
        await getQuiz().then(quiz => {
            setQuizzes(quiz.data.reverse())
        })
    }, [])
    let navigate = useNavigate();


    return (
        <div className='p-3'>
            <h2>Quản lý câu hỏi</h2>
            <button className="btn btn-primary mb-2" data-bs-toggle="modal"
               data-bs-target="#exampleModal123">
                <i className="fa fa-plus me-2 "/>Create quizz
            </button>
            <CreateQuiz/>

            <table className="table table-bordered table-hover">
                <thead>
                <tr>
                    <th scope="col">Id</th>
                    <th scope="col">Info</th>
                    <th scope="col">Action</th>
                </tr>
                </thead>
                <tbody>
                {
                    quizzes.map((quiz, i) => (
                        <tr key={i}>
                            <td>{quiz.id}</td>
                            <td><img style={{width: "25px", height: "25px"}} src={quiz.image} alt=""/> {quiz.name}</td>
                            <td>
                                <button onClick={() => navigate(`/admin/editQuiz/${quiz.id}`)} className='btn btn-warning me-3'>Sửa</button>
                                <button className='btn btn-danger' >Xóa</button>
                            </td>
                        </tr>
                    ))
                }
                </tbody>
            </table>
        </div>

    )
}
export default Content
