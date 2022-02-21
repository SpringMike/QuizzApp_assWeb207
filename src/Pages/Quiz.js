import SideBar from "../Components/SideBar";
import {useEffect, useRef, useState} from "react";
import {getQuestionByQuiz} from "../api/api";
import Result from "./Result";
import {useLocation, useNavigate} from "react-router-dom";
import NotFound from "../NotFound";
import ResultQuiz from "../Components/ResultQuiz";
import Swal from "sweetalert2";
import Countdown from "react-countdown";
import * as ReactDOM from "react-dom";
import ProgressBar from "@ramonak/react-progress-bar";


const Quiz = () => {
    let [quiz, setQuiz] = useState({})
    let [question, setQuestion] = useState()
    let [currentQuestion, setCurrentQuestion] = useState(0)
    let [questions, setQuestions] = useState([])
    let [answer, setAnswer] = useState([])

    let [isDoneQuestion, setIsDoneQuestion] = useState([])

    let [correctAnswer, setCorrectAnswer] = useState()
    let [score, setScore] = useState(0);
    let [end, setEnd] = useState(false);


    let [btnEnable, setBtnEnable] = useState(false);

    let [isResult, setIsResult] = useState(false)
    let [clickAnswer, setClickAnswer] = useState([])

    let [isUndefined, setUndefined] = useState(false)
    const radiosWrapper = useRef();
    let location = useLocation();
    let partName = location.pathname

    let findCheckedInput;

    const loadQuiz = async () => await getQuestionByQuiz(partName).then((quiz) => {
        setQuiz(quiz.data)
        setQuestions(quiz.data.questions)
        setCorrectAnswer(quiz.data.questions[currentQuestion].correctAnswer)
        setQuestion(quiz.data.questions[currentQuestion].question)
        setAnswer(quiz.data.questions[currentQuestion].answers)
    }).catch(err => {
        setUndefined(true)
    })
    useEffect(() => {
        loadQuiz().then(r => {
        })
    }, [currentQuestion])





    const handleClickAnswer = () => {
        findCheckedInput = radiosWrapper.current.querySelector('input:checked');
        let answer = findCheckedInput.value * 1;
        if (answer === correctAnswer) {
            setScore(score + 1)
            return true
        } else {
            return false
        }
    }


    const handleAnswerButtonClick = async () => {
        Swal.fire({
            title: 'Xác nhận câu trả lời ?',
            text: "Bạn không thể chọn lại!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Xác nhận !'
        }).then((result) => {
            if (result.isConfirmed) {
                const isTrue = handleClickAnswer();
                const nextQuestion = currentQuestion + 1;
                if (nextQuestion > questions.length - 1) {
                    setEnd(true)
                } else {
                    findCheckedInput = radiosWrapper.current.querySelector('input:checked');
                    if (findCheckedInput) {
                        findCheckedInput.checked = false;
                    }
                    setCurrentQuestion(nextQuestion)
                    const listDone = [...isDoneQuestion, currentQuestion]
                    setIsDoneQuestion(listDone)
                    loadQuiz()
                }
                setBtnEnable(false)
                if (isTrue) {
                    Swal.fire({
                            icon: "success",
                            title: "Thành công",
                            text: "Bạn đã chọn đúng ! Xin chúc mừng",
                        }
                    )
                } else {
                    Swal.fire({
                        icon: 'error',
                        title: 'Thất bại...',
                        text: 'Bạn đã chọn sai!',
                    })
                }
            }
        })
    }


    const handleEndButtonClick = async () => {
        Swal.fire({
            title: 'Xác nhận câu trả lời ?',
            text: "Bạn không thể chọn lại!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Xác nhận!'
        }).then((result) => {
            if (result.isConfirmed) {
                setEnd(true)
                Swal.fire(
                    'Hoàn thành!',
                    'Bạn đã hoàn thành bài quiz.',
                    'success'
                )
            }
        })

    }

    // const handleQuestionClick = async (i) => {
    //     const done = isDoneQuestion.find(index => index === i)
    //     if (done === undefined) {
    //         setCurrentQuestion(i)
    //         setBtnEnable(true)
    //         setIsResult(false)
    //     } else {
    //         setIsResult(true)
    //         setCurrentQuestion(i)
    //         setBtnEnable(true)
    //     }
    // }

    const handleCountDown = ({hours, minutes, seconds, completed}) => {
        if (completed) {
            setEnd(true)
        } else {
            return <span>{hours}:{minutes}:{seconds}</span>;
        }
    }

    return (

        <div>
            {
                isUndefined ? <NotFound/> :
                    (
                        <div className="row mt-4 ">
                            <article className=" pt-3 col-xs-12 col-sm-12 col-lg-9 ">
                                {/*<div className='mb-3 countDown'>*/}
                                {/*    <Countdown date={Date.now() + 5000} renderer={handleCountDown}>*/}

                                {/*    </Countdown>*/}
                                {/*</div>*/}

                                {
                                    end === true ? <Result data={score}/> :
                                        <>
                                            {/*<nav*/}
                                            {/*    aria-label="breadcrumb">*/}
                                            {/*    <ol className="breadcrumb">*/}
                                            {/*        {*/}
                                            {/*            questions.map((question, i) => (*/}
                                            {/*                <li key={i} className="breadcrumb-item">*/}
                                            {/*                    <a style={{cursor: "pointer"}}*/}
                                            {/*                       onClick={() => handleQuestionClick(i)}*/}
                                            {/*                       className=" text-primary text-decoration-none">Câu {i + 1}</a>*/}
                                            {/*                </li>*/}
                                            {/*            ))*/}
                                            {/*        }*/}
                                            {/*    </ol>*/}
                                            {/*</nav>*/}
                                            <ProgressBar completed={currentQuestion} maxCompleted={questions.length} />
                                            <div className='mb-3 mt-2'>
                                                <p style={{fontSize: '20px'}}>Tổng điểm : {score} đ</p>
                                            </div>

                                            <div className="card">

                                                {
                                                    isResult === true ? (
                                                        <ResultQuiz question={questions[currentQuestion]}
                                                                    answer={clickAnswer}/>
                                                    ) : (
                                                        <div>
                                                            <div className="py-2 h5 card-header">
                                                                <b>{question}</b>
                                                            </div>
                                                            <div className="d-flex flex-column card-body" id="options"
                                                                 ref={radiosWrapper}>
                                                                {
                                                                    answer.map((an, i) => (
                                                                        <label className="options" key={i}>
                                                                            <input onClick={() => setBtnEnable(true)}
                                                                                   value={i} type="radio" name="radio"/>
                                                                            {an}
                                                                        </label>
                                                                    ))
                                                                }
                                                            </div>
                                                        </div>
                                                    )
                                                }
                                            </div>
                                            <div className="d-flex align-items-center pt-3 row ">

                                                <div className="col-6">
                                                    <button onClick={handleEndButtonClick} className="btn"
                                                            style={{
                                                                background: "rgba(152, 43, 215, 1)",
                                                                color: "white"
                                                            }}>
                                                        <i className="fa fa-check"/> End
                                                    </button>
                                                </div>
                                                <div className="col-6 me-auto text-lg-end">
                                                    {btnEnable !== true ? (
                                                        <button disabled className="btn"
                                                                style={{
                                                                    background: "rgb(0 212 255 / 54%)",
                                                                    color: "white"
                                                                }}>
                                                            Next <i className="fa fa-forward"/>
                                                        </button>
                                                    ) : (
                                                        <button onClick={handleAnswerButtonClick} className="btn"
                                                                style={{
                                                                    background: "rgba(0, 212, 255, 1)",
                                                                    color: "white"
                                                                }}>
                                                            Next <i className="fa fa-forward"/>
                                                        </button>
                                                    )}
                                                </div>
                                            </div>
                                        </>
                                }
                            </article>
                            <SideBar/>
                        </div>
                    )
            }
        </div>

    )
}

export default Quiz
