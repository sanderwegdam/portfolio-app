import './Header.css';
import About_Image from '../../../assets/images/me2.jpg';

const Header = () => {
  return (
    <>
      <header>
        <div className='container header_container'>
          <div className='me image-card'>
            <img src={About_Image} alt='profile_pic' />
          </div>
        </div>
      </header>
    </>
  )
}

export default Header