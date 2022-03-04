import React from 'react';
import s from './MyPosts.module.css';
import Post from './Post/Post';

const MyPosts = (props) => {

    let postsElement = props.postData.map( el => <Post message = {el.message} like = {el.likesCounte} />);

    let newPostElement = React.createRef();

    let addPost = () => {
      props.dispatch({type: 'ADD-POST'});
    }

    let onPostChange = () => {
      let text = newPostElement.current.value;
      props.dispatch({type:'UPDATE-NEW-POST-TEXT', newText: text});
    }
    return(
      <div className={s.postsBlock}>
        <div>
          New Posts
        </div>
        <div>
          <textarea ref={newPostElement} onChange = {onPostChange} value = {props.newPostText}/>
        </div>
        <div>
          <button onClick={ addPost }>Add Post</button>
          <button>Remove</button>
          </div>
          
        
        <div className={s.posts}>
            {postsElement}
          </div>
        </div>
    )
}

export default MyPosts;
