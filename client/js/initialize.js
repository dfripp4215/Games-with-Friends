// Create the initial data to use in our app
let state = {
    events: [],
    friends: [],
    posts: [],
    steamGames: [],
    friendsGames: []
};

function getEvents() {
    axios
        .get(`/api/events?userEmail=${userData.email}`)
        .then(response => {
            state.events = response.data
            eventGetter()
            usersGames()  
        });
};

function getFriend() {
    axios
        .get(`api/friends?userEmail=${userData.email}`)
        .then(response => {
            state.friends = response.data.map(friend => friend.unnest)
            friendSelector()
            friendsList()
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
