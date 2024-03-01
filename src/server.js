const express = require('express');
const app = express();

app.get('/', (req,res) => {
    res.send("Welcome to my awesome app with ci/cd tests")
});

app.listen(3000, function(){
     console.log("App listen to port 3000")
});