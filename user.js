const defaultUser = {
  username: "",
  age: 13,
  balance: 0.00,
  prefKey: "TCH3-GME2-TY1",
  history: [],
  adPref: "any"
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

function resetUser() {
  localStorage.removeItem("mintUser");
}
