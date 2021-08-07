const eventRender = {
    eventsLoggedIn() {
        document.querySelector('.event-container').innerHTML = `
        <h2>Your Events</h2>
        <div id='events-box'>
            <section id='events-list'>
                
            </section>
    
            <h2>Create Event</h2>
            <h3>Select Friends</h3>
            <form onSubmit="makeEvent(event)" class="create-event-form">
                <div id='friends-checkbox'>
                    
                </div>
    
                <label for="event-date">Event Date:</label>
                <input type="date" id='event-date' name='date'>
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
}

if (userData.email) {
    eventRender.eventsLoggedIn();
} else {
    eventRender.eventsLoggedOut();
};

function eventGetter() {
    if (state.events.length > 0) {
        document.querySelector('#events-list').innerHTML = state.events.map(event => `
            <section class="event" data-id=${event.id}>
                <li class='event-li'>
                    Date: ${event.date} Friends: <span>${event.invited_friends.join(', ')}</span>
                </li>
                <span class="material-icons delete-event" onClick="deleteEvent(event)">delete</span>
            </section>
            `
        ).join('')
    } else {
        document.querySelector('#events-list').innerHTML = `<p>Oh no! Looks like you have no events. Go below to make one!</p>`
    }
};

function friendSelector() {
    if (userData.loggedIn) {
        document.querySelector('#friends-checkbox').innerHTML = (state.friends.map(friend => `
            <input type="checkbox" id="${friend}" class='friend' value="${friend}" />
            <label for="${friend}">${friend}</label>
            `
        ).join(''))
    } else {
        document.querySelector('#friends-checkbox').innerHTML = `<p>Oh no! Looks like your friend list is empty. Add some friends to start making events!</p>`
    }
};



function checkedFriends() {

    let friends = []
    const friendsBox = document.querySelector('#friends-checkbox')
    const inputElements = friendsBox.querySelectorAll('input')

    for (let i = 0; i < inputElements.length; i++) {
        if(inputElements[i].checked) {
            friends.push(inputElements[i].value)
        }
    }

    return friends
}

function makeEvent(event) {
    event.preventDefault()

    let formData = new FormData(event.target);
    formData.append("userEmail", userData.email);
    const data = Object.fromEntries(formData);
    data.friends = checkedFriends()

    console.log(data)

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
        .delete(`/api/events/${eventId}`)
        .then(() => {
            eventDom.remove()
        });
};


