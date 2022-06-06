import React, { FunctionComponent as FC } from "react";
import { useRouter } from "next/router";
import { Typography, Button, Menu, MenuItem } from "@mui/material";
import { Nav } from "./Layout.style";
export const Navbar: FC = () => {
	const router = useRouter();

	const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
	const open = Boolean(anchorEl);

	const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
		setAnchorEl(event.currentTarget);
	};

	const changeRoute = (name: string) => {
		setAnchorEl(null);
		router.push(`/category/${name.toLowerCase()}`);
	};

	const handleClose = () => {
		setAnchorEl(null);
	};

	return (
		<Nav>
			<Typography variant='h1'>
				Tempi di cottura in pentola a pressione
			</Typography>
			<Button
				id='category-btn'
				aria-controls={open ? "category-menu" : undefined}
				aria-haspopup='true'
				aria-expanded={open ? "true" : undefined}
				variant='contained'
				onClick={handleClick}>
				Categorie
			</Button>
			<Menu
				id='category-menu'
				anchorEl={anchorEl}
				open={open}
				onClose={handleClose}
				MenuListProps={{
					"aria-labelledby": "basic-button",
				}}>
				<MenuItem onClick={() => changeRoute("carne")}>Carne</MenuItem>
				<MenuItem onClick={() => changeRoute("pesce")}>Pesce</MenuItem>
				<MenuItem onClick={() => changeRoute("legumi")}>
					Legumi
				</MenuItem>
				<MenuItem onClick={() => changeRoute("riso")}>Riso</MenuItem>
				<MenuItem onClick={() => changeRoute("verdura")}>
					Verdura
				</MenuItem>
			</Menu>
		</Nav>
	);
};
