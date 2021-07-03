class Chain{

constructor(bodyA,bodyB){
    var options = {
        bodyA:bodyA,
        bodyB:bodyB,
        length:10,
        stiffness:0.04

    }

    this.body = Constraint.create(options);
    World.add(world,this.body)


}
display(){

    var A = this.body.bodyA.position;
    var B = this.body.bodyB.position;

     push();
    strokeWeight(10);
    stroke("blue")
    line(A.x,A.y,B.x,B.y)

    pop();


}


}