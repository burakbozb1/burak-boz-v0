import React from "react";

class LastPost extends React.Component {

    render() {
        return (
            <a href="/">
                <div id="last-post">
                    <div id="last-post-title">Son Yazı</div>
                    <div id="last-post-ImageArea">
                        <div id="last-post-image">

                        </div>
                    </div>
                    <div id="last-post-TextArea">
                        <div id="last-post-context-title">React Route</div>
                        <div id="last-post-text">Route'a gelen son güncelleme hakkında</div>
                    </div>
                </div>
            </a>
        )
    }
}

export default LastPost;