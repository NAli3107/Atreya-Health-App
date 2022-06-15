import React from "react";
import Auth from "../../utils/auth";
import WallForm from "./Wall";
import "./Newpost.css";
import { CREATE_POST } from "../../utils/mutations";
// import anonymous from '../images/default.png';

// function handleSubmission(e) {
//     e.preventDefault();
//     createPost('test123');
// }

// function magic(input) {
//   input = input.replace(/&/g, "&amp;");
//   input = input.replace(/</g, "&lt;");
//   input = input.replace(/>/g, "&gt;");
//   return input;
// }

//take the title message etc and save to db  - new post.js
//qurey - all the posts on the wall and retreving db - in wall.js

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

    // check if form has everything (as per react-bootstrap docs)
    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      event.preventDefault();
      event.stopPropagation();
    }

    const token = Auth.loggedIn() ? Auth.getToken() : null;
    console.log(token);
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

      <WallForm />
    </div>
  );
};

export default NewPost;
