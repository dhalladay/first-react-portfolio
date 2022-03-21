import { BsGithub, BsLinkedin, BsStackOverflow } from 'react-icons/bs';

function Footer() {

  return (
    <footer>
      <a href="https://github.com/dhalladay" target="_blank" rel="noreferrer" className="light mx-2">
      <BsGithub />
      </a>
      <a href="https://www.linkedin.com/" target="_blank" rel="noreferrer" className="light mx-2">
      <BsLinkedin />
      </a>
      <a href="https://stackoverflow.com/" target="_blank" rel="noreferrer" className="light mx-2">
      <BsStackOverflow />
      </a>
    </footer>
  );
}

export default Footer;