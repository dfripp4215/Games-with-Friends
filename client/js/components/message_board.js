
function renderSinglePost(id) {

  axios.get(`/api/posts/${id}`).then(post => {
    state.singlePost = post.data[0]
    console.log(state.singlePost)

    if (userData.id === state.singlePost.user_id) {
      var test = `<li class="material-icons outlined" onClick="editPost(${state.singlePost.id});return false;">edit</li>
                <li class="material-icons outlined" onClick="deletePost(${state.singlePost.id});return false;">delete</li>`
    } else { var test = '' }

    document.querySelector("#main-content").innerHTML = `
        <section class="single-post">
        <div>
        ${test}
       </div>
       <div> 
        <div class="head">
        <h2>${state.singlePost.post_title}</h2>
        <p>Posted by:${state.singlePost.user_name}</p>
        </div>
        <div class="body">
        <p>${state.singlePost.body}</p></div>  </div>
      </section>
      <section class="comment-section">

      </section>`;

      renderComments(id)
  })
  
}

function renderComments(id) {

  if (userData.loggedIn){
    var addComMessage = `<p>Click the plus sign to add a comment</p>
    <li class="material-icons outlined" onClick="createNewComment();return false;">add_circle_outline</li>`
  } else {
    var addComMessage = `Please log in to add a comment`
    
  }

  axios.get(`/api/comments/${id}`).then(comment => {
    var commentsArray = comment.data

  
    if (commentsArray.length == 0) {
      document.querySelector(".comment-section").innerHTML = `
      <h3>There are no comments posted on this message</h3>
      ${addComMessage}`
      console.log("Cheese")
    } else {
      
      commentsArray.forEach(comment => {

                const comment_block = document.querySelector('.comment-section')
                const d = document.createElement('div')
                const p = document.createElement('p')
                const p2 = document.createElement('p')


              comment_block.appendChild(d)
              p.innerHTML =`${comment.comment}`
              p2.innerHTML = `Commented by: ${comment.user_name}`
              d.appendChild(p)
              d.appendChild(p2)

      }) 

      const comment_block_two = document.querySelector('.comment-section')
      const d = document.createElement('div')
      d.setAttribute("class", "addCommentButton")
      comment_block_two.appendChild(d)
      d.innerHTML = 
      `${addComMessage}`

    }
  })
}
// renderSinglePost(id)

function createNewComment() {
  document.querySelector(".comment-section").innerHTML =`
  <div class="chat-single">
  <form action="/" method="POST" id="comment-form">
  <fieldset>
  <label for="">Message</label><br />
  <input type="text" placeholder="Type your comment here" name="body" />
  </fieldset>
  <button>Post Comment</button>
  </form></div>`

  const commentForm = document.querySelector("#comment-form");

  commentForm.addEventListener("submit", (event) => {
    event.preventDefault();

    let formData = new FormData(commentForm);
    formData.append("userId", userData.id);
    formData.append("userEmail", userData.email);
    formData.append("user_name", userData.name);
    formData.append("post_id", state.singlePost.id);
    const data = Object.fromEntries(formData);

    axios
      .post("/api/comments/create", data)
      .then(() => {
        window.location = "/";
        var userData = userData
      })

  });

}


function createNewPost() {

  document.querySelector("#main-content").innerHTML = `
    <div class="chat-single">
    <form action="/" method="POST" id="message-form">
    <fieldset>
    <label for=""></label><br />
    <input type="text" placeholder="Title" name="title" />
    </fieldset>
    <fieldset>
    <label for="">Message</label><br />
    <input type="text" placeholder="Type your message here" name="body" />
    </fieldset>
    <button>Post Message</button>
    </form></div>`;



  const messageForm = document.querySelector("#message-form");

  messageForm.addEventListener("submit", (event) => {
    event.preventDefault();

    let formData = new FormData(messageForm);
    formData.append("userId", userData.id);
    formData.append("user_name", userData.name);
    const data = Object.fromEntries(formData);

    axios
      .post("/api/posts/create", data)
      .then(() => {
        window.location = "/";
        var userData = userData
      })

  });

}


function editPost(id) {

  axios.get(`/api/posts/${id}`).then(post => {

    var singlePost = post.data[0]
    document.querySelector("#main-content").innerHTML = `
        <form action="/" method="POST" id="message-form">
        <fieldset>
        <label for="">${singlePost.post_title}</label><br />
        <input type="text" placeholder="${singlePost.post_title}" name="title" />
        </fieldset>
        <fieldset>
        <label for="">Message</label><br />
        <input type="text" placeholder="${singlePost.body}" name="body" />
        </fieldset>
        <button>Save Edits</button>
    </form>`;

    const messageForm = document.querySelector("#message-form");
    messageForm.addEventListener("submit", (event) => {
      event.preventDefault();

      let formData = new FormData(messageForm);
      formData.append("userId", userData.id);
      formData.append("userName", userData.name);
      const data = Object.fromEntries(formData);

      axios
        .post(`/api/posts/update/${id}`, data)
        .then(() => {
          window.location = "/";
          var userData = userData
        })
    });
  })

}


function deletePost(id) {

  axios.delete(`/api/posts/${id}`).then(() => {
    document.querySelector("#main-content").innerHTML = "Post Deleted!"
    document.querySelector('.chat-head').innerHTML = `<h2>Message Board</h2>`
    document.querySelector('.chat-topics').innerHTML = ""
    renderChat()

  })

}