import SideBar from "../Components/SideBar";
import {Component} from "react";
import {logDOM} from "@testing-library/react";
import {NavLink} from "react-router-dom";

class Home extends Component {

    constructor(props) {
        super(props);
        this.state = {totalQuestion: "11"};
    }

    render() {
        return (
            <div className="row mt-4 ">
                <div className="col-9 mb-2">
                        <div className="col-12 m-auto border p-3 mb-4">
                            <h2 className="text-center mb-5"> Let's Start Quiz</h2>
                            <div className="mb-3">
                                <label htmlFor="numberOfQuestion" className="form-label">Number Of Questions</label>
                                <input type="text" className="form-control" id="numberOfQuestion"
                                       value={this.state.totalQuestion}
                                       onChange={e => this.setState({totalQuestion: e.target.value})}
                                       aria-describedby="numberOfQuestion"/>
                            </div>
                            <div className="mb-3">
                                <label className="form-label">Category</label>
                                <select className="form-select" aria-label="Default select example">
                                    <option value="1">Lập Trình Android Nâng Cao</option>
                                    <option value="2">Xây Dựng Trang Web</option>
                                    <option value="3">Cơ Sở Dữ Liệu</option>
                                    <option value="3">SQL Server</option>
                                    <option value="3">Lập Trình Hướng Đối Tượng Với Java</option>
                                    <option value="3">Lập Trình PHP</option>
                                </select>
                            </div>
                            <div className="mb-3">
                                <label className="form-label">Difficulty</label>
                                <select className="form-select" aria-label="Default select example">
                                    <option value="1">Hard</option>
                                    <option value="1">Medium</option>
                                    <option value="1">Easy</option>
                                </select>
                            </div>
                            <div className="mb-3" style={{width:"50%",margin:"auto",textAlign:"center"}}>
                                <NavLink style={{color:"white",textDecoration:"none"}} to="/quiz">
                                    <button style={{background: "#aa49de",color:"white",width:"70%"}} type="submit" className="btn">
                                       Submit
                                    </button>
                                </NavLink>
                            </div>
                        </div>

                </div>
                <SideBar/>
            </div>
        );
    }
}

export default Home
