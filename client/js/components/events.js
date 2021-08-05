const eventRender = {
    eventsLoggedIn() {
        document.querySelector('.event-container').innerHTML = `
        <h2>Your Events</h2>
        <div id='events-box'>
            <section id='events-list'>
                ${eventRender.eventGetter()}
            </section>
    
            <h2>Create Event</h2>
            <h3>Select Friends</h3>
            <form onSubmit="createEvent(event)">
                <div id='friends-checkbox'>
                    ${eventRender.friendsSelector()}
                </div>
    
                <label for="event-date">Event Date:</label>
                <input type="date" id='event-date' name='date' min='${Date()}'>
                <button>Create</button>
            </form>
        </div>
        `
    },

    eventsLoggedOut() {
        document.querySelector('.event-container').innerHTML = `
            <h2>Loggin to see your events</h2>
        `
    },

    eventGetter() {
        if (state.events.length !== 0) {
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
        } else {
            return `<p>Oh no! Looks like you have no events. Go below to make one!</p>`
        }
    },

    friendsSelector() {
        if (state.friends.length !== 0) {
            return state.friends.map(friend => {
                `
                <input type="checkbox" id="${friend}" class='friend' name="friend">
                <label for="${friend}">${friend}</label>
                `
            }).join('')
        } else {
            return `<p>Oh no! Looks like your friend list is empty. Add some friends to start making events!</p>`
        }
    }
}

if (userData.user.loggedIn) {
    eventRender.eventsLoggedIn();
} else {
    eventRender.eventsLoggedOut();
};


function createEvent(event) {
    event.preventDefault();

    const form = event.target;
    const data = Object.fromEntries(new FormData(form));

    axios.post('/api/events', data)
        .then(successfulResponse => {
            const newEvent = successfulResponse.data
            state.events.push(newEvent)
        })
        .catch(errorResponse => {
            document.querySelector('#errors')
                .innerHTML = errorResponse.response.data.message
        });
};

function deleteEvent(event) {
    const deleteBtn = event.target;
    const eventDom = deleteBtn.closest('.event');
    const eventId = eventDom.dataset.id;

    axios
        .delete(`/api/${eventId}`)
        .then(() => {
            eventDom.remove()
        });
};


