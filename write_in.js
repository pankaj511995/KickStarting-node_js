const http1=require('http')
const fs=require('fs')
const server=http1.createServer((req,res)=>{
    let url1=req.url;
    let met=req.method;
    console.log(url1,met)
    res.setHeader('Content-type','text/html')
    if(url1==='/'){
        res.write(`<html><head><title>nodefile</title></head>
        <body><form action="/send" method="POST"><input type="text" name="message"><button>Send</button></input></form></body>
        </html>`)
    res.end();
    }
    if(url1==='/send' && met==='POST'){
        const inputm=[]
        req.on('data',(c)=>inputm.push(c))
        req.on('end',()=>{
            const result=Buffer.concat(inputm).toString().split('=')//spliting of message=input type
            console.log(result)
        res.write(`<html><body><h1>${result[1]}</h1></body></html>`)
        res.setHeader('Location','/')
         res.end(); 
        })
    }
})

server.listen(4000)