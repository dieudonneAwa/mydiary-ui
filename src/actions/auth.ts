import { User } from "./interfaces";
import { asyncRequest } from './utils';
import { Types } from './types';

export const signUp = (user: User): any => asyncRequest(Types.SIGN_UP, '/auth/sign_up', 'post', user);
