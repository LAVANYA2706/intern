function giveData(){
    return new Promise(
        function(resolve,reject){
            setTimeout(()=>{
                console.log("PROCESSING")
                resolve("INDIA");
            },3000)
        }
    )
}
async function caller(){
    data = await giveData()
    console.log("DATA is",data)
}
/* result=giveData()
 result.then(
    (sucess)=>console.log("DATA IS",Sucess),
    (error)=>console.log(error)
 )*/
 caller()
 console.log("SOMETHING ELSE")