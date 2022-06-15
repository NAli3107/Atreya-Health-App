import React from "react";

import WallForm from "./Wall"

// import { createPost } from "../services/firebase";
// import { authentication } from "../services/firebase-config";

import './Newpost.css';
import {CREATE_POST} from "../../utils/mutations"
// import anonymous from '../images/default.png';


// function handleSubmission(e) {
//     e.preventDefault();
//     createPost('test123');
// }

function magic(input) {
    input = input.replace(/&/g, '&amp;');
    input = input.replace(/</g, '&lt;');
    input = input.replace(/>/g, '&gt;');
    return input;
}

const handleUpdate = async (event) => {
    event.preventDefault();
console.log("button clicked")

//take the title message etc and save to db  - new post.js
//qurey - all the posts on the wall and retreving db - in wall.js

const onUpdate = ({
   
  });

   const addPost= ({

   })
}


    const NewPost = () => {

        return(
    <div>

     <div id="newpost">
        <h1>What is on your <span>mind</span>?</h1>
    <form onSubmit={handleUpdate}>
            <textarea id="post-title" className="form-primary" placeholder="Title your post!"></textarea>
            <textarea id="post-msg" className="form-secondary" placeholder="Then tell everyone what you're thinking..."></textarea>
            <button type="submit">Post to your Public Wall!</button>
        </form>
    </div>
   

    <WallForm/>
    </div>
)}

export default NewPost

