import React from 'react';
import './Profile.css'
import Posts from './Posts/Posts';

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
        <Posts/>
    </div>
    )
}

export default Profile;