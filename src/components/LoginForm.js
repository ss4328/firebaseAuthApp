import React, { Component } from 'react';
import { Button, Card, CardSection, Input } from './common';

class LoginForm extends Component {

	state = {email: ''};
	render(){
		return (
			<Card>
				<CardSection>
					<Input 
					label = "Email"
					value={this.state.email} 
					onChangeText = {email => this.setState({email})}
					placeholder ="user@gmail.com"
					/>
				</CardSection>
				<CardSection>
					<Input 
					label = "Password"
					value={this.state.password} 
					onChangeText = {password => this.setState({password})}
					placeholder ="**********"
					secureTextEntry
					/>
				</CardSection>
				<CardSection>
					<Button>
						Log in
					</Button>
				</CardSection>
			</Card>
		);
	}
}

export default LoginForm;