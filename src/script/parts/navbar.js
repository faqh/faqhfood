import img from '../images/iconnav.png'

class Navbar extends HTMLElement {
    constructor() {
        super();
        this.shadowDOM = this.attachShadow({mode: "open"});
    }
  
    connectedCallback(){
        this.render();
    }
  
    render() {
        this.shadowDOM.innerHTML = `
        <style>
            * {
                margin: 0;
                padding: 0;
                box-sizing: border-box;                
            }
            :host {
                position: absolute;
                z-index: 999;
                display: block;
                width: 100%;
                background-color:rgba(255,255,255,0);
                color: #fff;
                box-shadow: 0 4px 8px 0 rgba(255, 255, 255, 0);
                text-align: center;
            }
            h2 {
                padding: 16px;
            }
            img{
                width: 150px;
            }
        </style>

        <div>
            <img src="${img}">
        </div>`;
    }
}

customElements.define("sec-navbar", Navbar);