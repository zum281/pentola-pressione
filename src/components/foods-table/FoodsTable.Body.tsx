import React, { FunctionComponent as FC } from "react";
import NextLink from "next/link";
import { Link, TableBody, TableCell, TableRow } from "@mui/material";
import { Food } from "@prisma/client";
import { getComparator, stableSort } from "../../utils/sorting";

type Props = {
	foods: Food[];
	order: "asc" | "desc";
	orderBy: keyof Food;
};

export const FoodsTableBody: FC<Props> = ({ foods, order, orderBy }) => {
	return (
		<TableBody>
			{stableSort(foods, getComparator(order, orderBy)).map((food) => (
				<TableRow key={food.id}>
					<TableCell>{food.name}</TableCell>
					<TableCell>{food.time} min</TableCell>
					<TableCell>
						<NextLink
							href={`/category/${food.category.toLowerCase()}`}
							passHref>
							<Link>{food.category}</Link>
						</NextLink>
					</TableCell>
					<TableCell>{food.acqua}</TableCell>
				</TableRow>
			))}
		</TableBody>
	);
};
