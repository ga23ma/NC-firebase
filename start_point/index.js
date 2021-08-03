const logar = () => {
  const email = document.getElementById("email_input_id").value;
  const password = document.getElementById("password_input_id").value;
  console.log(email);
  console.log(password);
};
const redirect = () => {
  const myArr = window.location.href.split("/");
  myArr[myArr.length - 1] = "display.html";
  window.location.href = myArr.join("/");
};
