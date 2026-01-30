function greet(a){
    console.log("Hello",arguments[4]);
}
greet(1,2,3,4,"ABC",true,11)
function noOFArgs(){
    console.log(arguments.length);
}
noOFArgs();
function Findarg(a,b,...arg){
    console.log(a,b,arg);
}
Findarg(1,2,5,6,7,8,"Apple");