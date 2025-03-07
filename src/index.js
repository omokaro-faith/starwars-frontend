import React from 'react';
import { Provider } from 'react-redux';
import ReactDOM from 'react-dom';
import configureStore from './store/configureStore';
import './index.css';
import Root from './app/App';
import * as serviceWorker from './serviceWorker';

const store = configureStore();

const Wrapper = () => {
	return (
		<Provider store={store}>
			<Root />
		</Provider>
	);
};

ReactDOM.render(
	<React.StrictMode>
		<Wrapper />
	</React.StrictMode>,
	document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
