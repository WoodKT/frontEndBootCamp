import React from 'react';
import './App.css';
import House from './house';

const HOUSE_ENDPOINT = 'https://ancient-taiga-31359.herokuapp.com/api/houses';

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.addNewRoom = this.addNewRoom.bind(this);
    this.deleteRoom = this.deleteRoom.bind(this);
  }

  render() {
    const houses = this.state
      ? this.state.houses.map((house, index) =>
        <House
          Key= {index}
          data= {house}
          addNewRoom={this.addNewRoom}
          deleteRoom={this.deleteRoom} />)
        : null;
        return (
          <div>
            {houses}
          </div>
        );
  }

  componentDidMount() {
    fetch(HOUSE_ENDPOINT)
      .then(res => res.json())
      .then(data => {
        this.setState({
          houses: data
        });
      });
  }

  deleteRoom(e, house, room) {
    house.rooms.push(room)
    updateHouse(house)
      .then(() => {
        this.setState(state => {
          for (let h of state.houses) {
            if (h._id === house._id) {
              let h = house;
              break;
            }
          }
          return state;
        });
      });
      e.preventDefault();
  }

  addNewRoom(e, house, room) {
    const index = house.rooms.indexOf(room);
    house.rooms.splice(index, 1);
    updateHouse(house)
      .then(() => {
        this.setState(state => {
          for (let h of state.houses) {
            if (h._id === house._id) {
              let h = house;
              break;
            }
          }
          return state;
        });
      });
      e.preventDefault();
  }

}

function updateHouse(house) {
  return fetch(`{$HOUSES_ENDPOINT}/${house._id}`, {
  method: 'PUT',
  headers: {
    'Content-Type': 'application/json'
  },
  body: JSON.stringify(house)
});
}

// import logo from './logo.svg';
// import './App.css';

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

// export default App;
