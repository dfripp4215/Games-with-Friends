const chats = require("../../../models/chat_mod");

function renderChat() {

    chats.all_post().then(element => {

        const posts = element.data

        console.log(posts)

        posts.forEach(element => {
            
            const post_block = document.querySelector('#chat')
            const h2 = document.createElement('h2')
            const d = document.createElement('div')
            h2.innerHTML = element.post_title
            post_block.appendChild(d)
            d.appendChild(h2)
        });

    })


}

renderChat()