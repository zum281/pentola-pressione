import type { GetStaticProps, NextPage } from "next";
import { Food, PrismaClient } from "@prisma/client";
import { Search } from "@components/search";
import { FoodsTable } from "@components/foods-table";
import { useEffect, useState } from "react";
import { useSearch } from "../hooks/useSearch";
import { useFoodContext } from "../context/FoodContext";

const prisma = new PrismaClient();

type Props = {
	foods: Food[];
};

const Home: NextPage<Props> = ({ foods }) => {
	const { setFoods } = useFoodContext();
	const [query, setQuery] = useState("");
	const filteredFoods = useSearch(query);

	useEffect(() => {
		setFoods([...foods]);
	}, [foods]);

	return (
		<>
			<Search update={(e) => setQuery(e.target.value)} />
			<FoodsTable foods={filteredFoods} />
		</>
	);
};

export default Home;

export const getStaticProps: GetStaticProps = async () => {
	const allfoods = await prisma.food.findMany();

	return {
		props: {
			foods: allfoods,
		},
	};
};
