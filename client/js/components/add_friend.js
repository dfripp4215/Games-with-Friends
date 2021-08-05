function renderAddFriend() {
    document.querySelector("#main-content").innerHTML = `
        <section id='friend-search'>
            <h2>Add your friends</h2>
            <form onSubmit="addFriend(event)" id="add-friend-form">
                <section id="errors"></section>
                <fieldset>
<<<<<<< HEAD
                    <label for="friendEmail">Email:</label><br />
                    <input type="text" name="friendEmail" />
=======
                    <label for="">Email:</label><br />
                    <input type="text" name="friend-email" />
>>>>>>> 2fedbe6f818d3b93d7d00a8f8dff3fca571adbf4
                </fieldset>
                <button>Add Friend</button>
            </form>
        </section>
        `
}

const addFriendForm = document.querySelector('#add-friend-form')

function addFriend(event) {
    event.preventDefault()

    const form = event.target
    const data = Object.fromEntries(new FormData(form))

    axios.post('/api/friends', data)
        .then(successfulResponse => {
            const newFriend = successfulResponse.data
            state.friends.push(newFriend)
        })
        .catch(errorResponse => {
            document.querySelector('#errors')
                .innerHTML = errorResponse.response.data.message
        })
}
