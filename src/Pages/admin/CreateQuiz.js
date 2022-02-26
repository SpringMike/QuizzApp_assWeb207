import SignUp from "../../Components/SignUp";
import LogIn from "../../Components/LogIn";
import {useState} from "react";
import {createQuiz, createUser} from "../../api/api";
import Swal from "sweetalert2";
import {useParams} from "react-router-dom";

const CreateQuiz = () =>{

    const [name, setName] = useState("");
    const [id, setId] = useState("");
    const [image, setImage] = useState("");



    const handleSubmit = async (e) =>{
        const quiz = {
            'id': id,
            'name': name,
            'image': image,
            'questions': []
        }

        await createQuiz(quiz).then(() =>{
            Swal.fire(
                'Thành công',
                'Thêm mới thành công!',
                'success'
            )
        }).catch(err =>{
            console.log(err)
        })

        setTimeout(() =>{
            window.location.reload()
        },1000)
    }

    return (
        <div className="modal fade" id="exampleModal123" tabIndex="-1" role="dialog" aria-labelledby="exampleModalLabel"
             aria-hidden="true">
            <div className="modal-dialog" role="document">
                <div className="modal-content">
                    <div className="modal-header">
                        <h5 className="modal-title" id="exampleModalLabel">Create Quiz</h5>
                    </div>
                    <div className="modal-body">
                        <form>
                            <h2 className="mb-2 text-center">Create  Form</h2>
                            <div className="mb-3">
                                <label htmlFor="exampleInputId" className="form-label">Id:</label>
                                <input type="text"
                                       className="form-control"
                                       id="exampleInputId"
                                       required
                                       onChange={(e) => setId(e.target.value)}
                                      />
                            </div>
                            <div className="mb-3">
                                <label htmlFor="exampleInputName" className="form-label">Name:</label>
                                <input type="text"
                                       className="form-control"
                                       id="exampleInputName"
                                       required
                                       onChange={(e) => setName(e.target.value)}

                                />
                            </div>
                            <div className="mb-3">
                                <label htmlFor="exampleInputImage" className="form-label">Image link:</label>
                                <input type="text"
                                       className="form-control"
                                       id="exampleInputImage"
                                       required
                                       onChange={(e) => setImage(e.target.value)}

                                />
                            </div>
                        </form>
                    </div>
                    <div onClick={handleSubmit} className="modal-footer">
                        <button type="button" className="btn btn-primary">Save changes</button>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default CreateQuiz
