import SideBar from "./Components/SideBar";

const {Component} = require("react");

class NotFound extends Component {
    render() {
        return (
        <div className="row mt-4 ">
            <div className="col-9 ">
                <h1 className="d-flex align-items-center justify-content-center h-100"  >404 Not found .....</h1>
            </div>
            <SideBar/>
        </div>
        );
    }
}
export default NotFound
