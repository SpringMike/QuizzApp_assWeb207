import SideBar from "../Components/SideBar";
import {Component, useEffect, useState} from "react";
import {logDOM} from "@testing-library/react";
import {Link, NavLink, useNavigate} from "react-router-dom";
import game from "../img/GAME.png";
import java from "../img/Java.png";
import adorid from "../img/adorid.jpg";
import js from "../img/js.png";
import php from "../img/PHPP.png";
import {getQuestionByQuiz, getQuiz, getQuizPagination} from "../api/api";
import Pagination from "../Components/Pagination";
import queryString from 'querystring'
import Swal from "sweetalert2";

const Home = () => {

    const [quizzes, setQuizzes] = useState([])
    const [length,setLength] = useState();

    const [isLogin,setIsLogin] = useState(false)

    useEffect(async ()=>{
        await getQuiz().then(quiz => {
            setLength(quiz.data.length)
        })
    },[])



    const [pagination, setPagination] = useState({
        page: 1,
        limit: 4,
        totalRow: 6
    });
    const [filters, setFilters] = useState({
        page: 1,
        limit: 4
    })

    const handlePageChange = (newPage) => {
        setFilters({
            ...filters,page: newPage
        })
    }
    useEffect(async () => {
        await getQuiz().then(quiz => {
            setQuizzes(quiz.data)
            // setPagination(pagination)
        })
    }, [filters])

    const navigate = useNavigate();
    const handleStartExam = (id)=>{
        let user = JSON.parse(localStorage.getItem("users"))
        if (user != null){
            setIsLogin(true)

            navigate(`/quizzs/${id}`)
        }else {
            Swal.fire({
                icon: 'error',
                title: 'Oops...',
                text: 'Bạn chưa đăng nhập!',
            })
        }
    }

    return (
        <div className="row mt-4 ">
            {/*<div className="col-9 mb-2">*/}
            {/*        <div className="col-12 m-auto border p-3 mb-4">*/}
            {/*            <h2 className="text-center mb-5"> Let's Start Quiz</h2>*/}
            {/*            <div className="mb-3">*/}
            {/*                <label htmlFor="numberOfQuestion" className="form-label">Number Of Questions</label>*/}
            {/*                <input type="text" className="form-control" id="numberOfQuestion"*/}
            {/*                       value={this.state.totalQuestion}*/}
            {/*                       onChange={e => this.setState({totalQuestion: e.target.value})}*/}
            {/*                       aria-describedby="numberOfQuestion"/>*/}
            {/*            </div>*/}
            {/*            <div className="mb-3">*/}
            {/*                <label className="form-label">Category</label>*/}
            {/*                <select className="form-select" aria-label="Default select example">*/}
            {/*                    <option value="1">Lập Trình Android Nâng Cao</option>*/}
            {/*                    <option value="2">Xây Dựng Trang Web</option>*/}
            {/*                    <option value="3">Cơ Sở Dữ Liệu</option>*/}
            {/*                    <option value="3">SQL Server</option>*/}
            {/*                    <option value="3">Lập Trình Hướng Đối Tượng Với Java</option>*/}
            {/*                    <option value="3">Lập Trình PHP</option>*/}
            {/*                </select>*/}
            {/*            </div>*/}
            {/*            <div className="mb-3">*/}
            {/*                <label className="form-label">Difficulty</label>*/}
            {/*                <select className="form-select" aria-label="Default select example">*/}
            {/*                    <option value="1">Hard</option>*/}
            {/*                    <option value="1">Medium</option>*/}
            {/*                    <option value="1">Easy</option>*/}
            {/*                </select>*/}
            {/*            </div>*/}
            {/*            <div className="mb-3" style={{width:"50%",margin:"auto",textAlign:"center"}}>*/}
            {/*                <NavLink style={{color:"white",textDecoration:"none"}} to="/quiz">*/}
            {/*                    <button style={{background: "#aa49de",color:"white",width:"70%"}} type="submit" className="btn">*/}
            {/*                       Submit*/}
            {/*                    </button>*/}
            {/*                </NavLink>*/}
            {/*            </div>*/}
            {/*        </div>*/}

            {/*</div>*/}
            <article className="col-9 row ">
                <h2 className="mb-3">Danh sách các chủ đề </h2>
                {
                    quizzes.map((quiz, i) => (
                        <div key={i} className="col-5 card  p-0 box">
                            <div className="card-img text-center ">
                                <img src={quiz.image} alt=""/>
                            </div>
                            <div className="card-footer text-center">
                                {quiz.name}
                                <br/>
                                <div className="mt-3">
                                    {/*{*/}
                                    {/*    isLogin === true ? (*/}
                                    {/*        <Link to={`/quizzs/${quiz.id}`}>*/}
                                    {/*            <button className="btn btn-primary">Start</button>*/}
                                    {/*        </Link>*/}
                                    {/*    ) : (*/}
                                            <a onClick={() => handleStartExam(quiz.id)} > <button className="btn btn-primary">Start</button> </a>
                                    {/*    )*/}
                                    {/*}*/}
                                </div>
                            </div>
                        </div>
                    ))
                }
                <nav>
                    <ul className="pagination">
                        {/*<li className="page-item disabled">*/}
                        {/*    <a className="page-link" href="#" tabIndex="-1">Previous</a>*/}
                        {/*</li>*/}
                        {/*{*/}
                        {/*    quizzes.map((quiz,i)=>(*/}
                        {/*        <li key={i} onClick={() =>handlePageChange({i})} className="page-item"><a className="page-link">{i+1}</a></li>*/}
                        {/*    ))*/}
                        {/*}*/}

                        {/*<li className="page-item">*/}
                        {/*    <a className="page-link" href="#">Next</a>*/}
                        {/*</li>*/}
                        <Pagination pagination={pagination} onPageChange={handlePageChange}/>
                    </ul>
                </nav>
            </article>
            <SideBar/>
        </div>
    );
}

export default Home
