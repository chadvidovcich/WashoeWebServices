import WWSBanner from '/WWS Banner.svg';
import '../styles/Header.css';

function Header() {
  return (
    <div className='header'>
      <div className='logo'>
        <a href='' target='_blank' rel='noreferrer'>
          <img
            src={WWSBanner}
            className='logo'
            alt='Washoe Web Services logo'
          />
        </a>
      </div>
      <div className='nav'>
        <a href=''>
          <p>Washoe Web Services</p>
        </a>
      </div>
    </div>
  );
}
export default Header;
