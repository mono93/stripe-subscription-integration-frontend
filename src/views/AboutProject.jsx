import { useNavigate } from "react-router-dom";

const AboutProject = () => {

    const navigate = useNavigate();

    return (
        <div className="aboutProjectWrapper">
            <h2> Welcome toThe Stripe Integration Project </h2>
            <p> It is hobby project started in the month of November 2022 </p>
            <p> This is a full stack web sites to demostarte stripe subscription integration</p>
            <p> Following techologies are being used to build this website </p>

            <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/1200px-React-icon.svg.png" alt="" height='100px' />
            <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/4/4c/Typescript_logo_2020.svg/640px-Typescript_logo_2020.svg.png" alt="" height='100px' />
            <img src="https://upload.wikimedia.org/wikipedia/commons/6/64/Expressjs.png" alt="" height='100px' />
            <img src="https://res.cloudinary.com/hevo/images/f_auto,q_auto/v1643793776/hevo-learn/810px-Postgresql_elephant.svg_/810px-Postgresql_elephant.svg_.png?_i=AA" alt="" height='100px' />

            <div className="joiningSection">
                <p > Want to explore? join us <a href={void (0)} onClick={() => navigate('/products')}>Products</a> </p>
            </div>
        </div>
    )

}

export default AboutProject