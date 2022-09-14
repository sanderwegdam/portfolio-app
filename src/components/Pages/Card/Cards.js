import React from 'react';
import './Cards.css';
import CardItem from './CardItem';
import Image_Een from '../../../assets/images/webdesign.png';
import Image_Twee from '../../../assets/images/front-end.png';
import Image_Drie from '../../../assets/images/seo.png';
import Image_Vier from '../../../assets/images/curly-brackets.png';

const Cards = () => {
  return (
    <div className='cards'>
      <div className='cards-container'>
        <ul className='cards-items'>
          <CardItem
            src={Image_Een}
            text='Ik ben een front-end developer'
          />
          <CardItem
            src={Image_Twee}
            text='Ik houd me voornamelijk bezig met webdesign'
          />
        </ul>
        <ul className='cards-items'>
          <CardItem
            src={Image_Drie}
            text='SEO is iets waar ik veel interesse in heb'
          />
          <CardItem
            src={Image_Vier}
            text='Ik heb ervaring met de scripttaal JavaScript'
          />
        </ul>
      </div>
    </div>
  );
}

export default Cards;
