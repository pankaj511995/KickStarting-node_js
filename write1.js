const http1= require('http')
console.log('server started')
const exp=require('./export')
// const server=http1.createServer(exp)//one by one
const server=http1.createServer(exp.expo)//access from object
server.listen(8000)

