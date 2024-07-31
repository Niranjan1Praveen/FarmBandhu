import React from 'react';
import "./EmptyList.css"
import EmptyGif from '../../assets/images/gifs/EmptyList.gif'
const EmptyList = () => {
    return (
        <div className='empty-list'>
            <img src={EmptyGif} alt="Empty List Gif" />
        </div>
    );
}

export default EmptyList;
