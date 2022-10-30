import React from "react";
import Logo from '../../Images/Logo.png';
import { Link } from "react-router-dom";

class AdminNavbar extends React.Component
{
    render(){
        return (
            <div id="admin-navbar">
                <div id="admin-navbar-logo-area"><img src={Logo} alt="Logo" /></div>
                <div id="admin-navbar-menu-area">
                    <div id="admin-navbar-menu">
                        <ul>
                            <li><Link to="/admin/">Öne Çıkan</Link></li>
                            <li><Link to="/admin/add-blog">Blog Ekle</Link></li>
                            <li><Link to="/admin/update-blog">Blog Düzenle</Link></li>
                            <li><Link to="/admin/categories">Kategoriler</Link></li>
                            <li><Link to="/admin/social-media">Sosyal Medya</Link></li>
                            <li><Link to="/admin/about">Hakkımızda Sayfası</Link></li>
                            <li><Link to="/admin/cv">CV Sayfası</Link></li>
                            <li><Link to="/admin/contact">İletişim Sayfası</Link></li>
                        </ul>
                    </div>
                </div>
            </div>
        )
    }
}

export default AdminNavbar;