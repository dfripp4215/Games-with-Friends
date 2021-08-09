function renderSteamPage() {
    document.querySelector("#main-content").innerHTML = `
    <section class="search-games">
    <h1>Search Lib</h1>
    <form action="/addGame" method="POST" id="search-games-by-id-form">
      <section id="errors"></section>
      
      <fieldset>
        <label for="">Steam ID:</label><br />
        <input type="text" name="steamID" />
      </fieldset>
      <button>Search ID for Games</button>
    </form>
    
    <div >
    <button onClick="updatePage(SortGames.playtimeDescending())">Most Played First</button>
    <button onClick="updatePage(SortGames.playtimeAscending())">Most Played Last</button>
    <button onClick="updatePage(SortGames.appidDescending())">Newest Games First</button>
    <button onClick="updatePage(SortGames.appidAscending())">Oldest Games First</button>
    <ul><section id="output"></section></ul>
    </div>
  </section>
    `;
  
 
    const searchGamesByIDForm = document.querySelector("#search-games-by-id-form");


    searchGamesByIDForm.addEventListener("submit", (event) => {
      event.preventDefault();
      let formData = new FormData(searchGamesByIDForm);
    

    const data = Object.fromEntries(formData);
      axios
        .post("/api/steam", data)
        .then((res) => {

            
            console.log('test')
            state.steamGames = res.data
            
            
            updatePage(state.steamGames)
            
        })
        .catch((errorRes) => {
          document.querySelector("#errors").innerHTML =
            errorRes.response.data.message;
        });
    });
  }
  


  
  function updatePage(array) {
    let output = ``
    array.forEach(game => output += `
            <li>
                <h3>${game.name}</h3>
                <p>${game.playtime_forever}</p>
            </li>`)

            document.querySelector("#output").innerHTML = output
  }


  let SortGames = {
    playtimeDescending() {
    let sortedGames = state.steamGames.sort( function( a, b){
        if(a.playtime_forever > b.playtime_forever) return -1;
        if(a.playtime_forever < b.playtime_forever) return 1;
    })
    
    return sortedGames

  },
  playtimeAscending() {
    let sortedGames = state.steamGames.sort( function( a, b){
        if(a.playtime_forever > b.playtime_forever) return 1;
        if(a.playtime_forever < b.playtime_forever) return -1;
    })
    
    return sortedGames

  },
  appidDescending() {
    let sortedGames = state.steamGames.sort( function( a, b){
        if(a.appid > b.appid) return -1;
        if(a.appid < b.appid) return 1;
    })
    
    return sortedGames

  },
  appidAscending() {
    let sortedGames = state.steamGames.sort( function( a, b){
        if(a.appid > b.appid) return 1;
        if(a.appid < b.appid) return -1;
    })
    
    return sortedGames

  }
}




