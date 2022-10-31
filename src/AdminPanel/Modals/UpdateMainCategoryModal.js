import React from "react";
import axios from "axios";
import services from "../../Common/Service";

class UpdateMainCategoryModal extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            id: props.selectedCategory.id,
            name: props.selectedCategory.name,
            description: props.selectedCategory.description,
            image: null,
            queuePoint: props.selectedCategory.queuePoint,
            changeImage: false
        }
        this.submit = this.submit.bind(this);
    }

    async submit() {
        let updateMainCategoryUrl = services().adminService() + "Categories";
        let formData = new FormData();
        formData.append("id", this.state.id);
        formData.append("isShow", false);
        formData.append("name", this.state.name);
        formData.append("description", this.state.description);
        formData.append("queuePoint", this.state.queuePoint);
        if(this.state.changeImage)
        {
            formData.append("file", this.state.image);
        }
        try {
            const response = await axios.put(updateMainCategoryUrl, formData)
        }
        catch (ex) {
            console.log(ex);
        }

    }

    handleFile = (e) => {
        this.setState({ image: e.target.files[0] })
    }

    closeModal = () => {
        let showModal = document.querySelector(".modal");
        showModal.style.display = "none";
    }


    render() {

        let changeImageStatus = this.state.changeImage ? 'block' : 'none';
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
                    <div className="modal-line-input"><input value={this.state.name} onChange={(e) => this.setState({ name: e.target.value })} /></div>
                </div>

                <div className="modal-line">
                    <div className="modal-line-title">Açıklama</div>
                    <div className="modal-line-bracket">:</div>
                    <div className="modal-line-input"><input value={this.state.description} onChange={(e) => this.setState({ description: e.target.value })} /></div>
                </div>

                <div className="modal-line">
                    <div className="modal-line-title">Resmi Değiştir</div>
                    <div className="modal-line-bracket">:</div>
                    <div className="modal-line-input"><input type="checkbox" value={this.state.changeImage} onChange={() => this.setState({ changeImage: !this.state.changeImage })} /></div>

                </div>

                <div className="modal-line" style={{ display: changeImageStatus }}>
                    <div className="modal-line-title">Resim</div>
                    <div className="modal-line-bracket">:</div>
                    <div className="modal-line-input"><input type="file" onChange={(e) => this.handleFile(e)} /></div>
                </div>

                <div className="modal-line">
                    <div className="modal-line-title">Sıra Puanı</div>
                    <div className="modal-line-bracket">:</div>
                    <div className="modal-line-input"><input value={this.state.queuePoint} onChange={(e) => this.setState({ queuePoint: e.target.value })} /></div>
                </div>

                <div className="modal-line" style={{ textAlign: 'center' }}>
                    <button onClick={this.submit} className="saveButton">Kaydet</button>
                </div>
            </div>
        )
    }

}

export default UpdateMainCategoryModal;