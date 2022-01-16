import SideBar from "../Components/SideBar";

const {Component} = require("react");

class Faq extends Component {
    render() {
        return (
            <div className="row mt-4 ">
                <div className="col-9">
                    <h2 className="mb-2 text-left">FAQ</h2>
                    <div className="collapses">
                        <button className="border-0">
                        <div className="text-primary" data-bs-toggle="collapse" href="#collapseExample" role="button"
                             aria-expanded="false" aria-controls="collapseExample">
                            <i className="fa fa-plus"/> Mục đích của website được tạo ra là gì?
                        </div>
                        </button>
                        <div className="collapse" id="collapseExample">
                            <div className="card card-body">
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque eros justo, vehicula
                                sit amet purus id, viverra feugiat mauris. Nulla tempor ullamcorper arcu. Ut pretium
                                risus diam, sit amet hendrerit mi semper ac. Pellentesque habitant morbi tristique
                                senectus et netus et malesuada fames ac turpis egestas.
                                Quisque ac diam aliquet odio mollis sodales. Sed suscipit sodales lacus.
                            </div>
                        </div>
                    </div>
                    <div className="collapses">
                       <button className="border-0">
                           <div className="text-primary" data-bs-toggle="collapse" href="#collapseExample2" role="button"
                                aria-expanded="false" aria-controls="collapseExample">
                               <i className="fa fa-plus"/> Website có những quiz theo chủ đề nào ?
                           </div>
                       </button>
                        <div className="collapse" id="collapseExample2">
                            <div className="card card-body">
                                Aenean id mi scelerisque, ornare nibh accumsan, feugiat quam.
                                Quisque orci metus, pharetra ut posuere ac, vehicula non odio.
                                Mauris malesuada quis lectus sed tincidunt. Praesent quam dui, hendrerit et mauris at,
                                dictum sollicitudin erat. Aliquam vehicula id nisl non pulvinar. Sed ut orci in odio
                                efficitur ornare vitae ut risus.
                                Nam nulla augue, imperdiet in tincidunt imperdiet, vehicula at ante.
                            </div>
                        </div>
                    </div>
                    <div className="collapses">
                        <button className="border-0">
                        <div className="text-primary" data-bs-toggle="collapse" href="#collapseExample3" role="button"
                             aria-expanded="false" aria-controls="collapseExample">
                            <i className="fa fa-plus"/> Trang web có đăng ký đăng nhập được không ?
                        </div>
                        </button>
                        <div className="collapse" id="collapseExample3">
                            <div className="card card-body">
                                Donec nibh est, molestie porta suscipit sed, cursus in nisl.
                                Vestibulum tempus arcu enim, non ornare erat blandit sed.
                                Cras vulputate lacinia dolor vel ultrices. Nunc nisl purus,
                                interdum ut suscipit ac, dictum id massa. Duis commodo dolor
                                at neque varius, eget efficitur felis suscipit. Sed hendrerit molestie urna, at pulvinar
                                sapien dictum ut. Nulla sagittis, turpis quis ullamcorper accumsan,
                                quam justo sagittis metus, in dapibus nibh risus in lorem.
                            </div>
                        </div>
                    </div>
                </div>
                <SideBar/>
            </div>
        );
    }
}

export default Faq
