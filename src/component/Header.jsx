import { Link } from "react-router-dom";

function Header() {
  return (
    <>
      <nav className="navbar   navbar-expand-md fixed-top">
        <div className="container-fluid">
          <Link to="#" style={{ fontSize: "1.8rem" }} className="navbar-brand">
            Sakshi<span style={{ color: "#00bcc8" }}>Shrivastava</span>
          </Link>

          <button
            className="navbar-toggler "
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#nav"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span>
              <i className="fa-solid fa-bars-staggered text-black"></i>
            </span>
          </button>
          <div className="navbar-collapse collapse" id="nav">
            <ul className="navbar-nav ms-auto">
              <li className="nav-item ">
                <Link
                  to="/"
                  className="nav-link font"
                  style={{ color: "#939393" }}
                >
                  HOME
                </Link>
              </li>
              <li className="nav-item ">
                <Link
                  to="/about"
                  className="nav-link font"
                  style={{ color: "#939393" }}
                >
                  ABOUT
                </Link>
              </li>
              <li className="nav-item ">
                <Link
                  to="/skills"
                  className="nav-link font"
                  style={{ color: "#939393" }}
                >
                  SKILLS
                </Link>
              </li>
              <li className="nav-item ">
                <Link
                  to="/projects"
                  className="nav-link font"
                  style={{ color: "#939393" }}
                >
                  PROJECTS
                </Link>
              </li>
              <li className="nav-item ">
                <Link
                  to="/contact"
                  className="nav-link font"
                  style={{ color: "#939393" }}
                >
                  CONTACT
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
}

export default Header;
