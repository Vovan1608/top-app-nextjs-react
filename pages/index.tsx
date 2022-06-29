import { GetStaticProps } from 'next';
import React, { useState } from 'react';
import axios from 'axios';

import { Button, Htag, Ptag, Raiting, Tag } from '../components';
import { withLayout } from '../layout/Layout';
import { IMenuItem } from '../interfaces/menu.interface';

function Home({ menu }: IHomeProps): JSX.Element {
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

export const getStaticProps: GetStaticProps<IHomeProps> = async () => {
	const firstCategory = 0;
	const { data: menu } = await axios.get<IMenuItem[]>(process.env.NEXT_PUBLIC_DOMAIN + '/menu');

	return {
		props: {
			menu,
			firstCategory
		}
	};
}

interface IHomeProps extends Record<string, unknown> {
	menu: IMenuItem[];
	firstCategory: number;
}
