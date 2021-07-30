function renderLogin() {
  document.querySelector("#main-content").innerHTML = `
  <section class="login">
  <h1>Sign Up</h1>
  <form action="/users" method="GET" id="log-in-form">
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
  `
}