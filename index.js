const readline = require("readline");
const priceEngine = require("./priceEngine");

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question("What is the customer type ? ", function(customerType) {
    rl.question("What are the items you want to purchase ? ", function(items) {
        priceEngine.getPrice(customerType, items);
        rl.close();
    });
});

rl.on("close", function() {
    console.log("End of seek test by Vaib Rastogi !!!");
    process.exit(0);
});


 

