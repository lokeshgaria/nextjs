import { useState } from "react";
// import "../css/Navbar.css";
import BrandLogo from "../public/Navbar/newBrandlogo.png";
import { VscSearch } from "react-icons/vsc";
import { FaFacebookF, FaPinterestP, FaTimes } from "react-icons/fa";
import { AiOutlineInstagram } from "react-icons/ai";
import { BsChevronDown } from "react-icons/bs";
import { GiHamburgerMenu } from "react-icons/gi";
import Styles from "../styles/Navbar.module.css";
import Image from "next/image";
import Link from "next/link";

export const NavbarLogo = () => {
  return (
    <div className={Styles.navbar__brand}>
      {/**BRAND LOGO */}
      <div className={Styles.brandImg}>
        <Link href="/">
          <Image
            src={BrandLogo}
            alt="Picture of the author"
            
          />
        </Link>
      </div>
      <div className={Styles.logoTextDiv}>
        <p className={Styles.logo_text}>
          <span>Eco</span>Vision
        </p>

        <small>Evolution of new India</small>
      </div>
    </div>
  );
};
function Navbar() {
  const [toggle, setToggle] = useState(false);
  const [toggleHam, setHam] = useState(false);
  const [drop, setDrop] = useState(false);
  const toggleIcons = () => {
    setToggle(!toggle);
    console.log("clicked");
  };
  return (
    <div className={Styles.header}>
      <div className={Styles.navbar}>
        <div className={Styles.hamburger}>
          {toggleHam ? (
            <FaTimes onClick={() => setHam(!toggleHam)} />
          ) : (
            <GiHamburgerMenu onClick={() => setHam(!toggleHam)} />
          )}
        </div>
        <div
          className={
            toggleHam
              ? `${Styles.shiftRight} ${Styles.productDisc}`
              : Styles.productDisc
          }
        >
          <ul className={Styles.productList}>
            <li>
              <span> Cluster Stone </span>
            </li>
            <li>
              <span> Bricks </span>
            </li>
            <li>Stones</li>
            <li>Laser Cut</li>
            <li>Panel Format</li>
            <li>Nano Topping</li>
            <li>Flooring</li>
            <li>Vertical Stamping Textures</li>
            <li>Architectural Grilles</li>
          </ul>
        </div>

        <NavbarLogo />
        <div className={Styles.navbar__list}>
          <ul>
            <li>
              <Link href="/"> home </Link>
            </li>
            <li
              className="displayRow"
              // onBlur={() => setDrop(false)}
              onClick={() => setDrop(!drop)}
            >
              products <BsChevronDown className="arrowBottom" />
            </li>
            <li>
              <Link href="/about"> About us </Link>
            </li>
            <li>our stores</li>
            <li>contact us</li>
          </ul>

          <div
            className={
              drop
                ? `${Styles.hoverEfect} ${Styles.productDisc}`
                : Styles.productDisc
            }
          >
            <ul className={Styles.productList}>
              <li>
                <span> Cluster Stone </span>
              </li>
              <li>
                <span> Bricks </span>
              </li>
              <li>Stones</li>
              <li>Laser Cut</li>
              <li>Panel Format</li>
              <li>Nano Topping</li>
              <li>Flooring</li>
              <li>Vertical Stamping Textures</li>
              <li>Architectural Grilles</li>
            </ul>
          </div>
        </div>
        <div className={Styles.navbar__icons}>
          <div className={Styles.search}>
            {toggle ? (
              <FaTimes onClick={toggleIcons} />
            ) : (
              <VscSearch onClick={toggleIcons} />
            )}
          </div>
          <div className={Styles.facebook}>
            {" "}
            <FaFacebookF />
          </div>
          <div className={Styles.instagram}>
            <AiOutlineInstagram />
          </div>
          <div className={Styles.pintrest}>
            <FaPinterestP />
          </div>
        </div>
        <div
          className={
            toggle ? `${Styles.display} ${Styles.searchDiv}` : Styles.searchDiv
          }
        >
          <form action="" className={Styles.searchform}>
            <input type="text" placeholder="Search keyword..." />
            <button type="submit">sub</button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
