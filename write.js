const http1= require('http')
console.log('server started')
const fs=require('fs')
const server=http1.createServer((req,res)=>{
    // try{
let res_url=req.url;
const methodres=req.method;
console.log(res_url, methodres)
res.setHeader('Content-type','text/html')
if(res_url==='/'){
  
    res.write(`<hrml>
<head><title>this is node.js</title></head>
   <body> <form action="/sent" method="POST"> <input type="text" name="message"><button>Send</button></input></form> </body>
   </hrml>`)
     res.end();
    }
if(res_url==='/sent' && methodres==='POST'){
    const gotsend=[];
    req.on('data',(chunk)=>{
        console.log(chunk);
        gotsend.push(chunk)
    });
    req.on('end',()=>{
        console.log(gotsend)
        console.log(' i am string')
        const result=Buffer.concat(gotsend).toString().split('=')
        const message=result[1]
        fs.writeFileSync('text.txt',message,()=>{
            res.statusCode=302
        res.setHeader('Location','/')
        })
        return res.end()
      
    });
    
};
})
server.listen(3000)