function renderLibrary() {

  axios
  .get(`/api/users?id=${userData.id}`)
  .then((res) => {
    let htmlLib = res.data.gamesOwned.map(games => `<div class='games-header'><h2>${games.name}</h2></div>`).join(' ')
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
