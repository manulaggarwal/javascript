var regex = /(\{|\(|\[|\<|\>|\]|\}|\(|\))/g;
var output = [];

function read(inp) {
    if (Array.isArray(inp)){
        for (var i=0;i<inp.length;i++) {
            var elements = inp[i].match(regex);
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
            if ((el[j].charCodeAt(0)) == 62 && (stack[stack.length-1].charCodeAt(0)) == 60){
                stack.pop();
                continue;
            }
        }
        stack.push(el[j]);
    }
    return stack.length == 0?true:false;
} 

read(["{{()czx}}[]dfs{{[(aa)<>]}}","aa{ab[c<>]","{ll()}"]);