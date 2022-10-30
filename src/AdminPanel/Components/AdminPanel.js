import React from "react";
import AdminCss from '../Style/admin-panel.css';
import AdminNavbar from "./AdminNavbar";
import { Route, Routes } from 'react-router-dom';
import AdminHighLight from "./ContentComponents.js/AdminHighLight";
import AddBlog from "./ContentComponents.js/AddBlog";
import UpdateBlog from "./ContentComponents.js/UpdateBlog";
import Categories from "./ContentComponents.js/Categories";
import SocialMedia from "./ContentComponents.js/SocialMedia";
import AboutPage from "./ContentComponents.js/AboutPage";
import CvPage from "./ContentComponents.js/CvPage";
import ContactPage from "./ContentComponents.js/ContactPage";


class AdminPanel extends React.Component {

    render() {
        // let mWidth = (window.innerWidth-200)+'px';
        // alert(window.innerWidth);
        // alert(mWidth);
        //style={{width:mWidth}}
        return (
            <div>
                <AdminNavbar />
                <div id="admin-panel-content-area" >
                    <Routes>
                        <Route path="/" element={<AdminHighLight />} />
                        <Route path="/add-blog" element={<AddBlog />} />
                        <Route path="/update-blog" element={<UpdateBlog />} />
                        <Route path="/categories" element={<Categories />} />
                        <Route path="/social-media" element={<SocialMedia />} />
                        <Route path="/about" element={<AboutPage />} />
                        <Route path="/cv" element={<CvPage />} />
                        <Route path="/contact" element={<ContactPage />} />
                    </Routes>
                </div>
            </div>
        )
    }
}

export default AdminPanel;