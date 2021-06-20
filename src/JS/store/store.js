import {createStore} from 'redux'
import root_reducers from '../reducers'


const store = createStore(
    root_reducers,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  );
  
export default store