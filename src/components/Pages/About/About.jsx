import './About.css';
import { BsFolder } from 'react-icons/bs';

var ProjectNumber;

fetch('https://api.github.com/users/sanderwegdam').then(response => response.json()).then(data => {
  ProjectNumber = `${data.public_repos + data.public_gists + '+'}`
}).catch(() => {
  ProjectNumber = '60+';
});

const About = () => {

  return (
    <section id='about'>
      <div className='about_content'>
        <div className='about_card'>
          <article className='about_card-content'>
            <h1>Sander Wegdam</h1>
            <p>
              Dit is een portfolio website <br></br> van <span>Sander Wegdam</span> <br />
            </p>
          </article>
        </div>

        <div className='about_card-2'>
          <article className='about_card-content'>
            <BsFolder className='about_icons' />
            <h5>Projects</h5>
            <small>{ProjectNumber}</small>
            <p>
              Ik houd me voornamelijk bezig <br></br> met web development, <br />
              en heb interesse in <br></br> web en design.
            </p>
          </article>
        </div>
      </div>
    </section>
  )
}

export default About