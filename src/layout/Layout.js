import { Routes, Route } from "react-router-dom";
import Home from "pages/Home/Home";
import Header from "./Header/Header";
import Footer from "./Footer/Footer";
import './Layout.scss';
import TodoSingle from "pages/TodoSingle/TodoSingle";

function Layout() {
    return (
        <div className="Layout">
           { /*<Header/>*/}
            <div class="container">
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="poke/:id" element={<TodoSingle />} />
            </Routes>
            </div>
           {/* <Footer/>*/}
        </div>
    );
}

export default Layout;