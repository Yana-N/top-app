import React, {useState} from 'react';
import {Button, Htag, Ptag, Rating, Tag} from '../components';

export default function Home(): JSX.Element {
	const [rating, setRating] = useState<number>(4);

	return (
		<div>
			<Htag tag="h1">test</Htag>
			<Button appearance="primary" arrow="down">test primary</Button>
			<Button appearance="ghost" arrow="right">test ghost</Button>
			<Ptag size="s">test text small</Ptag>
			<Ptag>test text medium</Ptag>
			<Ptag size="l">test text large</Ptag>
			<Tag size="s" color="ghost">text</Tag>
			<Tag size="m" color="red">text</Tag>
			<Tag size="m" color="grey">text</Tag>
			<Tag size="m" color="green">text</Tag>
			<Tag size="m" color="primary">text</Tag>
			<Rating rating={rating} isEditable setRating={setRating}/>
		</div>
	);
}
