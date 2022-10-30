import React from "react";

class UpdateMainCategoryModal extends React.Component{

    constructor(props)
    {
        super(props);
        this.state = {
            id:props.selectedCategory.id,
            name:props.selectedCategory.name,
            description:props.selectedCategory.description,
            image:props.selectedCategory.image,
            queuePoint:props.selectedCategory.queuePoint
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
        return (
            <div className="modal-content">
                <div className="close" id="close-button" onClick={this.closeModal}>x</div>
                <div className="modal-title">Ana Kategori Düzenle</div>
                <div className="modal-line">
                    <div className="modal-line-title">Kategori Id</div>
                    <div className="modal-line-bracket">:</div>
                    <div className="modal-line-input">{this.state.id}</div>
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

                <div className="modal-line">
                    <div className="modal-line-title">Resim</div>
                    <div className="modal-line-bracket">:</div>
                    <div className="modal-line-input"><input value={this.state.image} onChange={(e) => this.setState({image:e.target.value})}  /></div>
                </div>

                <div className="modal-line">
                    <div className="modal-line-title">Sıra Puanı</div>
                    <div className="modal-line-bracket">:</div>
                    <div className="modal-line-input"><input value={this.state.queuePoint} onChange={(e) => this.setState({queuePoint:e.target.value})}  /></div>
                </div>

                <div className="modal-line" style={{textAlign:'center'}}>
                    <button onClick={this.submit} className="saveButton">Kaydet</button>
                </div>
            </div>
        )
    }

}

export default UpdateMainCategoryModal;