// Create the initial data to use in our app
const state = {
    events: [],
}

function getEvents() {
    axios
        .get('/api/events')
        .then(response => {
            state.events = response.data
        })
}

getEvents()
