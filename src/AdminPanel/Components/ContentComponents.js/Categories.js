import React from "react";


// import YazilimImage from '../../../Statics/CategoryImages/yazilim.png'
// import RobotikImage from '../../../Statics/CategoryImages/robotik.png'
// import GamingImage from '../../../Statics/CategoryImages/gaming.png'
// import HavadanSudanImage from '../../../Statics/CategoryImages/havadansudan.png'
// import MusicImage from '../../../Statics/CategoryImages/music.png'
import Modal from "./Modal";
import services from "../../../Common/Service";
import axios from "axios";
/*

    Kategori modeli şu şekilde olmalı

    Ana kategori:
    id,
    name,
    description,
    image,
    queuePoint,
    subCategories : [],
    isShow

    Alt kategoriler
    id,
    name,
    descripton,
    queuePoint,
    mainCategoryId (backend)
    isShow (backend)
*/
class Categories extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            categories: [
                // {
                //     id: 1,
                //     name: "Yazılım",
                //     image: YazilimImage,
                //     description: "Bu kategori altında yazılım ile ilgili bloglar bulunacaktır.",
                //     subCategories: [
                //         {
                //             id: 1,
                //             name: "C#",
                //             image: ""
                //         },
                //         {
                //             id: 2,
                //             name: "React",
                //             image: ""
                //         },
                //         {
                //             id: 3,
                //             name: "Node",
                //             image: ""
                //         },
                //         {
                //             id: 4,
                //             name: "Java",
                //             image: ""
                //         },
                //     ]
                // },
                // {
                //     id: 2,
                //     name: "Robotik",
                //     image: RobotikImage,
                //     description: "Bu kategori altında robotik ile ilgili bloglar bulunacaktır.",
                //     subCategories: [
                //         {
                //             id: 1,
                //             name: "Arduino",
                //             image: ""
                //         },
                //         {
                //             id: 2,
                //             name: "Robotino",
                //             image: ""
                //         },
                //         {
                //             id: 3,
                //             name: "Parts",
                //             image: ""
                //         }
                //     ]
                // },
                // {
                //     id: 3,
                //     name: "Müzik",
                //     image: MusicImage,
                //     description: "Bu kategori altında müzik ile ilgili bloglar bulunacaktır.",
                //     subCategories: [
                //         {
                //             id: 1,
                //             name: "Benim müziğim",
                //             image: ""
                //         },
                //         {
                //             id: 2,
                //             name: "Spotify listelerim",
                //             image: ""
                //         },
                //         {
                //             id: 3,
                //             name: "Youtube music listelerim",
                //             image: ""
                //         }
                //     ]
                // },
                // {
                //     id: 4,
                //     name: "Gaming",
                //     image: GamingImage,
                //     description: "Bu kategori altında gaming hakkında bloglar bulunacaktır.",
                //     subCategories: [
                //         {
                //             id: 1,
                //             name: "Instagram",
                //             image: ""
                //         },
                //         {
                //             id: 2,
                //             name: "Twitter",
                //             image: ""
                //         },
                //         {
                //             id: 3,
                //             name: "Twitch",
                //             image: ""
                //         },
                //         {
                //             id: 4,
                //             name: "Youtube",
                //             image: ""
                //         },
                //         {
                //             id: 5,
                //             name: "LinkedIn",
                //             image: ""
                //         }
                //     ]
                // },
                // {
                //     id: 5,
                //     name: "Havadan Sudan",
                //     image: HavadanSudanImage,
                //     description: "Maksat muhabbet alanı.",
                //     subCategories: [
                //         {
                //             id: 1,
                //             name: "Gezi",
                //             image: ""
                //         },
                //         {
                //             id: 2,
                //             name: "Sohbet",
                //             image: ""
                //         },
                //         {
                //             id: 3,
                //             name: "Fikir",
                //             image: ""
                //         }
                //     ]
                // }
            ],
            selectedCategoryType: null,
            subCategories: [],
            selectedMainCategory: {},
            selectedSubCategory: {},
            newName: "",
            newDescription: "",
            newImage: "",
            showModal:false,
            modalType:""
        }

        this.getData = this.getData.bind(this);
        this.setActiveMainCategory = this.setActiveMainCategory.bind(this);
        
    }

    componentDidMount(){

        this.getData();
    }

    async getData(){
        let url = services().adminService() + "Categories/withsubcategories";
        let response = await axios.get(url);
        //console.log(response);
        this.setState(
            {
                categories:response.data.data
            }
        );
    }

    deleteMainCategory = (id) => {
        console.log("silinecek id : " + id);
        let url = services().adminService()+"Categories/"+id;
        axios.delete(url)
            .then(() => this.getData());
    }

    deleteSubCategory = (id) => {
        console.log("silinecek alt kategori : "+id);
        console.log("silinecek id : " + id);
        let url = services().adminService()+"Categories/deletesubcategory/"+id;
        axios.delete(url)
            .then(() => this.getData());
    }

    openSubCategories = (id) => 
    {
        let subCategories = document.querySelector(`#main-id-${id}`);
        if (getComputedStyle(subCategories).display==="none") {
            subCategories.style.display="block";
        }
        else
        {
            subCategories.style.display="none";
        }
    }

    addCategory = () => 
    {
        this.setState({showModal:!this.state.showModal, modalType:"addCategory"});
    }

    updateMainCategory = (id) => 
    {
        let category = this.state.categories.filter(x=> x.id===id);
        this.setState({showModal:!this.state.showModal, modalType:"updateMainCategory", selectedMainCategory:category[0]});
    }

    updateSubCategory = (parentId,id) => 
    {
        let category = this.state.categories.filter(x=> x.id===parentId);
        let subCategory = category[0].subCategories.filter(x=> x.id===id);
        this.setState({showModal:!this.state.showModal, modalType:"updateSubCategory", selectedMainCategory:category[0], selectedSubCategory:subCategory[0]});
    }

    async setActiveMainCategory(id)
    {
        let url = services().adminService()+"Categories/visibility/"+id;
        const config = { headers: {'Content-Type': 'application/json'} };
        axios.put(url, {}, config).then(response => {
            this.getData();
        });
    }

    setActiveSubCategory = (parentId,id) => 
    {
        let url = services().adminService()+"Categories/subcategoryvisibility/"+id;
        const config = { headers: {'Content-Type': 'application/json'} };
        axios.put(url, {}, config).then(response => {
            this.getData();
        });
    }

    showImage = (id) => 
    {
        let category = this.state.categories.filter(x=> x.id===id);
        this.setState({showModal:!this.state.showModal, selectedMainCategory:category[0], modalType:"categoryImage"});
    }

    closeModal = () => 
    {
        // let showModal = document.querySelector(".modal");
        // showModal.style.display = "none";
    }

    render() {

        let mainCategories = this.state.categories.map(x => {
            return (
                <div className="category-main" key={x.id}>
                    <div className="category-main-id">{x.id}</div>
                    <div className="category-main-name">{x.name}</div>
                    <div className="category-main-description">{x.description}</div>
                    <div className="category-main-image" onClick={() => this.showImage(x.id)}>Image</div>
                    <div className="category-main-queue-point">10</div>
                    <div className="category-main-isActive" onClick={() => this.setActiveMainCategory(x.id)}>{x.isShow ? '+' : '-'}</div>
                    <div className="category-main-delete" onClick={() => this.deleteMainCategory(x.id)}>X</div>
                    <div className="category-main-update" onClick={() => this.updateMainCategory(x.id)}>U</div>
                    <div className="category-main-show-subs"  onClick={() => this.openSubCategories(x.id)} >Show</div>
                    <div className="category-subs" id={`main-id-${x.id}`} style={{display:'none'}}>
                        <div className="category-sub-title">
                            <div className="category-sub-id category-title">Id</div>
                            <div className="category-sub-name category-title">Name</div>
                            <div className="category-sub-description category-title">Description</div>
                            <div className="category-sub-queue-point category-title">QP</div>
                            <div className="category-sub-isActive category-title">Active</div>
                            <div className="category-sub-update category-title">Update</div>
                            <div className="category-sub-delete category-title">Delete</div>
                        </div>
                        {
                            x.subCategories.map(y => {
                                return (
                                    <div className="category-sub" key={y.id}>
                                        <div className="category-sub-id">{y.id}</div>
                                        <div className="category-sub-name">{y.name}</div>
                                        <div className="category-sub-description">{y.description}</div>
                                        <div className="category-sub-queue-point">{y.queuePoint}</div>
                                        <div className="category-sub-isActive" onClick={() => this.setActiveSubCategory(x.id,y.id)}>{y.isShow ? '+' : '-'}</div>
                                        <div className="category-sub-update" onClick={() => this.updateSubCategory(x.id,y.id)}>U</div>
                                        <div className="category-sub-delete" onClick={() => this.deleteSubCategory(y.id)}>X</div>
                                    </div>
                                )
                            })
                        }

                        
                    </div>
                </div>
            )
        });

        let modalStatus;
        if(this.state.showModal)
        {

            if(this.state.modalType==="addCategory")
            {
                let mainCategories = this.state.categories.map(x => {
                    return ({id:x.id, name:x.name})
                });
                
                modalStatus=<Modal show={true} type={"addCategory"} data={mainCategories}/>
            }
            
            else if(this.state.modalType==="updateMainCategory")
            {
                modalStatus=<Modal show={true} type={"updateMainCategory"} data={this.state.selectedMainCategory}/>
            }

            else if(this.state.modalType==="updateSubCategory")
            {
                let modalData = {
                    parentId:this.state.selectedMainCategory.id,
                    selectedSubCategory:this.state.selectedSubCategory,
                    mainCategories:this.state.categories
                }
                modalStatus=<Modal show={true} type={"updateSubCategory"} data={modalData}/>
            }

            else if(this.state.modalType==="categoryImage")
            {
                let modalData = {
                    image:this.state.selectedMainCategory.image,
                    alt:this.state.selectedMainCategory.name
                }
                modalStatus=<Modal show={true} type={"categoryImage"} data={modalData}/>
            }
            
        }
        


        return (
            <div>
                <div id="admin-panel-content-title-area"><h1>Kategoriler</h1></div>
                
                <div className="panel-line">
                    <div className="panel-line-title" onClick={this.addCategory}>
                        <button className="add-button">Kategori ekle</button>
                    </div>
                </div>

                <div className="panel-line">
                    <div className="panel-line-title">Ana Kategoriler</div>
                </div>
                <div className="panel-line">
                    <div className="category-main">
                        <div className="category-main-id category-title">Id</div>
                        <div className="category-main-name category-title">Name</div>
                        <div className="category-main-description category-title">Description</div>
                        <div className="category-main-image category-title">Image</div>
                        <div className="category-main-queue-point category-title">QP</div>
                        <div className="category-main-isActive category-title">Active</div>
                        <div className="category-main-delete category-title">Delete</div>
                        <div className="category-main-update category-title">Update</div>
                        <div className="category-main-show-subs category-title">Sub Categories</div>
                    </div>
                    {mainCategories}
                </div>
                {modalStatus}
            </div>
        )
    }
}

export default Categories;