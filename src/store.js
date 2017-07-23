import { createStore } from 'redux';
import rootReducer from  './reducer';

export default(initialState) => {
    return createStore(rootReducer, initialState);
}
