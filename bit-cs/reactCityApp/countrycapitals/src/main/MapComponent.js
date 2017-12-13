import React from "react";
import { compose, withProps } from "recompose";
import { withScriptjs, withGoogleMap, GoogleMap, Marker } from "react-google-maps";
import MyMapComponent from "./MyMapComponent";

class MapComponent extends React.Component{
   constructor(props){
    super(props);

    this.state={
        isMarkerShown:false,
        latLong:{
            lat:48.864716,
            long:2.349014
        }
    
    }
   }

   delayedShowMarker = () => {
    setTimeout(() => {
      this.setState({ isMarkerShown: true })
    }, 3000)
  }

  handleMarkerClick = () => {
    this.setState({ isMarkerShown: false })
    this.delayedShowMarker()
  }
   render(){
       return(
           <div className="">
           <MyMapComponent isMarkerShown={this.state.isMarkerShown}
           onMarkerClick={this.HandleMarkerClick}
           latLong={this.state.latLong}
           />
           </div>
       )
   }
}
export default MapComponent;