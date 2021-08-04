Storage.prototype.setObject = function (key, value) {
  this.setItem(key, JSON.stringify(value));
};

Storage.prototype.getObject = function (key) {
  return JSON.parse(this.getItem(key));
};

let userData = localStorage.getObject("userData");

if (userData === null) {
  localStorage.setObject("userData", {
    user: { name: "", email: "", loggedIn: false },
  });
}
