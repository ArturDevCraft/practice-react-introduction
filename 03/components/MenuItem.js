import React from 'react';
export default function MenuItem({ text, url }) {
	return (
		<li>
			<a href={url}>{text}</a>
		</li>
	);
}
