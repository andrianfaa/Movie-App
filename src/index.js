import React, { StrictMode } from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import App from './App';
import Store from './store';
import './styles/index.scss';

ReactDOM.render(
    <StrictMode>
        <Provider store={Store}>
            <App />
        </Provider>
    </StrictMode>,
    document.getElementById('root'),
);
