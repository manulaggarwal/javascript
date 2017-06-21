const regex = /(\{|\(|\[|\]|\}|\))/g; //gloabl search using regex to check for open and closed brackets.
const fs = require("fs");
const readline = require('readline'); // For user prompt to allow file path input
const rl = readline.createInterface({
    input: process.stdin, 
    output: process.stdout
});

function main() {
    rl.question("Provide Relative/Absolute Path here(Ctrl + C to exit):- ",(answer)=>{
        if (answer.includes(".js")||answer.includes(".txt")||answer.includes(".md")){
            findFile(answer);
        } else {
            console.log("File unsupported or invalid!");
            main();
        }
    });
}

function read(inp) {
    var output = [];
    if (Array.isArray(inp)){
        for (var i=0;i<inp.length;i++) {
            var elements = inp[i].replace(/\/\/.*/gm).match(regex);
            validate(elements)?output.push("YES"):output.push("NO");
        }
    }
    console.log("Output:- ",output);
}

function validate(el) {
    var stack = [];
    for (var j=0;j<el.length;j++){
        if (stack.length > 0 && stack[stack.length-1] ) {
            if ((el[j].charCodeAt(0)) == 125 && (stack[stack.length-1].charCodeAt(0)) == 123){
                stack.pop();
                continue;   // To make sure execution time doesn't waste unnecessarily and continue to next iteration.
            }
            if ((el[j].charCodeAt(0)) == 41 && (stack[stack.length-1].charCodeAt(0)) == 40){
                stack.pop();
                continue;
            }
            if ((el[j].charCodeAt(0)) == 93 && (stack[stack.length-1].charCodeAt(0)) == 91){
                stack.pop();
                continue;
            }
        }
        stack.push(el[j]);
    }
    console.log(stack);
    return stack.length == 0?true:false;
} 

function findFile(file){
    fs.readFile(file,(err, data)=>{
        if (err) throw err;
        processFile(data.toString());
    })
}

function processFile(data){
    var _temp = [];
    _temp.push(data);
    read(_temp);
    main();
}

main();



