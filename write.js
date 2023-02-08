const http1= require('http')
console.log('server started')
const fs=require('fs')
const server=http1.createServer((req,res)=>{
   
let res_url=req.url;
const methodres=req.method;
console.log(res_url, methodres)

let print=fs.readFileSync('text.txt').toString()
console.log(print)
res.setHeader('Content-type','text/html')
if(res_url==='/'){
  
    res.write(`<hrml>
<head><title>this is node.js</title></head>
   <body><div>${print}</div>
    <form action="/send" method="POST"> <input type="text" name="message"><button>Send</button></input></form> </body>
   </hrml>`)
     res.end();
    }
if(res_url==='/send' && methodres==='POST'){
    const gotsend=[];
    req.on('data',(chunk)=>gotsend.push(chunk));
     req.on('end',()=>{
        console.log(gotsend)
        const result=Buffer.concat(gotsend).toString().split('=')
        const message=result[1]
        fs.writeFileSync('text.txt',message,()=>{
            res.statusCode=302
        res.setHeader('Location','/')
        // res.redirect('/')
         res.end()
        })
       
      
    });
    
};
})
// node write.js  
server.listen(8000)

