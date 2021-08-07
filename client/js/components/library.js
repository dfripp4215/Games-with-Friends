function renderLibrary() {

  axios
  .get(`/api/users?id=${userData.id}`)
  .then((res) => {
    console.log(res.data.gamesOwned)
    let htmlLib = res.data.gamesOwned.map(games => `<div class='games-header'><h2>${games.game_name}</h2><button onClick="deleteFromLibrary(${games.id})">Remove</button></div>`).join(' ')
    document.querySelector("#main-content").innerHTML =  `
    <section class="library">
    <section id="errors"></section>
      <h1>Your Library</h1>
      ${htmlLib}
    </section>
    `
  })
  .catch((errorRes) => {
    document.querySelector("#errors").innerHTML = errorRes.response.data.message;
  });
};


function deleteFromLibrary(id) {
  axios
      .delete(`/api/users/${id}`).then(() => renderLibrary())
      .catch((errorRes) => {
      document.querySelector("#errors").innerHTML =
          errorRes.response.data.message;
      });
  }