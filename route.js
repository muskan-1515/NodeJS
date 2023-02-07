const fs=require('fs');

const requestHandler = (req,res) => {
    const url=req.url;
    const method=req.method;
    if(url=== '/'){
        res.write('<html>');
        res.write('<head></title>Default Page!!</title></head>');
        res.write('<body><form action="/message" method="POST"><input type="text" name="message"><button type="submit">Send</button></form></body>');
        res.write('</html>');
        res.end();
        return res.end();
    }
    if(url=== '/message' && method=== 'POST'){
        const body=[];
        req.on('data',chunk =>{
            console.log(chunk);
            body.push(chunk);
        });
        return req.on('end', ()=>{
            const parsedBody=Buffer.concat(body).toString();
            const msg=parsedBody.split('=')[1];
            fs.writeFile('message.txt',msg,err=>{
                res.statusCode=302;//redirection
                res.setHeader('Location','/');
                return res.end();
            });
        });
    }
    res.setHeader('Content-Type', 'text/html');
    res.write('<html>');
    res.write('<head><title>My First Page</title><head>');
    res.write('<body><h1>Hello from my Node.js Server!</h1></body>');
    res.write('</html>');
    res.end();
};

module.exports=requestHandler;

// module.exports={
//     handler:requestHandler,
//     someText:'some text'
// };

// module.exports.handler=requestHandler;
// module.exports.someText='some text';

// exports.handler=requestHandler;