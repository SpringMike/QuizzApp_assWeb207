import {Link, useNavigate} from "react-router-dom";

const Result = ({results, data}) => {


    return (
        <div className='text-center'>
            <p className="text-primary fs-3 text-uppercase">Xin chúc mừng bạn đã hoàn thành xong quiz !</p>
            <h3 className='font'>Điểm của bạn là: {data} đ</h3>
            <div className='mt-2'>
                <iframe src="https://giphy.com/embed/l0Iyl55kTeh71nTXy" width="480" height="320" frameBorder="0"
                       allowFullScreen/>
            </div>
            <div className='mt-2'>
                <Link to="/"><button className="btn" style={{background: "rgba(0, 212, 255, 1)", color: "white"}}>Trang chủ <i
                    className="fa fa-home"/></button></Link>
            </div>


        </div>
    )
}
export default Result
