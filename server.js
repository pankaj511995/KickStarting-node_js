const http=require('http')
const ser=http.createServer((req,res)=>{
    console.log(req)
})
ser.listen(3000);