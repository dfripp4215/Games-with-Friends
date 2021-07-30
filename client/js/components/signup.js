function renderSignUp() {
  document.querySelector("#main-content").innerHTML = `
  <section class="sign_up">
  <h1>Sign Up</h1>
  <form action="/users" method="POST" id="sign-up-form">
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
  `
}