import React from "react";

class ShowImageModal extends React.Component{
    constructor(props)
    {
        super(props);
        this.state= {
            image:props.image,
            alt:props.alt
        }

    }

    closeModal = () => 
    {
        let showModal = document.querySelector(".modal");
        showModal.style.display = "none";
    }

    render(){
        return(
            <div className="modal-content">
                <div className="close" id="close-button" onClick={this.closeModal}>x</div>
                <div>
                    <img style={{maxWidth:'350px', marginLeft:'20px'}} src={this.state.image} alt={this.state.alt} />
                </div>
                
            </div>
        )
    }
}

export default ShowImageModal;