import React from "react";


class SinglePost extends React.Component {
    constructor(props) {
        super(props)
        this.state = { data: null };
    }
    componentDidMount() {
        fetch(`https://jsonplaceholder.typicode.com/posts/${this.props.match.params.id}`)


            .then(response => {
                return response.json()
            })
            .then(data => {

                this.setState({ data })
            })



        console.log(this.state.data)
    }

    render() {
        this.props.match.params.id

        if (this.state.data) {
            return (
                <div style={{paddingTop:"100px"}}>
                    <h3>{this.state.data.title}</h3>
                    <p>{this.state.data.userId}</p>
                    <p>{this.state.data.body}</p>

                </div>
            )
        }
        else{
            return "nemaaaaa"
        }
    }
}

export default SinglePost;