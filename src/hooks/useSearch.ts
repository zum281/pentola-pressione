import { Food } from "@prisma/client";
import { useEffect, useState } from "react";
import { useFoodContext } from "../context/FoodContext";

export const useSearch = (query: string) => {
	const { foods } = useFoodContext();
	const [result, setResult] = useState<Food[]>([]);
	if (!foods) return [];

	useEffect(() => {
		const filteredFoods = foods.filter((food) => {
			if (query === "") return food;
			else if (food.name.toLowerCase().includes(query.toLowerCase()))
				return food;
		});

		setResult([...filteredFoods]);
	}, [query, foods]);

	return result;
};
