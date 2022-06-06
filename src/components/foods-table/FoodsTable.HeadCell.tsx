import { Box, TableCell, TableSortLabel } from "@mui/material";
import { visuallyHidden } from "@mui/utils";
import { Food } from "@prisma/client";
import React, { FunctionComponent as FC } from "react";

type Props = {
	id: keyof Food;
	label: string;
	sortDirection: "asc" | "desc";
	active: boolean;
	onRequestSort: (
		event: React.MouseEvent<unknown>,
		property: keyof Food
	) => void;
};

export const HeadCell: FC<Props> = ({
	id,
	label,
	sortDirection,
	active,
	onRequestSort,
}) => {
	const createSortHandler =
		(property: keyof Food) => (event: React.MouseEvent<unknown>) => {
			onRequestSort(event, property);
		};

	return (
		<TableCell key={id} sortDirection={sortDirection}>
			<TableSortLabel
				active={active}
				direction={sortDirection}
				onClick={createSortHandler(id)}>
				{label}
				{sortDirection ? (
					<Box component='span' sx={visuallyHidden}>
						{sortDirection === "desc"
							? "sorted descending"
							: "sorted ascending"}
					</Box>
				) : null}
			</TableSortLabel>
		</TableCell>
	);
};
