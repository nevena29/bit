import React from "react";


// class ListOfPosts extends React.Component {
//     constructor(props) {
//         super(props);
//         this.state = { data: null };
//     }
//     componentDidMount() {
//         fetch('https://jsonplaceholder.typicode.com/posts?userId=' + this.props.userId)
//             .then((result) => result.json())
//             .then((result) => this.setState({ data: result }))
//             .catch(error => {
//                 console.log(error);
//             });
//     }

//     render() {
//         if (!this.state.data) {
//             return <h1>loading</h1>;
//         }
//         return (
//             this.state.data.map((element) => <PostsByAuthor title={element.title} key={element.id} />));

//     }
// }


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
            // sad kad napravis novi fetch,to je novi thread, ulancavaju se fetch-evi,



        console.log(this.state.data)
    }

    render() {
        this.props.match.params.id

        if (this.state.data) {
            return (
                <div style={{ paddingTop: "100px" }}>
                   <h2>Post Title 1 </h2>
                    {/* <h3>{this.state.data.title}</h3> */}
                    <p class="id">{this.state.data.userId}</p>
                    <p>{this.state.data.body}</p>
                    <p>"Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?" </p>
                    <hr/>

                </div>
            )
        }
        else {
            return "nemaaaaa"
        }
    }
}

export default SinglePost;