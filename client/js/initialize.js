// Create the initial data to use in our app
let state = {
    events: [],
    friends: [],
    posts: []
};

function getEvents() {
    axios
        .get(`/api/events?userEmail=${userData.email}`)
        .then(response => {
            state.events = response.data
            eventGetter()
        });
};

function getFriend() {
    axios
        .get(`api/friends?userEmail=${userData.email}`)
        .then(response => { 
            state.friends = response.data.map(friend => friend.unnest)
            friendSelector()
        });
};


// function getPosts() {
//   axios
//       .get(`/api/posts`)
//       .then(response => {
//           state.posts = response.data
//       });
// };



getEvents();
getFriend();
// getPosts();
