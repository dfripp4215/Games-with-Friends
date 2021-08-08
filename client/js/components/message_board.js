function renderSinglePost(id){

    axios.get(`/api/posts/${id}`).then(post => {

        var singlePost = post.data[0]

        console.log(singlePost)

        document.querySelector("#main-content").innerHTML = `
        <section class="single-post">
        <h1>${singlePost.post_title}</h1>
      </section>`;        
        
    })
}


// renderSinglePost(id)
