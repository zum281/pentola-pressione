import type { GetStaticPaths, GetStaticProps, NextPage } from "next";
import { Food, PrismaClient } from "@prisma/client";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import { FoodsTable } from "@components/foods-table";
import { Link } from "@mui/material";
import NextLink from "next/link";

const prisma = new PrismaClient();

type Props = {
	foods: Food[];
};

const Category: NextPage<Props> = ({ foods }) => {
	return (
		<>
			<NextLink href='/' passHref>
				<Link
					style={{
						display: "flex",
						alignItems: "center",
						gap: "3px",
					}}>
					<ArrowBackIcon fontSize='small' /> Torna indetro
				</Link>
			</NextLink>
			<FoodsTable foods={foods} />
		</>
	);
};

export default Category;

export const getStaticProps: GetStaticProps = async ({ params }) => {
	const allfoods = await prisma.food.findMany({
		select: {
			id: true,
			name: true,
			time: true,
			category: true,
			acqua: true,
		},
		where: {
			category: (params!.category as string).replace(/\w\S*/g, (w) =>
				w.replace(/^\w/, (c) => c.toUpperCase())
			),
		},
	});

	return {
		props: {
			foods: allfoods,
		},
	};
};

export const getStaticPaths: GetStaticPaths = async () => {
	return {
		paths: [
			{ params: { category: "carne" } },
			{ params: { category: "legumi" } },
			{ params: { category: "riso" } },
			{ params: { category: "pesce" } },
			{ params: { category: "verdura" } },
		],
		fallback: false,
	};
};
