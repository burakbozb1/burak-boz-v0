import React from "react";
import { CKEditor } from '@ckeditor/ckeditor5-react';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';
import services  from "../../../Common/Service";
import axios from "axios";

class ContactPage extends React.Component {
    constructor(props) {
        super(props);
        this.state = { 
            text: "",
            title:"",
            id:null,
            updatedDate:null
        }
        this.getText = this.getText.bind(this);
        this.saveSubmit = this.saveSubmit.bind(this);
    }

    componentDidMount(){
        this.getText();
    }

    async getText(){
        let url = services().adminService() + "Statics/iletisim";
        let response = await axios.get(url);
        this.setState(
            {
                text:response.data.data.text, 
                title:response.data.data.title,
                id:response.data.data.id,
                updatedDate:response.data.data.updatedDate
            }
        );
    }

    async saveSubmit() 
    {
        let data = {
            id:this.state.id,
            title:this.state.title,
            text:this.state.text
        }
        console.log(data);
        let url = services().adminService() + "Statics/updateiletisim";
        axios.put(url, data)
            .then(response => 
                {
                    if(response.status>=200 && response.status<300)
                    {
                        console.log("Güncelleme başarılı");
                        this.getText();
                    }
                    else
                    {
                        console.log("Güncelleme başarısız");
                        console.log(response);
                    }
                    
                }
            );
    }


    render() {
        console.log(this.state.text);
        return (
            <div>
                <div className="panel-container">
                    <h1>İletişim Sayfası</h1>
                </div>
                <div className="panel-container">
                    <div className="admin-blog-form-title">Başlık</div>
                        <div className="admin-blog-form-element"><input className="input-type" value={this.state.title} onChange={(e) => this.setState({title:e.target.value})}/></div>
                </div>
                <div className="panel-container">
                    <CKEditor
                        editor={ClassicEditor}
                        data={this.state.text}
                        // onReady={ editor => {
                        //     // You can store the "editor" and use when it is needed.
                        //     console.log( 'Editor is ready to use!', editor );
                        // } }
                        onChange={(event, editor) => {
                            const data = editor.getData();
                            this.setState({ text: data });
                        }}
                        // onBlur={ ( event, editor ) => {
                        //     console.log( 'Blur.', editor );
                        // } }
                        // onFocus={ ( event, editor ) => {
                        //     console.log( 'Focus.', editor );
                        // } }
                    />

                </div>
                <div className="panel-container">
                    <button onClick={this.saveSubmit} className="saveButton">Kaydet</button>
                </div>
            </div>

        )
    }
}

export default ContactPage;