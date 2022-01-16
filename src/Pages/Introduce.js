import SideBar from "../Components/SideBar";
import game from "../img/GAME.png"
import adorid from "../img/adorid.jpg"
import java from "../img/Java.png"
import js from "../img/js.png"
import php from "../img/PHPP.png"

const {Component} = require("react");

class Introduce extends Component {
    render() {
        return (
            <div className="row mt-4 ">
                <article className="col-9 row ">
                    <h2 className="mb-3">Danh sách các chủ đề </h2>
                    <div className="col-5 card  p-0 box">
                        <div className="card-img text-center ">
                            <img src={game} alt=""/>
                        </div>
                        <div className="card-footer text-center">
                            Lập trình game
                        </div>

                    </div>
                    <div className="col-5 card p-0 box ">
                        <div className="card-img text-center">
                            <img src={java} alt=""/>
                        </div>
                        <div className="card-footer text-center">
                            Lập trình Java
                        </div>
                    </div>
                    <div className="col-5 card p-0 box ">
                        <div className="card-img text-center">
                            <img src={adorid} alt=""/>
                        </div>
                        <div className="card-footer text-center">
                            Lập trình Android nâng cao
                        </div>
                    </div>
                    <div className="col-5 card p-0 box ">
                        <div className="card-img text-center">
                            <img src={js} alt=""/>
                        </div>
                        <div className="card-footer text-center">
                            Lập trình Javascript
                        </div>
                    </div>
                    <div className="col-5 card p-0 box ">
                        <div className="card-img text-center">
                            <img src={php} alt=""/>
                        </div>
                        <div className="card-footer text-center">
                            Lập trình PHP
                        </div>
                    </div>
                    <nav>
                        <ul className="pagination">
                            <li className="page-item disabled">
                                <a className="page-link" href="#" tabIndex="-1">Previous</a>
                            </li>
                            <li className="page-item"><a className="page-link" href="#">1</a></li>
                            <li className="page-item active" aria-current="page">
                                <a className="page-link" href="#">2</a>
                            </li>
                            <li className="page-item"><a className="page-link" href="#">3</a></li>
                            <li className="page-item"><a className="page-link" href="#">...</a></li>
                            <li className="page-item"><a className="page-link" href="#">6</a></li>
                            <li className="page-item">
                                <a className="page-link" href="#">Next</a>
                            </li>
                        </ul>
                    </nav>
                </article>
                <SideBar/>
            </div>
        );
    }
}

export default Introduce
