import { BsGithub, BsLinkedin } from 'react-icons/bs';

function Footer() {

  return (
    <footer className='fixed-bottom'>
      <a href="https://github.com/dhalladay" target="_blank" rel="noreferrer" className="light mx-2">
      <BsGithub />
      </a>
      <a href="https://www.linkedin.com/in/dave-halladay-050b1490/" target="_blank" rel="noreferrer" className="light mx-2">
      <BsLinkedin />
      </a>
    </footer>
  );
}

export default Footer;