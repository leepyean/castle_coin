class Button2{
    constructor(){
        this.plaag = createButton('Play Again');
    }
    hide(){
        this.plaag.hide();
    }
    display(){
        this.plaag.position(displayWidth/2-50, displayHeight/2+40);
        this.plaag.style('width','200px');
        this.plaag.style('height','40px');
        this.plaag.style('background','lightgreen');

        this.plaag.mousePressed(()=>{
            this.plaag.hide();
            gameState = 1;
            distance=0;
            live=3;
            mainchar.collide(g3);
        })
    }
}