import React, { FunctionComponent as FC } from "react";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import { HeadCell } from "./FoodsTable.HeadCell";
import { Food } from "@prisma/client";

type Props = {
	order: "asc" | "desc";
	orderBy: keyof Food;
	onRequestSort: (
		event: React.MouseEvent<unknown>,
		property: keyof Food
	) => void;
};

export const FoodsTableHeader: FC<Props> = ({
	order,
	orderBy,
	onRequestSort,
}) => {
	return (
		<TableHead>
			<TableRow>
				<HeadCell
					id='name'
					label='Nome'
					onRequestSort={onRequestSort}
					sortDirection={order}
					active={orderBy === "name"}
				/>
				<HeadCell
					id='time'
					label='Tempo'
					onRequestSort={onRequestSort}
					sortDirection={order}
					active={orderBy === "time"}
				/>
				<HeadCell
					id='category'
					label='Categoria'
					onRequestSort={onRequestSort}
					sortDirection={order}
					active={orderBy === "category"}
				/>
				<HeadCell
					id='acqua'
					label='Acqua'
					onRequestSort={onRequestSort}
					sortDirection={order}
					active={orderBy === "acqua"}
				/>
			</TableRow>
		</TableHead>
	);
};
