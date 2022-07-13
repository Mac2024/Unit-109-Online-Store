import "./navbar.css";
import {Link} from "react-router-dom";

function Navbar(){
    return (
        <nav className="navbar navbar-expand-lg nabbar-dark">
            <div className="container-fluid">
                <link className="navbar-brand" to="#">
                Navbar
                </link>
                <button
                className="navbar-toggler"
                type="button"data-bs-toggle="collapse"
                data-bs-target="#navbarSupportedContent"
                aria-controls="navbarSupportedContent"
                aria-expanded="false"
                aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
                </button> 
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                    <li className="nav-item">
                        <link className="nav-link active" aria-current="page" to="/">
                            Home
                        </link>
                    </li>
                    <li className="nav-item">
                        <link className="nav-link" to="/catalog">
                            Catalog
                        </link>
                    </li>
                    <li className="nav-item">
                        <link className="nav-link" to="/about">
                            About
                        </link>
                    </li>
                </ul>
                <form className="d-flex" role="search">
                    
                    <link className="btn btn-outline-light" to="/cart">
                    View Cart
                    </link>
                </form>
            </div>
        </div>
    </nav>
        
     
    );
}

export default Navbar;