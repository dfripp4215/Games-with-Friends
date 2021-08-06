function renderAddFriend() {
    document.querySelector("#main-content").innerHTML = `
        <section id='friend-search'>
            <h2>Add your friends</h2>
            <form onSubmit="addFriend(event)" class="add-friend-form">
                <section id="errors"></section>
                <fieldset>
                    <label for="">Email:</label><br />
                    <input type="text" name="friendEmail" />
                </fieldset>
                <button>Add Friend</button>
            </form>
        </section>
        `
}

function addFriend(event) {
    event.preventDefault()

    let formData = new FormData(event.target);
    formData.append("userEmail", userData.email);
    const data = Object.fromEntries(formData);
    console.log(data)

    axios
        .post('/api/friends', data)
        .then(successfulResponse => {
            console.log(successfulResponse)
            const newFriend = successfulResponse.data
            console.log(newFriend)
            state.friends.push(newFriend)
        })
        .catch(errorResponse => {
            console.log(errorResponse)
            document.querySelector('#errors')
                .innerHTML = errorResponse.response.data.message
        })
}
