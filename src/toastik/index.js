function info(text) {
  fireToast(text, 'info');
}

function success(text) {
  fireToast(text, 'success');
}

function warn(text) {
  fireToast(text, 'warn');
}

function error(text) {
  fireToast(text, 'error');
}

function fireToast(text, type) {
  /*eslint-disable no-console*/
  console.log(`${type}! ${text}`);
}


export { info, success, warn, error };
