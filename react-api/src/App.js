import React from 'react';
import './App.css';
import Navbar from './components/Navbar';
import { BrowserRouter as Router, Routes, Route}
	from 'react-router-dom';
import Home from './pages';
import About from './pages/about';
import Blogs from './pages/blogs';
import Movie from './pages/movie';
import SignUp from './pages/signup';
import Contact from './pages/contact';
import Favorites from './pages/favorites';

function App() {
return (
	<Router>
	<Navbar />
	<div className=''>
	<Routes>
		<Route exact path='/' element={<Home />} />
		<Route path='/about' element={<About/>} />
		<Route path='/contact' element={<Contact/>} />
		<Route path='/blogs' element={<Blogs/>} />
		<Route path='/movie' element={<Movie/>} />
		<Route path='/favorites' element={<Favorites/>} />
		<Route path='/signup' element={<SignUp/>} />
	</Routes>
	</div>
	</Router>
);
}

export default App;