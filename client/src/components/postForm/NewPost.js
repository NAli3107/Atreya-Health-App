import React from "react";

import WallForm from "./Wall"

// import { createPost } from "../services/firebase";
// import { authentication } from "../services/firebase-config";

import './Newpost.css';

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

const onUpdate = ({
    // id: `${authentication.currentUser.uid}-${Math.floor(100000 + Math.random() * 900000)}`,
    title: event.target[0].value,
    description: magic(event.target[1].value),
    // avatarURL: authentication.currentUser.photoURL ? authentication.currentUser.photoURL : anonymous,
    timestamp: new Date().toISOString(),
    // author: currentUser.displayName ? currentUser.displayName : 'Demo User' 
  });



const addPost= ({
    // id: `${authentication.currentUser.uid}-${Math.floor(100000 + Math.random() * 900000)}`,
    title: magic(event.target[0].value),
    description: magic(event.target[1].value),
    // avatarURL: authentication.currentUser.photoURL ? authentication.currentUser.photoURL : anonymous,
    timestamp: new Date().toISOString(),
    // author: authentication.currentUser.displayName ? authentication.currentUser.displayName : 'Demo User' 
  })
}


    const NewPost = () => {

        return(
    <div>

    {/* const handleUpdate = (e) => {
        e.preventDefault();

        onUpdate({
            // id: `${authentication.currentUser.uid}-${Math.floor(100000 + Math.random() * 900000)}`,
            title: e.target[0].value,
            description: magic(e.target[1].value),
            avatarURL: authentication.currentUser.photoURL ? authentication.currentUser.photoURL : anonymous,
            timestamp: new Date().toISOString(),
            author: authentication.currentUser.displayName ? authentication.currentUser.displayName : 'Demo User' 
          });

          addPost({
            // id: `${authentication.currentUser.uid}-${Math.floor(100000 + Math.random() * 900000)}`,
            title: magic(e.target[0].value),
            description: magic(e.target[1].value),
            avatarURL: authentication.currentUser.photoURL ? authentication.currentUser.photoURL : anonymous,
            timestamp: new Date().toISOString(),
            author: authentication.currentUser.displayName ? authentication.currentUser.displayName : 'Demo User' 
          })
    } */}

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

