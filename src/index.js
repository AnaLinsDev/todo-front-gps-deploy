import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

//redux
import { Provider } from 'react-redux'
import { store } from './redux/store';
/*
TO DEPLOY:

git add .

git commit -m ""

git push

npm run deploy

*/

ReactDOM.render(
  <Provider store = {store}>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </Provider>,
  document.getElementById('root')
);

