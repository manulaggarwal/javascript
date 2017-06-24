const readline = require('readline');

function main(msg){
    console.log(msg);
    const rl = readline.createInterface({
        input: process.stdin, 
        output: process.stdout
    });
    rl.question('Enter no. of input values and divisibility number(ex:- 10 20):- ', (answer) => {
        var input = answer.split(" ");
        var values = [];
        if (input.length > 2){
            console.log("Length greater than 2! reducing...");
            input = reduce(input,2).map((v)=>+v);
        } else if (input.length < 2){
            rl.close();
            main("Insufficient inputs");
        }
        if (input.includes(NaN)){
            rl.close();
            main("Only numeric values are accepted!");
        }
        rl.on("line",(val)=>{
            console.log("Input entered! ", val.split(" "));
            if (val.split(" ").length != 1) {
                console.log("Length greater than 1! reducing...");
                val = reduce(val.split(" "),1);
                values.push(val);
            } else values.push(val);
            values = values.map((v)=>+v);
            console.log("Values ",values);
            if (values.includes(NaN)){
                rl.close();
                values = [];
                main("Only numeric values are accepted!");
            }
            if (values.length == input[0]){
                rl.close();
                console.log("Number of inputs divisible by ",input[1]," is/are:-",values.filter((v)=>v%input[1] === 0).length);
            }
        });
    });
}

function reduce(inp,len){
    inp.splice(inp.length - 1,1)
    console.log(inp);
    return inp.length == len ? inp: reduce(inp,len);
}
main("");