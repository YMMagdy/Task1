
 const http = require('http');
 const dt = require('./mydatetime.js');
 const url  = require('url');
 const fs=require('fs');

 http.createServer(function (req, res) {
    
     fs.readFile('index.html',(err,data) => {
         res.writeHead(200, { 'Content-Type': 'text/html' });
         // `The date is ${dt.mydatetime()}`
         res.write(data);
         // const q = url.parse(req.url, true).query;
//         // const txt = q.year + " " + q.month;
//         // res.write(req.url);
         return res.end();
     });
     fs.appendFile('newtextfile.txt', 'Hello content!', (err) => {
         if (err) throw err;
         console.log(`The file is saved.`);
     });
     fs.open('newtextfile2.txt', 'w', (err, file) => {
         if (err) throw err;
         console.log('Saved!! ');
     });
//     //  fs.unlink('newtextfile3.txt',(err)=>{
//     //      if(err) throw err;
//     //      console.log('Deleted! ');
//     //  })
//     // fs.rename('newtextfile3.txt','newtextfile.txt',(err)=>{
//     //     if (err) throw err;
//     //     console.log('File renamed! ');
//     // });
//     // fs.rename('newtextfile.txt', 'myrenamedfile.txt', function (err) {
//     //     if (err) throw err;
//     //     console.log('File Renamed!');
//     // });

//     // res.sendFile('C:\Users\YOUSSEF\Workspace\Session4Blockchain\index.html');
 }).listen(8080);
// // console.log('This is the beggining');
