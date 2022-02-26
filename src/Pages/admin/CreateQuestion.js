import {useEffect, useState} from "react";
import {createQuestion, createQuiz, getQuestionByQuiz} from "../../api/api";
import Swal from "sweetalert2";
import {useParams} from "react-router-dom";

const CreateQuestion = () => {

    const [question, setQuestion] = useState("");
    const [answer1, setAnswer1] = useState("");
    const [answer2, setAnswer2] = useState("");
    const [answer3, setAnswer3] = useState("");
    const [answer4, setAnswer4] = useState("");
    const [correctAnswer, setCorrectAnswer] = useState();
    const [quiz, setQuiz] = useState()
    const {id} = useParams();
    const part = "/quizzs/" + id

    useEffect(() => {
        getQuestionByQuiz(part).then((quiz) => {
            setQuiz(quiz.data)
        })
    }, [])

    const handleSubmit = async (e) => {

        const answersList = []
        answersList.push(answer1, answer2, answer3, answer4)


        const questions = {
            'question': question,
            'answers': answersList,
            'correctAnswer': parseInt(correctAnswer),
        }

        const trueQuiz = {
            ...quiz,
            'questions': [...quiz.questions, questions]
        }

        await createQuestion(id, trueQuiz).then(() => {
            Swal.fire(
                'Thành công',
                'Thêm mới thành công!',
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
        <div className="modal fade" id="exampleModalCreateQuestion" tabIndex="-1" role="dialog"
             aria-labelledby="exampleModalLabel"
             aria-hidden="true">
            <div className="modal-dialog modal-lg" role="document">
                <div className="modal-content ">
                    <div className="modal-header">
                        <h5 className="modal-title" id="exampleModalLabel">Create Question</h5>
                    </div>
                    <div className="modal-body ">
                        <form>
                            <h2 className="mb-2 text-center">Create Form</h2>
                            <div className="mb-3">
                                <label htmlFor="exampleInputQuestion" className="form-label">Question:</label>
                                <input type="text"
                                       className="form-control"
                                       id="exampleInputQuestion"
                                       required
                                       onChange={(e) => setQuestion(e.target.value)}

                                />
                            </div>
                            <div className="mb-3">
                                <label htmlFor="exampleInputAnswer1" className="form-label">Answer 1:</label>
                                <input type="text"
                                       className="form-control"
                                       id="exampleInputAnswer1"
                                       required
                                       onChange={(e) => setAnswer1(e.target.value)}

                                />
                            </div>
                            <div className="mb-3">
                                <label htmlFor="exampleInputAnswer2" className="form-label">Answer 2:</label>
                                <input type="text"
                                       className="form-control"
                                       id="exampleInputAnswer2"
                                       required
                                       onChange={(e) => setAnswer2(e.target.value)}

                                />
                            </div>
                            <div className="mb-3">
                                <label htmlFor="exampleInputAnswer3" className="form-label">Answer 3:</label>
                                <input type="text"
                                       className="form-control"
                                       id="exampleInputAnswer3"
                                       required
                                       onChange={(e) => setAnswer3(e.target.value)}

                                />
                            </div>
                            <div className="mb-3">
                                <label htmlFor="exampleInputAnswer4" className="form-label">Answer 4:</label>
                                <input type="text"
                                       className="form-control"
                                       id="exampleInputAnswer4"
                                       required
                                       onChange={(e) => setAnswer4(e.target.value)}

                                />
                            </div>
                            <div className="mb-3">
                                <label htmlFor="exampleInputAnswer4" className="form-label">Correct answer:</label>
                                <select onChange={e => setCorrectAnswer(e.target.value)}>
                                    <option value="0">1</option>
                                    <option value="1">2</option>
                                    <option value="2">3</option>
                                    <option value="3">4</option>
                                </select>
                            </div>

                        </form>
                    </div>
                    <div className="modal-footer">
                        <button onClick={handleSubmit} type="button" className="btn btn-primary">Save changes</button>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default CreateQuestion
