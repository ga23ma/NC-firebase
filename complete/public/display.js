let userToken = null;

const read = () => {
  const DBRef = firebase.database().ref("users/" + userToken);
  DBRef.on("value", (snapshot) => {
    const data = snapshot.val();
    document.getElementById("nome_output_id").innerHTML = data.nome;
    document.getElementById("idade_output_id").innerHTML = data.idade;
  });
};

const save = () => {
  const nome = document.getElementById("nome_input_id").value;
  const idade = document.getElementById("idade_input_id").value;
  firebase
    .database()
    .ref("users/" + userToken)
    .set({
      nome: nome,
      idade: idade,
    })
    .then(false);
  return false;
};
firebase.auth().onAuthStateChanged(function (user) {
  if (user) {
    userToken = user.uid;
  } else {
    const myArr = window.location.href.split("/");
    myArr[myArr.length - 1] = "index.html";
    window.location.href = myArr.join("/");
  }
});
