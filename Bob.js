class Bob
{
	constructor(x,y,r)
	{
		var options={
			isStatic:false,
			restitution:1,
			friction:5,
			density:0.8
			
			}
		this.x=x;
		this.y=y;
		this.r=r
		this.body=Bodies.circle(this.x, this.y, (this.r)/2, options)
		World.add(world, this.body);

	}
	display()
	{
			push()
			fill(255,0,255)
			ellipseMode(RADIUS);
			ellipse(this.body.position.x,this.body.position.y,this.r);
			pop()
			
	}

}