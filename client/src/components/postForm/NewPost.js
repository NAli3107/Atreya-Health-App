import React, { useState } from 'react';
import { useQuery, gql } from "@apollo/client";
import Auth from "../../utils/auth";
import "./Newpost.css";
import { useMutation } from "@apollo/react-hooks";
import { CREATE_POST } from "../../utils/mutations";
import { idbPromise } from '../../utils/helpers';
import { QUERY_POSTS } from "../../utils/queries";

const NewPost = () => {


  const [userFormData, setUserFormData] = useState({ title: "", message: "" });
  const [validated] = useState(false);
  const [showAlert, setShowAlert] = useState(false);
  const { loading, data } = useQuery(QUERY_POSTS);
  const [post, { error }] = useMutation(CREATE_POST);
  const posts = data?.posts || [];

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
          What is on your mind?</h1>
           <p className='add'>Add a post here and share it with the Community</p>
      
        <form onSubmit={handleFormSubmit}>
          <textarea
            id="post-title"
            className="form-primary"
            placeholder="Add a title to your post"
            name="title"
            onChange={handleInputChange}
            value={userFormData.title}
            required
          ></textarea>
          <textarea
            id="post-msg"
            className="form-secondary"
            placeholder="Tell everyone what you're thinking..."
            name="message"
            onChange={handleInputChange}
            value={userFormData.message}
            required
          ></textarea>
          <button className= "postbutton" type="submit">Post to your Public Wall!</button>
        </form>
      </div>

{/* see if u can edit n delete these */}

      <div id="dashboardlist">
        Your posts
      {posts.map((post) => (
          <div class="thumbnail1 card-body">
<h5>Your current title: </h5>
        <h1 className="card-title2">{post.title}</h1>
        <h5>Your current post: </h5>
        <p className='pbody card-text'> {post.message}</p>

    </div>
    ))}

</div>
 </div>
  );
};

export default NewPost;
