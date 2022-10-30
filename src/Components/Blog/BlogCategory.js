import React from "react";
import { Link } from 'react-router-dom';

class BlogCategory extends React.Component {

    render() {
        return (
            <div className="middle-wrapper">
                <div id="static-mid-wrapper">
                    <div id="static-mid-context-arae">
                        <div id="blog-category-title">Yazlım</div>
                        <div id="blog-category-subtitles">
                            <ul>
                                <li><a href="/">Tümü</a></li>
                                <li><a href="/">c#</a></li>
                                <li><a href="/">React</a></li>
                                <li><a href="/">Node</a></li>
                                <li><a href="/">Java</a></li>
                            </ul>
                        </div>
                        <div id="blog-category-filter-area">Filtreler</div>
                        <div id="blog-category-contents-area">
                            <Link to="/blogdetail/1">
                                <div className="blog-category-content1">
                                    <div className="blog-content-image-area"></div>
                                    <div className="blog-content-text-area">
                                        <div className="blog-content-text-area-title">Title <span>01.01.2022</span></div>
                                        <div className="blog-content-text-area-text">Text</div>
                                    </div>
                                </div>
                            </Link>

                            <Link to="/blogdetail/2">
                                <div className="blog-category-content1">
                                    <div className="blog-content-image-area"></div>
                                    <div className="blog-content-text-area">
                                        <div className="blog-content-text-area-title">Title <span>01.01.2022</span></div>
                                        <div className="blog-content-text-area-text">Text</div>
                                    </div>
                                </div>
                            </Link>

                            <Link to="/blogdetail/3">
                                <div className="blog-category-content1">
                                    <div className="blog-content-image-area"></div>
                                    <div className="blog-content-text-area">
                                        <div className="blog-content-text-area-title">Title <span>01.01.2022</span></div>
                                        <div className="blog-content-text-area-text">Text</div>
                                    </div>
                                </div>
                            </Link>

                            <Link to="/blogdetail/4">
                                <div className="blog-category-content1">
                                    <div className="blog-content-image-area"></div>
                                    <div className="blog-content-text-area">
                                        <div className="blog-content-text-area-title">Title <span>01.01.2022</span></div>
                                        <div className="blog-content-text-area-text">Text</div>
                                    </div>
                                </div>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default BlogCategory;