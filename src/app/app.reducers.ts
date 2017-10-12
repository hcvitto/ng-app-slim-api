import {
  CURRENT_USER,

  AUTH_IN,
  AUTH_OUT
} from './app.actions';

let user: any = {
    name: null,
    surname: null,
    activity: null,
  };

export const currentUserReducer = (state: any = user, { type, payload }) => {
	switch (type) {
		case CURRENT_USER:
			return Object.assign({}, state, payload);
		default:
			return state;
	}
}

export const authStateReducer = (state: boolean = false, { type }) => {
	switch (type) {
		case AUTH_IN:
			return (state = true);
		case AUTH_OUT:
			return (state = false);
		default:
			return state;
	}
}
