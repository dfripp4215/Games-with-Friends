// Create the initial data to use in our app
const state = {
    events: [],
    friends: ['friend1', 'friend2', 'friend3']
}

function getEvents() {
    axios
        .get('/api/events')
        .then(response => state.events = response.data)
}

function getFriend() {
    axios
        .get('api/friends')
        .then(res => state.friends = res.data)
}

getEvents()
getFriend()
