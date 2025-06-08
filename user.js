const defaultUser = {
  username: "",
  age: 13,
  balance: 0.00,
  prefKey: "TCH3-GME2-TY1",
  history: []
};

function loadUser() {
  const user = localStorage.getItem("mintUser");
  return user ? JSON.parse(user) : null;
}

function saveUser(user) {
  localStorage.setItem("mintUser", JSON.stringify(user));
}

function createUser(username, age) {
  const user = { ...defaultUser, username, age };
  saveUser(user);
  return user;
}

function updateBalance(amount) {
  const user = loadUser();
  user.balance = +(user.balance + amount).toFixed(2);
  saveUser(user);
}

function getUserBalance() {
  const user = loadUser();
  return user ? user.balance.toFixed(2) : "0.00";
}

function resetUser() {
  localStorage.removeItem("mintUser");
}

function getPrefKey() {
  const user = loadUser();
  return user ? user.prefKey : "Unknown";
}

function setPrefKey(newKey) {
  const user = loadUser();
  user.prefKey = newKey;
  saveUser(user);
}
