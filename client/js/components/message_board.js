function renderSinglePost(id){

    axios.get(`/api/posts/${id}`).then(post => {

        var singlePost = post.data[0]

        console.log(singlePost)

        document.querySelector("#main-content").innerHTML = `
        <section class="single-post">
        <h1>${singlePost.post_title}</h1>
        <li class="material-icons outlined" onClick="editPost(${singlePost.id});return false;">edit</li>
        <li class="material-icons outlined" onClick="deletePost(${singlePost.id});return false;">delete</li>
      </section>`;        
        
    })
}


// renderSinglePost(id)

function editPost(id) {

    axios.get(`/api/posts/${id}`).then(post => {

        var singlePost = post.data[0]

        console.log(singlePost)

        document.querySelector("#main-content").innerHTML = `
        <form action="/api/post/${singlePost.id}" method="POST" id="message-form">
        <fieldset>
        <label for="">${singlePost.post_title}</label><br />
        <input type="text" name="body" />
        </fieldset>
        <fieldset>
        <label for="">Message</label><br />
        <input type="text" name="body" />
        </fieldset>
        <button>Save edits</button>
    </form>`;        
        
    })

}


function deletePost(id) {

    axios.delete(`/api/posts/${id}`).then(() => {
        document.querySelector("#main-content").innerHTML = "Post Deleted!"

})
}