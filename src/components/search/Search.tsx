import React, { FunctionComponent as FC } from "react";
import TextField from "@mui/material/TextField";

type Props = {
	update: (e: React.ChangeEvent<HTMLInputElement>) => void;
};

export const Search: FC<Props> = ({ update }) => {
	return (
		<TextField
			id='search'
			name='search'
			label='Cerca'
			variant='standard'
			onChange={update}
			margin='normal'
			fullWidth
			size='medium'
		/>
	);
};
