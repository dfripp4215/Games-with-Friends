function renderLogin() {
  document.querySelector("#main-content").innerHTML = `
  <section class="login">
  <h1>Login</h1>
  <form action="/login" method="POST" id="login-form">
    <section id="errors"></section>
    <fieldset>
      <label for="">Email:</label><br />
      <input type="text" name="email" />
    </fieldset>
    <fieldset>
      <label for="">Password:</label><br />
      <input type="password" name="password" />
    </fieldset>
    <button>Login</button>
  </form>
</section>
<div onClick="render('signUp')"><a>Don't have an account? sign up here!</a></div>
  `;

  const loginForm = document.querySelector("#login-form");

  loginForm.addEventListener("submit", (event) => {
    event.preventDefault();
    const data = Object.fromEntries(new FormData(loginForm));
    axios
      .post("/api/sessions", data)
      .then((session) => {
        // window.location = "/";
        localStorage.setObject("userData", session.data.user);
      })
      .catch((errorRes) => {
        document.querySelector("#errors").innerHTML =
          errorRes.response.data.message;
      });
  });
}
