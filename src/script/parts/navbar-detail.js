class Navbar extends HTMLElement {
    connectedCallback(){
        this.render();
    }
  
    render() {
        this.innerHTML = `
        <nav class="navbar" style="background-color: #000;">
            <div class="container justify-content-center">
                <a class="navbar-brand" href="./index.html"><img style="width: 150px;" id="icon" alt="logo"></a>
            </div>
        </nav>
        `;
    }
}

customElements.define("detail-navbar", Navbar);