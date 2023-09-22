const app = require('./app.js');

app.get('/',(req,res)=>{
    res.send("Hello, world!");
})

app.listen(process.env.PORT,()=>{
    console.log('listening on ' +  process.env.PORT);
})