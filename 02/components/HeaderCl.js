import React from 'react';
export default class HeaderCl extends React.Component {
	render() {
		this.style = { fontWeight: 700, fontSize: '28px', color: 'rgb(20,130,50)' };
		return <header style={this.style}>Mój komponent klasowy</header>;
	}
}
