function renderHeaderNav() {
    let welcomeMessage = ''

    // if(state.user.loggedIn === true) {
    //     welcomeMessage = `<p>Welcome</p>`
    // } else {
    //     welcomeMessage = ''
    // }
    document.querySelector('#header-nav').innerHTML = `
    <nav>
        <img class="logo"
        src="/images/logo.png"
        alt="uhno!logo" >
        <div class="navigation">
            <ul>
            ${welcomeMessage}
                <li class="material-icons sign-up" onClick="render('login')">login</li>
            </ul>
        </div><div class="slider">slider</div>
    </nav>
    `
};

renderHeaderNav()

function render(component) {
    if (component === 'signUp') {
        renderSignUp()
    }
    if (component === 'login') {
        renderLogin()
    }
}