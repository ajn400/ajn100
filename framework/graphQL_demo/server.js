const express = require('express');
const expressGraphql =require('express-graphql');
const app= express();

const schema =require('./schema');
app.use(
    'graphql',
    expressGraphql({
        schema,
        graphql:true
    })
);
app.get()
