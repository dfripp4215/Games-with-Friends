
function renderChat() {

    // axios.get("/api/posts").then(element => {



    //     console.log(element)

    //     posts.forEach(element => {
            
    //         const post_block = document.querySelector('#chat')
    //         const h2 = document.createElement('h2')
    //         const d = document.createElement('div')
    //         h2.innerHTML = element.post_title
    //         post_block.appendChild(d)
    //         d.appendChild(h2)
    //     });

    // })

    return state.posts.map(post => {
        console.log(post)
    })


}

renderChat()