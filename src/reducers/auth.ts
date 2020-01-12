import { User, Action } from "../actions/interfaces";
import { asyncActionNames } from "../actions/utils";
import { Types } from "../actions/types";

interface State {
  user: User;
}

const initialState = {
  user: null,
}
// @ts-ignore
export const authReducer = (state: State = initialState, action: Action): State => {
  switch(action.type) {
    case asyncActionNames(Types.SIGN_UP).success:
      return { ...state, user: action.payload };
    default:
      return state;
  }
};
