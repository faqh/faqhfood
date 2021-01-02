class About extends HTMLElement {
    connectedCallback(){
        this.render();
    }
  
    render() {
        this.innerHTML = `
        <style>
            .container{
                margin-top: 100px;
            }
            h2{
                font-weight:bold;
                font-size: 32px;
                line-height: 1.4;
            }
            p{
                color: #a3a3a3;
                font-size: 16px;
                line-height: 1.8;
                margin-top: 16px;
            }
            .cont{
                position: relative;
            }
            #ab2{
                position: absolute;
                margin-left: 16px;
                margin-top: 50px;
            }
        </style>
        <div class="container">
            <div class="row justify-content-center align-items-center">
                <div class="col-md-12 col-lg-6">
                    <h2>We are the one who can<br>give you the best experience<br>in food</h2>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                </div>

                <div class="col-md-12 col-lg-5 offset-lg-1 cont">
                        <img id="ab1" alt="chef">
                  
                    
                        <img id="ab2" alt="chef">
                    
                </div>
            </div>
        </div>
        `;
    }

    
}

customElements.define("sec-about", About);