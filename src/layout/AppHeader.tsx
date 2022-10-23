import { NavLink } from 'react-router-dom';

const AppHeader = () => {

    return (
        <ul>
            <li> <NavLink to="products"> Products </NavLink> </li>
            <li> <NavLink to="payment"> Payment </NavLink> </li>
            <li> <NavLink to="transactions"> Transactions </NavLink> </li>
            <li> <a className="notification">
                <i className="fa-solid fa-bell"></i>
                {/* <span class="badge"></span>*/}
            </a></li>
            <li style={{ float: 'right' }}> <NavLink to="about"> About Project </NavLink> </li>
        </ul>
    )
}

export default AppHeader