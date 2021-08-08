const gamesRender = {
    loggedIn() {
        document.querySelector('.main-content').innerHTML = `
        <section id="errors"></section>

        <section id='friends-selector'>

            <form onChange="friendsGames(event)" method="GET" class="friendList-form">
                <label for="">Friend:</label><br />
                <div id='friends-list-container'>
                    <select onChange=''name='friendList' id='friendList'>
                        
                    </select>
                </div>
                
            </form>

        </section>

        <section id='games-to-compare'>

            <h2>Your Games</h2>
            <ul id='users-games'>

            </ul>

            <h2>Friends Games</h2>
            <ul id='friends-games'>

            </ul>

        </section>
        `
    },

    loggedOut() {
        document.querySelector('.main-content').innerHTML = `
            <p>Login to compare games with friends!</p>
        `
    }


}

if (userData.loggedIn) {
    gamesRender.loggedIn()
} else {
    gamesRender.loggedOut()
}

function friendsList() {
    if (userData.loggedIn) {
        document.querySelector('#friendList').innerHTML = (state.friends.map(friend => `
                <option value="${friend}" name='${friend}' class='friendEmail'>${friend}</option>
            `
        ).join(''))
    } else {
        document.querySelector('#friendList').innerHTML = `<p>Login to compare games with friends!</p>`
    }
}

function usersGames() {
    axios
        .get(`/api/users?id=${userData.id}`)
        .then((res) => {
            document.querySelector('#users-games').innerHTML = (res.data.gamesOwned.map(games => `
                <li id='${games.game_name}'>
                    ${games.game_name}
                </li>
            `
            ).join(''))
        })
        .catch((errorRes) => {
            document.querySelector("#errors").innerHTML = errorRes.response.data.message;
        });
}

function friendsGames(event) {
    event.preventDefault()

    document.querySelector('#friends-games').innerHTML = (state.friendsGames.map(game => `
        <li id='${game}'>
            ${game}
        </li>
    `
    ).join(''))
}