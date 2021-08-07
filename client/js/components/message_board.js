function renderSinglePost (id){

    axios.get(`/api/posts/${id}`).then(post => {

        console.log(post)

        var singlePost = post.data

        console.log(singlePost)
        
        // singlePost.forEach(element => {
            
        //     const post_block = document.querySelector('#chat')
        //     const h2 = document.createElement('h2')
        //     const d = document.createElement('div')
        //     const a = document.createElement('a')
        //     a.href = `/api/posts/${element.id}`
        //     h2.innerHTML = element.post_title
        //     post_block.appendChild(d)
        //     d.appendChild(a)
        //     a.appendChild(h2)
        // });
    })
}


renderSinglePost(1)
