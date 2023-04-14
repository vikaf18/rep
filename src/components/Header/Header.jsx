import { NavLink } from "react-router-dom";

const Header = () => {
    return (

        <div class="container">
            <div class="wrapper">
                <header class="header">
                    <div className="logo">
                        <NavLink className="logo__link" to="/">
                            <h1>WeAreBuilding</h1>
                        </NavLink>
                    </div>

                    <NavLink className="logo__link" to="/applications/create">
                        <button className="button">Отправить заявку</button>
                    </NavLink>
                    
                </header>
                
                
            </div>
        </div>
    );
}

export default Header;