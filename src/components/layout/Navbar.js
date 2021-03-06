import React, { useContext, useEffect } from 'react';
import AuthContext from '../../context/auth/authContext';
import Spinner from '../layout/Spinner';

const Navbar = () => {
	useEffect(() => {
		getUser();
		// eslint-disable-next-line
	}, []);

	const authContext = useContext(AuthContext);
	const { logout, getUser, userData, authLoading } = authContext;
	const { name, picture } = userData;

	const onClick = () => {
		logout();
	};

	return !authLoading ? (
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
						alt=""
					/>
				</li>
				<li>
					<a href="#!" onClick={onClick}>
						Logout
					</a>
				</li>
			</ul>
		</nav>
	) : (
		<Spinner />
	);
};

export default Navbar;
