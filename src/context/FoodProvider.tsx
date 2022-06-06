import { Food } from "@prisma/client";
import { FunctionComponent as FC, ReactNode, useState } from "react";
import { FoodContext } from "./FoodContext";

type Props = {
	children: ReactNode;
};

export const FoodProvider: FC<Props> = ({ children }) => {
	const [foods, setFoods] = useState<Food[]>([]);
	return (
		<FoodContext.Provider value={{ foods, setFoods }}>
			{children}
		</FoodContext.Provider>
	);
};
