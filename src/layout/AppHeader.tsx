import { NavLink, useNavigate } from 'react-router-dom';

const AppHeader = () => {

    const navigate = useNavigate();

    return (
        <ul>
            <li> <NavLink to="products"> Products </NavLink> </li>
            <li> <NavLink to="transactions"> Transactions </NavLink> </li>
            <li>
                <a className="notification" href={void (0)} onClick={() => navigate('/notification')}>
                    <i className="fa-solid fa-bell"></i>
                    {/* <span class="badge"></span>*/}
                </a>
            </li>
            <li style={{ float: 'right' }}> <NavLink to="about"> About Project </NavLink> </li>
        </ul>
    )
}

export default AppHeader