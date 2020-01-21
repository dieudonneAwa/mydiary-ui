import { User, Action } from "../actions/interfaces";
import { asyncActionNames } from "../actions/utils";
import { Types } from "../actions/types";

interface State {
  user: User;
  authError: string;
  isLoading: boolean;
}

const initialState = {
  user: null,
  authError: '',
  isLoading: false,
}
// @ts-ignore
export const authReducer = (state: State = initialState, action: Action): State => {
  switch(action.type) {
    case asyncActionNames(Types.SIGN_UP).success: {
      const { user } = action.payload.data;
      return { ...state, user, isLoading: false };
    }
    case asyncActionNames(Types.SIGN_UP).loading: {
      return { ...state, isLoading: true };
    }
    case asyncActionNames(Types.SIGN_UP).failure: {
      const { error } = action.payload.error;
      return { ...state, authError: error, isLoading: false };
    }
    case asyncActionNames(Types.SIGN_IN).success: {
      const { user } = action.payload.data;
      return { ...state, user, isLoading: false };
    }
    case asyncActionNames(Types.SIGN_IN).loading: {
      return { ...state, isLoading: true };
    }
    case asyncActionNames(Types.SIGN_IN).failure: {
      const { error } = action.payload.error;
      return { ...state, authError: error, isLoading: false };
    }
    default:
      return state;
  }
};
