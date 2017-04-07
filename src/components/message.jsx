import React from 'react';

export default class Message extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			username: props.username, 
			message: props.message
		};
	}
	render() {
		return (
			<div style={{backgroundColor: 'gray'}}>
				{this.state.username}: {this.state.message}
			</div>
		);
	}
}