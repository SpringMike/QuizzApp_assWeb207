import {Link, useNavigate} from "react-router-dom";
import {editUserById} from "../api/api";
import {useEffect} from "react";

const Result = ({results, data}) => {


    useEffect(() => {
        const user = JSON.parse(localStorage.getItem("users"))
        let today = new Date();
        const dd = String(today.getDate()).padStart(2, '0');
        const mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
        const yyyy = today.getFullYear();
        const minute = today.getMinutes()
        const hours = today.getHours()

        today = dd + '/' + mm + '/' + yyyy +" "+ hours + "h"+  minute + "p " ;

        const quiz = {
            "id": results.id,
            "image": results.image,
            "name": results.name,
            "time": today,
            "score": data,
            "length": results.questions.length
        }
        const newUser = {...user,"quiz":[...user.quiz,quiz]}
        editUserById(newUser, user.id).then()
        localStorage.clear()
        localStorage.setItem("users",JSON.stringify(newUser))
    }, [])


    return (
        <div className='text-center'>
            <p className="text-primary fs-3 text-uppercase">Xin chúc mừng bạn đã hoàn thành xong quiz !</p>
            <h3 className='font'>Điểm của bạn là: {data} đ</h3>
            <div className='mt-2'>
                <iframe src="https://giphy.com/embed/l0Iyl55kTeh71nTXy" width="480" height="320" frameBorder="0"
                        allowFullScreen/>
            </div>
            <div className='mt-2'>
                <Link to="/">
                    <button className="btn" style={{background: "rgba(0, 212, 255, 1)", color: "white"}}>Trang chủ <i
                        className="fa fa-home"/></button>
                </Link>
            </div>


        </div>
    )
}
export default Result
