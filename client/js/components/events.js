const renderEvents = {
    loggedIn() {
        document.querySelector('.event-container').innerHTML = `
        <h2>Your Events</h2>
        <div id='events-box'>
            <section id='events-list'>
                ${events()}
            </section>
    
            <h2>Create Event<h2>
            <label for="event-friends">Choose your friends</label>
            <form onSubmit="createEvent(event)">
                <div id='friends-checkbox'>
                    
                </div>
    
                <label for="event-date">Event Date:</label>
                <input type="date" id='event-date' name='date' min='${Date()}'>
                <button>Create</button>
            </form>
        </div>
        `
    },
    
    loggedOut() {
        document.querySelector('.event-container').innerHTML = `
            <h2>Loggin to see your events</h2>
        `
    }

} 

renderEvents.loggedIn()

// if (userData.user.loggedIn) {
//     renderEvents.loggedIn()
// } else {
//     renderEvents.loggedOut()
// }

function events() {
    return state.events.map(event => {
        `
        <section class="event" data-id=${event.id}>
            <li class='event-li'>
                Date: ${event.date} Friends: <span>${event.friends.join(', ')}</span>
            </li>
            <span class="material-icons delete-event" onClick="deleteEvent(event)">delete</span>
        </section>
        `
    }).join('')
}

function createEvent(event) {
    event.preventDefault()

    const form = event.target
    const data = Object.fromEntries(new FormData(form))

    axios.post('/api/events', data)
        .then(successfulResponse => {
            const newEvent = successfulResponse.data
            state.events.push(newEvent)
        })
        .catch(errorResponse => {
            document.querySelector('#errors')
                .innerHTML = errorResponse.response.data.message
        })
}

function deleteEvent(event) {
    const deleteBtn = event.target
    const eventDom = deleteBtn.closest('.event')
    const eventId = eventDom.dataset.id

    axios
        .delete(`/api/${eventId}`)
        .then(() => {
            eventDom.remove()
        })
}

// TODO - Need access to friends list to render them into event-friends
function friends() {
    return state.friends.map(friend => {
        `
        <input type="checkbox" id="${friend}" name="friend">
        <label for="${friend}">${friend}</label>
        `
    }).join('')
}