class Cell{
    constructor(){
        this.container = container;
        this.div = document.getElementById("div");
        this.x = x;
        this.y = y;
        this.width = width;
        this.height = height;
        this.content = content;

        this.div.style.border = "1px solid gray";
        this.div.style.position = "absolute";
        this.div.style.left = this.x + "px";
        this.div.style.top = this.y + "px";
        
        this.div.style.width = this.width + "px";
        this.div.style.height = this.height + "px";

        this.div.innerText = this.content;
        this.container.appendChild("this.div");
    }
}