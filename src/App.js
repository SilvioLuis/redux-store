import React from 'react';
import Routes from './routes'
import { BrowserRouter } from 'react-router-dom'
import { Provider } from 'react-redux'
import store from './store'

import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
	return (
		<Provider store={store}>
			<BrowserRouter>
				<Routes />
			</BrowserRouter>
		</Provider>
	);
}

export default App;
