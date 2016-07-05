import 'whatwg-fetch';

const getToken = () => JSON.parse(localStorage.getItem('authData')).token;

/**
 * HTTP GET
 * @param  {string} url
 * @return {Promise}
 */
export function read(url) {
  const token = getToken();
  return fetch(url, {
    mode: 'cors',
    credentials: 'include',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json; charset=utf-8',
      Authorization: `Bearer ${token}`,
    },
    method: 'get',
  });
}

/**
 * HTTP POST
 * @param  {string} url
 * @param  {object} body
 * @return {Promise}
 */
export function create(url, body = {}) {
  const token = getToken();
  return fetch(url, {
    mode: 'cors',
    credentials: 'include',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json; charset=utf-8',
      Authorization: `Bearer ${token}`,
    },
    method: 'post',
    body: JSON.stringify(body)
  });
}

// without auth
export function login(url, body = {}) {
  return fetch(url, {
    mode: 'cors',
    credentials: 'include',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json; charset=utf-8',
    },
    method: 'post',
    body: JSON.stringify(body)
  });
}

export const signUp = login;


// without auth
export function resetPassword(url, body = {}) {
  return fetch(url, {
    mode: 'cors',
    credentials: 'include',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json; charset=utf-8',
    },
    method: 'post',
    body: JSON.stringify(body)
  });
}


/**
 * HTTP PUT
 * @param  {string} url
 * @param  {object} body
 * @return {Promise}
 */
export function update(url, body = {}) {
  const token = getToken();
  return fetch(url, {
    mode: 'cors',
    credentials: 'include',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json; charset=utf-8',
      Authorization: `Bearer ${token}`,
    },
    method: 'put',
    body: JSON.stringify(body)
  });
}


/**
 * HTTP DELETE
 * @param  {string} url
 * @return {Promise}
 */
export function destroy(url) {
  const token = getToken();
  return fetch(url, {
    mode: 'cors',
    credentials: 'include',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json; charset=utf-8',
      Authorization: `Bearer ${token}`,
    },
    method: 'delete'
  });
}

export function updateFormData(url, data) {
  const token = getToken();
  return fetch(url, {
    mode: 'cors',
    credentials: 'include',
    headers: {
      Authorization: `Bearer ${token}`,
    },
    method: 'post',
    body: data
  });
}
