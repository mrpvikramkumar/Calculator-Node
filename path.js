// querystring = require('querystring');  
// const obj1=querystring.parse('name=sonoo&company=javatpoint');  
// console.log(obj1);  

// querystring = require('querystring');  
// const qs1=querystring.stringify({name:'sonoo',company:'javatpoint'});  
// console.log(qs1);

// var path = require('path');
// var filename = path.basename('/Users/Refsnes/demo_path.js');
// console.log(filename);



// const e = require('express')
// var fs = require('fs')

// fs.writeFile('sample.txt',"hi",(err)=>{
//     if(err){
//         console.log("Wrong");
//     }else{
//         console.log('Success');
//     }
// })

// fs.readFile('sample.txt',(err,data)=>{
//     if(err){
//         console.log("Wrong");
//     }else{
       
//         console.log(data.toString());
//     }
// })

// fs.rename('sample2.txt','sample4.txt',(err,data)=>{
//     if(err) throw err;
//         console.log("RENAMED");
//     }
// )

// fs.unlink('sample4.txt',(err,data)=>{
//     if(err) throw err;
//         console.log("Deleted");
//     }
// )

// var url = require('url')
// var addres = 'https://www.tutorialsteacher.com/nodejs/nodejs-modules'

// var a = url.parse(addres)

// console.log(a.protocol);

// var http = require('http');


// http.createServer(function (req, res) {
//     res.writeHead(200,{'content-Type':'text/html'})
//   res.write('Hello World!'); 
//   res.write('Hello World Again!'); 
//   res.end(); 
// }).listen(3000); 

// var http = require('http')

// var url = require('url')

// http.createServer((req,res)=>{
//     var page = url.parse(req.url).pathname
//     res.writeHead(200,{'content-Type':'text/html'})
//     if(page =='/'){
//         res.write('Welcome')
//     }
//     else if(page =='/about'){
//         res.write('Home page landing')
//     }
//     else if(page =='/product'){
//         res.write('product page landing')
//     }
//     else if(page =='/contact'){
//         res.write('contact page landing')
//     }res.end()
    
// }).listen(4000)

// // console.log(__dirname);

// const os = require("os");

// console.log(os.arch());
// console.log(os.hostname());
// console.log(os.platform());
