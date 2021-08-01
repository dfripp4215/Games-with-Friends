function renderHeaderNav() {
    let authIcon
    if(userData.loggedIn) {
        authIcon =  `<li class="material-icons logout" onClick="render('logout')">logout</li>`
    } else {
        authIcon =  `<li class="material-icons sign-up" onClick="render('login')">login</li>`
    }
    document.querySelector('#header-nav').innerHTML = `
    <nav>
        <img class="logo"
        src="/images/logo.png"
        alt="uhno!logo" >
        <div class="navigation">
        <p>Welcome to Uhno!<p>
            <ul>
                <li class="material-icons add-game" onClick="render('addGame')">control_point</li>
                <li class="material-icons library" onClick="render('library')">games</li>
                <li class="material-icons profile" onClick="render('profile')">account_circle</li>
                ${authIcon}
            </ul>
        </div>
        <div class="mode-slider">
        Dark mode
            <div class="material-icons dark-mode-off">toggle_off</div>
        </div>
    </nav>
    `
};

//gotta figure out the above thing

renderHeaderNav()

function render(component) {
    if (component === 'signUp') {
        renderSignUp()
    }
    if (component === 'login') {
        renderLogin()
    }
    if (component === 'login') {
        // logut()
    }
    if (component === 'addGame') {
        console.log("nothing here yet")
    }
    if (component === 'library') {
        console.log("no library")
    }
    if (component === 'profile') {
        console.log("no profile yet")
    }
}