export interface User {
  id?: number;
  name: string;
  email: string;
  password?: string;
  confPassword?: string;
}

export interface Diary {
  id?: number;
  title: string;
  location: string;
}

export interface Action {
  type: string,
  payload?: any,
}
