import fetchHelper from '../../helpers/FetchHelper/FetchHelper';

export const signIn = (email, password) => (
  fetchHelper({
    url: '/auth/sign_in',
    method: 'POST',
    body: { email, password }
  })
);

export const signUp = (
  firstName,
  lastName,
  email,
  password,
  confirmSuccessUrl
) => (
  fetchHelper({
    url: '/auth',
    method: 'POST',
    body: {
      first_name: firstName,
      last_name: lastName,
      email,
      password,
      confirm_success_url: confirmSuccessUrl
    }
  })
);
