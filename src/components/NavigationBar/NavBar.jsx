import { logo } from "../../assets";

const Navbar = () => {
    return (
      <div className="flex flex-row px-6 gap-48 h-21 ">
        <img src={logo} alt="" className="ml-0" />
        <ul className="flex items-center justify-center gap-16 list-none ml-auto mr-auto">
            <li>About Us</li>
            <li>Our Product</li>
            <li>Testimoni</li>
            <li>Contact Us</li>
        </ul>
        <button className="ml-auto">Login</button>
      </div>
    );
  };
  
  export default Navbar;
  