import { NavLink } from "react-router-dom";
import CartButton from "../CartButton/CartButton";

const Header = () => {
    return (

        <div class="container">
            <div class="wrapper">
                <header>
                    <div className="logo">
                        <NavLink className="logo__link" to="/">
                            <h1>SIO</h1>
                        </NavLink>
                    </div>

                    <div className="modalka">
                        
                        <CartButton />
                    </div>
                    
                </header>
                
                
            </div>
        </div>
    );
}

export default Header;