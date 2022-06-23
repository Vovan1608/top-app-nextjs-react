import Head from 'next/head';
import { AppProps } from '../node_modules/next/app';
import '../styles/globals.css';

function MyApp({ Component, pageProps }: AppProps): JSX.Element {
	return (
		<>
			<Head>
				<title>My Top App</title>
				<link rel="stylesheet" href="/favicon.ico" />
				<link rel="preconnect" href="https://fonts.googleapis.com" />
				<link rel="preconnect" href="https://fonts.gstatic.com" />
				<link href="https://fonts.googleapis.com/css2?family=Noto+Sans:wght@300;400;500;700&display=swap" rel="stylesheet" />
			</Head>
			<Component {...pageProps} />
		</>
	);
}

export default MyApp;