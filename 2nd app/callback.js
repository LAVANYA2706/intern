function sample(callback1,callback2,number1=123,number2=345){
    console.log("sample function started");
    result=undefined
    if(typeof(number1)=="number"&&typeof(number2)=="number")
    result = callback1(number1)+callback2(number2)
    console.log("sample function ended and the result is",result)    
}
//result should be 32112
//if the number1 is 123 and number2 is 345

sample{
    function(n){
        copy=n
        result=0
        while(copy>0){
            current=copy%10
            result=result*10+current
            copy=Math.floor(copy/10)
        }
        return""+result
    },
    function(n){
        result=0
        while(n>0){
            result+=n%10
            n=Math.floor(n/10)
        }
        return""+result
    },
    123
    345
}
