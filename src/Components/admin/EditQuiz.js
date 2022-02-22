import SideBar from "../SideBar";
import {useEffect, useState} from "react";
import {createQuestion, createQuiz, editQuiz, getQuestionByQuiz} from "../../api/api";
import {useLocation, useNavigate, useParams} from "react-router-dom";
import CreateQuestion from "./CreateQuestion";
import Swal from "sweetalert2";
import EditQuestion from "./EditQuestion";

const EditQuiz = () => {

    const [quiz, setQuiz] = useState({})
    const [questions, setQuestions] = useState([])

    const [name, setName] = useState("");
    const [idQuiz, setIdQuiz] = useState("");
    const [image, setImage] = useState("");


    const {id} = useParams()

    const part = "/quizzs/" + id

    const navigate = useNavigate();


    useEffect(() => {
        getQuestionByQuiz(part).then((quiz) => {
            setQuiz(quiz.data)
            setIdQuiz(quiz.data.id)
            setName(quiz.data.name)
            setImage(quiz.data.image)
            setQuestions(quiz.data.questions)

        })
    }, [])

    const handleSubmit = async (e) =>{

        const quiz = {
            'id': id,
            'name': name,
            'image': image,
            'questions': questions
        }


        await editQuiz(id,quiz).then(() =>{
            Swal.fire(
                'Thành công',
                'Edit thành công!',
                'success'
            )
        }).catch(err =>{
            console.log(err)
        })

        setTimeout(() =>{
            window.location.reload()
        },1000)
    }



    const handleDelete = async (index) => {

        questions.splice(index.i, 1)

        const trueQuiz = {
            ...quiz,
            'questions': questions
        }


        await createQuestion(id, trueQuiz).then(() => {
            Swal.fire(
                'Thành công',
                'Xóa thành công!',
                'success'
            )
        }).catch(err => {
            console.log(err)
        })

        setTimeout(() => {
            window.location.reload()
        }, 1000)
    }

    return (
        <div>

            <div className="row mt-4 ">
                <div className="col-12">
                    <h2 className="mb-2 text-left">Danh sách questions của {quiz.id}</h2>

                    <button className="btn btn-primary mb-2 me-2" data-bs-toggle="modal"
                            data-bs-target="#exampleModalCreateQuestion">
                        <i className="fa fa-plus me-2 "/>Create question
                    </button>
                    <CreateQuestion/>
                    <button className="btn btn-primary mb-2" data-bs-toggle="modal"
                            data-bs-target="#exampleModalEditQuiz">
                        <i className="fa fa-plus me-2 "/>Edit quiz
                    </button>

                    <div className="modal fade" id="exampleModalEditQuiz" tabIndex="-1" role="dialog" aria-labelledby="exampleModalLabel"
                         aria-hidden="true">
                        <div className="modal-dialog" role="document">
                            <div className="modal-content">
                                <div className="modal-header">
                                    <h5 className="modal-title" id="exampleModalLabel">Edit Quiz</h5>
                                </div>
                                <div className="modal-body">
                                    <form>
                                        <h2 className="mb-2 text-center">Create  Form</h2>
                                        <div className="mb-3">
                                            <label htmlFor="exampleInputId" className="form-label">Id:</label>
                                            <input type="text"
                                                   className="form-control"
                                                   id="exampleInputId"
                                                   required
                                                   value={idQuiz}
                                                   onChange={(e) => setIdQuiz(e.target.value)}
                                            />
                                        </div>
                                        <div className="mb-3">
                                            <label htmlFor="exampleInputName" className="form-label">Name:</label>
                                            <input type="text"
                                                   className="form-control"
                                                   id="exampleInputName"
                                                   required
                                                   value={name}

                                                   onChange={(e) => setName(e.target.value)}

                                            />
                                        </div>
                                        <div className="mb-3">
                                            <label htmlFor="exampleInputImage" className="form-label">Image link:</label>
                                            <input type="text"
                                                   className="form-control"
                                                   id="exampleInputImage"
                                                   required
                                                   value={image}
                                                   onChange={(e) => setImage(e.target.value)}

                                            />
                                        </div>
                                    </form>
                                </div>
                                <div onClick={handleSubmit} className="modal-footer">
                                    <button type="button" className="btn btn-primary">Save changes</button>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="collapses">
                        {
                            questions.map((question, i) => (
                                <div key={i} className="mb-2">
                                    <button className="border-0"
                                            style={{textAlign: "left", textTransform: " uppercase"}}>
                                        <div className="text-primary" data-bs-toggle="collapse" href={`#exmple${i}`}
                                             role="button"
                                             aria-expanded="false" aria-controls="collapseExample">
                                            <i className="fa fa-plus"/> {question.question}
                                        </div>
                                    </button>
                                    <div className="collapse" id={`exmple${i}`}>
                                        <div className="card card-body">
                                            <div className="d-flex flex-column card-body" id="options">

                                                {
                                                    question.answers.map((an, i) => (
                                                        question.correctAnswer === i ? (
                                                            <label style={{background: "green", color: "white"}}
                                                                   className="options" key={i}>
                                                                <span>{i + 1}. </span>
                                                                {an}
                                                            </label>
                                                        ) : (
                                                            <label className="options " key={i}>
                                                                <span>{i + 1}. </span>
                                                                {an}
                                                            </label>
                                                        )
                                                    ))
                                                }

                                                <div>
                                                    <button onClick={() => handleDelete({i})} style={{width: "100px"}}
                                                            className="btn btn-danger mt-4 mb-2 me-3 ">
                                                        <i className="fa fa-trash me-2"/>Delete
                                                    </button>
                                                    <button style={{width: "100px"}}
                                                            className="btn btn-warning mt-4 mb-2 "
                                                            data-bs-toggle="modal"
                                                            data-bs-target={`#exampleModalEditQuestion${i}`}>
                                                        <i className="fa fa-pencil me-2"/>Edit
                                                    </button>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <EditQuestion index={i}/>


                                </div>

                            ))
                        }
                    </div>
                    <button onClick={() => navigate(-1)} className="btn btn-primary mb-2 ">
                        <i className="fa fa-arrow-left me-2 "/>Back
                    </button>
                </div>
            </div>
        </div>
    )
}
export default EditQuiz
