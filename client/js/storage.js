Storage.prototype.setObject = function(key, value) {
  this.setItem(key, JSON.stringify(value));
}

Storage.prototype.getObject = function(key) {
  return JSON.parse(this.getItem(key));
}

const userData = localStorage.getObject('userData');

localStorage.setObject('userData', {user: {name: '' , email: '', loggedIn: false}})