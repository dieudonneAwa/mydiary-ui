import Cookie from 'js-cookie';
import { User } from "./interfaces";
import { asyncRequest } from './utils';
import { Types } from './types';

export const signUp = (user: User): any =>
  asyncRequest(Types.SIGN_UP, '/auth/sign_up', 'post', user, Cookie.get('token'));

export const signIn = (user: User): any =>
  asyncRequest(Types.SIGN_IN, '/auth/sign_in', 'post', user, Cookie.get('token'));
