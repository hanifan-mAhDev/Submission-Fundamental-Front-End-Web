class Jumbotron extends HTMLElement {

   constructor() {
        super();
    }

    connectedCallback() {
       this.render();
    }
 
    render() {
       this.innerHTML = `
       <style>
         jumbo-tron {
            display: block;
            width: 100%;
            opacity: 80%;
            padding: 200px;
            background-image: url("image/meal.jpg");
         }
       </style>
       `;
    }
 }
 
 customElements.define("jumbo-tron", Jumbotron);