// Create the initial data to use in our app

let state = {
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
        .get(`api/friends?userEmail=${userData.email}`)
        .then(response => { state.friends = response.data.map(friend => friend.unnest) });
};

getEvents();
getFriend();
