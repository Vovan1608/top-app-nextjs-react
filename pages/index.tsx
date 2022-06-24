import React, { useEffect, useState } from 'react';
import { Button, Htag, Ptag, Raiting, Tag } from '../components';

export default function Home(): JSX.Element {
	const [counter, setCounter] = useState<number>(0);

	useEffect(() => {
		console.log('counter ' + counter);

		return function cleanup() {
			console.log('unmount ' + counter);
		}
	}, []);

	return (
		<>
			<Htag tag='h1'>Counter: {counter} times</Htag>
			<Button appearance='primary' arrow='right' onClick={() => setCounter(x => x + 1)}>Button</Button>
			<Button appearance='ghost' arrow='down'>Button</Button>
			<Ptag fontSize='lg'>Large</Ptag>
			<Ptag>Middle</Ptag>
			<Ptag fontSize='sm'>Small</Ptag>
			<Tag size='s'>Ghost</Tag>
			<Tag size='m' color='red'>Red</Tag>
			<Tag size='s' color='green'>Green</Tag>
			<Tag color='primary'>Primary</Tag>
			<Tag size='m' color='grey'>Primary</Tag>
			<Raiting raiting={4} />
		</>
	);
}
