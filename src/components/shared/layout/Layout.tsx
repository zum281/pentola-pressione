import React, { FunctionComponent as FC, ReactNode } from "react";
import Head from "next/head";
import { Navbar } from "./Navbar";

type Props = {
	children: ReactNode;
};
export const Layout: FC<Props> = ({ children }) => {
	return (
		<>
			<Head>
				<title>Tempi di cottura in pentola a pressione</title>
				<meta
					name='description'
					content='Tempi di cottura in pentola a pressione'
				/>
				<link rel='icon' href='/favicon.ico' />
			</Head>
			<header>
				<Navbar />
			</header>
			<main>{children}</main>
		</>
	);
};
