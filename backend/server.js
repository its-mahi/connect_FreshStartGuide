const app = require('./app.js');
const { connectDatabase } = require('./database/databaseconnect.js'); 
const socketIo = require('socket.io');
const http = require('http');
const server = http.createServer(app);
const io = socketIo(server);

connectDatabase();

app.get('/',(req,res)=>{
    res.send("Hello, world!");
})

server.listen(process.env.PORT,()=>{
    console.log("Server is running on port " + process.env.PORT);
})