import React, { useState } from 'react';
import Auth from "../../utils/auth";
import WallForm from "./Wall";
import "./Newpost.css";
import { useMutation } from "@apollo/react-hooks";
import { CREATE_POST } from "../../utils/mutations";
import { idbPromise } from '../../utils/helpers';


const NewPost = () => {


  const [userFormData, setUserFormData] = useState({ title: "", message: "" });
  const [validated] = useState(false);
  const [showAlert, setShowAlert] = useState(false);

  const [post, { error }] = useMutation(CREATE_POST);

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setUserFormData({ ...userFormData, [name]: value });
  };

  const handleFormSubmit = async (event) => {
    event.preventDefault();
    // hn
    // const cart = await idbPromise('cart', 'get')

    // check if form has everything (as per react-bootstrap docs)
    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      event.preventDefault();
      event.stopPropagation();
    }

    const token = Auth.loggedIn() ? Auth.getToken() : null;
    console.log(token, "done something", userFormData.title, userFormData.message);
    if (!token) {
      return false;
    }
    try {
      const { data } = await post({
        variables: { ...userFormData }});
        // hn
      //   const productData = data.post.products;

      //   productData.forEach((item) => {
      //     idbPromise('cart', 'delete', item);
      // });
    } catch (error) {
      console.error(error);
    }
    setUserFormData({
      title: "",
      message: "",
    });
  };


  return (
    <div>
      <div id="newpost">
        <h1>
          What is on your <span>mind</span>?
        </h1>
        <form onSubmit={handleFormSubmit}>
          <textarea
            id="post-title"
            className="form-primary"
            placeholder="Title your post!"
            name="title"
            onChange={handleInputChange}
            value={userFormData.title}
            required
          ></textarea>
          <textarea
            id="post-msg"
            className="form-secondary"
            placeholder="Then tell everyone what you're thinking..."
            name="message"
            onChange={handleInputChange}
            value={userFormData.message}
            required
          ></textarea>
          <button type="submit">Post to your Public Wall!</button>
        </form>
      </div>


<div>post data here: {userFormData.title} {userFormData.message}</div>


      <WallForm />

      <div className="post">
        <h1>{[userFormData.title]}</h1>
        <p>{userFormData.message}</p>
        <div id="post-author">
            <h3>{userFormData.creator}</h3>
        </div>

        {/* <p><em>Posted - {timeAgo(new Date(props.timestamp))}</em></p> */}
 </div> 
    </div>
  );
};

export default NewPost;
