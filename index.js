const { response } = require('express');
const express=require('express');
const { readFile } = require('fs');
const app=express();
app.get('/',(req,res) => {
    readFile('./home.html','utf8',(err,html) => {
    if (err) {
        res.status(500).send('sorry')
        
    }
      res.send(html)
    })

  
})
app.listen(process.env.PORT || 4000,() => {
    console.log('started listening..')
  
})