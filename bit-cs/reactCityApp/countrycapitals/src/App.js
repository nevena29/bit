import React from "react";
import {Header} from "./common/header";
import MainPageComponent from "./main/MainPageComponent"

class App extends React.Component {
  render() {
    return (
      <div>
        <div className="hasBg z-depth-2">
          <Header />
        </div>
        <MainPageComponent />
      </div>
    );
  }
}

export default App;
