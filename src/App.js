import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap/dist/js/bootstrap.bundle'

import Header from "./Components/header";
import '../node_modules/font-awesome/css/font-awesome.min.css';
import Footer from "./Components/Footer";
import {BrowserRouter} from "react-router-dom";
import {Routes, Route} from "react-router-dom";
import Contact from "./Pages/Contact";
import Faq from "./Pages/FAQ";
import FeedBack from "./Pages/FeedBack";
import Home from "./Pages/Home";
import Quiz from "./Pages/Quiz";
import Introduce from "./Pages/Introduce";
import NotFound from "./NotFound";
import Result from "./Pages/Result";
import Content from "./Pages/admin/content";
import EditQuiz from "./Pages/admin/EditQuiz";
import UserManager from "./Pages/admin/UserManager";
import ProtectedRoutes from "./Sercu/ProtectedRoutes";
import ProtectedRoutesWithRole from "./Sercu/ProtectedRoutesWithRole";
import UserHistory from "./Pages/UserHistory";

function App() {

    return (

        <div className="container">
            <Header/>
            <Routes>
                <Route exact path='/' element={<Home/>}/>
                <Route exact path='/contact' element={<Contact/>}/>
                <Route exact path='/faq' element={<Faq/>}/>
                <Route exact path='/feedBack' element={<FeedBack/>}/>


                <Route exact path='/introduce' element={<Introduce/>}/>

                <Route element = {<ProtectedRoutes/>}>
                    <Route  path='/quizzs/:id' element={<Quiz />}/>
                    <Route exact path='/result' element={<Result/>}/>
                    <Route exact path='/history' element={<UserHistory/>}/>
                </Route>


                <Route element = {<ProtectedRoutesWithRole/>}>
                    <Route exact path='/admin/home' element={<Content/>}/>
                    <Route exact  path='/admin/editQuiz/:id' element={<EditQuiz />}/>
                    <Route exact  path='/admin/users' element={<UserManager />}/>
                </Route>

                <Route path='*' element={<NotFound/>}/>
            </Routes>
            <Footer/>
        </div>
    );
}

export default App;
