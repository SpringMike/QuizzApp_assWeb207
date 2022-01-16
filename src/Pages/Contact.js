import Footer from "../Components/Footer";
import SideBar from "../Components/SideBar";
import target from "../img/targer.png"
import phone from "../img/phone.png"
import email from "../img/email.png"

const {Component} = require("react");

class Contact extends Component {
    render() {
        return (
            <div className="row mt-4 ">
                <article className="col-9 pt-3 ">
                    <div className="row text-center mt-2 mb-2">
                        <div className="col-4">
                            <div className="card text-center">
                                <div className="card-img mb-2 mt-2">
                                    <img src={target} width="40"/>
                                </div>
                                <h5>Address</h5>
                                <p>20 Thụy Khuê, Hà Nội, Việt Nam</p>
                            </div>
                        </div>
                        <div className="col-4">
                            <div className="card">
                                <div className="card-img mb-2 mt-2">
                                    <img src={email} width="40"/>
                                </div>
                                <h5>Email</h5>
                                <p>minhvnph13588@fpt.com,v</p>
                            </div>
                        </div>
                        <div className="col-4">
                            <div className="card">
                                <div className="card-img mb-2 mt-2">
                                    <img src={phone} width="40"/>
                                </div>
                                <h5>Phone</h5>
                                <p>0987553711</p>
                            </div>
                        </div>
                    </div>

                    <form className="border p-3">
                        <h2 className="mb-2 text-center">Contact Us Form</h2>
                        <div className="mb-3">
                            <label htmlFor="exampleInputName" className="form-label">Full Name</label>
                            <input type="email" className="form-control" id="exampleInputName"
                                   aria-describedby="emailHelp"/>
                        </div>
                        <div className="mb-3">
                            <label htmlFor="exampleInputEmail1" className="form-label">Email address</label>
                            <input type="email" className="form-control" id="exampleInputEmail1"
                                   aria-describedby="emailHelp"/>
                        </div>
                        <div className="mb-3">
                            <label htmlFor="exampleTextArean" className="form-label">Message</label>
                            <textarea cols="10" rows="5" className="form-control" id="exampleTextArean"/>
                        </div>
                        <button style={{background: "#aa49de", color: "white"}} type="submit" className="btn">Submit
                        </button>
                    </form>

                </article>
                <SideBar/>
            </div>
        );
    }
}

export default Contact
