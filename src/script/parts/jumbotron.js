class Jumbotron extends HTMLElement {
    connectedCallback(){
        this.render();
    }
  
    render() {
        this.innerHTML = `
        <style>
        .jumbotron{
            background-image: url("https://images.unsplash.com/photo-1516685018646-549198525c1b?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80");
            background-repeat: no-repeat;
            background-size: cover;
            min-height: 600px;
        }
        .head{
            background-color: rgba(255, 255, 255, 0.05);  
            backdrop-filter: blur(5px);
            padding: 32px 32px;
            color: #fff;
        }
        .head p{
            color: #9F9F9F;
        }
        </style>
       

        <div class="jumbotron">
        <div class="container">
        <div class="row">
            <div class="col-lg-6 col-sm-12 head">
                <h1 class="display-4">We serve the best<br>taste of food.</h1>
                <p class="lead">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            
            </div>
        </div>
        
        
        </div>
        </div>
        `;
    }

    
}

customElements.define("sec-jumbotron", Jumbotron);