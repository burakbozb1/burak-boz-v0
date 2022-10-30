import React from "react";
import Select from 'react-select';

class UpdateSubCategoryModal extends React.Component{

    constructor(props)
    {
        super(props);
        this.state = {
            mainCategories:props.data.mainCategories,
            selectedSubCategory:props.data.selectedSubCategory,
            parentId:props.data.parentId,
            newName:props.data.selectedSubCategory.name,
            newDescription:props.data.selectedSubCategory.description,
            newQueuePoint:props.data.selectedSubCategory.queuePoint,
            newMainCategory:props.data.selectedSubCategory.parentId

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
        

        let mainCategories = this.state.mainCategories.map(x => {
            return ({value:x.id, label:x.name});
        })


        return (
            <div className="modal-content">
                <div className="close" id="close-button" onClick={this.closeModal}>x</div>
                <div className="modal-title">Alt Kategori Düzenle</div>
                <div className="modal-line">
                    <div className="modal-line-title">Ana Kategori</div>
                    <div className="modal-line-bracket">:</div>
                    <div className="modal-line-input">
                        <Select value={this.state.newMainCategory} options={mainCategories}></Select>
                    </div>
                </div>
                <div className="modal-line">
                    <div className="modal-line-title">Kategori Adı</div>
                    <div className="modal-line-bracket">:</div>
                    <div className="modal-line-input"><input value={this.state.newName} onChange={(e) => this.setState({newName:e.target.value})}  /></div>
                </div>

                <div className="modal-line">
                    <div className="modal-line-title">Açıklama</div>
                    <div className="modal-line-bracket">:</div>
                    <div className="modal-line-input"><input value={this.state.newDescription} onChange={(e) => this.setState({newDescription:e.target.value})}  /></div>
                </div>

                <div className="modal-line">
                    <div className="modal-line-title">Sıra Puanı</div>
                    <div className="modal-line-bracket">:</div>
                    <div className="modal-line-input"><input value={this.state.newQueuePoint} onChange={(e) => this.setState({newQueuePoint:e.target.value})}  /></div>
                </div>

                <div className="modal-line" style={{textAlign:'center'}}>
                    <button onClick={this.submit} className="saveButton">Kaydet</button>
                </div>
            </div>
        )
    }

}

export default UpdateSubCategoryModal;