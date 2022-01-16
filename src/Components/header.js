import banner from "../img/baner.jpg"

import Modal_SignUp_SignIn from "./Modal_SignUp_SignIn";
import {Link,NavLink} from 'react-router-dom'
const {Component} = require("react");

class Header extends Component {
    render() {
        return (
            <div>
                <nav className="navbar navbar-expand-lg">
                    <div className="container-fluid">
                        <a className="navbar-brand" href="#">
                            <img src="https://cf.quizizz.com/img/quizizz_logos/purple-brandmark-600x164.png" width="100"
                                 className="logo"/> <
                        /a>
                        <button className="navbar-toggler" type="button" data-toggle="collapse"
                                data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup"
                                aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"/>
                        </button>
                        <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                            <div className="navbar-nav mr-auto">
                                <NavLink className="nav-link active" aria-current="page" to="/">Trang chủ</NavLink>
                                <NavLink className="nav-link" to="/introduce">Giới thiệu</NavLink>
                                <NavLink className="nav-link" to="/Contact">Liên hệ</NavLink>
                                <NavLink className="nav-link" to="/feedBack">Góp ý</NavLink>
                                <NavLink className="nav-link" to="/faq">Hỏi đáp</NavLink>

                            </div>
                            <div className=" ms-auto">
                                <a className="fs-6 fw-bold nav-link" href="#" data-bs-toggle="modal"
                                   data-bs-target="#exampleModal">
                                    <i className="fa fa-user me-3"/>Log-in / Sign-up
                                </a>
                            </div>
                            <Modal_SignUp_SignIn/>
                        </div>
                    </div>
                </nav>

                <div className="banner p-3 p-md-5 text-white rounded ">
                    <div className="col-md-6">
                        <h1 className="display-4 font-italic">Bạn đã sẵn sàng để hoàn thành các quizzes chưa ?</h1>
                        <p className="lead my-3">Chúng tôi có nhiều quizzes có những chủ đề thú vị khác nhau !</p>
                        <p className="lead mb-0"><a href="#" className="text-white font-weight-bold text-decoration-none">Tham gia ngay...</a></p>
                    </div>
                </div>

            </div>
        );
    }
}

export default Header
