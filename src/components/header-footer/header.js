import { AppBar, IconButton, Toolbar } from '@material-ui/core';

import MenuIcon from '@material-ui/icons/Menu';
import React from 'react';
import SideDrawer from './side-drawer';

const Header = (props) => {
	const [drawerOpen, setDrawerOpen] = React.useState(false);
	const [headerShow, setHeaderShow] = React.useState(false);

	const handleScroll = () => {
		setHeaderShow(window.scrollY > 0);
	};

	React.useEffect(() => {
		window.addEventListener('scroll', handleScroll);
		return () => {
			window.removeEventListener('scroll', handleScroll);
		};
	});

	return (
		<AppBar
			position="fixed"
			style={{
				backgroundColor: headerShow ? '#2f2f2f' : 'transparent',
				boxShadow: 'none',
				padding: '10px 0px',
			}}
		>
			<Toolbar>
				<div className="header_logo">
					<div className="font_righteous header_logo_venue">The Venue</div>
					<div className="header_logo_title">Musical Events</div>
				</div>

				<IconButton color="inherit" onClick={() => setDrawerOpen(true)}>
					<MenuIcon />
				</IconButton>

				<SideDrawer open={drawerOpen} onClose={(value) => setDrawerOpen(value)} />
			</Toolbar>
		</AppBar>
	);
};

export default Header;
