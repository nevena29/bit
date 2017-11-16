import React from "react";

class Timer extends React.Component {
    constructor(props) {
        super(props);

        this.state = { time: "pending", enabled: null , text:null};
        this.handleOnClick = this.handleOnClick.bind(this);
    }

    startTimer() {
        this.time = setInterval(() => {
            this.setState({
                time: new Date().toLocaleTimeString()
            })
            // this.props.onTimeElapsed();
        }, this.props.interval);
        this.setState({enabled : true, text:"stop"});

    }

    componentDidMount() {
        this.startTimer();
    }

    handleOnClick() {
        if (this.state.enabled){
            clearInterval(this.time);
            this.setState({enabled : false, text:"start"});
        }
        else{
            this.startTimer();
        }
    }



    render() {
        return (
            <h2 style={this.props.style} id={'timer'}>
                {this.state.time}
                <button onClick={this.handleOnClick}>{this.state.text}</button>
            </h2>
        );
    }
}

export default Timer;