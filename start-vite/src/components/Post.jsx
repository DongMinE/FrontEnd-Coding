import classes from './Post.module.css';

function Post({ author, body }) {
  // const chooseName = Math.random() > 0.5 ? names[0] : names[1];
  return (
    <li className={classes.post}>
      <p className={classes.author}>{author}</p>
      <p className={classes.text}>{body}</p>
    </li>
  );
}

export default Post;
