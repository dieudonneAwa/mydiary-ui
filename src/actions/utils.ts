import apiCall from '../apiCall';
import { ThunkDispatch } from 'redux-thunk';
import { Action } from 'redux';
import { Action as IAction } from './interfaces';

/**
 * Constructs async actions constants
 * @param baseName {string}
 * @returns {Object}
 */
export const asyncActionNames = (baseName: string): any => ({
  failure: `${baseName}_FAILURE`,
  loading: `${baseName}_LOADING`,
  success: `${baseName}_SUCCESS`,
});

export const asyncActions = (actionName: string): any => ({
  loading: (bool: any): IAction => ({
    type: asyncActionNames(actionName).loading,
    payload: bool,
  }),
  failure: (bool: any, error: any): IAction => ({
    type: asyncActionNames(actionName).failure,
    payload: { error, status: bool },
  }),
  success: (payload: any): IAction => ({
    type: asyncActionNames(actionName).success,
    payload,
  })
});

export const asyncRequest = (
  actionName: string,
  url: string,
  method: string,
  body: any = null,
  token: string = '',
) => async (dispatch: ThunkDispatch<{}, undefined, Action>) => {
  try {
    dispatch(asyncActions(actionName).loading(true));
    const res = await apiCall(url, method, body, token);
    console.log(res.data);
    dispatch(asyncActions(actionName).success(res.data));
    return res;
  } catch (e) {
    if (e && e.response) {
      dispatch(asyncActions(actionName).failure(true, e.response.data));
    }
  }
}
