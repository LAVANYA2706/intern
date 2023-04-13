/*function Student(sno,name){
    this.sno = sno
    this.name = name

    console.log(this)
}
Student.prototype.display = function(){
    console.log("sno:"+this.sno + "Name" +this.name)

}
a= new Student(1,'james')
b= new Student(2,'harish')
a.display()
b.display()
*/
//using class//
/*class Student{
    constructor(sno,name){
        this.sno =sno
        this.name = name
    }
    display(){
        console.log(this.sno,this.name)
    }
}
a= new Student(1,'james')
b= new Student(2,'harish')
a.display()
b.display()

*/


class Info{
    constructor(data){
        this.data = data
}
    display(){
        console.log(this.data,"is the data")

    }
    changeIt(){
       /* giveNewData(function(value){
            this.data=value
        }.bind(this))*/
        giveNewData((value)=>this.data=value)
    }
}
function giveNewData(logic){
    let x=["india","earth","asia","soccer","chess","prime"]
     logic (x[Math.floor(Math.random()*6)])
}
obj= new Info("cricket")
obj.display()
obj.changeIt()
obj.display()
