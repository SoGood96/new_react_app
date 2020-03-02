import React from 'react';
import './Posts.module.css'

const Posts = () => {
    return (
        <div className='content-prof'>
         <h3> Мои посты</h3>
         <textarea className='text-prof'></textarea>
         <button className='btn-prof'>Опубликовать</button>
            
            <div>
                 post 1
            </div>
            <div>
                 post 2
            </div>
        </div>
  
    )
}

export default Posts;