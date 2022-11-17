const express= require('express')
const bodyParser = require('body-parser')
const app = express()
app.use(bodyParser.urlencoded({extended:true}))

app.get('/', (req,res)=>{
    res.sendFile(__dirname + "/index.html");
})

app.post('/', (req,res)=>{

    var num1 = Number(req.body.n1)
    var num2 = Number(req.body.n2)

    var result = num1 + num2;

    res.send('Calculated value is' +' '+result)
})

// app.get('/name',(req,res)=>{
    
// })


app.get('/bmicalculator', (req,res)=>{
    res.sendFile(__dirname + "/bmi.html");
})
app.post('/bmicalculator', (req,res)=>{
    var weight = parseFloat(req.body.weight)
    var height = parseFloat(req.body.height)

    var bmi = weight / (height * height)

    res.send('BMI' +" "+ bmi )

})
app.listen(3000,(req,res)=>{
    console.log('Server Running 3000');
})