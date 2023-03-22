import PropTypes from "prop-types";
import clsx from "clsx";
import styles from "./Header.module.scss";
import { useLocation, NavLink } from "react-router-dom";
import logo from "../../assets/svg/logo.svg";
import { useRef, useEffect } from "react";

const headerNav = [
    {
        display: "Home",
        path: "/",
    },
    {
        display: "Movies",
        path: "/movie",
    },
    {
        display: "Tv Series",
        path: "/tv",
    },
];

export const Header = () => {
    const { pathname } = useLocation();
    const headerRef = useRef(null);

    const active = headerNav.findIndex((e) => e.path === pathname);

    useEffect(() => {
        const scrollHeader = () => {
            if (
                document.body.scrollTop > 100 ||
                document.documentElement.scrollTop > 100
            ) {
                headerRef.current.classList.add(clsx(styles.scroll));
            } else {
                headerRef.current.classList.remove(clsx(styles.scroll));
            }
        };
        window.addEventListener("scroll", scrollHeader);
        return () => {
            window.removeEventListener("scroll", scrollHeader);
        };
    }, []);

    return (
        <div ref={headerRef} className={styles.header}>
            <div className={clsx(styles.header__wrapper, styles.container)}>
                <div className={styles.logo}>
                    <img src={logo} alt="logo" className={styles.logo__image}></img>
                    <NavLink to="/">theMovies</NavLink>
                </div>
                <ul className={styles.header__nav}>
                    {headerNav.map((e, id) => (
                        <li
                            key={id}
                            className={clsx(styles.list, `${id === active ? "active" : ""}`)}
                        >
                            <NavLink to={e.path}>{e.display}</NavLink>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
};

Header.propTypes = {};
