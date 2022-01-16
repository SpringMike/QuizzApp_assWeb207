import SideBar from "../Components/SideBar";

const {Component} = require("react");

class Quiz extends Component {
    render() {
        return (
            <div className="row mt-4 ">
                <article className="col-9 pt-3 ">
                    <nav
                        aria-label="breadcrumb">
                        <ol className="breadcrumb">
                            <li className="breadcrumb-item"><a className=" text-primary text-decoration-none" href="#">Câu
                                1</a></li>
                            <li className="breadcrumb-item active" aria-current="page">Câu 2</li>
                            <li className="breadcrumb-item"><a className=" text-primary text-decoration-none" href="#">Câu
                                1</a></li>
                            <li className="breadcrumb-item"><a className=" text-primary text-decoration-none" href="#">Câu
                                4</a></li>
                            <li className="breadcrumb-item"><a className=" text-primary text-decoration-none" href="#">Câu
                                5</a></li>
                            <li className="breadcrumb-item"><a className=" text-primary text-decoration-none" href="#">Câu
                                6</a></li>
                            <li className="breadcrumb-item"><a className=" text-primary text-decoration-none" href="#">Câu
                                7</a></li>
                            <li className="breadcrumb-item"><a className=" text-primary text-decoration-none" href="#">Câu
                                8</a></li>
                            <li className="breadcrumb-item"><a className=" text-primary text-decoration-none" href="#">Câu
                                9</a></li>
                            <li className="breadcrumb-item"><a className=" text-primary text-decoration-none" href="#">Câu
                                10</a></li>
                        </ol>
                    </nav>
                    <div className="card">
                        <div className="py-2 h5 card-header">
                            <b>Đâu không phải là ngôn ngữ lập trình ?</b>
                        </div>
                        <div className="d-flex flex-column card-body" id="options">
                            <label className="options">
                                <input type="radio" name="radio"/>
                                HTML
                            </label>
                            <label className="options">
                                <input type="radio" name="radio"/>
                                Java
                            </label>
                            <label className="options">
                                <input type="radio" name="radio"/>
                                C#
                            </label>
                            <label className="options">
                                <input type="radio" name="radio"/>
                                PHP
                            </label>
                        </div>
                    </div>
                    <div className="d-flex align-items-center pt-3 row ">
                        <div className="col-6">
                            <button className="btn" style={{background: "rgba(152, 43, 215, 1)", color: "white"}}>
                                <i className="fa fa-backward"/> Prev
                            </button>
                        </div>
                        <div className="col-6 me-auto text-lg-end">
                            <button className="btn" style={{background: "rgba(0, 212, 255, 1)", color: "white"}}>
                                Next <i className="fa fa-forward"/></button>
                        </div>
                    </div>
                </article>
                <SideBar/>
            </div>
        );
    }
}

export default Quiz
