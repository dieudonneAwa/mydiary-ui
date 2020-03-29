import { Action, Diary } from "../actions/interfaces";
import { asyncActionNames } from "../actions/utils";
import { Types } from "../actions/types";

interface State {
  diary: Diary;
  error: string;
}

const initialState = {
  diary: null,
  error: '',
}
// @ts-ignore
export const diaryReducer = (state: State = initialState, action: Action): State => {
  switch (action.type) {
    case asyncActionNames(Types.CREATE_DIARY).success: {
      const { diary } = action.payload.data;
      return { ...state, diary };
    }
    case asyncActionNames(Types.SIGN_UP).loading: {
      return { ...state };
    }
    case asyncActionNames(Types.SIGN_UP).failure: {
      const { error } = action.payload.error;
      return { ...state, error };
    }
    default:
      return state;
  }
};
