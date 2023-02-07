/*Like the youtuber return a response like "Welcome to my Node Js project". Just follow the way he writes code in 30th video.
Based on the url the user hits , I want you to return custom responses.
When url = /home , return response ==> Welcome home
When url = /about, return response ==> Welcome to About Us page
When url =/node, return response ==> Welcome to my Node Js project */


const htt=require('http')
console.log('hi')
const ser=htt.createServer((req,res)=>{
    let u=req.url//because res sent one times thats wise we have to store for compairing
    console.log(u)
    res.setHeader('Content-type','text/html')
    res.write('<html>')
    res.write('<head> <title>This is pankaj</title> </head>')
    res.write('<body><h1> Hey i </h1></body>')
    if(u==='/'){
        res.write('<body><h1> Welcome to Js project </h1></body></head> ')
        }
   if(u==='/node'){
    res.write('<body><h1> Welcome to my <strong>Node</strong> Js project  </h1></body></head> ')
    }
    if(u==='/home'){
        res.write('<body><h1> Welcome to <strong>HOME</strong>  my Node Js project  </h1></body></head> ')
        }
    else  if(u==='/about'){
    res.write('<body><h1>Welcome to <strong>ABOUT</strong> Us page in my Node Js project  </h1></body></head> ')
    }
    res.write('</html>')
    res.end(); 
})
ser.listen(7000);