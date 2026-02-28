const fs = require('fs');
const pdf = require('pdf-parse');

let dataBuffer = fs.readFileSync('C:/Users/LENOVO/portfolio/resume/TusharJadhav_DataEngineer_Resume_2026-1.pdf');

pdf(dataBuffer).then(function(data) {
    console.log(data.text);
}).catch(function(err){
    console.error(err);
});
