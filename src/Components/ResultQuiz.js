import {useEffect, useRef, useState} from "react";

const ResultQuiz = ({question, answer}) => {
    // let labelRef = useRef()
    //
    // const [isCorrect,setIsCorrect] = useState(false)
    // const [correctAnswer,setCorrectAnswer] = useState();
    // useEffect(() => {
    //     let findCheckedInput = labelRef.current.querySelector('input:checked');
    //     const label = findCheckedInput.parentElement
    //
    //     question.answers.map((q,i) =>{
    //         if (i === question.correctAnswer){
    //             setCorrectAnswer(q)
    //         }
    //     })
    //
    //     if (findCheckedInput.value * 1 === question.correctAnswer) {
    //         label.style.background = "green"
    //         label.style.color = "white"
    //         setIsCorrect(true)
    //     }else {
    //         label.style.background = "red"
    //         label.style.color = "white"
    //     }
    //
    // },[])


    return (
        <div>
            {/*<div className="card">*/}
            {/*    <div className="py-2 h5 card-header">*/}
            {/*        <b>{question.question} dasda</b>*/}
            {/*    </div>*/}
            {/*    <div className="d-flex flex-column card-body" id="options" ref={labelRef}>*/}
            {/*        {*/}
            {/*            question.answers.map((q, i) => (*/}
            {/*                i === answer.answer ? (*/}
            {/*                    <label className="options" key={i} >*/}
            {/*                        <input checked disabled value={i} type="radio" name="radio"/>*/}
            {/*                        {q}*/}
            {/*                    </label>*/}
            {/*                ) : (*/}
            {/*                    <label className="options" key={i} >*/}
            {/*                        <input disabled value={i} type="radio" name="radio"/>*/}
            {/*                        {q}*/}
            {/*                    </label>*/}
            {/*                )*/}
            {/*            ))*/}
            {/*        }*/}

            {/*    </div>*/}
            {/*   <div className="card-footer ml-5">*/}
            {/*       {*/}
            {/*           isCorrect === true ? (*/}
            {/*               <div className="bg-primary text-white p-2">*/}
            {/*                   Ban da chon dung ! dap an la: {`${correctAnswer}`}*/}
            {/*               </div>*/}
            {/*           ) : (*/}
            {/*               <div className="bg-danger text-white p-2">*/}
            {/*                   Ban da chon sai ! dap an la: {`${correctAnswer}`}*/}
            {/*               </div>*/}
            {/*           )*/}
            {/*       }*/}
            {/*   </div>*/}
            {/*</div>*/}
        </div>
    )
}
export default ResultQuiz
