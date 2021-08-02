firebase.auth().onAuthStateChanged(function (user) {
  if (user) {
  } else {
    const myArr = window.location.href.split("/");
    myArr[myArr.length - 1] = "index.html";
    window.location.href = myArr.join("/");
  }
});
