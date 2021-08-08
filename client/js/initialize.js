// Create the initial data to use in our app
let state = {
    events: [],
    friends: [],
    posts: [],
    friendsGames: []
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

function getFriendsGames() {
    let friendEmail

    if (document.getElementById('friendsList')) {
        var selection = document.getElementById("friendList");
        
        selection.onchange = function (event) {
            var value = event.target.options[event.target.selectedIndex].value;
            friendEmail = value;
        };
    } else {
        friendEmail = 'test2@test'
    }


    axios
        .get(`api/games`, {
            params: {
                friendEmail: friendEmail
            }
        })
        .then(response => {
            state.friendsGames = response.data.map(game => game.game_name)
            friendsList()
            usersGames()
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
getFriendsGames();
// getPosts();
