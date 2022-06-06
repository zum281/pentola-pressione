import { Food } from "@prisma/client";
import { createContext, useContext } from "react";

type Ctx = { foods: Food[]; setFoods: (foods: Food[]) => void };

export const FoodContext = createContext<Ctx>({
	foods: [],
	setFoods: () => {},
});

export const useFoodContext = () => useContext(FoodContext);
