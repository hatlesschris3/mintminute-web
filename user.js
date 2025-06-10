const defaultUser = {
  username: "",
  age: 13,
  balance: 0.00,
  history: [],
  adPref: ['survey','quiz','video','audio_ad','image_tag']
};

function loadUser() {
  const v = localStorage.getItem("mintUser");
  return v ? JSON.parse(v) : null;
}

function saveUser(u) {
  localStorage.setItem("mintUser", JSON.stringify(u));
}

function createUser(name, age) {
  const u = {...defaultUser, username:name, age, history:[], adPref:defaultUser.adPref};
  saveUser(u);
  return u;
}

function updateBalance(amt){
  const u = loadUser();
  u.balance = +(u.balance + amt).toFixed(2);
  saveUser(u);
}

function resetUser() {
  localStorage.removeItem("mintUser");
}
