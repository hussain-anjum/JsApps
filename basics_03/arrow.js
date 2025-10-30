const user = {
  username: "har",
  price: 999,

  welcomeMessage: function () {
    console.log(`${this.username} , welcome to darkweb!`);
    console.log(this); // refers to current(user) obj.
  },
};

// user.welcomeMessage()
// user.username = "abul"
// user.welcomeMessage()

console.log(this); // {}; refers to empty obj
