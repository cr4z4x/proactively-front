import { useState, useRef, useEffect } from 'react';
import logo from '../assets/logo.svg';
import './component-styles/Header.css';

const Header = () => {
    const [dropdownOpen, setDropdownOpen] = useState(false);
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
    const dropdownRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        function handleClickOutside(event: MouseEvent) {
            if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
                setDropdownOpen(false);
            }
        }
        document.addEventListener('mousedown', handleClickOutside);
        return () => document.removeEventListener('mousedown', handleClickOutside);
    }, []);

    return (
        <div className="app-container">
            <header className="header">
                <div className="header-logo-container">
                    <img
                        src={logo}
                        alt="ProVital Logo"
                        className="header-logo"
                    />
                    <span className="header-logo-text">ProVital</span>
                </div>

                <button
                className="hamburger-button"
                onClick={() => setMobileMenuOpen((prev) => !prev)}
                aria-label="Toggle menu"
                >
                {mobileMenuOpen ? (
                    <span className="close-icon">&times;</span>
                ) : (
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M5 17H19M5 12H19M5 7H19" stroke="black" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                    </svg>
                )}
                </button>


                <div className="header-right-group">
                    <nav className="header-nav">
                        <a href="#">List your practice</a>
                        <a href="#">For Employers</a>
                        <a href="#">Courses</a>
                        <a href="#">Books</a>
                        <a href="#">Speakers</a>
                    </nav>

                    <div className="header-auth-section" ref={dropdownRef}>
                        <button
                            className="auth-link"
                            onClick={() => setDropdownOpen((open) => !open)}
                        >
                            Login / Signup
                            <svg width="16" height="16" fill="none" viewBox="0 0 24 24">
                                <path d="M7 10l5 5 5-5" stroke="#667085" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                            </svg>
                        </button>
                        {dropdownOpen && (
                            <div className="auth-dropdown">
                                <div className="auth-dropdown-row">
                                    <div className="auth-dropdown-label">Doctor</div>
                                    <div className="auth-dropdown-links">
                                        <a href="#">Login</a>
                                        <a href="#">Sign up</a>
                                    </div>
                                </div>
                                <div className="auth-divider"></div>
                                <div className="auth-dropdown-row">
                                    <div className="auth-dropdown-label">Patients</div>
                                    <div className="auth-dropdown-links">
                                        <a href="#">Login</a>
                                        <a href="#">Sign up</a>
                                    </div>
                                </div>
                            </div>
                        )}
                    </div>
                </div>

                {mobileMenuOpen && (
                    <div className="mobile-menu">
                        <div className="mobile-header">
                            <div className="header-logo-container">
                                <img src={logo} alt="ProVital Logo" className="header-logo" />
                                <span className="header-logo-text">ProVital</span>
                            </div>
                            <button className="close-button" onClick={() => setMobileMenuOpen(false)}>
                                <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M7 7L1 1L7 7ZM7 7L13 13L7 7ZM7 7L13 1L7 7ZM7 7L1 13L7 7Z" fill="#D9D9D9"/>
                                <path d="M7 7L1 1M7 7L13 13M7 7L13 1M7 7L1 13" stroke="black" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                                </svg>
                            </button>
                        </div>
                        <div className="auth-dropdown-mobile">
                            <div className="auth-dropdown-row">
                                <div className="auth-dropdown-label">Doctor</div>
                                <div className="auth-dropdown-links">
                                    <a href="#">Login</a>
                                    <a href="#">Sign up</a>
                                </div>
                            </div>
                            <div className="auth-divider"></div>
                            <div className="auth-dropdown-row">
                                <div className="auth-dropdown-label">Patients</div>
                                <div className="auth-dropdown-links">
                                    <a href="#">Login</a>
                                    <a href="#">Sign up</a>
                                </div>
                            </div>
                        </div>
                        {[
                            { label: "Doctors", href: "#" },
                            { label: "List your practice", href: "#" },
                            { label: "For Employers", href: "#" },
                            { label: "Courses", href: "#" },
                            { label: "Books", href: "#" },
                            { label: "Speakers", href: "#" },
                        ].map((item) => (
                            <nav className="mobile-nav" key={item.label}>
                                <div>
                                    <a href={item.href}>{item.label}</a>
                                    <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M10.8073 16.0675C10.7492 16.0095 10.7031 15.9406 10.6717 15.8647C10.6402 15.7888 10.624 15.7075 10.624 15.6253C10.624 15.5432 10.6402 15.4619 10.6717 15.386C10.7031 15.3101 10.7492 15.2412 10.8073 15.1832L15.3659 10.6253L3.12451 10.6253C2.95875 10.6253 2.79978 10.5595 2.68257 10.4423C2.56536 10.3251 2.49951 10.1661 2.49951 10.0003C2.49951 9.83459 2.56536 9.67562 2.68257 9.55841C2.79978 9.44119 2.95875 9.37535 3.12451 9.37535L15.3659 9.37535L10.8073 4.81753C10.69 4.70026 10.6242 4.5412 10.6242 4.37535C10.6242 4.20949 10.69 4.05044 10.8073 3.93316C10.9246 3.81588 11.0837 3.75 11.2495 3.75C11.4154 3.75 11.5744 3.81588 11.6917 3.93316L17.3167 9.55816C17.3748 9.61621 17.4209 9.68514 17.4524 9.76101C17.4838 9.83688 17.5 9.91821 17.5 10.0003C17.5 10.0825 17.4838 10.1638 17.4524 10.2397C17.4209 10.3156 17.3748 10.3845 17.3167 10.4425L11.6917 16.0675C11.6336 16.1256 11.5647 16.1717 11.4888 16.2032C11.413 16.2347 11.3316 16.2508 11.2495 16.2508C11.1674 16.2508 11.086 16.2347 11.0102 16.2032C10.9343 16.1717 10.8654 16.1256 10.8073 16.0675Z" fill="#707070"/>
                                    </svg>
                                </div>
                            </nav>
                        ))}
                    </div>
                )}
            </header>
        </div>
    );
};

export default Header;
