const fs=require('fs')
const export_to_write=(req,res)=>{
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
}
// module.exports=export_to_write;
// module.exports={
//     expo : export_to_write,
//     textfile:'i am text'
// }
module.exports.expo=export_to_write;
module.exports.textfile='hi '