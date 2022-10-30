import React from "react";
import TwitchLive from '../../Images/TwitchLive.png';

class Highlight extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            highLightLink: "https://www.twitch.tv/b1tv",
            highLightTitle: "Şu an Twitch'de canlı yayındayım.",
            highLightImage: TwitchLive,
            highLightText: "Şu an twitch'de canlı yayındayım. Canlı yayına katılmak için tıklayın."
        }
    }

    render() {
        return (
            <a rel="noopener noreferrer" target="_blank" href={this.state.highLightLink}>
                <div id="highlight">
                    <div id="highlite-title">Öne Çıkan</div>
                    <div id="highlite-context-title">{this.state.highLightTitle}</div>
                    <div id="highlight-image"><img alt="Highlight" style={{ width: '350px' }} src={this.state.highLightImage} /></div>
                    <div id="highlight-text">{this.state.highLightText}</div>
                </div>
            </a>
        )
    }
}

export default Highlight;