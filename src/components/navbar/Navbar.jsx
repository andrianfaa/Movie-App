/* eslint-disable jsx-a11y/no-noninteractive-tabindex */
/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import NavbarLink from './NavbarLink';
import NavbarToggler from './NavbarToggler';
import NavbarTogglerClose from './NavbarTogglerClose';
import Logo from '../../assets/images/logo.svg';
import LogoFull from '../../assets/images/logo-full.svg';
import { IconArrowRight } from '../icons';

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false);
    const [currentLogo, setCurrentLogo] = useState(Logo);
    const navigate = useNavigate();

    const toggle = () => setIsOpen(!isOpen);
    const handleClick = (event) => {
        switch (event.type) {
        case 'click':
            navigate('/');
            break;

        case 'keydown':
            if (event.key === 'Enter') {
                navigate('/');
            }
            break;

        default:
            break;
        }
    };

    React.useEffect(async () => {
        window.addEventListener('resize', () => {
            if (window.innerWidth > 768) {
                setCurrentLogo(LogoFull);
            } else {
                setCurrentLogo(Logo);
            }
        });

        if (window.innerWidth > 768) {
            setCurrentLogo(LogoFull);
        }
    });

    return (
        <nav className="navbar">
            <div className="container">
                <div className="navbar-brand">
                    <img
                        src={currentLogo}
                        alt="Logo"
                        tabIndex={0}
                        onClick={(event) => handleClick(event)}
                        onKeyDown={(event) => handleClick(event)}
                    />
                </div>

                <div className={`navbar-menu ${isOpen ? 'is-open' : ''}`}>
                    <ul>
                        <NavbarTogglerClose
                            onClick={() => toggle()}
                            aria-labelledby="Close Menu"
                        />

                        <li id="first">
                            <NavbarLink to="/movies">Movies</NavbarLink>
                        </li>
                        <li>
                            <NavbarLink to="/tvshows">TV Shows</NavbarLink>
                        </li>
                        <li>
                            <NavbarLink to="/suggest">
                                Suggeste me
                                {' '}
                                <IconArrowRight className="icon" />
                            </NavbarLink>
                        </li>
                    </ul>
                </div>

                <NavbarToggler
                    onClick={() => toggle()}
                    aria-labelledby="Open Menu"
                />
            </div>
        </nav>
    );
}
