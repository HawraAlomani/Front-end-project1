const submit = document.querySelector(".button-des");

const saveLocal = (e) => {
  let userInfo = {
    firstname: document.getElementById("fname").value,
    lastname: document.getElementById("lname").value,
    email: document.getElementById("inputEmail4").value,
    password: document.getElementById("inputPassword4").value,
  };
  localStorage.setItem("userInfo", JSON.stringify(userInfo));
  Welcome();
  e.preventDefault();
};

submit.addEventListener("click", saveLocal);

function Welcome() {
  let { email, firstname, lastname, password } = JSON.parse(
    localStorage.getItem("userInfo")
  );
  var text = document.getElementById("text");
  text.innerHTML = `<h2> Welcome ${firstname} ${lastname} . </h2>`;
}
