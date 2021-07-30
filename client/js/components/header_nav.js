function renderHeaderNav() {
    document.querySelector('#header-nav').innerHTML = `
    <nav>
        <div class="logo">Logo</div>
        <div class="navigation">
            <ul>
                <li class="material-icons sign-up" onClick="render('signUp')">login</li>
            </ul>
        </div><div class="slider">slider</div>
    </nav>
    `
};

renderHeaderNav()




function render(component) {
    if (component === 'signUp') {
        console.log('click')
    }
}