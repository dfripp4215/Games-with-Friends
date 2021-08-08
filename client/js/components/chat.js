

function renderChat() {

    axios.get('/api/posts').then(posts=>
        
        {

        var postsAll = posts.data

        console.log(postsAll)
        postsAll.forEach(post => {
            
            console.log(post)
            const post_block = document.querySelector('#chat-topics')
            const h2 = document.createElement('h2')
            const d = document.createElement('div')
            const a = document.createElement('a')
            post_block.appendChild(d)
            a.innerHTML = `<a href="" onClick="renderSinglePost(${post.id});return false;">${post.post_title}</a>`
            d.appendChild(a)
            a.appendChild(h2)
        });

  
        })
   


}

renderChat()

