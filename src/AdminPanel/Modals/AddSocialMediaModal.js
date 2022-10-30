import React from "react";
import Select from 'react-select';


class AddSocialMediaModal extends React.Component{
    constructor(props)
    {
        super(props);
        this.state = {
            name:"",
            linkType:"",
            link:"",
            image:"",
            queuePoint:"",
            linkTypes : [
                {
                    id:1,
                    name:"Aynı Sayfa"
                },
                {
                    id:1,
                    name:"Yeni Sekme"
                },
                {
                    id:1,
                    name:"Yeni Pencere"
                }

            ],
            selectedLinkType : {}

        }
    }

    submit = () => 
    {
        console.log(this.state);
    }

    closeModal = () => 
    {
        let showModal = document.querySelector(".modal");
        showModal.style.display = "none";
    }

    render(){

        let linkTypes = this.state.linkTypes.map(x => {
            return ({value:x.id, label:x.name});
        })
        
        
        return(
            <div className="modal-content">
                <div className="close" id="close-button" onClick={this.closeModal}>x</div>
                <div className="modal-title">Sosyal Medya Ekle</div>
                <div className="modal-line">
                    <div className="modal-line-title">Ad</div>
                    <div className="modal-line-bracket">:</div>
                    <div className="modal-line-input"><input value={this.state.name} onChange={(e) => this.setState({name:e.target.value})}  /></div>
                </div>
                <div className="modal-line">
                    <div className="modal-line-title">Link Tipi</div>
                    <div className="modal-line-bracket">:</div>
                    <div className="modal-line-input"><Select onChange={(e) => this.setState({selectedLinkType:e.value})} options={linkTypes}></Select></div>
                </div>

                <div className="modal-line">
                    <div className="modal-line-title">Link</div>
                    <div className="modal-line-bracket">:</div>
                    <div className="modal-line-input"><input value={this.state.link} onChange={(e) => this.setState({link:e.target.value})}  /></div>
                </div>

                <div className="modal-line">
                    <div className="modal-line-title">Resim</div>
                    <div className="modal-line-bracket">:</div>
                    <div className="modal-line-input"><input value={this.state.image} onChange={(e) => this.setState({image:e.target.value})}  /></div>
                </div>

                <div className="modal-line">
                    <div className="modal-line-title">Sıra</div>
                    <div className="modal-line-bracket">:</div>
                    <div className="modal-line-input"><input value={this.state.queuePoint} onChange={(e) => this.setState({queuePoint:e.target.value})}  /></div>
                </div>

                <div className="modal-line" style={{textAlign:'center'}}>
                    <button onClick={this.submit} className="saveButton">Sosyal Medya Ekle</button>
                </div>
            </div>
        )
    }
}

export default AddSocialMediaModal;