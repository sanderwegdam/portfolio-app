import React from 'react';
import './Cards.css';

function CardItem(props) {
  return (
    <>
      <li className='cards-item'>
        <div className='cards-item-wrap'>
          <img className='cards-item-img' alt='example' src={props.src} />
        </div>
        <div className='cards-item-info'>
          <h5 className='cards-item-text'>{props.text}</h5>
        </div>
      </li>
    </>
  );
}

export default CardItem;
