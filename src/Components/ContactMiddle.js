import React from "react";
import parse from 'html-react-parser'
import services from "../Common/Service";
import axios from "axios";

class ContactMiddle extends React.Component{
    constructor(props) {
        super(props);
        this.state = { 
            text: "",
            title:"",
            id:null,
            updatedDate:null
        }
        this.getText = this.getText.bind(this);
    }

    componentDidMount(){
        this.getText();
    }

    async getText(){
        let url = services().publicService() + "Statics/iletisim";
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
    
    render(){
        return(
            <div className="middle-wrapper">
                <div id="static-mid-wrapper">
                    <div id="static-mid-context-arae">
                        {parse(this.state.text)}
                    </div>
                </div>
            </div>
        )
    }
}

export default ContactMiddle;