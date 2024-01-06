// block scope element = let and const
// functional scope element = var
function name(){
    if(true){
        const x = "NAIM";
        console.log(x);
    }
}
name();
let x = 10;

x = 11;

console.log(x);

const y = 20;
y=22;
console.log(y);