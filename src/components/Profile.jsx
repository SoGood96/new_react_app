import React from 'react';

const Profile = () => {
    return (
    <div className='profile'>
        <div className='about-me'>
            <img src='https://img3.goodfon.ru/original/2048x1365/9/91/kot-koshak-vzglyad-glaza-usy.jpg'
            width='190' height='180' />
            <div className='info-me'>
                <p>Имя: Валерий</p>
                <p>Фамилия: Боров</p>
                <p>Возраст: 26 лет</p>
                <p>Профессия: Танкист</p>
            </div>
        </div>

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
    </div>
    )
}

export default Profile;