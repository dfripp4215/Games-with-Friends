function renderSignUp() {
  document.querySelector("#main-content").innerHTML = `
  <section class="sign_up">
  <h1>Sign Up</h1>
  <form action="/signup" method="POST" id="sign-up-form">
    <section id="errors"></section>
    <fieldset>
      <label for="">Name:</label><br />
      <input type="text" name="name" />
    </fieldset>
    <fieldset>
      <label for="">Email:</label><br />
      <input type="text" name="email" />
    </fieldset>
    <fieldset>
      <label for="">Password:</label><br />
      <input type="password" name="password" />
    </fieldset>
    <button>Sign up</button>
  </form>
</section>
  `;

  const signUpForm = document.querySelector("#sign-up-form");

  signUpForm.addEventListener("submit", (event) => {
    event.preventDefault();
    const data = Object.fromEntries(new FormData(signUpForm));
    axios
      .post("/api/users", data)
      .then((session) => {
        window.location = "/";
        localStorage.setObject("userData", session.data.user);
      })
      .catch((errorRes) => {
        document.querySelector("#errors").innerHTML =
          errorRes.response.data.message;
      });
  });
}
