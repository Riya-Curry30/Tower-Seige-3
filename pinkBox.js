class PinkBox
{
    constructor(x,y)
    {
      var options =
      {
        'restitution':0.8,
        'friction':0,
        
      }
      this.visibility = 255;

      this.body = Bodies.rectangle(x,y,30,40,options);
      this.x = x;
      this.y = y;

      World.add(world,this.body);
     
    }

    score()
    {
      if(this.visibility < 0 && this.visibility >- 105)
      {
        score++;
      }
    }
    
    display()
    {
      if(this.body.speed < 3)
      {
      var angle = this.body.angle;
      push();
      translate(this.body.position.x, this.body.position.y);
      rotate(angle);
      var pos = this.body.position;
      rectMode(CENTER);
      fill("pink");
      rect(0, 0, 30,40);
      pop();
      }

      else
      {
        World.remove(world,this.body);
        push();
        this.visibility = this.visibility - 5;
        tint(255,this.visibility);
        pop();
      }
    }
}