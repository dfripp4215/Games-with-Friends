function renderProfile() {
    document.querySelector("#main-content").innerHTML = `
    <section class="profile">
    <h2>Profile Page</h2>
    <h3>Name: ${userData.name}</h3>
    <p>Email: ${userData.email}</p>
    <p>UhnoID#: ${userData.id}</p>
    

  </section>
  
    `;
}


function saveSteamID(steamID) {
    userData.steamID = steamID
}
