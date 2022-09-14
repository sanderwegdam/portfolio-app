import React from 'react';
import './Details.css';
import { AiFillCheckCircle } from 'react-icons/ai';

const Exp = () => {
  return (
    <section id='details'>
      <div className="container details_container">
        <div className="details_frontend">
          <h3>Frontend Development</h3>
          <div className="details_content">
            <div className='details'>
              <AiFillCheckCircle className='details-icons' />
              <div>
                <h4>HTML5</h4>
              </div>
            </div>

            <div className='details'>
              <AiFillCheckCircle className='details-icons' />
              <div>
                <h4>CSS</h4>
              </div>
            </div>

            <div className='details'>
              <AiFillCheckCircle className='details-icons' />
              <div>
                <h4>JavaScript</h4>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Exp