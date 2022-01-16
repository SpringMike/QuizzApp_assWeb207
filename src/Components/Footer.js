const {Component} = require("react");

class Footer extends Component {
    render() {
        return (
            <div>
                <footer className="page-footer footer banner">
                    <div className="container">
                        <div className="row paddingb">
                            <div className="col-3 ml-4">
                                <h4 className="white-text">Quizzes</h4>
                                <p>Thỏa sức luyện tập với các quiz với những chủ đề lập trình thú vị </p>
                            </div>
                            <div className="col-8 ms-auto row">
                                <div className="col-3  ">
                                    <h4 className="white-text">Liên kết</h4>
                                    <ul>
                                        <li><a href="#">Trang chủ</a></li>
                                        <li><a href="#">Liên hệ</a></li>
                                        <li><a href="#">Góp ý</a></li>
                                        <li><a href="#">Hỏi đáp</a></li>
                                    </ul>
                                </div>
                                <div className="col-3">
                                    <h4 className="white-text">Chính sách</h4>
                                    <ul>
                                        <li><a  href="#">Lorem 6</a></li>
                                        <li><a  href="#">Lorem 7</a></li>
                                        <li><a  href="#">Lorem 8</a></li>
                                        <li><a  href="#">Lorem 9</a></li>
                                    </ul>
                                </div>
                                <div className="col-3">
                                    <h4 className="white-text">Mạng xã hội</h4>
                                    <ul>
                                        <li><a  href="#">Facebook</a></li>
                                        <li><a href="#">Linkedin</a></li>
                                        <li><a href="#">Google</a></li>
                                        <li><a href="#">Instagram</a></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </footer>
            </div>
        );
    }
}

export default Footer
