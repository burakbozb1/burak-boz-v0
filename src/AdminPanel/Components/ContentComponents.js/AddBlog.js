import React from "react";
import Select from 'react-select';
import { CKEditor } from '@ckeditor/ckeditor5-react';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';
import parse from 'html-react-parser'

class AddBlog extends React.Component {
    constructor(props)
    {
        super(props);
        this.state = {
            selectedMainCategory:null,
            selectedSubCategory:null,
            mainCategories: [],
            subCategories: [],
            blogText:"",
            textTitle:"",
            previewText:"",
            blogStatus: {},
            allStatus :[
                {
                    id:1,
                    name:"Taslak"
                },
                {
                    id:2,
                    name:"Gizli"
                },
                {
                    id:3,
                    name:"Yayında"
                }

            ]
            

        }
    }

    saveSubmit = () => 
    {
        console.log(this.state.blogText);
    }

    preview = () => 
    {
        this.setState({previewText:this.state.blogText});
    }

    render() {

        let allStatus = this.state.allStatus.map(x => {
            return ({value:x.id, label:x.name});
        });

        return (

            <div>
                <div id="admin-panel-content-title-area"><h1>Blog Ekle</h1></div>
                <div className="panel-line">
                    <div className="panel-line-title">
                        <div className="admin-blog-form-title">Blog başlığı</div>
                        <div className="admin-blog-form-element"><input className="input-type" value={this.state.textTitle} onChange={(e) => this.setState({textTitle:e.target.value})}/></div>
                    </div>
                </div>
                <div className="panel-line">
                    <div className="panel-line-title">
                        <div className="admin-blog-form-title">Ana Kategori</div>
                        <div className="admin-blog-form-element">
                        <Select onChange={(e) => this.setState({selectedMainCategory:e.value})} options={this.state.mainCategories}></Select>
                        </div>
                    </div>
                </div>
                <div className="panel-line">
                    <div className="panel-line-title">
                        <div className="admin-blog-form-title">Alt Kategori</div>
                        <div className="admin-blog-form-element">
                        <Select onChange={(e) => this.setState({selectedSubCategory:e.value})} options={this.state.subCategories}></Select>
                        </div>
                    </div>
                </div>
                <div className="panel-line">
                    <div className="panel-line-title">
                        <div className="admin-blog-form-title">Durum</div>
                        <div className="admin-blog-form-element">
                        <Select onChange={(e) => this.setState({blogStatus:e.value})} options={allStatus}></Select>
                        </div>
                    </div>
                </div>
                <div className="panel-line">
                    <CKEditor
                        editor={ClassicEditor}
                        data={this.state.blogText}
                        // onReady={ editor => {
                        //     // You can store the "editor" and use when it is needed.
                        //     console.log( 'Editor is ready to use!', editor );
                        // } }
                        onChange={(event, editor) => {
                            const data = editor.getData();
                            this.setState({ blogText: data });
                        }}
                        // onBlur={ ( event, editor ) => {
                        //     console.log( 'Blur.', editor );
                        // } }
                        // onFocus={ ( event, editor ) => {
                        //     console.log( 'Focus.', editor );
                        // } }
                    />

                </div>
                <div className="panel-line">
                    <button onClick={this.preview} className="saveButton">Önizleme</button>
                    <button onClick={this.saveSubmit} className="saveButton">Kaydet</button>
                </div>

                <div className="panel-line">
                <div className="panel-line-title">Önizleme</div>
                </div>

                <div className="panel-line">
                    {parse(this.state.previewText)}
                </div>
                
            </div>

        )
    }
}

export default AddBlog;