import Head from "next/head";

import MainLayout from "@/layouts/mainLayout/index";

const Main = () => {
	return (
		<>
			<Head>
				<title>خانه</title>
				<meta name="description" content="Home Page" />
				<meta name="viewport" content="width=device-width, initial-scale=1" />
				<link rel="icon" className="rounded-full" href="/assets/icons/meshki.ico" />
			</Head>
			<main>
				
			</main>
		</>
	);
};

// getLayout
Main.getLayout = () => <MainLayout/>;
// export
export default Main;