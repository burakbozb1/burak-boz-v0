import React from "react";
import Highlight from './HomeComponents/Higlight';
import LastPost from './HomeComponents/LastPost'

class HomeMiddle extends React.Component {

    render() {
        return (
            <div className="middle-wrapper">
                <div className="home-widget-line">
                    <Highlight />
                </div>
                <div className="home-widget-line">
                    <LastPost />
                </div>
            </div>
        )
    }
}

export default HomeMiddle;