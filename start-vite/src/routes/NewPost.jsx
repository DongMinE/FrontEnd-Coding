import classes from "./NewPost.module.css";
import { useState } from "react";
import { Link } from "react-router-dom";
import Modal from "../components/Modal";

function NewPost() {
  const [enteredBody, setEnterdBody] = useState("내용을 입력해주세요");
  const [enteredAuthor, setEnteredAuthor] = useState("저자는 누구??");

  function bodyChangeHandler(event) {
    setEnterdBody(event.target.value);
  }

  function AuthorChangHandler(event) {
    setEnteredAuthor(event.target.value);
  }

  function submitHandler(event) {
    event.preventDefault();
    const postData = {
      body: enteredBody,
      author: enteredAuthor,
    };
    // onAddPost(postData);
    // onCancel();
    fetch("http://localhost:8080/posts", {
      method: "POST",
      body: JSON.stringify(postData),
      headers: {
        "Content-Type": "application/json",
      },
    });
  }

  return (
    <Modal>
      <form className={classes.form} onSubmit={submitHandler}>
        <p>
          <label htmlFor="body">Text</label>
          <textarea id="body" required rows={3} onChange={bodyChangeHandler} />
        </p>
        <p>
          <label htmlFor="name">Your name</label>
          <input type="text" id="name" required onChange={AuthorChangHandler} />
        </p>
        <p className={classes.actions}>
          <Link to=".." type="button">
            취소
          </Link>
          <button>전송</button>
        </p>
      </form>
    </Modal>
  );
}

export default NewPost;
