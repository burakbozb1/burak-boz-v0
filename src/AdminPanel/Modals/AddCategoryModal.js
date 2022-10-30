import React from "react";
import Select from 'react-select';
import axios from "axios";
import services from "../../Common/Service";


class AddCategoryModal extends React.Component{
    constructor(props)
    {
        super(props);
        this.state = {
            mainCategory:null,
            name:"",
            description:"",
            image:null,
            queuePoint:"",
            mainCategories:props.mainCategories
        }
        this.submit = this.submit.bind(this);
    }

    async submit() 
    {
        if(this.state.mainCategory==0)
        {
            let addMainCategoryUrl = services().adminService() + "Categories";
            let formData = new FormData();
            formData.append("file", this.state.image);
            formData.append("isShow", false);
            formData.append("name", this.state.name);
            formData.append("description", this.state.description);
            formData.append("queuePoint", this.state.queuePoint);
            try{
                const response = await axios.post(addMainCategoryUrl,formData);
            }
            catch(ex)
            {
                console.log(ex);
            }
        }
        else
        {

        }
        
    }

    handleFile = (e)=>
    {
        this.setState({image:e.target.files[0]})
        
    }

    closeModal = () => 
    {
        let showModal = document.querySelector(".modal");
        showModal.style.display = "none";
    }

    render(){

        let mainCategories = this.state.mainCategories.map(x => {
            return ({value:x.id, label:x.name});
        })
        let mainCategory = [ {value:0, label:"Ana Kategori"}];
        let categories = mainCategory.concat(mainCategories);
        
        return(
            <div className="modal-content">
                <div className="close" id="close-button" onClick={this.closeModal}>x</div>
                <div className="modal-title">Kategori Ekle</div>
                <div className="modal-line">
                    <div className="modal-line-title">Ana Kategori</div>
                    <div className="modal-line-bracket">:</div>
                    <div className="modal-line-input">
                        <Select onChange={(e) => this.setState({mainCategory:e.value})} options={categories}></Select>
                    </div>
                </div>
                <div className="modal-line">
                    <div className="modal-line-title">Kategori Adı</div>
                    <div className="modal-line-bracket">:</div>
                    <div className="modal-line-input"><input value={this.state.name} onChange={(e) => this.setState({name:e.target.value})}  /></div>
                </div>

                <div className="modal-line">
                    <div className="modal-line-title">Açıklama</div>
                    <div className="modal-line-bracket">:</div>
                    <div className="modal-line-input"><input value={this.state.description} onChange={(e) => this.setState({description:e.target.value})}  /></div>
                </div>

                
                <div className="modal-line" style={{display: this.state.mainCategory===0 ? 'block' : 'none'}}>
                    <div className="modal-line-title">Resim</div>
                    <div className="modal-line-bracket">:</div>
                    <div className="modal-line-input"><input type="file" onChange={(e) => this.handleFile(e)}  /></div>
                </div>

                <div className="modal-line">
                    <div className="modal-line-title">Sıra Puanı</div>
                    <div className="modal-line-bracket">:</div>
                    <div className="modal-line-input"><input value={this.state.queuePoint} onChange={(e) => this.setState({queuePoint:e.target.value})}  /></div>
                </div>

                <div className="modal-line" style={{textAlign:'center'}}>
                    <button onClick={this.submit} className="saveButton">Kategori Ekle</button>
                </div>
            </div>
        )
    }
}

export default AddCategoryModal;