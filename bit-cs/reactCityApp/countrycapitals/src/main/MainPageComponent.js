import React from "react";
import MapComponent from "./MapComponent"


class MainPageComponent extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            coordinates:{}
        }
    }
    showCoordinates(coordinates){
        this.setState({
            coordinates:coordinates
        })
    }
    render() {
        return (
            <div className="container">
                <div className="row">
                    <div className="col s12">
                    <MapComponent  coordinates={this.state.coordinates}/>

                    </div>
                </div>
            </div>
        )
    }

}
export default MainPageComponent;