import React from "react";
import { Link } from 'react-router-dom';
import { CategoriesData } from "../../Statics/CategoriesData";

class BlogMain extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            categories: []
        }
        this.getAllCategories = this.getAllCategories.bind(this);
    }

    componentDidMount() {
        this.getAllCategories();
        this.state.categories.forEach(element => {
            console.log(element);
        });
    }

    getAllCategories() {
        var categoriesResponse = CategoriesData();
        this.setState({ categories: categoriesResponse });
    }

    render() {

        var categoryTitlePosition = 20;
        var mainCategories = this.state.categories.map(x => {
            let bgImage = "url(" + x.image + ")";
            let catTitlePos = categoryTitlePosition + "px";
            categoryTitlePosition += 55;//Kategorid sayısına göre dinamik bir değer olmalı
            let link = "/blog/" + x.id;

            return (
                <Link key={x.id} to={link} style={{ color: "black" }}>
                    <div className="blog-main-category" style={{ backgroundImage: bgImage }}>
                        <div className="blog-main-category-name" style={{ marginTop: catTitlePos }}>{x.name}</div>
                    </div>
                </Link>
            )
        })

        return (
            <div className="middle-wrapper">
                <div id="static-mid-wrapper">
                    <div id="static-mid-context-arae">
                        <div id="blog-main-categories-wrapper">
                            <div id="blog-main-category-title">Categories</div>
                            <div id="blog-main-categories">
                                {mainCategories}
                            </div>
                        </div>
                        <div id="blog-main-last-posts">
                            <div id="blog-main-last-posts-title">Last Posts</div>
                            <div id="blog-main-last-posts-contents">
                                <Link to="/blogdetail/1">
                                    <div className="blog-main-content1">
                                        <div className="content-image"></div>
                                        <div className="content-text-area">
                                            <div className="content-text-title">Content Title <span>01.01.2022</span></div>
                                            <div className="content-text-text">Content text</div>
                                            <div className="content-text-category">Content category</div>
                                        </div>
                                    </div>
                                </Link>
                                <div className="blog-main-content1">
                                    <div className="content-image"></div>
                                    <div className="content-text-area">
                                        <div className="content-text-title">Content Title</div>
                                        <div className="content-text-text">Content text</div>
                                        <div className="content-text-category">Content category</div>
                                    </div>
                                </div>
                                <div className="blog-main-content1">
                                    <div className="content-image"></div>
                                    <div className="content-text-area">
                                        <div className="content-text-title">Content Title</div>
                                        <div className="content-text-text">Content text</div>
                                        <div className="content-text-category">Content category</div>
                                    </div>
                                </div>
                                <div className="blog-main-content1">
                                    <div className="content-image"></div>
                                    <div className="content-text-area">
                                        <div className="content-text-title">Content Title</div>
                                        <div className="content-text-text">Content text</div>
                                        <div className="content-text-category">Content category</div>
                                    </div>
                                </div>
                                <div className="blog-main-content1">
                                    <div className="content-image"></div>
                                    <div className="content-text-area">
                                        <div className="content-text-title">Content Title</div>
                                        <div className="content-text-text">Content text</div>
                                        <div className="content-text-category">Content category</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default BlogMain