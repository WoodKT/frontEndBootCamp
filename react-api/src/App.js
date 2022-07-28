import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route} from 'react-router-dom';
import Home from './pages/home';
import Movie from './pages/movie';
import SignUp from './pages/signup';
import Favorites from './pages/favorites';
import Contact from './pages/contact';
import ContactUpdate from './components/contactUpdate';
import ContactForm from './components/contactForm';
import Navigation from './components/Navbar/Navigation';

function App() {
	return (
		<div>
			<Router>
				<div>
					<Navigation/>
					<Route path='/' exact render={() => <Home/>} />
					<Route path='/contactForm' render={() => <ContactForm/>} />
					<Route path='/movie' exact render={() => <Movie/>} />
					<Route path='/favorites' exact render={() => <Favorites/>} />
					<Route path='/signup' exact render={() => <SignUp/>} />
					<Route path='/contactUpdate' render={() => <ContactUpdate/>} />
					<Route path='/contact' render={() => <Contact/>} />
				</div>
			</Router>
		</div>
	);
}

export default App;