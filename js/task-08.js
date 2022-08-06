const form = document.querySelector(".login-form");

form.addEventListener("submit", onFormSubmit);

function onFormSubmit(event) {
  event.preventDefault();
  const formData = new FormData(event.currentTarget);

  if (formData.get("email") === "" || formData.get("password") === "") {
    window.alert("Please fill in all the fields!");
  } else {
    console.log("email: ", event.currentTarget.elements.email.value);
    console.log("password: ", event.currentTarget.elements.password.value);

    event.currentTarget.reset();
  }
}
