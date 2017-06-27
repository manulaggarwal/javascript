function factorialTrailingZeros(n){
    var num = 5, count = 0;
    while(n/num >= 1){
        count += Math.floor(n/num);
        if (num <= n) num *= 5;
    }
    console.log("Trailing Zeros for",n,"\b! are:- ",count);
}

factorialTrailingZeros(23456);