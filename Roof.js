class Roof
{
	constructor(x,y,width,height)
	{
		var options={
			isStatic:true			
			}
		this.x=x;
		this.y=y;
		this.w=width
		this.h=height
		this.body=Bodies.rectangle(x, y, width, height , options);
 		World.add(world, this.body);

	}
	display()
	{
			
			push()
			rectMode(CENTER)
			fill(128,128,128)
			rect(452,228,200,20);
			pop()
			
	}

}


	
			
			

			
			
			
	

