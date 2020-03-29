import Cookie from 'js-cookie';
import { Diary } from "./interfaces";
import { asyncRequest } from './utils';
import { Types } from './types';

export const createDiary = (diary: Diary) =>
  asyncRequest(Types.CREATE_DIARY, '/diaries', 'post', diary, Cookie.get('token'));
