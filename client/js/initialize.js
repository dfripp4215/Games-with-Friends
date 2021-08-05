// Create the initial data to use in our app
const state = {
    events: [],
    friends: []
<<<<<<< HEAD
};
=======
}
>>>>>>> 2fedbe6f818d3b93d7d00a8f8dff3fca571adbf4

function getEvents() {
    axios
        .get('/api/events')
<<<<<<< HEAD
        .then(response => state.events = response.data);
};
=======
        .then(response => state.events = response.data)
}
>>>>>>> 2fedbe6f818d3b93d7d00a8f8dff3fca571adbf4

function getFriend() {
    axios
        .get('api/friends')
<<<<<<< HEAD
        .then(res => state.friends = res.data);
};

getEvents();
getFriend();
=======
        .then(res => state.friends = res.data)
}

getEvents()
getFriend()
>>>>>>> 2fedbe6f818d3b93d7d00a8f8dff3fca571adbf4
