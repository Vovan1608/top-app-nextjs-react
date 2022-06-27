import { GetStaticProps } from 'next';
import React, { useState } from 'react';
import { Button, Htag, Ptag, Raiting, Tag } from '../components';
import { withLayout } from '../layout/Layout';

function Home(): JSX.Element {
	const [raiting, setRaiting] = useState<number>(4);

	return (
		<>
			<Htag tag='h1'>Header</Htag>
			<Button appearance='primary' arrow='right'>Button</Button>
			<Button appearance='ghost' arrow='down'>Button</Button>
			<Ptag fontSize='lg'>Large</Ptag>
			<Ptag>Middle</Ptag>
			<Ptag fontSize='sm'>Small</Ptag>
			<Tag size='s'>Ghost</Tag>
			<Tag size='m' color='red'>Red</Tag>
			<Tag size='s' color='green'>Green</Tag>
			<Tag color='primary'>Primary</Tag>
			<Tag size='m' color='grey'>Primary</Tag>
			<Raiting raiting={raiting} setRaiting={setRaiting} isAditable />
		</>
	);
}

export default withLayout(Home);

export const getStaticProps: GetStaticProps = async (params: type) => {
	return {
		props: {

		}
	};
}