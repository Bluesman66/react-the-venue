import { AppBar, IconButton, Toolbar } from '@material-ui/core';

import MenuIcon from '@material-ui/icons/Menu';
import React from 'react';
import SideDrawer from './side-drawer';

const Header = (props) => {
	const [state, setState] = React.useState({
		drawerOpen: false,
	});

	const toggleDrawer = (value) => {
		setState({ ...state, drawerOpen: value });
	};

	return (
		<AppBar
			position="fixed"
			style={{
				backgroundColor: '#2f2f2f',
				boxShadow: 'none',
				padding: '10px 0px',
			}}
		>
			<Toolbar>
				<div className="header_logo">
					<div className="font_righteous header_logo_venue">The Venue</div>
					<div className="header_logo_title">Musical Events</div>
				</div>

				<IconButton color="inherit" onClick={() => toggleDrawer(true)}>
					<MenuIcon />
				</IconButton>

				<SideDrawer open={state.drawerOpen} onClose={(value) => toggleDrawer(value)} />
			</Toolbar>
		</AppBar>
	);
};

export default Header;
