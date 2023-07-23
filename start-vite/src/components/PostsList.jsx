import { useState } from 'react';

import NewPost from './NewPost';
import Post from './Post';
import classes from './PostsList.module.css';
import Modal from './Modal';

function PostsList() {
  const [modalIsVisible, setModalIsVisible] = useState(true);
  const [enteredBody, setEnterdBody] = useState('내용을 입력해주세요');
  const [enteredAuthor, setEnteredAuthor] = useState('저자는 누구??');

  function hideModalHandler() {
    setModalIsVisible(false);
  }

  function bodyChangeHandler(event) {
    setEnterdBody(event.target.value);
  }

  function onAuthorChangHandler(event) {
    setEnteredAuthor(event.target.value);
  }

  // let modalContent;

  // if (modalIsVisible) {
  //   modalContent = (
  //     <Modal onClose={hideModalHandler}>
  //       <NewPost
  //         onBodyChange={bodyChangeHandler}
  //         onAuthorChange={onAuthorChangHandler}
  //       />
  //     </Modal>
  //   );
  // }

  return (
    <>
      {modalIsVisible && (
        <Modal onClose={hideModalHandler}>
          <NewPost
            onBodyChange={bodyChangeHandler}
            onAuthorChange={onAuthorChangHandler}
          />
        </Modal>
      )}
      <ul className={classes.posts}>
        <Post author={enteredAuthor} body={enteredBody} />
        <Post author="Manuel" body="Checkout the full course"></Post>
      </ul>
      >
    </>
  );
}

export default PostsList;
