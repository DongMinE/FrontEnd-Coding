
import NewPost from './NewPost';
import Post from './Post';
import classes from './PostsList.module.css';
import Modal from './Modal';

function PostsList({isPosting, onStopPosting}) {

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
      {isPosting && (
        <Modal onClose={onStopPosting}>
          <NewPost onCancel={onStopPosting}/>
        </Modal>
      )}
      <ul className={classes.posts}>
        <Post author="Manuel" body="Checkout the full course"></Post>
      </ul>
    </>
  );
}

export default PostsList;
