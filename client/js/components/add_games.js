function renderAddGame() {
  document.querySelector("#main-content").innerHTML = `
  <section class="add-game">
  <h1>Add game to your library</h1>
  <form action="/addGame" method="POST" id="add-game-form">
    <section id="errors"></section>
    <fieldset>
      <label for="">Game Name:</label><br />
      <input type="text" name="name" />
    </fieldset>
    <button>Add Game</button>
  </form>
</section>
  `;

  const addGameForm = document.querySelector("#add-game-form");

  addGameForm.addEventListener("submit", (event) => {
    event.preventDefault();
    const data = Object.fromEntries(new FormData(addGameForm), [
      "userEmail",
      userData.email,
    ]);
    axios
      .post("/api/games", data)
      .then((res) => {
        window.location = "/";
        console.log(res);
      })
      .catch((errorRes) => {
        document.querySelector("#errors").innerHTML =
          errorRes.response.data.message;
      });
  });
}
