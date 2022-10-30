import React from "react";
import GitLogo from "../../../Images/SocialMediaLogos/Git.png"
import LinkedinLogo from "../../../Images/SocialMediaLogos/LinkedIn.png"
import TwitchLogo from "../../../Images/SocialMediaLogos/Twitch.png"
import YoutubeLogo from "../../../Images/SocialMediaLogos/Youtube.png"
import DiscordLogo from "../../../Images/SocialMediaLogos/Discord.png"
import InstagramLogo from "../../../Images/SocialMediaLogos/Instagram.png"
import TwitterLogo from "../../../Images/SocialMediaLogos/Twitter.png"


import Modal from "./Modal";

class SocialMedia extends React.Component {

    /*
        Social Media Model

        id,
        name,
        linkType (enum => target blank vs. 0 => yeni sekmekde aç, 1 => mevcut sekmede aç) 
        link,
        image,
        queuePoint,
        isShow (backend)

    */

    constructor(props) {
        super(props);
        this.state = {
            socialMedia: [
                {
                    id: 0,
                    name: "Github",
                    linkType: 0,
                    link: "https://github.com/burakbozb1",
                    image: GitLogo,
                    queuePoint: 10
                },
                {
                    id: 1,
                    name: "LinkedIn",
                    linkType: 0,
                    link: "https://www.linkedin.com/in/burakbozb1/",
                    image: LinkedinLogo,
                    queuePoint: 20
                },
                {
                    id: 2,
                    name: "Twitch",
                    linkType: 0,
                    link: "https://www.twitch.tv/b1tv",
                    image: TwitchLogo,
                    queuePoint: 30
                },
                {
                    id: 3,
                    name: "Youtube",
                    linkType: 0,
                    link: "https://www.youtube.com/channel/UCDHkPBCsIRPMqvfT_GtE2iw",
                    image: YoutubeLogo,
                    queuePoint: 40
                },
                {
                    id: 4,
                    name: "Discord",
                    linkType: 0,
                    link: "https://discord.gg/3EJDqS9f",
                    image: DiscordLogo,
                    queuePoint: 40
                },
                {
                    id: 5,
                    name: "Instagram",
                    linkType: 0,
                    link: "https://www.instagram.com/burakbozb1/",
                    image: InstagramLogo,
                    queuePoint: 50
                },
                {
                    id: 6,
                    name: "Twitter",
                    linkType: 0,
                    link: "https://twitter.com/burakbozb1",
                    image: TwitterLogo,
                    queuePoint: 60
                }
            ],
            showModal:false,
            modalType:""
        }
    }

    addSocialMedia = () => 
    {
        this.setState({showModal:!this.state.showModal, modalType:"addSocialMedia"});
        console.log("clicked");
    }


    render() {

        let socialMedias = this.state.socialMedia.map(x => {
            return (
                <div className="social-media-line" key={x.id}>
                    <div className="social-media-id">{x.id}</div>
                    <div className="social-media-name">{x.name}</div>
                    <div className="social-media-link-type">{x.linkType}</div>
                    <div className="social-media-link">{x.link.length > 30 ? x.link.substring(1,30)+'...' : x.link}</div> 
                    <div className="social-media-image">{<img src={x.image} alt={x.name} />}</div>
                    <div className="social-media-queue-point">{x.queuePoint}</div>
                    <div className="social-media-update">U</div>
                    <div className="social-media-delete">D</div>
                </div>
            )

        })


        let modalStatus;
        if(this.state.showModal)
        {

            if(this.state.modalType==="addSocialMedia")
            {
                modalStatus=<Modal show={true} type={"addSocialMedia"}/>
            }
            
        }
        
        return (
            <div>
                <div id="admin-panel-content-title-area"><h1>Sosyal Medya</h1></div>
                <div className="panel-container">
                    <div className="panel-line"><button className="add-button" onClick={this.addSocialMedia}>Add New</button></div>
                    <div className="panel-line">
                        <div className="social-media-line">
                            <div className="social-media-id category-title">Id</div>
                            <div className="social-media-name category-title">Name</div>
                            <div className="social-media-link-type category-title">Link Type</div>
                            <div className="social-media-link category-title">Link</div>
                            <div className="social-media-image category-title">Image</div>
                            <div className="social-media-queue-point category-title">Queue Point</div>
                            <div className="social-media-update category-title">Update</div>
                            <div className="social-media-delete category-title">Delete</div>
                        </div>
                        {socialMedias}
                    </div>
                </div>
                {modalStatus}
            </div>
        )
    }
}

export default SocialMedia;