import s from './MyPosts.module.css';
import Post from './Post/Post';

const MyPosts = (props) => {

    let postsElement = props.postData.map( el => <Post message = {el.message} like = {el.likesCounte} />)
    
    return(
      <div className={s.postsBlock}>
        <div>
          New Posts
        </div>
        <div>
          <textarea></textarea>
        </div>
        <div>
          <button>Add Post</button>
          <button>Remove</button>
          </div>
          
        
        <div className={s.posts}>
            {postsElement}
          </div>
        </div>
    )
}

export default MyPosts;
