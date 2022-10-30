import React from "react";
import AddCategoryModal from "../../Modals/AddCategoryModal";
import AddSocialMediaModal from "../../Modals/AddSocialMediaModal";
import ShowImageModal from "../../Modals/ShowImageModal";
import UpdateMainCategoryModal from "../../Modals/UpdateMainCategoryModal";
import UpdateSubCategoryModal from "../../Modals/UpdateSubCategoryModal";


class Modal extends React.Component{
    constructor(props)
    {
        super(props);
        this.state = {
            show:props.show,
            type:props.type,
            data:props.data
        }
    }
    
    render(){

        let modal = <div>Test</div>;
        if(this.state.type==="addCategory")
        {
            modal=<AddCategoryModal mainCategories={this.state.data} />;
        }

        else if(this.state.type==="updateMainCategory")
        {
            modal=<UpdateMainCategoryModal selectedCategory={this.state.data} />;
        }

        else if(this.state.type==="updateSubCategory")
        {
            modal=<UpdateSubCategoryModal data={this.state.data} />;
        }

        else if(this.state.type==="categoryImage")
        {
            modal=<ShowImageModal image={this.state.data.image} alt={this.state.data.alt} />;
        }

        else if(this.state.type==="addSocialMedia")
        {
            modal=<AddSocialMediaModal />;
        }

        return(
            <div style={{display:this.state.show ? 'block' : 'none'}} className="modal">
                {modal}
            </div>
        )
    }
}

export default Modal;