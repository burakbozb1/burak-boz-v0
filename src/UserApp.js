import React from "react";
import Logo from "./Images/Logo.png";
import BgImage1 from './Images/bg1.png'
import GitLogo from './Images/SocialMediaLogos/Git.png';
import InLogo from './Images/SocialMediaLogos/LinkedIn.png';
import TwitchLogo from './Images/SocialMediaLogos/Twitch.png';
import YoutubeLogo from './Images/SocialMediaLogos/Youtube.png';
import DiscordLogo from './Images/SocialMediaLogos/Discord.png';
import InstagramLogo from './Images/SocialMediaLogos/Instagram.png';
import TwitterLogo from './Images/SocialMediaLogos/Twitter.png';


import { Route, Routes, Link } from 'react-router-dom';
import Home from './Components/HomeMiddle';
import About from './Components/AboutMiddle';
import Contact from './Components/ContactMiddle';
import CV from './Components/CvMiddle';
import BlogMain from './Components/Blog/BlogMain'
import { CategoriesData } from "./Statics/CategoriesData";
import BlogCategory from './Components/Blog/BlogCategory';
import BlogDetail from'./Components/Blog/BlogDetail';


class UserApp extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      categories: [],
      middleHeight: 0
    }
    this.getCategories = this.getCategories.bind(this);
  }

  componentDidMount() {
    let mHeight = window.innerHeight - 250;
    this.setState({ middleHeight: mHeight });
    this.getCategories();
  }

  getCategories() {
    //Backendden kategoriler alınacak
    var categoriesResponse = CategoriesData();
    this.setState({ categories: categoriesResponse });
  }

  render() {

    let sCategories = this.state.categories.map(category => {
      let link = "/blog/" + category.id;
      return (<Link key={category.id} to={link}>{category.name}</Link>)
    });

    return (
        <div className="App">
          <div id="wrapper" style={{ backgroundImage: `url(${BgImage1})`}}>
            <div id="top-navbar">
              <div id="logo-area"><Link to="/"><img alt="Burak Boz Logo" src={Logo} /> Burak BOZ</Link></div>
              <div id="navbar-area">
                <Link to="/about">About</Link> |
                <Link to="/cv">CV</Link> |
                <Link to="/blog">Blog</Link> |
                <Link to="/contact">Contact</Link>

              </div>
            </div>
            <div id="middle-area" style={{ minHeight: this.state.middleHeight }}>
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/about" element={<About />} />
                <Route path="/contact" element={<Contact />} />
                <Route path="/cv" element={<CV />} />
                <Route path="/blog" element={<BlogMain />} />
                <Route path="/blog/:id" element={<BlogCategory />} />
                <Route path="/blogdetail/:id" element={<BlogDetail />} />
              </Routes>
            </div>
            <div id="footer-area">
              <div id="footer-container">
                <div id="footer-categories-area">
                  <div id="footer-categories">
                    {sCategories}
                  </div>
                </div>
                <div id="social-media-area">
                  <div id="socialMediaArea">
                    <div className="social-media-logos"><a href="/"><img alt="" src={GitLogo} /> </a></div>
                    <div className="social-media-logos"><a href="/"><img alt="" src={InLogo} /> </a></div>
                    <div className="social-media-logos"><a href="/"><img alt="" src={TwitchLogo} /> </a></div>
                    <div className="social-media-logos"><a href="/"><img alt="" src={YoutubeLogo} /> </a></div>
                    <div className="social-media-logos"><a href="/"><img alt="" src={DiscordLogo} /> </a></div>
                    <div className="social-media-logos"><a href="/"><img alt="" src={InstagramLogo} /> </a></div>
                    <div className="social-media-logos"><a href="/"><img alt="" src={TwitterLogo} /> </a></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
    );
  }



}

export default UserApp;
