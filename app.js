let data = [
  {
    name: "pedro",
    password: "1234",
  },
  {
    name: "paola",
    password: "5678",
  },
  {
    name: "clara",
    password: "9101",
  },
];

const errorPassword = document.getElementById("errorPas");
const errorUsuario = document.getElementById("errorUser");

function login(form) {
  let nombres = data.map((e) => e.name);
  console.log(nombres);

  let filtrarUsuario = nombres.find((e) => e === form.usuario.value);
  console.log(filtrarUsuario);

  let password = data.map((e) => e.password);
  console.log(password);

  let filtrarPassword = password.find((e) => e === form.password.value);
  console.log(filtrarPassword);

  if (form.usuario.value === filtrarUsuario) {
    if (form.password.value === filtrarPassword) {
      location = "home.html";
    } else {
      errorPassword.innerHTML = "Error al ingresar el password";
      console.log("error de password");
    }
  } else {
    errorUsuario.innerHTML = "Error al ingresar el Usuario";
    console.log("error de usuario");
  }
}
