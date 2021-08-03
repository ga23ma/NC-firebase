let userToken = null;

const read = () => {
  document.getElementById("nome_output_id").innerHTML = "nome";
  document.getElementById("idade_output_id").innerHTML = "idade";
};

const save = () => {
  const nome = document.getElementById("nome_input_id").value;
  const idade = document.getElementById("idade_input_id").value;
};

const redirect = () => {
  const myArr = window.location.href.split("/");
  myArr[myArr.length - 1] = "index.html";
  window.location.href = myArr.join("/");
};
