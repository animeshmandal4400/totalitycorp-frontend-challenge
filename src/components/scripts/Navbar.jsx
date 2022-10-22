import "../styles/Navbar.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBell,
  faCommentDots,
  faGraduationCap,
  faHouseChimney,
  faSortDown,
  faToolbox,
  faUserGroup,
  faMagnifyingGlass,
} from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
import Me from "../../assets/me.jpg"
import Logo from "../../assets/linkedinLogo.png"
export const Navbar = () => {
  return (
    <>
      <nav>
        <div className="navContainer">
          <div className="navLeftSide">
            <div className="logo">
              <img
                src={Logo}
                alt="linkedin logo"
              />
            </div>
            <input className="inputField" type="text" placeholder="Search" />
          </div>
          <div className="navMiddleSide">
          <Link to={"/"} className="Search">
          <FontAwesomeIcon className="fa-icon" icon={faMagnifyingGlass}/>
            </Link>
            <Link to={"/"} className="link">
              <FontAwesomeIcon className="fa-icon" icon={faHouseChimney} />
              <h4 className="text">Home</h4>
            </Link>

            <Link to={"/"} className="link">
              <FontAwesomeIcon className="fa-icon" icon={faUserGroup} />
              <h4 className="text">My Network</h4>
            </Link>
            <Link to={"/"} className="link">
              <FontAwesomeIcon className="fa-icon" icon={faToolbox} />
              <h4 className="text">Jobs</h4>
            </Link>
            <Link to={"/"} className="link">
              <FontAwesomeIcon className="fa-icon" icon={faCommentDots} />
              <h4 className="text">Messaging</h4>
            </Link>
            <Link to={"/"} className="link">
              <FontAwesomeIcon className="fa-icon" icon={faBell} />
              <h4 className="text">Notification</h4>
            </Link>
            <div className="navAvatarDiv">
              {/* <FontAwesomeIcon icon="fa-solid fa-user-large" /> */}
              {/* <FontAwesomeIcon className="fa-icon" icon={faUserLarge} /> */}

              <img
                className="avatar"
                src={Me}
                alt="Animesh Mandal"
              />
              <h4 className="avatar-text text">
                Me <FontAwesomeIcon className="fa-icon" icon={faSortDown} />
              </h4>
            </div>
          </div>
          <div className="navRightSide">
            <div>
              <FontAwesomeIcon className="fa-icon" icon={faGraduationCap} />
              <h4 className="text">Works</h4>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
};
