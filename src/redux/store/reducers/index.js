import {combineReducers} from 'redux';
import contactReducers from './contact.reducers';

const reducer = combineReducers({
  contacts: contactReducers,
});

export default reducer;