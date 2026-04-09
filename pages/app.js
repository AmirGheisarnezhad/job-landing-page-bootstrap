const form = document.getElementById("form");
const fields = form.querySelectorAll("input,textarea");
const msg = document.getElementById("msg");

function controlla() {
  for (let field of fields) {
    if (field.value.trim() === "") {
      document.getElementById("msg").style.display = "block";
      msg.innerHTML = "Riempi tutti i campi";
      return;
    }

    if (field.name === "eMail") {
      let email = field.value;
      let validateEmail = String(email)
        .toLowerCase()
        .match(
          /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
        );
      if (!validateEmail) {
        msg.style.display = "block";
        msg.innerHTML = "formato email non e giusto";
      } else {
        msg.style.display = "block";
        form.style.display = "none";
      }
    }
  }
}

const users = [
  { user: "amir@gmail.com", pass: "1234" },
  { user: "sara@gmail.com", pass: "1234" },
  { user: "anett@gmail.com", pass: "1234" },
  { user: "federico@gmail.com", pass: "1234" },
];
function login() {
  const username = document.getElementById("username");
  const pass = document.getElementById("pass");

  if (username.value.trim() === "" || pass.value.trim() === "") {
    msg.style.display = "block";
    msg.innerHTML = "Riempi tutti i campi";
    return;
  }

  let email = username.value.trim();
  let validateEmail = String(email)
    .toLowerCase()
    .match(
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
    );
  if (!validateEmail) {
    msg.style.display = "block";
    msg.innerHTML = "formato email non e giusto";
    return;
  }
  let found = false;
  for (let i = 0; i < users.length; i++) {
    if (
      username.value.trim() === users[i].user &&
      pass.value.trim() === users[i].pass
    ) {
      found = true;
      break
    }
  }
  if (found === true ) {
    form.style.display = "none";
    msg.style.display = "block";
    msg.innerHTML = "Benvenuto";
  } else {
    msg.style.display = "block";
    msg.innerHTML = "credenziali non validi";
  }
}
