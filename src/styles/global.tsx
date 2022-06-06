import { Global, css } from "@emotion/react";

const GlobalStyle = () => {
	return (
		<Global
			styles={css`
				:root {
					--clr-black: #282828;
					--clr-white: #fbfbff;
					--clr-red: #ff715b;
					--clr-green: #7eb77f;
					--clr-blue: #247ba0;
					--font-body: "Roboto", sans-serif;
					--font-heading: "Poppins", sans-serif;
				}

				*,
				*::after,
				*::before {
					box-sizing: border-box;
					margin: 0;
					padding: 0;
				}

				html,
				body {
					font-size: 1rem;
					font-family: var(--font-body);
					font-weight: 400;
					line-height: 1.6;
					background-color: var(--clr-white);
					color: var(--clr-black);
				}

				header,
				main,
				footer {
					max-width: 1440px;
					margin: 0 auto;
					padding: 20px 40px;
				}

				h1,
				h2,
				h3,
				h4,
				h5,
				h6 {
					font-family: var(--font-heading);
				}

				h1 {
					font-size: 2.5rem !important;
				}

				a {
					text-decoration: none;
					color: inherit;
				}

				ul,
				li {
					list-style: none;
				}
			`}
		/>
	);
};

export default GlobalStyle;
