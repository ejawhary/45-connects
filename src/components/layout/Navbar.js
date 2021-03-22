import React, { useContext, useEffect } from 'react';
import { Link } from 'react-router-dom';
import AuthContext from '../../context/auth/authContext';

const Navbar = () => {
	useEffect(() => {
		getUser();
	}, []);

	const authContext = useContext(AuthContext);
	const { logout, getUser, userData } = authContext;
	const { name, picture } = userData;

	const onClick = () => {
		logout();
	};

	return (
		<nav className="navbar">
			<div className="nav-branding">
				<span className="ff-nav">45</span>
				<span className="connects-nav">Connects</span>
			</div>
			<ul className="nav-links">
				<li>Welcome {name} </li>
				<li>
					<img
						style={{ width: '40px' }}
						src={picture ? picture : ''}
					/>
				</li>
				<li>
					<Link to="/login" onClick={onClick}>
						Logout
					</Link>
				</li>
			</ul>
		</nav>
	);
};

export default Navbar;