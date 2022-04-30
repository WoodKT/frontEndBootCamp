import React from 'react';
import './App.css';
import Daycare from './daycare';

const DAYCARES_ENDPOINT = 'https://crudcrud.com/api/f0c9bb966e144654b6102d56e2cbb557';

export default class App extends React.Component {
  constructor(props) {
	  super(props);
	  this.addNewKid = this.addNewKid.bind(this);
	  this.deleteKid = this.deleteKid.bind(this);
  } 

render() {
	const daycares = this.state 
		? this.state.daycares.map((daycare, index) => 
			<Daycare 
				key={index}
				data={daycare}
				addNewKid = {this.addNewKid}
				deleteKid = {this.deleteKid} />)
		: null;

		return (
			<div>
				{daycares}
			</div>
		);
	}

	componentDidMount() {
		fetch(DAYCARES_ENDPOINT)
			.then(res => res.json())
			.then(data => { 
				this.setState({
					daycares: data
				});
			});
	}

	deleteKid(e, daycare, kid) {
		const index = daycare.kids.indexOf(kid);
		daycare.kids.splice(index, 1);
		updateDaycare(daycare)
			.then(() => {
				this.setState(state => {
					for (let h of state.daycares) {
						if (h._id === daycare._id) {
							let h = daycare;
							break;
						}
					}
					return state;
				});
			});
			e.preventDefault();
	}

	addNewKid(e, daycare, kid) { 
    daycare.kids = [];
		daycare.kids.push(kid)
		updateDaycare(daycare) 
			.then(() => {
				this.setState(state => {
					for (let h of state.daycares) {
						if (h._id === daycare._id) {
							let h = daycare;
							break;
						}
					}
					return state;
				});
			});
			e.preventDefault();
	}
}

function updateDaycare(daycare) {
	return fetch(`${DAYCARES_ENDPOINT}/${daycare._id}`, {
		method: 'PUT',
		headers: {
			'Content-Type': 'application/json'
		},
		body: JSON.stringify(daycare)
	});
}