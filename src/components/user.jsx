import React from 'react';

export default class User extends React.Component {
	constructor(props) {
		super(props);
	}
	submit() {
		this.props.setUsername(this.refs.input.value);
	}
	render() {
		return (
			<div style={{backgroundColor: 'gray', height: '100vh', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center'}}>
				<input ref="input" style={{height: '50px', width: '300px', fontSize: '20px'}} placeholder={'Choose a username.'} />
				<div style={{width: '300px', height: '50px', backgroundColor: 'red', textAlign: 'center', cursor: 'pointer'}} onClick={this.submit.bind(this)}>OK</div>
			</div>
		);
	}
}