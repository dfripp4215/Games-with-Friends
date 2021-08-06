// Create the initial data to use in our app
const state = {
    events: [],
    friends: []
};

function getEvents() {
    axios
        .get('/api/events')
        .then(response => state.events = response.data);
};

function getFriend() {
    axios
        .get('api/friends')
        .then(response => {state.friends = response.data});
};

getEvents();
getFriend();


