const {Component} = require("react");

class SideBar extends Component {
    render() {
        return (
            <aside className="col-3 ">
                <div className="card">
                    <div className="card-header">Danh sách các chủ đề</div>
                    <ul className="nav nav-pills flex-column mb-auto sideBar">
                        <li className="nav-link link-dark">
                            <a href="#">
                                Lập trình Android nâng cao
                            </a>
                        </li>
                        <li className="nav-link link-dark">
                            <a href="#">Xây dựng trang web</a>
                        </li>
                        <li className="nav-link link-dark">
                            <a href="#">Cơ sở dữ liệu</a>
                        </li>
                        <li className="nav-link link-dark">
                            <a href="#">SQL server</a>
                        </li>
                        <li className="nav-link link-dark">
                            <a href="#">Internet Marketing</a>
                        </li>
                        <li className="nav-link link-dark">
                            <a href="#">Lập trình hướng đối tượng với java</a>
                        </li>
                        <li className="nav-link link-dark">
                            <a href="#">Lập trình PHP</a>
                        </li>
                        <li className="nav-link link-dark">
                            <a href="#">Điện toán đám mây</a>
                        </li>
                    </ul>
                </div>
            </aside>
        );
    }
}

export default SideBar
