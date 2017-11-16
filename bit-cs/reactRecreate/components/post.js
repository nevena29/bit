import React from "react";
import PropTypes from "prop-types";
import {Link} from "react-router-dom";

const Post = (props) => {
    return (
        // da je samo /post to bi bio exact path,
    <Link to={"/singlepost/" + props.post.id}>
        <div className="col-12 posts">
              
            <div className="border">
                <h2>{props.post.title}</h2>
                <p>{props.post.body}</p>
                
                <hr />
            </div>
          
        </div>
        </Link>
        
    );
};


// Post.propTypes = {
//     post: PropTypes.shape({
//         userId: PropTypes.number,
//         id: PropTypes.number,
//         title: PropTypes.string,
//         body: PropTypes.string
//     }).isRequired
// };

export default Post;