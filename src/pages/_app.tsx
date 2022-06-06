import type { AppProps } from "next/app";
import { Layout } from "@components/shared/layout";
import GlobalStyle from "@styles/global";
import { FoodProvider } from "../context/FoodProvider";

function MyApp({ Component, pageProps }: AppProps) {
	return (
		<FoodProvider>
			<Layout>
				<GlobalStyle />
				<Component {...pageProps} />
			</Layout>
		</FoodProvider>
	);
}

export default MyApp;
