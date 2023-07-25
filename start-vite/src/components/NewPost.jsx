import classes from './NewPost.module.css';
import { useState } from 'react';

function NewPost({onCancel}) {
  const [enteredBody, setEnterdBody] = useState('내용을 입력해주세요');
  const [enteredAuthor, setEnteredAuthor] = useState('저자는 누구??');

  function bodyChangeHandler(event) {
    setEnterdBody(event.target.value);
  }

  function AuthorChangHandler(event) {
    setEnteredAuthor(event.target.value);
  }
  return (
    <form className={classes.form} onSubmit={}>
      <p>
        <label htmlFor="body">Text</label>
        <textarea id="body" required rows={3} onChange={bodyChangeHandler} />
      </p>
      <p>
        <label htmlFor="name">Your name</label>
        <input type="text" id="name" required onChange={AuthorChangHandler} />
      </p>
      <p className={classes.actions}>
        <button type="button" onClick={onCancel}>취소</button>
        <button>전송</button>
      </p>
    </form>
  );
}

export default NewPost;
