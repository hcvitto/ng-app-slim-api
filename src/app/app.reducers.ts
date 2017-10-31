import {
  CURRENT_USER,

  AUTH_IN,
  AUTH_OUT
} from './app.actions';

export const currentUserReducer = (state: any = {}, { type, payload }) => {
	switch (type) {
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
