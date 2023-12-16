const circle = {
    radius: 2,
    // area : function(){
    //     return Math.PI * this.radius * this.radius
    //}
    //remove: function
    
    area(){
        return Math.PI * this.radius * this.radius
    },

    equals(compareCircle){
        return this.radius === compareCircle.radius
    }
}

console.log(circle)
console.log(circle.area())
console.log(circle.equals({radius: 2}))
console.log(circle.equals({radius: 3}))


