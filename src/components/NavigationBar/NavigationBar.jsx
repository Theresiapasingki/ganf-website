import { logo } from '../../assets';
import { useNavigate, Link, useLocation } from 'react-router-dom';

const Navbar = () => {
  const navigate = useNavigate();
  const goToLogin = () => navigate('/login');

  const { pathname } = useLocation();
  const isLinkActive = (path) =>
    pathname.includes(path) ? 'nav-link active' : 'nav-link';

  const scrollToFooter = () => {
    window.scrollTo({
      top: document.body.scrollHeight,
      behavior: 'smooth',
    });
  };

  return (
    <nav className="navbar">
      <a href="/">
        <img src={logo} alt="Logo GANF" className="min-w-32 h-16" />
      </a>
      <ul className="navbar-nav">
        <li className="nav-item">
          <Link to="/about-us" className={isLinkActive('about-us')}>
            About Us
          </Link>
        </li>
        <li className="nav-item">
          <Link to="/products" className={isLinkActive('products')}>
            Our Product
          </Link>
        </li>
        <li className="nav-item">
          <Link to="/testimonials" className={isLinkActive('testimonial')}>
            Testimoni
          </Link>
        </li>
        <li className="nav-item">
          <button onClick={scrollToFooter} className="nav-link">
            Contact Us
          </button>
        </li>
      </ul>
      <button className="btn--blue-secondary" onClick={goToLogin}>
        Login
      </button>
    </nav>
  );
};

export default Navbar;
