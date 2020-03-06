import React from 'react';
import './PostOne.css'

const PostOne = (props) => {
    return (
            <div className="post">
                <img className="post_ava" src="https://bumper-stickers.ru/32247-thickbox_default/golova-kotenka.jpg" 
                alt="" />
                 <b>{props.mess}</b>
                 <button>Удалить</button>
            </div>
           
    )
}

export default PostOne;