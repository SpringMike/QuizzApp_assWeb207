import {useParams} from "react-router-dom";
import {createQuestion, getQuestionByQuiz} from "../../api/api";
import Swal from "sweetalert2";
import {useEffect, useState} from "react";

const EditQuestion = (props) =>{

    const [question, setQuestion] = useState("");
    const [answer1, setAnswer1] = useState("");
    const [answer2, setAnswer2] = useState("");
    const [answer3, setAnswer3] = useState("");
    const [answer4, setAnswer4] = useState("");
    const [correctAnswer, setCorrectAnswer] = useState();
    const [quiz, setQuiz] = useState({})
    const {id} = useParams();
    const part = "/quizzs/" + id


    const [currentQuestion, setCurrentQuestion] = useState({});



    useEffect(() => {
        getQuestionByQuiz(part).then((quiz) => {
            setQuiz(quiz.data)
            setCurrentQuestion(quiz.data.questions[props.index])
            setQuestion(quiz.data.questions[props.index].question)
            setAnswer1(quiz.data.questions[props.index].answers[0])
            setAnswer2(quiz.data.questions[props.index].answers[1])
            setAnswer3(quiz.data.questions[props.index].answers[2])
            setAnswer4(quiz.data.questions[props.index].answers[3])
            setCorrectAnswer(quiz.data.questions[props.index].correctAnswer)

        })

    }, [])


    const handleSubmit = async (e) => {
        const answersList = []
        answersList.push(answer1, answer2, answer3, answer4)


        const questions123 = {
            'question': question,
            'answers': answersList,
            'correctAnswer': parseInt(correctAnswer),
        }
        quiz.questions.splice(props.index,1,questions123)
        const trueQuiz = {
            ...quiz,
            'questions':  quiz.questions
        }


        // console.log(trueQuiz)

        await createQuestion(id,trueQuiz).then(() =>{
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

    return(
        <>
        <div className="modal fade" id= {`exampleModalEditQuestion${props.index}`} tabIndex="-1" role="dialog"
             aria-labelledby="exampleModalLabel"
             aria-hidden="true">
            <div className="modal-dialog modal-lg" role="document">
                <div className="modal-content ">
                    <div className="modal-header">
                        <h5 className="modal-title" id="exampleModalLabel">Edit Question</h5>
                    </div>
                    <div className="modal-body ">
                        <form>
                            <h2 className="mb-2 text-center">Edit Form</h2>
                            <div className="mb-3">
                                <label  className="form-label">Question:</label>
                                <input type="text"
                                       className="form-control"
                                        value={question}
                                       required
                                       onChange={(e) => setQuestion(e.target.value)}

                                />
                            </div>
                            <div className="mb-3">
                                <label htmlFor="exampleInputAnswer12" className="form-label">Answer 1:</label>
                                <input type="text"
                                       className="form-control"
                                       value={answer1}
                                       required
                                       onChange={(e) => setAnswer1(e.target.value)}

                                />
                            </div>
                            <div className="mb-3">
                                <label htmlFor="exampleInputAnswer22" className="form-label">Answer 2:</label>
                                <input type="text"
                                       className="form-control"
                                        value={answer2}
                                       required
                                       onChange={(e) => setAnswer2(e.target.value)}

                                />
                            </div>
                            <div className="mb-3">
                                <label htmlFor="exampleInputAnswer32" className="form-label">Answer 3:</label>
                                <input type="text"
                                       className="form-control"
                                       value={answer3}
                                       required
                                       onChange={(e) => setAnswer3(e.target.value)}

                                />
                            </div>
                            <div className="mb-3">
                                <label htmlFor="exampleInputAnswer452" className="form-label">Answer 4:</label>
                                <input type="text"
                                       className="form-control"
                                       value={answer4}
                                       required
                                       onChange={(e) => setAnswer4(e.target.value)}

                                />
                            </div>
                            <div className="mb-3">
                                <label htmlFor="exampleInputAnswer42" className="form-label">Correct answer:</label>
                                <select value={correctAnswer} onChange={e => setCorrectAnswer(e.target.value)}>
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
        </>
    )
}
export default EditQuestion
