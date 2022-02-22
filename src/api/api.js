import axios from 'axios'


export const getQuestionByQuiz = async (id) => {
    return await axios.get(`${process.env.REACT_APP_API}${id}`)
}
export const getUsers = async () => {
    return await axios.get(`${process.env.REACT_APP_API}/users`)
}
export const getQuiz = async () => {
    return await axios.get(`${process.env.REACT_APP_API}/quizzs`)
}

export const createUser= async(user) =>{
    return await axios.post(`${process.env.REACT_APP_API}/users`, user)
}
export const createQuiz= async(quiz) =>{
    return await axios.post(`${process.env.REACT_APP_API}/quizzs`, quiz)
}
export const editQuiz= async(id,quiz) =>{
    return await axios.put(`${process.env.REACT_APP_API}/quizzs/${id}`, quiz)
}
export const createQuestion= async(id,quiz) =>{
    return await axios.put(`${process.env.REACT_APP_API}/quizzs/${id}`, quiz)
}
// export const getUserById= async(id) =>{
//     return await axios.get(`${process.env.REACT_APP_API}/${id}`)
// }
export const editUserById = async (user, id) => {
    return await axios.put(`${process.env.REACT_APP_API}/users/${id}`, user)
}

export const getQuizPagination = async (page, limit) => {
    return await axios.get(`${process.env.REACT_APP_API}/quizzs?_${page}&_limit=${limit}`, page, limit)
}
// export const deleteUserById= async(id) =>{
//     return await axios.delete(`${process.env.REACT_APP_API}/delete/${id}`)
// }
