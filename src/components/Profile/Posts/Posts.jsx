import React from 'react';
import './Posts.module.css'
import PostOne from './PostOne/PostOne';

const Posts = () => {
    return (
        <div className='content-prof'>
         <h3> Мои посты</h3>
         <textarea className='text-prof'></textarea>
         <button className='btn-prof'>Опубликовать</button>
        <PostOne mess='Hello)'/>
        <PostOne mess='Oooo, Hi)'/>
        <PostOne mess='How are you??)'/>
            
        </div>
  
    )
}

export default Posts;