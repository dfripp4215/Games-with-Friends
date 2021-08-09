
function renderChat() {

    if (userData.loggedIn) {
        const chat_block = document.querySelector('.chat-head')
        const li = document.createElement('li')
        li.innerHTML = `<li class="material-icons outlined" onClick="createNewPost();return false;">add_circle_outline</li>`
        chat_block.appendChild(li)

        var messagePara = `<p>Click the plus button to create a new post</p>`
    } else {
        
        var messagePara = "Log in to make a new post!"
    }

    axios.get('/api/posts').then(posts => {


        var postsAll = posts.data

        // console.log(postsAll)

        if (postsAll.length === 0) {

            document.querySelector('#chat-topics').innerHTML = `
            <h2>There are currently no messages on the Message Board</h2>
            ${messagePara}
    
            `

        } else {
            postsAll.forEach(post => {

                // console.log(post)
                const post_block = document.querySelector('#chat-topics')
                const h2 = document.createElement('h2')
                const d = document.createElement('div')
                const a = document.createElement('a')
                const p = document.createElement('p')
                const li = document.createElement('li')
                post_block.appendChild(d)
                a.innerHTML = `<a href="" onClick="renderSinglePost(${post.id});return false;">${post.post_title}</a>`
                p.innerHTML = `${post.user_name}`
                
                d.appendChild(a)
                a.appendChild(h2)
            });


        }
    })




}

renderChat()

