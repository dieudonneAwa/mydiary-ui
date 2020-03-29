import { combineReducers } from 'redux';
// @ts-ignore
import { reducer as formReducer } from 'redux-form';
import { authReducer } from './auth';
import { diaryReducer } from './diary';

export default combineReducers({
  auth: authReducer,
  form: formReducer,
  diary: diaryReducer,
});
