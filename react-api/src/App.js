import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route} from 'react-router-dom';
import Home from './pages/home';
import Movie from './pages/movie';
import SignUp from './pages/signup';
import Favorites from './pages/favorites';
import FeedbackTable from './pages/feedbackTable';
import FeedbackUpdate from './components/feedbackUpdate';
import FeedbackForm from './components/feedbackForm';
import Navigation from './components/Navbar/Navigation';

function App() {
	return (
		<div>
			<Router>
				<div>
					<Navigation/>
					<Route path='/' exact render={() => <Home/>} />
					<Route path='/feedbackForm' render={() => <FeedbackForm/>} />
					<Route path='/movie' exact render={() => <Movie/>} />
					<Route path='/favorites' exact render={() => <Favorites/>} />
					<Route path='/signup' exact render={() => <SignUp/>} />
					<Route path='/feedbackUpdate' render={() => <FeedbackUpdate/>} />
					<Route path='/feedbackTable' render={() => <FeedbackTable/>} />
				</div>
			</Router>
		</div>
	);
}

export default App;