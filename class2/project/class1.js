let king = prompt();
let queen = king;
king = king*500;
if(queen>=10){
king = king*(90/100);
}
king = king + king*(18/100);
console.log(king);
let x = 10;
function outer(){   
    let x=20;
    function inner(){
        console.log(x);
    }
    inner();}
    outer();
    console.log(x);