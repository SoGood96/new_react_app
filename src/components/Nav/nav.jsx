import React from 'react';
import './Nav.css'

const Nav = () => {
    return (
        <nav className='nav'>
          <div className="item"><a>Профиль</a></div>
          <div className="item"><a>Диалоги</a></div>
          <div className="item"><a>Лента</a></div>
          <div className="item"><a>Музыка</a></div>
          <div className="item"><a>Настройки</a></div>
        </nav>
    )
}

export default Nav;