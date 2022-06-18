import React, { useState } from "react";
import { useQuery, gql } from "@apollo/client";
import Auth from "../../utils/auth";
import "./Newpost.css";
import { useMutation } from "@apollo/react-hooks";
import { CREATE_POST } from "../../utils/mutations";
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

    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      event.preventDefault();
      event.stopPropagation();
    }

    const token = Auth.loggedIn() ? Auth.getToken() : null;
    console.log(
      token,
      "done something",
      userFormData.title,
      userFormData.message
    );
    if (!token) {
      return false;
    }
    try {
      const { data } = await post({
        variables: { ...userFormData },
      });
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
        <h1>What is on your mind?</h1>
        <p className="add">Add a post here and share it with the Community</p>

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
          <button className="postbutton" type="submit">
            Post to your Public Wall!
          </button>
        </form>
      </div>
    </div>
  );
};

export default NewPost;
