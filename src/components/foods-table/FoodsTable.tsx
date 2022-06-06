import { Food } from "@prisma/client";
import React, { FunctionComponent as FC } from "react";
import { Table, TableContainer } from "@mui/material";
import { FoodsTableHeader } from "./FoodsTable.Header";
import { FoodsTableBody } from "./FoodsTable.Body";

type Props = {
	foods: Food[];
};

export const FoodsTable: FC<Props> = ({ foods }) => {
	const [order, setOrder] = React.useState<"asc" | "desc">("asc");
	const [orderBy, setOrderBy] = React.useState<keyof Food>("name");

	const handleRequestSort = (
		event: React.MouseEvent<unknown>,
		property: keyof Food
	) => {
		const isAsc = orderBy === property && order === "asc";
		setOrder(isAsc ? "desc" : "asc");
		setOrderBy(property);
	};

	return (
		<TableContainer>
			<Table stickyHeader>
				<FoodsTableHeader
					order={order}
					orderBy={orderBy}
					onRequestSort={handleRequestSort}
				/>
				<FoodsTableBody foods={foods} order={order} orderBy={orderBy} />
			</Table>
		</TableContainer>
	);
};
