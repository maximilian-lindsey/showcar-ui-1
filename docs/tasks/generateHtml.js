module.exports = () => {
    const fs = require('fs');
    const html = require('../helpers/renderHtml.js')();
    fs.writeFileSync("./docs/index.html", html, err => {
        if (err) {
            return console.log(err);
        }
        console.log("HTML file was saved!");
    });
}
