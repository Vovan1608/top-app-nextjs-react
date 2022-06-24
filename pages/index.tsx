import React from 'react';
import { Button, Htag, Ptag } from '../components';

export default function Home(): JSX.Element {
	return (
		<>
			<Htag tag='h1'>Hello, World!</Htag>
			<Button appearance='primary' arrow='right'>Button</Button>
			<Button appearance='ghost' arrow='down'>Button</Button>
			<Ptag fontSize='lg'>Large</Ptag>
			<Ptag>Middle</Ptag>
			<Ptag fontSize='sm'>Small</Ptag>
		</>
	);
}
