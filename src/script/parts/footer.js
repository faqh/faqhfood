class Footer extends HTMLElement {
    connectedCallback(){
        this.render();
    }
  
    render() {
        this.innerHTML = `
        <style>
        *{
            margin: 0;
            padding: 0;
            
        }
        .footer{
            background-color: #000;
            color: #fff;
            height: 220px;
        }
        .footer .abc{
            width: 80%;
        }
        span {
            font-size: 22px;
        }
        span a{
            
            text-decoration: none;
            color: #fff
        }
        .line{
            background-color: #fff;
            width: 100%;
            height: 2px;
        }
        .abc img{
            width: 100px;
        }
        </style>
        <div class="footer mt-5 d-flex justify-content-center align-items-center">
            <div class="abc text-center">
                <img id="logo" alt="logo">
                <div>
                    <span><a href="https://www.instagram.com/faqhayatullah/?hl=id"><i class="fab fa-instagram"></i></a></span>
                    <span class="ml-3 mr-3"><a href="https://github.com/faqh"><i class="fab fa-github"></i></a></span>
                    <span><a href="https://www.linkedin.com/in/faqih-ayatullah-4a0125110/"><i class="fab fa-linkedin-in"></i></a></span>
                </div>
                <div class="line mt-2 mb-2"></div>
                <p class="text-white"><i class="far fa-copyright"></i>faqhayatullah2020</p>
            </div>
        </div>
        `;
    }

    
}

customElements.define("sec-footer", Footer);