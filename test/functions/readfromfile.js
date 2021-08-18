export default function readTextFile(){
    const fs = require('fs');
    let txtFile = "E:/website-test-wdio/userdetails.txt";
    let str = fs.readFileSync(txtFile,'utf8');  
    var arr = str.split('\n');
    return arr;   
}