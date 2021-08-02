const logar = () => {
  const email = document.getElementById("email_input_id").value;
  const password = document.getElementById("password_input_id").value;
  firebase
    .auth()
    .signInWithEmailAndPassword(email, password)
    .then((userCredential) => {
      // Signed in
      var user = userCredential.user;
      // ...
    })
    .catch((error) => {
      var errorCode = error.code;
      var errorMessage = error.message;
      console.log(errorMessage);
    });
};

firebase.auth().onAuthStateChanged(function (user) {
  if (user) {
    const myArr = window.location.href.split("/");
    myArr[myArr.length - 1] = "display.html";
    window.location.href = myArr.join("/");
  } else {
  }
});
