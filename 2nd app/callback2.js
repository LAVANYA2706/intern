function filterThis(arrayFilter,array){
    result=[]
    for (let x of array)
    if (arrayFilter(x))
    result.push(x)
    return result

}
/*fresult = filterThis(function(x){
    return x%2==0? false:true
},[23,254,23,235,23,122,254,234])

console.log(fresult)



fresult2= filterThis (function(x)
{
  if (x.length>5)
     return true
  return false
},['Joseph','janson','arjun','peterson'])

console.log(fresult2)*/



candidates=[
    {sno:1,name:"jose",skills:['c++','java','javascript']},
    {sno:2,name:"kiran",skills:['c++','c#','javascript','css','sql']},
    {sno:3,name:"Mohith",skills:['c++','java','javascript','angular','react']},
    {sno:4,name:"Vinay",skills:['c++','java','javascript','android','ios','angular']},
    {sno:5,name:"Arjun",skills:['c++','java','javascript','angular','mongo db','ios']},
    
]

     result = filterThis(
        function(candidate){
        for(let x of candidate.skills)
        if(x.toUpperCase()=="ANGULAR"||x.toLowerCase()=="c#")
        return true
        return false
        },candidates
     )
     console.log(result)