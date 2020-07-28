class AppBar extends HTMLElement {

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
               display: block;
               width: 100%;
               background-image: linear-gradient(to bottom, #01779b, #000b4b);
               color: white;
               box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
           }
           img {
               font-size: 30px;
               padding: 8px;
           }
           p {
               float: right;
               font-size: 15px;
               padding-top: 28px;
               padding-right: 10px;
               font-weight: bold;
           }
           figure {
                float: right;
                border-radius: 100%;
                padding-right: 10px;
           }
       </style>
       <img src="src/image/img-header.png" alt="logo"/>
       <figure>
            <img src="src/image/abdu.png">
       </figure>       
       <p>Mochamad Abdu Hanifan || abduhanifan346@yahoo.com </p>
       `;
    }
}

customElements.define("app-bar", AppBar);