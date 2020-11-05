const fs = require('fs') 
const request = require('request')
const args = process.argv.slice(2);
const myLocalPath= args[1];
const myUrl = args[0];


 request(myUrl, (error, response, body) => {
  fs.writeFile(myLocalPath, body, (err) => {
    if (err) throw err;
    console.log(`Downloaded and saved ${body.length} bytes to ${myLocalPath}`);
  });
});


