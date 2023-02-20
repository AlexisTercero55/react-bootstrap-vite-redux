/** 2/17/23 : CDMX/México.
 * @author  @AlexisTercero55
 * @github  https://github.com/AlexisTercero55
 * @mail    alexistercero55@gmail.com
 * @license MPL-2.0
 */
import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './index.css'
// import 'bootstrap/dist/css/bootstrap.min.css';
// Redux Toolkit setup
import { store } from './store/store';
import { Provider } from 'react-redux';


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
)
