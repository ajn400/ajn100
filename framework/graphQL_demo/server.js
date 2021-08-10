const express = require('express');
const expressGraphql = require('express-graphql');
const app= express();

const schema =require('./schema');
app.use(
    '/graphql',
    expressGraphql({
        schema,
        graphql:true
    })
);
app.get('/',(req,res)=>{
    res.end('index')
});

app.listen(8000,
    err=>{
    if(err){
        throw new Error(err);
        console.log('*** server started ***')
    }
    })
//得，运行不了，崩逝了
