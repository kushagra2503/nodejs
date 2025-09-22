const fs = require("fs");

fs.writeFileSync("./test.txt", "Hey there"); //sync function

fs.writeFile("./test2.txt", "Hey there", (err) => {}); //async function

const result= fs.readFileSync("./test.txt", "utf-8");
console.log(result);

fs.readFile("./test2.txt", "utf-8", (err, data) => {
    if (err) {
        console.log(err);
    } else {
    console.log(data);
    }
});

fs.appendFileSync("./test.txt", ` Hey there\n`);