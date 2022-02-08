import React from "react";
import ReplyButton from "./reply-button";
import LikeButton from "./like-button";
import Comment from "./comment";

let e = React.createElement;

function Post(props) {
    let comments; 
    if (props.comments) {
        comments = props.comments.map((comment, index) => <Comment key={index} {...comment} />);
    }
        return(
            <div className='card w-75'>
                <div className='card-header bg-primary text-white'>
                    {props.username}
                </div>
                <div className='card-body'>
                    {props.content}
                </div>
                <div className='card-footer'>
                    <LikeButton />
                    <ReplyButton />
                    {comments}
                </div>
            </div>
        );
    }
export default Post


// export default class Post extends React.Component {
//     constructor(props) {
//         super(props);
//         this.state = {
//             comments: props.comments,
//             content: props.content,
//             count: 0
//         };
//     }
//     render() {
//         let comments; 
//         if (this.state.comments ) {
//                 comments = props.comments.map((comment, index) => <Comment key={index} {...comment} />);
//         }