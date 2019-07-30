import React, { Component } from 'react';
import { View	 } from 'react-native';
import firebase from 'firebase';
import { Header } from './components/common';
import LoginForm from './components/LoginForm'


class App extends Component{


	componentWillMount(){ 
		const firebaseConfig = {
			  apiKey: "AIzaSyAhJZyFyT3IIhD9dQBm7yqi07YYmTZP8-o",
			  authDomain: "auth-85867.firebaseapp.com",
			  databaseURL: "https://auth-85867.firebaseio.com",
			  projectId: "auth-85867",
			  storageBucket: "",
			  messagingSenderId: "69569539755",
			  appId: "1:69569539755:web:2c5065a001f0f83d"
			};
		firebase.initializeApp(firebaseConfig);		
	}
	render(){
		return(
			<View>
				<Header headerText = "Authentication" /> 
				<LoginForm />
			</View>
			); 
	}
}

export default App;