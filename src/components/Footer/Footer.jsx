import logo from "../../assets/svg/logo.svg";
import footerBg from "../../assets/image/footer-bg.jpg";
import styles from "./Footer.module.scss";
import { NavLink } from "react-router-dom";


export const Footer = () => {
    return (
        <div
            className={styles.footer}
            style={{ backgroundImage: `url(${footerBg})` }}
        >
            <div className={styles.container}>
                <div className={styles.logo}>
                    <img src={logo} alt="logo" className={styles.logo__image}></img>
                    <NavLink to="/">theMovies</NavLink>
                </div>
                <div className={styles.info}>
                    <div className={styles.list}>
                        <NavLink to='/'>Home</NavLink>
                        <NavLink to='/'>Contact us</NavLink>
                        <NavLink to='/'>Infotmation </NavLink>
                        <NavLink to='/'>Oter</NavLink>
                        <NavLink to='/'>About us</NavLink>
                    </div>
                    <div className={styles.list}>
                        <NavLink to='/'>Home</NavLink>
                        <NavLink to='/'>Contact us</NavLink>
                        <NavLink to='/'>Infotmation </NavLink>
                        <NavLink to='/'>Oter</NavLink>
                        <NavLink to='/'>About us</NavLink>
                    </div>
                    <div className={styles.list}>
                        <NavLink to='/'>Home</NavLink>
                        <NavLink to='/'>Contact us</NavLink>
                        <NavLink to='/'>Infotmation </NavLink>
                        <NavLink to='/'>Oter</NavLink>
                        <NavLink to='/'>About us</NavLink>
                    </div>
                    <div className={styles.list}>
                        <NavLink to='/'>Home</NavLink>
                        <NavLink to='/'>Contact us</NavLink>
                        <NavLink to='/'>Infotmation </NavLink>
                        <NavLink to='/'>Oter</NavLink>
                        <NavLink to='/'>About us</NavLink>
                    </div>
                </div>
            </div>
        </div>
    );
};

