/*function fun(arr) {
    let arrayEle = [];
    arr.forEach((num)=>{
        let fact = 0
        for (let i = 0; i <= num; i++) {
            if ((num % i )=== 0) {
                fact++
            }
        }
        if (fact === 2) {
            arrayEle.push(num)
        }
    })
    console.log(arrayEle)
}
fun([3,5,10,12,13,14])
*/




/*function toUpperStr(arr){
   arr.forEach((a)=>{
    console.log(a.toUpperCase())
   })
}
toUpperStr(['lavanya','is ','a','good','girl'])
*/



 /*const longEle=(arr) =>{
  let max=arr[0].length
    arr.map(ele => max= Math.max( max, ele.length))
    let result=arr.filter(ele => ele.length === max)
    console.log("the longest element of the array with",max,"elements is :" )
    return result;
 }
 const arr=['lavanya','is ','a','good','girl']
 console.log(longEle(arr));
 */



  /*lengthOfList =(arr) =>{     let max=0;
    arr.map(ele => max = max+ ele.length)
    console.log("the length of given list is:",max )
  
 }
 const arr=['i','love','ice cream']
 lengthOfList(arr);
 */




 /*sw let arrStu=['vachu','kavi','uv','lavs']
  let arrmar=[60,70,90,50]
 let max=0;
  flag=-1
 for(let i=0;i<arrmar.length;i++){
     if(max<arrmar[i]){
         max=arrmar[i]
     }
     flag++
 }
 console.log("The student",arrStu[flag-1],"scores the highest marks of :",max)
 */
 



/* let arr=[1,3,-10,11,-4,6,7]
 let pos=arr.map(a=>{
    if(a<0){
       a=-(a)
      return a
    }
    else{
        return a
    }
 })
 console.log(pos)
 */
 



/*let marks=['60%','90%','80%','12%','35%','55%']
let arrfil=marks.filter(arr =>{
 if(arr >'50%'){
     return arr
  }
 })
 console.log(arrfil)
 */
 