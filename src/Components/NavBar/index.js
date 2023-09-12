import "./index.css";

const NavBar = () => {
  return (
    <div className="bg-light d-flex justify-content-center w-100">
      <nav className="pl-4 nav_container  navbar navbar-expand-lg navbar-light  p-3 ">
        <div className="col-5  col-md-2 p-0 m-0">
          <img
            className="m-0 h3 w-75"
            src="https://res.cloudinary.com/dp8ggbibl/image/upload/v1694503107/samples/Shopify_logo_2018.svg_xtzlsu.png"
            alt="logo"
          />
        </div>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav mr-auto d-flex align-items-center">
            <li className="nav-item dropdown">
              <p
                className="nav-link dropdown-toggle m-0 h5"
                href="#"
                id="navbarDropdown"
                role="button"
                data-toggle="dropdown"
                aria-haspopup="true"
                aria-expanded="false"
              >
                Solutions
              </p>
              <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                <p className="dropdown-item">Action</p>
                <p className="dropdown-item">Another action</p>
                <div className="dropdown-divider"></div>
                <p className="dropdown-item">Something else here</p>
              </div>
            </li>
            <li className="nav-item active">
              <p className="nav-link m-0 h5 ">
                Pricing <span className="sr-only">(current)</span>
              </p>
            </li>
            <li className="nav-item dropdown">
              <p
                className="nav-link dropdown-toggle m-0 h5"
                href="#"
                id="navbarDropdown"
                role="button"
                data-toggle="dropdown"
                aria-haspopup="true"
                aria-expanded="false"
              >
                Resources
              </p>
              <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                <p className="dropdown-item" href="#">
                  Action
                </p>
                <p className="dropdown-item" href="#">
                  Another action
                </p>
                <div className="dropdown-divider"></div>
                <p className="dropdown-item" href="#">
                  Something else here
                </p>
              </div>
            </li>
          </ul>
          <div className="d-flex flex-column flex-md-row text-center">
            <p className="h5 mb-2 p-0 m-md-0 align-self-center mr-md-3">
              Log in
            </p>
            <button className="btn btn-dark button_class">
              Start free trail
            </button>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default NavBar;
