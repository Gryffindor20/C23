class Ground
{
    constructor(x,y,w,h)
    {
        var options=
        {
            isStatic : true, 
            restitution : 1.5,
            friction : 0.3,
            density : 1
        }

        this.body = Bodies.rectangle(x,y,w,h,options);
        this.width = w;
        this.height = h;
        World.add(world,this.body);

    }
    display()
    {
        fill("yellow");
        rectMode(CENTER);
        rect(this.body.position.x,this.body.position.y,this.width,this.height);
    }



}