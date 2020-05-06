const axios = require("axios");

const urlTest = "http://www.tsbi.com.au/the-breathe-project/";

let arrayUrl = [
// list your urls here
"https://google.com",
"https://facebook.com",
"https://youtube.com"
];

(async() => {
    try {
        let count = 0;
        for (var i = 0; i < arrayUrl.length; i++) {
            if (arrayUrl[i] != "") {
                const response = await axios.get(arrayUrl[i], {
                    validateStatus: false
                });
                if (response.status == '404') {
                    count++;
                    console.log('\x1b[31m', count + " " + response.status + " -- " + arrayUrl[i]);
                }
            }
        }
    } catch (e) {
        process.exit();
    }
})();
