import { combineReducers } from 'redux';
// @ts-ignore
import { reducer as formReducer } from 'redux-form';
import { authReducer } from './auth';

export default combineReducers({
  auth: authReducer,
  form: formReducer,
});
