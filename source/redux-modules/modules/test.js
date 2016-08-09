// DUCKS convention
// https://github.com/erikras/ducks-modular-redux
import { fromJS } from 'immutable';
import * as fetch from 'library/fetch';
import endpoint from 'library/endpoint';

const SUBMIT_REGISTRATION_REQUEST = '/signup/SUBMIT_REGISTRATION_REQUEST';
const SUBMIT_REGISTRATION_SUCCESS = '/signup/SUBMIT_REGISTRATION_SUCCESS';
const SUBMIT_REGISTRATION_FAILURE = '/signup/SUBMIT_REGISTRATION_FAILURE';
const ACKNOWLEDGE_REGISTRATION_SUCCESS = '/signup/ACKNOWLEDGE_REGISTRATION_SUCCESS';

const INITIAL_STATE = fromJS({
  isSubmitting: false,
  isDoneSubmitting: false,
  isSuccessful: false,
  errorText: null,
});

const reducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case SUBMIT_REGISTRATION_REQUEST:
      return state.set('isSubmitting', true).set('isDoneSubmitting', false).set('isSuccessful', false);
    case SUBMIT_REGISTRATION_SUCCESS:
      return state.set('isSubmitting', false).set('isSuccessful', true).set('isDoneSubmitting', true);
    case SUBMIT_REGISTRATION_FAILURE:
      return state.set('isSubmitting', false).set('isDoneSubmitting', true).set('isSuccessful', false).set('errorText', action.errorText);
    case ACKNOWLEDGE_REGISTRATION_SUCCESS:
      return state.set('isSubmitting', false).set('isDoneSubmitting', false).set('isSuccessful', false).set('errorText', null);
    default:
      return state;
  }
};

const submitRegistrationRequest = () => ({
  type: SUBMIT_REGISTRATION_REQUEST,
});

const submitRegistrationSuccess = () => ({
  type: SUBMIT_REGISTRATION_SUCCESS,
});

const submitRegistrationFailure = (errorText) => ({
  type: SUBMIT_REGISTRATION_FAILURE,
  errorText,
});

export const acknowledgeRegistrationSuccess = () => ({
  type: ACKNOWLEDGE_REGISTRATION_SUCCESS,
});

export const submitRegistration = formData =>
  dispatch => {
    dispatch(submitRegistrationRequest());
    fetch.signUp(endpoint.signUp, formData)
      .then(
        (response) => {
          if (response.ok) {
            response.json().then(
              (data) => {
                return dispatch(submitRegistrationSuccess(data));
              }
            );
          } else {
            response.json().then(
              (data) => {
                return dispatch(submitRegistrationFailure(data.message));
              }
            );
          }
          return null;
        }
      );
  };

export default reducer;
