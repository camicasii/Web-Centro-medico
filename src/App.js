import React from 'react';
//Redux
import {Provider} from 'react-redux';
import store from './store';
import AppRouter from './AppRouter';
import './App.css';
 
const App = () => {
  return ( 
    <Provider store={store}>
     
        <AppRouter/>
     
    </Provider>
   );
}
 
export default App;
  