import SideBar from "../Components/SideBar";
import {Component} from "react";

class FeedBack extends Component {
    render() {
        return (
            <div className="row mt-4 ">
                <div className="col-9">
                    <div className="mt-2 p-4 text-center border">
                        <h6 className="mb-0">Góp ý của bạn giúp chúng tôi cải thiện trang web hơn.</h6> <small className="px-3">Xin hãy nói cho chúng
                        tôi trải nghiệm của bạn khi dùng web.</small>
                        <div className="d-flex flex-row justify-content-center mt-2"><img
                            src="https://img.icons8.com/emoji/48/000000/angry-face-emoji--v2.png"/> <img
                            src="https://img.icons8.com/fluent/48/000000/sad.png"/> <img
                            src="https://img.icons8.com/color/48/000000/happy.png"/> <img
                            src="https://img.icons8.com/emoji/48/000000/smiling-face.png"/> <img
                            src="https://img.icons8.com/color/48/000000/lol.png"/></div>
                        <div className="form-group mt-4">
                            <textarea className="form-control" rows="4" placeholder="Message"/></div>
                        <div className="mt-2">
                            <button style={{background: "#aa49de",color:"white"}} type="submit" className="btn">Submit</button>
                        </div>
                    </div>
                </div>
                <SideBar/>
            </div>
        );
    }
}
export default FeedBack;
