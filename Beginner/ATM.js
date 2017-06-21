const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin, 
    output: process.stdout
});

function main(){
    rl.question('Withdraw amount:- ',(answer)=>{
        var withdrawAmount = parseInt(answer);
        if (withdrawAmount) {
            rl.question('Bank Balance:- ',(balance)=>{
                var bankBalance = parseFloat(balance);
                if (bankBalance && (bankBalance > withdrawAmount)){
                    bankBalance = bankBalance.toFixed(2);
                    console.log("Balance:- ",((bankBalance-withdrawAmount) - 0.50).toFixed(2));
                    main();
                } else {
                    console.log(bankBalance?("Balance:- ",bankBalance):"Invalid input!");
                    main();
                }
            });
        } else {
            console.log("Invalid input!");
            main();
        }
    });
}

main();

