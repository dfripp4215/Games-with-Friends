function renderHeaderNav() {
    let welcomeMessage = ''

    if(state.user.loggedIn === true) {
        welcomeMessage = `<p>Welcome, ${state.user.name}</p>`
    } else {
        welcomeMessage = ''
    }
    document.querySelector('#header-nav').innerHTML = `
    <nav>
        <div class="logo">Logo</div>
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