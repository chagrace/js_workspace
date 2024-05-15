class Cannon{
    constructor(src, x, y, width, height, velX, velY){
        this.img=document.createElement("img");
        this.src=src;
        this.x=x;
        this.y=y;
        this.velX = velX;
        this.velY = velY;

        this.width=width;
        this.height=height;

        this.img.src=this.src
        this.img.style.position="absolute";
        this.img.style.top=this.y+"px";
        this.img.style.left=this.x+"px";
        this.img.style.width=this.width+"px";
        this.img.style.height=this.height+"px";


        document.body.appendChild(this.img); //이미지를 body태그인 부모에 부착
    }
    //대포알의 움직임을 정의
    //객체지향에서는 움직임을 정의하는 코드가 바로 함수이며, 이 함수는 객체에 소속이 되므로 메서드라 불린다
    move(){
        this.x += this.velX;
        this.y += this.velY;

        //위의 증가분을 이용하여 화면에 보여주기(랜더링)
        this.img.style.top=this.y+"px";
        this.img.style.left=this.x+"px";
    }
}