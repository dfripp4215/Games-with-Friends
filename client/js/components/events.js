function renderEvents() {
    document.querySelector('.event-container').innerHTML = `
        <h2>Your Events</h2>
        <div id='events-box'>
        <ul id='events-list'>
            
        </ul>

        <h2>Create Event<h2>
        <label for="event-friends">Choose your friends</label>
        <div id='friends-checkbox'>
            
        </div>

        <label for="event-date">Event Date:</label>
        <input type="date" id='event-date' name='date' min='${Date()}'>
        <input type="submit">
    </div>
    `
}

renderEvents()

function events() {
    return state.events.map(event => {
        `
        <li data-id='${event.id}' class='event-li'>
            Date: ${event.date} Friends: <span>${event.friends.join(', ')}</span>
        </li>
        <span class="material-icons-outlined" onClick="deleteEvent(event)">delete</span>
        `
    }).join('')
}

function deleteEvent(event) {
    const deleteBtn = event.target
    const eventDom = deleteBtn.closest('.event-li')
    const eventId = eventDom.dataset.id

    axios
        .delete(`/api/event/${eventId}`)
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